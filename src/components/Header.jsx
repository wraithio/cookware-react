// components/Header.jsx
import React from 'react';
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const Header = ({ cartItemCount }) => {
  return (
    // <header className="bg-white shadow-sm border-b">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16">
    //       <div className="flex items-center">
    //         <h1 className="text-2xl font-bold text-gray-900">CookCraft</h1>
    //       </div>
    //       <nav className="hidden md:flex space-x-8">
    //         <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Collections</a>
    //         <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
    //         <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
    //       </nav>
    //       <div className="flex items-center space-x-4">
    //         <button className="text-gray-600 hover:text-gray-900">
    //           <MagnifyingGlassIcon className="w-6 h-6" />
    //         </button>
    //         <button className="text-gray-600 hover:text-gray-900 relative">
    //           <ShoppingCartIcon className="w-6 h-6" />
    //           {cartItemCount > 0 && (
    //             <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
    //               {cartItemCount}
    //             </span>
    //           )}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <div className='flex justify-end'>

     <button className="text-gray-600 hover:text-gray-900 relative m-3 me-5">
              <ShoppingCartIcon className="w-6 h-6" />
              {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
              </div>
  );
};

export default Header;