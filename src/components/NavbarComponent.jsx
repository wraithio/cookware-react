import React from "react";

const NavbarComponent = () => {
  return (
    <nav className="bg-transparent">
      <div className="flex flex-wrap items-center justify-between p-4">
        <a href="#" className="flex items-center">
          <img src="/images/Logo.svg" className="h-20" alt="Cookware Logo" />
        </a>

        <div className="items-center justify-between  flex  w-auto ">
          <div className="flex gap-3">
            <h3 className="text-gray-900 hover:text-orange-600 text-lg">COOKWARE</h3>
            <h3 className="text-gray-900 hover:text-orange-600 text-lg">BAKEWARE</h3>
            <h3 className="text-gray-900 hover:text-orange-600 text-lg">ACCESSORIES</h3>
            <h3 className="text-orange-600 text-lg ">SALE</h3>
          </div>
        </div>
        <div className="flex w-28"></div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
