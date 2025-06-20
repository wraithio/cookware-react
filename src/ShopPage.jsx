// CookwareShop.jsx - Main component
import React, { useState } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import FilterSection from './components/FilterSection';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { useData } from './context/DataProvider';

const CookwareShop = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  // const [cartItems, setCartItems] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const { username, setUsername, isAdmin, setIsAdmin, cartItems, setCartItems } = useData();
  
  const products = [
    {
      id: 1,
      name: 'Professional Stock Pot',
      description: '12-inch ceramic non-stick coating',
      price: 89.99,
      image: '/images/BestSeller1.jpg',
      category: 'pots'
    },
    {
      id: 2,
      name: 'Cast Iron Dutch Oven',
      description: '5.5-quart enameled cast iron',
      price: 159.99,
      image: '/images/BestSeller2.jpg',
      category: 'pots'
    },
    {
      id: 3,
      name: 'Copper Sauce Pan',
      description: '10-inch tri-ply construction',
      price: 124.99,
      image: '/images/BestSeller3.jpg',
      category: 'pans'
    },
    {
      id: 4,
      name: 'Classic Dutch Oven',
      description: '12-piece stainless steel set',
      price: 399.99,
      image: '/images/NewArrivals1.jpg',
      category: 'pots'
    },
    {
      id: 5,
      name: 'Nonstick Wok 14 Inch',
      description: '2-piece with glass lids',
      price: 79.99,
      image: '/images/NewArrivals2.jpg',
      category: 'sets'
    },
    {
      id: 6,
      name: 'Cast Iron Pot',
      description: '5-piece silicone and steel',
      price: 49.99,
      image: '/images/StartCooking1.jpeg',
      category: 'pots'
    },
    {
      id: 7,
      name: 'Carbon Steel Stock Pot',
      description: '14-inch traditional style',
      price: 69.99,
      image: '/images/StartCooking2.jpeg',
      category: 'pots'
    },
    {
      id: 8,
      name: 'Cast Iron Sauce Pan',
      description: '3-piece eco-friendly boards',
      price: 34.99,
      image: '/images/StartCooking3.jpeg',
      category: 'pans'
    },
    {
      id: 9,
      name: 'Premium Utensil Set',
      description: '5-piece silicone and steel',
      price: 34.99,
      image: '/images/StartCooking4.jpeg',
      category: 'accessories'
    },
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <Header cartItemCount={cartItemCount} /> */}
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm">
          <ol className="flex items-center space-x-2">
            <li><Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Cookware Collection</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-gray-900 mb-4">Premium Fall Cookware Collection</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional-grade cookware designed for home chefs who demand excellence in every dish.
          </p>
        </div>

        <FilterSection 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          productCount={filteredProducts.length}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <ProductGrid 
          products={sortedProducts}
          onAddToCart={addToCart}
        />

        {/* Load More Button */}
        {/* <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
            Load More Products
          </button>
        </div> */}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default CookwareShop;
