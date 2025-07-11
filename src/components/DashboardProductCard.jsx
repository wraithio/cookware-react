import React from 'react'

const DashboardProductCard = ({product}) => {
  return (
     <div className="group">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img
                        src={product.pictures[0]}
                        alt="Dutch Oven"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-center text-gray-900">
                          {product.name}
                        </h3>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          xx
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {product.shortDescription}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">{product.price}</span>
                        <span className="text-sm text-gray-500">Stock: xx</span>
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
  )
}

export default DashboardProductCard