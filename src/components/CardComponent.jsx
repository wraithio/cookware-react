import React from 'react'

const CardComponent = ({src,title,width,height}) => {
    let cardSize = `h-${height} w-${width} object-cover` 
  return (
    <div>
        <img src={src} alt={title} className={cardSize + " rounded-lg"}/>
        <h2 className='text-5xl text-start my-6'>{title}</h2>
    </div>
  )
}

export default CardComponent