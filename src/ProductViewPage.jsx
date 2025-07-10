import React, { useEffect, useState } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import {
  createSlug,
  getDetailsbyId,
  getProductByName,
} from "./utils/DataServices";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "./components/LoadingComponent";
import { button, div } from "motion/react-client";

const ProductViewPage = () => {
  const { product } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [productObj, setProductObj] = useState({});
  const [productDet, setProductDet] = useState({});
  const [similarProductObj, setSimilarProductObj] = useState([{}]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [colorName, setColorName] = useState("");

  useEffect(() => {
    const fetchProduct = async (productSlug) => {
      try {
        setLoading(true);
        console.log("Product name from params:", product);
        // const response = await fetch("/dummyData.json");
        // const data = await response.json();
        // console.log("All products:", data.products);

        // const foundProduct = data.products.find(
        //   (p) => createSlug(p.name) === productSlug
        // );
        // const foundSimilars = data.products.filter(
        //   (product) => product.category == foundProduct.category
        // );

        // console.log("Found product:", foundProduct);
        // console.log("Found similars:", foundSimilars);\
        const foundProduct = await getProductByName(productSlug);
        if (foundProduct) {
          setProductObj(foundProduct);
          setProductDet(await getDetailsbyId(foundProduct.id));
          setColorName(foundProduct.colors[0])
        } else {
          console.error("Product not found for slug:", productSlug);
          // Handle product not found case
          setProductObj({
            name: "Product Not Found",
            description: "The requested product could not be found.",
            price: 0,
            image: "/images/placeholder.jpg",
            category: "unknown",
          });
        }

        // if (foundSimilars.length !== 0) {
        //   setSimilarProductObj(foundSimilars);
        // } else {
        //   console.error("Similar products were not found for:", productSlug);
        //   // Handle no similars found case
        //   setProductObj({
        //     name: "No Similar Posts",
        //     description: "",
        //     price: null,
        //     image: null,
        //     category: "unknown",
        //   });
        // }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (product) {
      fetchProduct("Copper Sauce Pan");
    }
  }, [product]); // Added product as dependency

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  // Show loading state
  if (loading) {
    return (
      <LoadingComponent title={`Loading ${productObj.name}...`}/>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-900 cursor-pointer">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              to={`/shop/${productObj.category}`}
              className="hover:text-gray-900 cursor-pointer capitalize"
            >
              {productObj.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{productObj.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4 row-start-1">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={productObj.pictures[0]}
                alt={productObj.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {productObj.pictures.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? "border-black"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${productObj.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          {/* Similar Products */}
          <div className="lg:row-start-2 row-start-4">
            {/* {similarProductObj.length !== 0 && (
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-gray-900">Similar Products</h3>
                <div className="flex justify-center">
                  <div className="flex gap-2 overflow-scroll w-full">
                    {similarProductObj.map((product,idx) => {
                      return (
                        <Link
                          to={`/product/${createSlug(product.name)}`}
                          className="hover:bg-slate-100 cursor-pointer flex flex-col gap-2 p-2 min-w-32"
                          key={idx}
                        >
                          <div className="flex justify-center">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full max-w-96 aspect-square"
                            />
                          </div>
                          <p>{product.name}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )} */}
          </div>

          {/* Product Details */}
          <div className="space-y-6 lg:row-start-1 row-start-2">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {productObj.name}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {productObj.shortDescription}
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(0 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">
                  $
                  {productObj.price -
                    (productObj.price * (productObj.discount / 100)).toFixed(2)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${productObj.price}
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                  {productObj.discount}% OFF
                </span>
              </div>
              <p className="text-sm text-start text-gray-600 mt-2">
                Free shipping on orders over $175
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                 <label className="block text-sm font-medium text-gray-900 mb-2">
                  Color: {colorName}
                </label>
                <div className="flex">
                  {productObj.colorHexCodes.map((color,idx) => 
                    
                    <div key={idx} className={`w-12 h-12 rounded-md bg-[${color}] cursor-pointer relative bg-[#76727e]`} onClick={() => setColorName(productObj.colors[idx])}>
                      {colorName == productObj.colors[idx] &&<div className="absolute w-12 h-12 rounded-md bg-transparent border-4 border-slate-950"></div>}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Quantity
                </label>
                <div className="flex justify-center items-center space-x-3">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-16 text-center text-lg font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-14 h-14 flex items-center justify-center border-2 rounded-lg transition-colors ${
                    isWishlisted
                      ? "border-red-500 bg-red-50 text-red-500"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <Heart
                    className={`w-6 h-6 ${isWishlisted ? "fill-current" : ""}`}
                  />
                </button>
              </div>

              <button className="w-full bg-gray-100 text-gray-900 py-4 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-6 border-t h-fit border-gray-200">
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  Free shipping on orders over $75
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  2-year warranty included
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">30-day returns</span>
              </div>
            </div>
          </div>
          <div className="lg:row-start-2 row-start-3">
            {/* Product Details */}
            <div className="space-y-4 py-4 border-t border-gray-200">
              <h3 className="font-medium text-gray-900">Product Details</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-medium">Material:</span>{" "}
                  {productDet.material}
                </p>
                <p>
                  <span className="font-medium">Capacity:</span>{" "}
                  {productDet.capacity}
                </p>
                <p>
                  <span className="font-medium">Dimensions:</span>{" "}
                  {productDet.dimensions}
                </p>
                <p>
                  <span className="font-medium">Weight:</span>{" "}
                  {productDet.weight}
                </p>
                <p>
                  <span className="font-medium">Care:</span> {productDet.care}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="font-medium text-gray-900">Description</h3>
              <div className="text-sm text-gray-600 space-y-3">
                <p>{productDet.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewPage;
