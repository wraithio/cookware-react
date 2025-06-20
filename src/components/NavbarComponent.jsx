import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataProvider";
import { KeyRoundIcon, ShoppingCartIcon, X } from "lucide-react";
import { getUsers, login } from "../utils/DataServices";

const NavbarComponent = () => {
  const {
    username,
    setUsername,
    admins,
    setAdmins,
    isAdmin,
    setIsAdmin,
    cartItems,
    setCartItems,
  } = useData();

  const [openMenu, setOpenMenu] = useState(false);
  const [error, setError] = useState(false);
  const [selectName, setSelectName] = useState(false);
  const [passkey, setPasskey] = useState(null);

  const handleSubmit = async (code) => {
    if (isNaN(code)) {
      setError(true);
      return;
    }
    console.log(code);
    if (await login(Number(code))) {
      setError(false);
      setSelectName(true);
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
        <img src="/images/Logo.svg" className="h-16 ps-4" alt="Cookware Logo" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="md:mb-4">
        <div className="items-center justify-between flex w-full me-6">
          <div className="flex gap-3">
            <Link to={"/"}>
              <h3 className="hover:cursor-pointer text-gray-900 hover:text-orange-600 text-lg">
                HOME
              </h3>
            </Link>
            <Link to={`/shop/all`}>
              <h3 className="hover:cursor-pointer text-gray-900 hover:text-orange-600 text-lg">
                COOKWARE
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
            {openMenu && (
              <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-in zoom-in-95 relative">
                  {selectName ? (
                    <>
                      <div className="flex flex-col gap-2 items-center text-center">
                        <p>Select User:</p>
                        <div className="flex gap-2">
                          {admins.map((admin) => (
                            <div
                              className={`text-black`}
                            >
                              {admin.username}
                              <hr/>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setOpenMenu(false)}
                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-500" />
                      </button>
                      <div className="flex flex-col gap-2 items-center text-center">
                        <p>Enter the passkey:</p>
                        <input
                          type="text"
                          onChange={(e) => setPasskey(e.target.value)}
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
