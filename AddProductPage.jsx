import React from "react";
import { useData } from "./src/context/DataProvider";

const AddProductPage = () => {
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

          {/* <!-- Main Content --> */}
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Add New Product</h2>
              <p className="text-gray-600 mt-2">
                Create a new cookware product for your catalog
              </p>
            </div>

            <form className="space-y-8">
              {/* <!-- Basic Information --> */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Basic Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Title *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., Professional Chef's Pan"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select className="w-full resize-none px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Select a category</option>
                      <option value="pots">Pots</option>
                      <option value="pans">Pans</option>
                      <option value="sets">Sets</option>
                      <option value="accessories">Accessories</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Short Description *
                    </label>
                    <textarea
                      rows="3"
                      className="w-full resize-none px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Brief product description (max 200 characters)"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* <!-- Pricing --> */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Pricing
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-gray-500">$</span>
                      <input
                        type="number"
                        step="0.01"
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discount Percentage
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="0"
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Images --> */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Product Images
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">Main Image</p>
                    <input type="file" className="hidden" accept="image/*" />
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">Image 2</p>
                    <input type="file" className="hidden" accept="image/*" />
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">Image 3</p>
                    <input type="file" className="hidden" accept="image/*" />
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">Image 4</p>
                    <input type="file" className="hidden" accept="image/*" />
                  </div>
                </div>
              </div>

              {/* <!-- Color Options --> */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Color Options
                </h3>

                <div id="colorOptions" className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Color name (e.g., Stainless Steel)"
                    />
                    <input
                      type="color"
                      className="w-12 h-10 border border-gray-300 rounded-md cursor-pointer"
                    />
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  id="addColorBtn"
                  className="mt-3 text-primary hover:text-blue-700 font-medium text-sm flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add Color Option
                </button>
              </div>

              {/* <!-- Product Specifications --> */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Specifications (Optional)
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Material
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., Stainless Steel, Non-stick"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Capacity
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., 2.5 Quarts, 12 inches"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dimensions
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., 12 x 8 x 3 inches"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Weight
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., 2.5 lbs"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Care Instructions
                    </label>
                    <textarea
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Care and maintenance instructions"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* <!-- Long Description --> */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Detailed Description
                </h3>

                <textarea
                  rows="8"
                  className="w-full resize-none px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Provide a detailed description of the product, including features, benefits, and usage recommendations..."
                ></textarea>
              </div>

              {/* <!-- Action Buttons --> */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Publish Product
                </button>
              </div>
            </form>
          </main>
        </div>
      )}
    </>
  );
};

export default AddProductPage;
