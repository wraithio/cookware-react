import React from 'react'

const LoadingComponent = ({title}) => {
  return (
     <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">{title}</p>
        </div>
      </div>
  )
}

export default LoadingComponent