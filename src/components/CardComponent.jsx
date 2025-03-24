import React from 'react'

const CardComponent = ({src,title,width,height}) => {
    let cardSize = `${height} ${width} object-cover rounded-lg` 
  return (
    <div>
        <img src={src} alt={title} className={cardSize}/>
        <h2 className='xl:text-5xl text-3xl text-start xl:my-6 my-3'>{title}</h2>
    </div>
  )
}

export default CardComponent