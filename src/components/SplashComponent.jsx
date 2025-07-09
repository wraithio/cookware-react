import {
  Carrot,
  Circle,
  Dot,
  Ham,
  HopOff,
  Salad,
  Shell,
  Soup,
  Wheat,
} from "lucide-react";
import React from "react";
import { Reveal1 } from "./animations/Reveal1";
import { Reveal2 } from "./animations/Reveal2";
import { Reveal3 } from "./animations/Reveal3";
import { Reveal4 } from "./animations/Reveal4";

const SplashComponent = () => {
  return (
    <div>
      {/* <div className="w-full h-full bg-white/1 backdrop-blur-sm"></div> */}
      <div className="relative text-start pt-[10%]">
        <h1 className="text-[15vw] text-5xl">COOKWARE</h1>
        <div className="flex justify-between mx-[5vw]">
          <section className="flex gap-3">
            <div className="flex gap-2 flex-col place-items-center">
              <Reveal4>
                <img
                  src="/images/Icons/Pot.svg"
                  alt="Cookware Logo"
                  className="invert animate-[pulse_1s_linear_infinite]"
                />
              </Reveal4>
              <Reveal3>
                <Shell
                  size={35}
                  className="ms-2 rotate-45 animate-[pulse_1.25s_linear_infinite]"
                  color="#000000"
                />
              </Reveal3>
              <Reveal2>
                <Shell size={30} color="#000000" className="me-4 animate-[pulse_1.5s_linear_infinite]" />
              </Reveal2>
              <Reveal1>
                <Shell
                  size={20}
                  className="-rotate-90 animate-[pulse_1.75s_linear_infinite]"
                  color="#000000"
                />
              </Reveal1>
            </div>
            <div className="h-20 flex place-items-center">
              <Reveal4>
                <h2 className="text-3xl">built to last</h2>
              </Reveal4>
            </div>
          </section>
          <div className="flex gap-2">
            <Ham className="animate-bounce" size={28} />
            <Carrot
              className="animate-[bounce_1.15s_linear_infinite]"
              size={28}
            />
            <HopOff
              className="animate-[bounce_1.25s_linear_infinite]"
              size={28}
            />
            <Wheat
              className="animate-[bounce_1.35s_linear_infinite]"
              size={28}
            />
          </div>
        </div>
        <div className="triangle-right absolute top-full z-20"></div>
      </div>
      <div className="bg-[url(/images/hero.jpg)] h-[70vh] bg-center bg-cover relative">
        <div className=" text-white py-6 text-2xl">
          <div className="triangle-left absolute bottom-0"></div>
        </div>

        <a href="/shop/all" className="md:animate-none animate-bounce absolute z-20 text-white bottom-[5vw] right-[5vw] rounded-full p-4 flex flex-col justify-center bg-green-800 aspect-square place-items-center text-center shadow-2xl hover:scale-105 cursor-pointer">
          <h2>
            <b>PROMOTION</b>
          </h2>
          <h2>
            <b>ENDING SOON</b>
          </h2>
          <p>Sale $10 off</p>
          <p>when you spend $150</p>
        </a>
      </div>
    </div>
  );
};

export default SplashComponent;
// bg-[url(/images/hero.jpg)]
