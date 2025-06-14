// components/ProductCard.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { createSlug } from '../utils/DataServices';

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onAddToCart(product);
    // Optional: Show toast notification
    alert(`${product.name} added to cart!`);
  };

  
  // const productSlug = createSlug(product.name);

  const handleQuickView = (name) => {
     const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('view', name);
    setSearchParams(newSearchParams);
    navigate(`/product/${createSlug(name)}`)

  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square bg-gray-100 relative group">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${
          isHovered ? 'backdrop-blur-sm' : 'opacity-0 pointer-events-none'
        }`}>
          {/* Fixed: Removed nested button inside Link, simplified structure */}
          <button 
            onClick={() => handleQuickView(product.name)} 
            className={`bg-white text-gray-900 px-6 py-2 rounded-full cursor-pointer font-medium transition-all duration-300 ${
              isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}
          >
            Quick View
          </button>
          
          {/* Alternative: If you want to use search params instead of routing */}
          {/* 
          <button 
            onClick={handleQuickView}
            className={`bg-white text-gray-900 px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}
          >
            Quick View
          </button>
          */}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button 
            onClick={handleAddToCart}
            className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;