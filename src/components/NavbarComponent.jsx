import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const NavbarComponent = () => {
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
              className="h-16 ps-4"
              alt="Cookware Logo"
            />
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
            </div>
          </div>
        </NavbarCollapse>
      </Navbar>
    // </>
  );
};

export default NavbarComponent;
