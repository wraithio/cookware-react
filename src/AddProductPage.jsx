import React, { useState } from "react";
import { useData } from "./context/DataProvider";
import { X } from "lucide-react";
import {
  addProduct,
  addProductDetails,
  blobUpload,
  getProductByName,
} from "./utils/DataServices";
import { Navigate, useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const {
    username,
    setUsername,
    userId,
    setUserId,
    admins,
    setAdmins,
    isAdmin,
    setIsAdmin,
    cartItems,
    setCartItems,
  } = useData();

  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const [shortDescription, setShortDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [isOnSale, setIsOnSale] = useState(false);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [material, setMaterial] = useState(null);
  const [capacity, setCapacity] = useState(null);
  const [dimensions, setDimensions] = useState(null);
  const [weight, setWeight] = useState(null);
  const [care, setCare] = useState(null);
  const [longDescription, setLongDescription] = useState(null);
  const [color1, setColor1] = useState(null);
  const [color2, setColor2] = useState(null);
  const [color3, setColor3] = useState(null);
  const [color4, setColor4] = useState(null);
  const [colorCode1, setColorCode1] = useState(null);
  const [colorCode2, setColorCode2] = useState(null);
  const [colorCode3, setColorCode3] = useState(null);
  const [colorCode4, setColorCode4] = useState(null);
  const [toggleColor2, setToggleColor2] = useState(false);
  const [toggleColor3, setToggleColor3] = useState(false);
  const [toggleColor4, setToggleColor4] = useState(false);
  const [picFile1, setPicFile1] = useState(null);
  const [picFile2, setPicFile2] = useState(null);
  const [picFile3, setPicFile3] = useState(null);
  const [picFile4, setPicFile4] = useState(null);
  const array = [color1, color2, color3, color4];
  const array2 = [colorCode1, colorCode2, colorCode3, colorCode4];
  const array3 = [picFile1, picFile2, picFile3, picFile4];
  const navigate = useNavigate();

  const addMoreColors = () => {
    if (!toggleColor2) setToggleColor2(true);
    if (toggleColor2) setToggleColor3(true);
    if (toggleColor3) setToggleColor4(true);
  };

  const handleImage = (e, setImage, saveFile) => {
    let reader = new FileReader();
    let file = e.target.files?.[0];

    if (file) {
      //when this files if turned into a string this on load function will run
      reader.onload = () => {
        setImage(reader.result); //once the file is read we will store the result into our setter function
      };
      reader.readAsDataURL(file); //this converts the file into a bas64-encoded string
    }

    if (e.target.files && e.target.files.length > 0) {
      saveFile(e.target.files[0]);
    }
  };

  //We Need a useState for our file

  //A function that Gets our File / Sets our file
  // const handleFileChange = (e,saveFile) => {
  //     if (e.target.files && e.target.files.length > 0) {
  //         saveFile(e.target.files[0]);
  //     }
  // };
  //A Function that Handles the submitting of file to our backend
  const handleBlobSave = async (picFile) => {
    //Prevent default so our app doesn't reload on submitting
    // e.preventDefault();

    //Check if the file is inside of our state Variable
    if (!picFile) {
      alert("Please select a file to upload.");
      return;
    }
    //A Unique file name so data isn't being overwritten in our blob
    const uniqueFileName = `${Date.now()}-${picFile.name}`;

    //New Form Data Object to append our file and file name
    const formData = new FormData();
    formData.append("file", picFile);
    formData.append("fileName", uniqueFileName);

    //Finally passing that formData into our Backend
    const uploadedUrl = await blobUpload(formData);

    if (uploadedUrl) {
      console.log("File uploaded at:", uploadedUrl);
      return uploadedUrl;
      // You can now store this URL in your component state or send it to your backend
    }
    return null;
  };

  const handleSubmit = async (bool) => {
    const colorArray = [];
    const hexArray = [];
    const imageArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== null) {
        colorArray.push(array[i]);
        hexArray.push(array2[i]);
      }
    }
    for (let i = 0; i < array3.length; i++) {
      if (array3[i] !== null) imageArray.push(await handleBlobSave(array3[i]));
    }
    const date = new Date();

    const overview = {
      id: 0,
      foreignKey: 0,
      name: title,
      category: category,
      shortDescription: shortDescription,
      price: price,
      discount: discount,
      isOnSale: isOnSale,
      pictures: imageArray == [] ? null : imageArray,
      colors: colorArray == [] ? null : colorArray,
      colorHexCodes: hexArray == [] ? null : hexArray,
      createdBy: userId,
      createdDate: date,
      modifiedBy: userId,
      modifiedDate: date,
      isArchived: bool,
    };
    if (await addProduct(overview)) {
      const productToFind = await getProductByName(title);
      const details = {
        id: 0,
        foreignKey: productToFind.foreignKey,
        productId: productToFind.id,
        material: material,
        capacity: capacity,
        dimensions: dimensions,
        weight: weight,
        care: care,
        description: longDescription,
        createdBy: userId,
        createdDate: date,
        modifiedBy: userId,
        modifiedDate: date,
      };
      await addProductDetails(details);
      navigate("/dashboard");
    }
  };

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
              <h2 className="text-2xl font-bold text-gray-900">
                Add New Product
              </h2>
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
                    <label for="product-title" className="block text-sm font-medium text-gray-700 mb-2">
                      Product Title *
                    </label>
                    <input
                    id="product-title"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      maxLength={40}
                      placeholder="e.g., Professional Chef's Pan"
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select className="w-full resize-none px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Select a category</option>
                      <option onClick={(e) => setCategory("pots")} value="pots">
                        Pots
                      </option>
                      <option onClick={(e) => setCategory("pans")} value="pans">
                        Pans
                      </option>
                      <option onClick={(e) => setCategory("sets")} value="sets">
                        Sets
                      </option>
                      <option
                        onClick={(e) => setCategory("accessories")}
                        value="accessories"
                      >
                        Accessories
                      </option>
                    </select>
                  </div>

                  <div className="md:col-span-2 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Short Description *
                    </label>
                    <label className="block text-sm font-medium text-gray-500 mb-2 absolute right-0 top-0 ">
                      {shortDescription ? shortDescription.length : "0"} / 100
                    </label>
                    <textarea
                      onChange={(e) => setShortDescription(e.target.value)}
                      rows="3"
                      maxLength={100}
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
                    <label for="price" className="block text-sm font-medium text-gray-700 mb-2">
                      Price *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-gray-500">
                        $
                      </span>
                      <input
                      id="price"
                        type="number"
                        step="0.01"
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="0.00"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label for="discount" className="block text-sm font-medium text-gray-700 mb-2">
                      Discount Percentage
                    </label>
                    <div className="relative">
                      <input
                      id="discount"
                        type="number"
                        min="0"
                        max="100"
                        className="w-full pr-8 pl-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="0"
                        onChange={(e) => setDiscount(e.target.value)}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        %
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 place-items-center">
                    <label for="on-sale">Activate Sale?</label>
                    <input
                    id="on-sale"
                      type="checkbox"
                      onChange={(e) => setIsOnSale(e.target.checked)}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Images --> */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Product Images
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div
                    className={`border-2 border-dashed border-gray-300 rounded-lg ${
                      image1 ? "p-2" : "p-6"
                    } text-center hover:border-primary transition-colors cursor-pointer relative flex place-items-center justify-center`}
                  >
                    <label htmlFor="image1button">
                      {image1 ? (
                        <img
                          src={image1}
                          alt="product image 1"
                          className="cursor-pointer hover:grayscale w-fit h-48 aspect-square"
                        />
                      ) : (
                        <div className="cursor-pointer flex flex-col place-items-center">
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
                          <p className="mt-2 text-sm text-gray-600">
                            Main Image
                          </p>
                        </div>
                      )}
                    </label>
                    <input
                    
                      type="file"
                      accept="image/*"
                      id="image1button"
                      className="hidden"
                      onChange={(e) => handleImage(e, setImage1, setPicFile1)}
                    />
                  </div>

                  <div
                    className={`border-2 border-dashed border-gray-300 rounded-lg ${
                      image2 ? "p-2" : "p-6"
                    } text-center hover:border-primary transition-colors cursor-pointer relative flex place-items-center justify-center`}
                  >
                    <label htmlFor="image2button">
                      {image2 ? (
                        <div className="relative">
                          <img
                            src={image2}
                            alt="product image 2"
                            className="hover:opacity-90 w-fit h-48 aspect-square"
                          />
                          <button
                            className="absolute right-0 top-0 m-1 bg-white rounded-full p-1"
                            onClick={() => setImage2(null)}
                          >
                            <X />
                          </button>
                        </div>
                      ) : (
                        <div className="cursor-pointer flex flex-col place-items-center">
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
                        </div>
                      )}
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="image2button"
                      className="hidden"
                      onChange={(e) => handleImage(e, setImage2, setPicFile2)}
                    />
                  </div>

                  <div
                    className={`border-2 border-dashed border-gray-300 rounded-lg ${
                      image3 ? "p-2" : "p-6"
                    } text-center hover:border-primary transition-colors cursor-pointer relative flex place-items-center justify-center`}
                  >
                    <label htmlFor="image3button">
                      {image3 ? (
                        <div className="relative">
                          <img
                            src={image3}
                            alt="product image 3"
                            className="cursor-pointer hover:opacity-90 w-fit h-48 aspect-square"
                          />
                          <button
                            className="absolute right-0 top-0 m-1 hover:bg-slate-500 bg-white rounded-full p-1"
                            onClick={() => setImage3(null)}
                          >
                            <X />
                          </button>
                        </div>
                      ) : (
                        <div className="cursor-pointer flex flex-col place-items-center">
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
                        </div>
                      )}
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="image3button"
                      className="hidden"
                      onChange={(e) => handleImage(e, setImage3, setPicFile3)}
                    />
                  </div>

                  <div
                    className={`border-2 border-dashed border-gray-300 rounded-lg ${
                      image4 ? "p-2" : "p-6"
                    } text-center hover:border-primary transition-colors cursor-pointer relative flex place-items-center justify-center`}
                  >
                    <label htmlFor="image4button">
                      {image4 ? (
                        <div className="relative">
                          <img
                            src={image4}
                            alt="product image 4"
                            className="cursor-pointer hover:opacity-90 w-fit h-48 aspect-square"
                          />
                          <button
                            className="absolute right-0 top-0 m-1 hover:bg-slate-300 bg-white rounded-full p-1"
                            onClick={() => setImage4(null)}
                          >
                            <X />
                          </button>
                        </div>
                      ) : (
                        <div className="cursor-pointer flex flex-col place-items-center">
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
                        </div>
                      )}
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="image4button"
                      className="hidden"
                      onChange={(e) => handleImage(e, setImage4, setPicFile4)}
                    />
                  </div>

                  {/* <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
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
                  </div> */}
                </div>
              </div>

              {/* <!-- Color Options --> */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <label for="color-options" className="text-lg font-semibold text-gray-900 mb-6">
                  Color Options
                </label>

                <div id="colorOptions" className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                    id="color-options"
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      maxLength={30}
                      placeholder="Color name (e.g., Stainless Steel)"
                      onChange={(e) => setColor1(e.target.value)}
                    />
                    <input
                                        id="color-options"

                      type="color"
                      className="w-12 h-10 border border-gray-300 rounded-md cursor-pointer"
                      onChange={(e) => setColorCode1(e.target.value)}
                    />
                    <button disabled className="text-white cursor-default">
                      <X />
                    </button>
                  </div>
                  {toggleColor2 && (
                    <div className="flex items-center space-x-3">
                      <input
                                          id="color-options"

                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        maxLength={30}
                        placeholder="Color name (e.g., Stainless Steel)"
                        onChange={(e) => setColor2(e.target.value)}
                      />
                      <input
                                          id="color-options"

                        type="color"
                        className="w-12 h-10 border border-gray-300 rounded-md cursor-pointer"
                        onChange={(e) => setColorCode2(e.target.value)}
                      />
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => setToggleColor2(false)}
                      >
                        <X />
                      </button>
                    </div>
                  )}
                  {toggleColor3 && (
                    <div className="flex items-center space-x-3">
                      <input
                                          id="color-options"

                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        maxLength={30}
                        placeholder="Color name (e.g., Stainless Steel)"
                        onChange={(e) => setColor3(e.target.value)}
                      />
                      <input
                                          id="color-options"

                        type="color"
                        className="w-12 h-10 border border-gray-300 rounded-md cursor-pointer"
                        onChange={(e) => setColorCode3(e.target.value)}
                      />
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => setToggleColor3(false)}
                      >
                        <X />
                      </button>
                    </div>
                  )}
                  {toggleColor4 && (
                    <div className="flex items-center space-x-3">
                      <input
                                          id="color-options"

                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        maxLength={30}
                        placeholder="Color name (e.g., Stainless Steel)"
                        onChange={(e) => setColor4(e.target.value)}
                      />
                      <input
                                          id="color-options"

                        type="color"
                        className="w-12 h-10 border border-gray-300 rounded-md cursor-pointer"
                        onChange={(e) => setColorCode4(e.target.value)}
                      />
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => setToggleColor4(false)}
                      >
                        <X />
                      </button>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  id="addColorBtn"
                  className={`mt-3 text-primary hover:text-blue-700 font-medium text-sm flex items-center ${
                    toggleColor4 ? "hidden" : ""
                  }`}
                  onClick={addMoreColors}
                >
                  + Add Color Option
                </button>
              </div>

              {/* <!-- Product Specifications --> */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Specifications (Optional)
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="material" className="block text-sm font-medium text-gray-700 mb-2">
                      Material
                    </label>
                    <input
                    id="material"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      maxLength={50}
                      placeholder="e.g., Stainless Steel, Non-stick"
                      onChange={(e) => setMaterial(e.target.value)}
                    />
                  </div>

                  <div>
                    <label for="capacity" className="block text-sm font-medium text-gray-700 mb-2">
                      Capacity
                    </label>
                    <input
                    id="capacity"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      maxLength={50}
                      placeholder="e.g., 2.5 Quarts, 12 inches"
                      onChange={(e) => setCapacity(e.target.value)}
                    />
                  </div>

                  <div>
                    <label for="dimensions" className="block text-sm font-medium text-gray-700 mb-2">
                      Dimensions
                    </label>
                    <input
                    id="dimensions"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      maxLength={50}
                      placeholder="e.g., 12 x 8 x 3 inches"
                      onChange={(e) => setDimensions(e.target.value)}
                    />
                  </div>

                  <div>
                    <label for="weight" className="block text-sm font-medium text-gray-700 mb-2">
                      Weight
                    </label>
                    <input
                    id="weight"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      maxLength={50}
                      placeholder="e.g., 2.5 lbs"
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-2 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Care Instructions
                    </label>
                    <label className="block text-sm font-medium text-gray-500 mb-2 absolute right-0 top-0 ">
                      {care ? care.length : "0"} / 200
                    </label>
                    <textarea
                      rows="3"
                      maxLength={200}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Care and maintenance instructions"
                      onChange={(e) => setCare(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* <!-- Long Description --> */}
              <div className="bg-white rounded-lg shadow-sm border p-6 relative">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Detailed Description
                </h3>
                <label className="block text-sm font-medium text-gray-500 mb-2 absolute right-0 top-0  p-4">
                  {longDescription ? longDescription.length : "0"} / 500
                </label>
                <textarea
                  rows="7"
                  maxLength={500}
                  className="w-full resize-none px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Provide a detailed description of the product, including features, benefits, and usage recommendations..."
                  onChange={(e) => setLongDescription(e.target.value)}
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
                  onClick={() => handleSubmit(true)}
                >
                  Save as Draft
                </button>
                <button
                  type="button"
                  className="px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => handleSubmit(false)}
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
