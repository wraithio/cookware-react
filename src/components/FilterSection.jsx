// components/FilterSection.jsx
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const FilterSection = ({
  activeFilter,
  setActiveFilter,
  productCount,
  sortBy,
  setSortBy,
}) => {
  const { category } = useParams();

  const filters = [
    { key: "all", label: "All Products" },
    { key: "pans", label: "Pans & Skillets" },
    { key: "pots", label: "Pots & Dutch Ovens" },
    { key: "sets", label: "Cookware Sets" },
    { key: "accessories", label: "Accessories" },
  ];
  // console.log(category)
  useEffect(() => {
    if (filters.some((filter) => filter.key === category))
      setActiveFilter(category);
  });
  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {filters.map((filter) => (
          <Link
            to={`/shop/${filter.key}`}
            key={filter.key}
            id={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`px-6 py-2 rounded-full border border-gray-300 transition-colors ${
              activeFilter === filter.key
                ? "bg-gray-900 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {filter.label}
          </Link>
        ))}
      </div>

      {/* Sort Options */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-600">Showing {productCount} products</p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-md pe-5 ps-3 py-2 text-gray-700 bg-white cursor-pointer"
        >
          <option value="featured">Sort by: Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>
    </>
  );
};

export default FilterSection;
