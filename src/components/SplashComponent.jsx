import React from "react";

const SplashComponent = () => {
  return (
    <>
      <div className="bg-[url(/images/hero.jpg)] bg-cover bg-center bg-no-repeat md:h-[1000px] h-[350px] w-full relative">
        <div className="md:hidden block s w-full h-full bg-white/1 backdrop-blur-sm"></div>
        <div className="flex justify-center">
          <p className="absolute md:bottom-28 bottom-[30%] md:left-20  md:bg-black/65 bg-white/15 backdrop-blur-sm font-normal text-white text-5xl p-4 md:rounded-none rounded-md">
            Cookware Built To Last
          </p>
        </div>
      </div>
      <div>
        <div className="bg-green-950 text-white py-6 text-2xl">
          <h3 className="md:animate-none animate-bounce">
            Sale $10 off when you spend $150
          </h3>
        </div>
      </div>
    </>
  );
};

export default SplashComponent;
