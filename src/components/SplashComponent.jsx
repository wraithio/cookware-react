import React from 'react'

const SplashComponent = () => {
  return (
    <>
    <div className="bg-[url(/images/hero.jpg)] bg-center bg-no-repeat h-[1000px] relative">
      <p className="absolute bottom-28 left-20 bg-black/65 text-white text-5xl p-4">Cookware Built To Last</p>
    </div>
    <div>
      <h3 className="bg-green-950 text-white py-6 text-2xl">Sale $10 off when you spend $150</h3>
    </div>
    </>
  )
}

export default SplashComponent