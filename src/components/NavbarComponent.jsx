import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useData } from "../context/DataProvider";
import {
  CheckCircle,
  CircleXIcon,
  KeyRoundIcon,
  PlusCircleIcon,
  Settings,
  ShoppingCartIcon,
  Trash2Icon,
  X,
} from "lucide-react";
import {
  login,
  updateLogin,
  deactivateUser,
  createAdmin,
} from "../utils/DataServices";

const NavbarComponent = () => {
  const {
    userId,
    setUserId,
    username,
    setUsername,
    admins,
    setAdmins,
    isAdmin,
    setIsAdmin,
    cartItems,
    setCartItems,
  } = useData();

  const route = useLocation();

  const [openMenu, setOpenMenu] = useState(false);
  const [error, setError] = useState(false);
  const [selectName, setSelectName] = useState(false);
  const [passkey, setPasskey] = useState(null);
  const [addUser, setAddUser] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [newUser, setNewUser] = useState("");

  // useEffect(() => {
  //   setOpenMenu(false);
  //   if (route.pathname.includes("/dashboard")) setOpenMenu(true);
  // }, [route.pathname]);

  const formatDate = (date) => {
    const localDateTime = new Date(date);
    return localDateTime.toLocaleString();
  };

  const selectUser = async (adminId, adminName) => {
    await updateLogin(adminName);
    setUsername(adminName);
    setUserId(adminId);
    setIsAdmin(true);
    setOpenMenu(false);
  };

  const removeUser = async (id) => {
    await deactivateUser(id);
  };

  const createUser = async (newName) => {
    const newEntry = {
      passkey: passkey,
      username: newName,
    };
    const adminNames = admins.map(
      (admin) => admin.isActive == true && admin.username.toLowerCase()
    );
    if (adminNames.includes(newName.toLowerCase())) setIsDuplicate(true);
    else {
      await createAdmin(newEntry);
      setIsDuplicate(false);
      setAddUser(false);
    }
  };

  const closeAddUser = () => {
    setAddUser(false);
    setIsDuplicate(false);
  };

  const handleSubmit = async (code) => {
    if (isNaN(code)) {
      setError(true);
      return;
    }
    if (await login(Number(code))) {
      setError(false);
      setSelectName(true);
    } else setError(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(passkey);
    }
  };

  return (
    // <>
    //   <nav className="bg-transparent">
    //     <div className="flex flex-wrap items-center justify-between p-4 w-full">
    //       <div className="flex items-center">
    //         <img
    //           src="/images/Logo.svg"
    //           className="h-20 ps-4"
    //           alt="Cookware Logo"
    //         />
    //       </div>

    //       <div className="items-center justify-between flex w-auto">
    //         <div className="flex gap-3">
    //           <Link to={"/"}>
    //             <h3 className="hover:cursor-pointer text-gray-900 hover:text-orange-600 text-lg">
    //               HOME
    //             </h3>
    //           </Link>
    //           <Link to={"/shop"}>
    //             <h3 className="hover:cursor-pointer text-gray-900 hover:text-orange-600 text-lg">
    //               COOKWARE
    //             </h3>
    //           </Link>
    //           {/* <h3 className="hover:cursor-pointer text-gray-900 hover:text-orange-600 text-lg">
    //           BAKEWARE
    //         </h3>
    //         <h3 className="hover:cursor-pointer text-gray-900 hover:text-orange-600 text-lg">
    //           ACCESSORIES
    //         </h3> */}
    //           <h3 className="hover:cursor-pointer text-orange-600 text-lg ">
    //             SALE
    //           </h3>
    //         </div>
    //       </div>
    //       <div className="flex w-28"></div>
    //     </div>
    //   </nav>

    <Navbar className="bg-transparent" fluid rounded>
      <NavbarBrand>
        <img
          src="/images/Logo.svg"
          className={`h-16 ps-4 ${route.pathname == "/" ? "hidden" : ""}`}
          alt="Cookware Logo"
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="md:mb-4">
        <div className="items-center justify-between flex w-full me-6">
          <div className="flex gap-3">
            <div
              className={`place-items-center ${isAdmin ? "flex" : "hidden"}`}
            >
              <i className="text-gray-900">
                logged in as: <b>{username}</b>
              </i>
            </div>
            <Link to={"/"}>
              <h3 className="hover:cursor-pointer text-gray-900 hover:text-orange-600 text-lg">
                HOME
              </h3>
            </Link>
            <Link to={`/shop/all`}>
              <h3 className="hover:cursor-pointer text-gray-900 hover:text-orange-600 text-lg">
                SHOP
              </h3>
            </Link>
            {/* <h3 className="hover:cursor-pointer text-gray-900 hover:text-orange-600 text-lg">
              BAKEWARE
            </h3>
            <h3 className="hover:cursor-pointer text-gray-900 hover:text-orange-600 text-lg">
              ACCESSORIES
            </h3> */}
            <h3 className="hover:cursor-pointer text-orange-600 text-lg ">
              SALE
            </h3>

            <button className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCartIcon className="w-6 h-6" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
            <button
              className="text-gray-600 hover:text-gray-900 relative"
              onClick={() => setOpenMenu(true)}
            >
              <KeyRoundIcon className="w-6 h-6" />
            </button>
            {isAdmin && (
              <Link to={"/dashboard"}>
                <button
                  className="text-gray-600 hover:text-gray-900 relative"
                  onClick={() => setOpenMenu(true)}
                >
                  <Settings className="w-6 h-6" />
                </button>
              </Link>
            )}
            {openMenu && (
              <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm ">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-in zoom-in-95 relative">
                  {selectName ? (
                    <>
                      <div className="flex flex-col gap-2 items-center text-center">
                        <p>Select User:</p>
                        <div className="flex flex-col w-full overflow-y-scroll h-60">
                          {admins.map((admin) => (
                            <div className="text-black" key={admin.id}>
                              <div className="flex justify-between hover:bg-slate-100 cursor-pointer gap-2 p-2 my-2">
                                <div
                                  className="flex w-full justify-between"
                                  onClick={() =>
                                    selectUser(admin.id, admin.username)
                                  }
                                >
                                  <p>{admin.username}</p>
                                  <div className="flex place-items-center">
                                    <i className="text-slate-400 text-xs">
                                      Last login: {formatDate(admin.lastLogin)}
                                    </i>
                                  </div>
                                </div>

                                <Trash2Icon
                                  className="hover:text-red-600"
                                  onClick={() => removeUser(admin.id)}
                                />
                              </div>
                              <hr />
                            </div>
                          ))}

                          <div
                            className={`flex gap-1 place-items-center cursor-pointer hover:text-slate-500 w-fit my-2 ${
                              addUser ? "hidden" : ""
                            }`}
                            onClick={() => setAddUser(true)}
                          >
                            <PlusCircleIcon />
                            <i>add a new user</i>
                          </div>
                          {addUser && (
                            <div className="flex justify-between place-items-center gap-2 p-2 my-2">
                              <input
                                type="text"
                                placeholder="new user"
                                maxLength={15}
                                className={`p-0 px-1 ${
                                  isDuplicate
                                    ? " outline-red-600 outline-1 outline animate-bounce-quick"
                                    : ""
                                }`}
                                onChange={(e) => setNewUser(e.target.value)}
                              />
                              {isDuplicate && (
                                <i className="text-red-600 text-xs">
                                  name already exists...
                                </i>
                              )}
                              <div className="flex gap-1 place-items-center">
                                <CheckCircle
                                  id="add user"
                                  className="cursor-pointer hover:text-slate-500"
                                  onClick={() => createUser(newUser)}
                                />
                                <CircleXIcon
                                  id="close"
                                  className="cursor-pointer hover:text-slate-500"
                                  onClick={() => closeAddUser()}
                                />
                              </div>
                            </div>
                          )}
                          {/* {isDuplicate && (
                                <i className="text-red-600">name already exists...</i>
                              )} */}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {route.pathname.includes("/dashboard") ? (
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          <p className="my-1 text-start text-blue-500 hover:text-blue-400 underline cursor-pointer">
                            &lt;-- Back To Home Page
                          </p>
                        </Link>
                      ) : (
                        <button
                          onClick={() => setOpenMenu(false)}
                          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <X className="w-5 h-5 text-gray-500" />
                        </button>
                      )}

                      <div className="flex flex-col gap-2 items-center text-center">
                        <p>Enter the passkey:</p>
                        <input
                          maxLength={4}
                          type="text"
                          onChange={(e) => setPasskey(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className={`rounded-md text-center ${
                            error ? "border-red-500 animate-bounce-quick" : ""
                          }`}
                        />
                        <button
                          className={`px-6 py-2 rounded-full border border-gray-300 transition-colors hover:bg-black hover:text-white`}
                          onClick={() => handleSubmit(passkey)}
                        >
                          SUBMIT
                        </button>
                        <div className="h-4 relative w-[50%]">
                          {error && (
                            <p className="text-red-500 text-sm absolute left-[25%]">
                              invalid passkey...
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </NavbarCollapse>
    </Navbar>
    // </>
  );
};

export default NavbarComponent;
