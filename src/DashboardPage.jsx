import React, { useState } from "react";
import { useData } from "./context/DataProvider";
import { Link } from "react-router-dom";

const DashboardPage = () => {
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

  return (
    <>
      {!isAdmin ? (
        <div className="min-h-screen flex place-items-center justify-center">
          <p>sign in to continue:</p>
        </div>
      ) : (
        <div>
          <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-4">
                  <nav className="hidden md:flex space-x-8">
                    <a
                      href="#"
                      className="text-gray-900 text-sm font-medium border-b-2 border-gray-900 pb-1"
                    >
                      Products
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 text-sm font-medium"
                    >
                      Orders
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 text-sm font-medium"
                    >
                      Analytics
                    </a>
                  </nav>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                    <Link to="/dashboard/add">
                    Add Product
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* <!-- Page Header --> */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Products</h2>
              <p className="text-gray-600">Manage your cookware inventory</p>
            </div>

            {/* <!-- Stats --> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Products
                    </p>
                    <p className="text-2xl font-bold text-gray-900">24</p>
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">In Stock</p>
                    <p className="text-2xl font-bold text-gray-900">18</p>
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Low Stock</p>
                    <p className="text-2xl font-bold text-gray-900">4</p>
                  </div>
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Out of Stock
                    </p>
                    <p className="text-2xl font-bold text-gray-900">2</p>
                  </div>
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <!-- Filters --> */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent">
                  <option>All</option>
                  <option>Pans</option>
                  <option>Pots</option>
                  <option>Sets</option>
                  <option>Assec.</option>
                </select>
                {/* <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent">
                  <option>All Status</option>
                  <option>In Stock</option>
                  <option>Low Stock</option>
                  <option>Out of Stock</option>
                </select> */}
              </div>
            </div>

            {/* <!-- Products Grid --> */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {/* <!-- Product Card 1 --> */}
                  <div className="group">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Cast Iron Skillet"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-900">
                          Cast Iron Skillet
                        </h3>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          In Stock
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Professional grade 12" cast iron skillet
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">$89.99</span>
                        <span className="text-sm text-gray-500">Stock: 15</span>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm font-medium transition-colors">
                          Edit
                        </button>
                        <button className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 px-3 rounded-md text-sm font-medium transition-colors">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Product Card 2 --> */}
                  <div className="group">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Stainless Steel Pot Set"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-900">
                          Stainless Steel Pot Set
                        </h3>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Low Stock
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Premium 5-piece stainless steel cookware set
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">$249.99</span>
                        <span className="text-sm text-gray-500">Stock: 3</span>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm font-medium transition-colors">
                          Edit
                        </button>
                        <button className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 px-3 rounded-md text-sm font-medium transition-colors">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Product Card 6 --> */}
                  <div className="group">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Cutting Board"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-900">
                          Bamboo Cutting Board
                        </h3>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Low Stock
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Large bamboo cutting board with groove
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">$49.99</span>
                        <span className="text-sm text-gray-500">Stock: 5</span>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm font-medium transition-colors">
                          Edit
                        </button>
                        <button className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 px-3 rounded-md text-sm font-medium transition-colors">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Product Card 7 --> */}
                  <div className="group">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Mixing Bowls"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-900">
                          Stainless Steel Mixing Bowls
                        </h3>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          In Stock
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Set of 3 nesting mixing bowls
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">$34.99</span>
                        <span className="text-sm text-gray-500">Stock: 8</span>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm font-medium transition-colors">
                          Edit
                        </button>
                        <button className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 px-3 rounded-md text-sm font-medium transition-colors">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Product Card 8 --> */}
                  <div className="group">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Dutch Oven"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-900">
                          Enameled Dutch Oven
                        </h3>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          In Stock
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        6-quart enameled cast iron dutch oven
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">$189.99</span>
                        <span className="text-sm text-gray-500">Stock: 6</span>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm font-medium transition-colors">
                          Edit
                        </button>
                        <button className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 px-3 rounded-md text-sm font-medium transition-colors">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Pagination --> */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">8</span> of{" "}
                <span className="font-medium">24</span> results
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 text-sm text-white bg-gray-900 border border-gray-900 rounded-md">
                  1
                </button>
                <button className="px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
