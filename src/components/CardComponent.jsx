import React from 'react'

const CardComponent = ({src,title,width,height}) => {
    let cardSize = `h-${height} w-${width}` 
  return (
    <div className={cardSize}>
        <img src={src} alt={title} className={cardSize}/>
        <h2 className='text-5xl text-start my-6'>{title}</h2>
    </div>
  )
}

export default CardComponent