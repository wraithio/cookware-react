import { useEffect, useState } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";
import SplashComponent from "./components/SplashComponent";
import { Link } from "react-router-dom";
import { Reveal1 } from "./components/animations/Reveal1";
import { Reveal3 } from "./components/animations/Reveal3";
import { Reveal4 } from "./components/animations/Reveal4";
import { Reveal2 } from "./components/animations/Reveal2";

function App() {
  const [newArrivalpic, setNewArrivalpic] = useState(
    "/images/NewArrivals1.webp"
  );
  const [colorDescription, setColorDescription] = useState("Apple Cinnamon");

  useEffect(() => {
    switch (newArrivalpic) {
      case "/images/NewArrivals1.webp":
        setColorDescription("Apple Cinnamon");
        break;
      case "/images/ORANGENewArrivals1.webp":
        setColorDescription("Pumpkin Spice");
        break;
      case "/images/GOLDNewArrivals1.webp":
        setColorDescription("Autumn Bronze");
        break;
      case "/images/BLACKNewArrivals1.webp":
        setColorDescription("Pinot Noir");
        break;
    }
  }, [newArrivalpic]);

  return (
    <div>
      <SplashComponent />
      <section className="md:mx-[5%]">
        <h1 className="md:text-6xl text-4xl md:mt-28 mt-14 mb-8">
          Start Cooking
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 mx-3">
          <Reveal4>
            <CardComponent
              src={"/images/StartCooking1.jpeg"}
              title={"Cast Iron Pot"}
              width={"full"}
              height={"xl:h-96 h-72"}
            />
          </Reveal4>
          <Reveal3>
            <CardComponent
              src={"/images/StartCooking2.jpeg"}
              title={"Stock Pot"}
              width={"full"}
              height={"xl:h-96 h-72"}
            />
          </Reveal3>
          <Reveal2>
            <CardComponent
              src={"/images/StartCooking3.jpeg"}
              title={"Sauce Pan"}
              width={"full"}
              height={"xl:h-96 h-72"}
            />
          </Reveal2>
          <Reveal1>
            <CardComponent
              src={"/images/StartCooking4.jpeg"}
              title={"Accessories"}
              width={"full"}
              height={"xl:h-96 h-72"}
            />
          </Reveal1>
        </div>
        <h1 className="md:text-6xl text-4xl md:mt-28 mt-14 mb-8">
          New Arrivals
        </h1>
        <div className="grid grid-cols-2 gap-3 mx-3">
          <div>
            <Reveal2>
              <CardComponent
                src={newArrivalpic}
                title={"Fall Collection"}
                width={"w-full"}
                height={"xl:h-96 h-64"}
              />
            </Reveal2>
            <Reveal1>
              <div className="flex relative flex-col gap-2 xl:text-3xl text-2xl text-start">
                <h4>
                  Our 2023 Fall Collection just came out with beautiful autumn
                  color cookware.
                </h4>
                <h4 className="text-sm">
                  Color: <b>{colorDescription}</b>
                </h4>
                <div className="flex z-40">
                  <div
                    onClick={() => setNewArrivalpic("/images/NewArrivals1.webp")}
                    className="circle-red cursor-pointer relative"
                  >
                    {newArrivalpic == "/images/NewArrivals1.webp" && (
                      <div className="circle-border absolute top-0 right-0"></div>
                    )}
                  </div>
                  <div
                    onClick={() =>
                      setNewArrivalpic("/images/ORANGENewArrivals1.webp")
                    }
                    className="circle-orange cursor-pointer relative"
                  >
                    {newArrivalpic == "/images/ORANGENewArrivals1.webp" && (
                      <div className="circle-border absolute top-0 right-0"></div>
                    )}
                  </div>
                  <div
                    onClick={() =>
                      setNewArrivalpic("/images/GOLDNewArrivals1.webp")
                    }
                    className="circle-yellow cursor-pointer relative"
                  >
                    {newArrivalpic == "/images/GOLDNewArrivals1.webp" && (
                      <div className="circle-border absolute top-0 right-0"></div>
                    )}
                  </div>
                  <div
                    onClick={() =>
                      setNewArrivalpic("/images/BLACKNewArrivals1.webp")
                    }
                    className="circle-grey cursor-pointer relative"
                  >
                    {newArrivalpic == "/images/BLACKNewArrivals1.webp" && (
                      <div className="circle-border absolute top-0 right-0"></div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal1>
          </div>

          <div>
            <Reveal4>
              <CardComponent
                src={"/images/Slide1.webp"}
                title={"Nonstick Wok 14 Inch"}
                width={"w-full"}
                height={"xl:h-96 h-64"}
              />{" "}
            </Reveal4>
            <Reveal3>
              <h3 className="xl:text-3xl text-2xl text-start">
                The nonstick wok is one of our most popular cookware. Perfect
                for everyday stir fry.
              </h3>
            </Reveal3>
          </div>
        </div>
        <h1 className="md:text-6xl text-4xl md:mt-28 mt-14 mb-8">
          Best Sellers
        </h1>
        <div className="grid md:grid-cols-3 gap-3 mx-3">
          <div className="md:h-[880px] h-[460px] md:border-2 border-gray-300 p-3 flex md:flex-col gap-3 relative">
            <CardComponent
              src={"/images/BestSeller1.jpg"}
              title={"Professional Stock Pot"}
              width={"w-full"}
              height={"xl:h-96 h-80"}
            />
            <h3 className="lg:text-2xl md:w-full w-40 text-xl text-start">
              Our fall bakeware is back again with warm fall colors. Check out
              our fall line of bakeware from Fall colored pots to baking pans.
            </h3>
            <Link
              to={`/product/professional-stock-pot`}
              className="hover:text-white hover:bg-black w-fit text-start border-2 border-gray-300 px-8 py-2 absolute md:left-[5%] left-[40%] md:bottom-[2%] bottom-[5%]"
            >
              SHOP NOW
            </Link>
          </div>

          <div className="md:h-[880px] h-[460px] md:border-2 border-gray-300 p-3 flex md:flex-col md:justify-start justify-between md:gap-3 relative">
            <CardComponent
              src={"/images/BestSeller2.jpg"}
              title={"Cast Iron Dutch Oven"}
              width={"w-full"}
              height={"xl:h-96 h-80"}
            />
            <h3 className="md:text-xl text-sm md:w-full w-48 text-start md:mb-16 overflow-scroll">
              {" "}
              The Stock Pot is a cookware that is revolutionizing the way you
              cook! With its innovative design and advanced materials. The Stock
              Pot is the perfect choice for any kitchen. It unique combination
              of ceramic and aluminum ensures that your food cooks evenly and
              quickly, while its non-stick coating ensures that nothin sticks to
              the surface. Whether you're cooking for one or the whole family,
              the Stock Pot is the perfect choice!
            </h3>
            <Link
              to={`/product/cast-iron-dutch-oven`}
              className="hover:text-white hover:bg-black w-fit text-start border-2 border-gray-300 px-8 py-2 absolute md:left-[5%] left-[40%] md:bottom-[2%] bottom-[5%]"
            >
              SHOP NOW
            </Link>
          </div>
          <div className="md:h-[880px] h-[460px] md:border-2 border-gray-300 p-3 flex md:flex-col gap-3 relative">
            <CardComponent
              src={"/images/BestSeller3.jpg"}
              title={"Copper Sauce Pan"}
              width={"w-full"}
              height={"xl:h-96 h-80"}
            />
            <h3 className="md:text-2xl md:w-full w-40 text-base text-start md:mb-16 overflow-scroll">
              The Sauce Pan is the perfect cookware for making a variety of
              sauces, stews, soups, and more. Its stainless steel construction
              ensures even heat distribution for better and faster cooking. No
              matter what you're cooking, you can count on the Sauce Pan to help
              you cook like a pro.
            </h3>
            <Link
              to={`/product/copper-sauce-pan`}
              className="hover:text-white hover:bg-black w-fit text-start border-2 border-gray-300 px-8 py-2 absolute md:left-[5%] left-[40%] md:bottom-[2%] bottom-[5%]"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-3 place-items-center my-5 md:hidden">
          <img src="/images/Icons/pot.svg" alt="pot image" className="invert" />
          <h2 className="text-5xl">Cook to perfection!</h2>
        </div>
      </section>
      <h1 className="md:text-6xl text-4xl md:mt-28 mt-14 mb-8">Reviews</h1>
      <div className="grid md:grid-cols-3">
        <div className=" relative bg-[url(/images/Reviews1.jpg)] bg-cover h-[30rem]">
          <div className="top-[15%] bottom-[15%] left-[15%] right-[15%] absolute bg-black/50 p-2 flex flex-col place-content-center xl:gap-4 gap-2 text-white">
            <h2 className="xl:text-4xl text-2xl">Wok Star!</h2>
            <h3 className="xl:text-lg leading-6">
              I love cooking using the cast iron work for everyday famiy meals.
              With the wok it makes the food I make turn into restaurant quality
              meals. I bought this wok for my parents and also siblings!
            </h3>
            <h3 className="xl:text-2xl text-xl">David Jones</h3>
          </div>
        </div>
        <div className=" relative bg-[url(/images/Reviews2.jpg)] bg-cover h-[30rem] text-white">
          <div className="top-[15%] bottom-[15%] left-[15%] right-[15%] absolute bg-black/50 p-2 flex flex-col place-content-center xl:gap-4 gap-2 text-white">
            <h2 className="xl:text-4xl text-2xl">Built To Last</h2>
            <h3 className="xl:text-lg leading-6">
              Bought the cast iron pot and it lasted longer than the other
              brands I bought. Not only are the pots durable but the colors of
              the pots are so nice!
            </h3>
            <h3 className="xl:text-2xl text-xl">Danielle Johnson</h3>
          </div>
        </div>
        <div className=" relative bg-[url(/images/Reviews3.jpg)] bg-cover h-[30rem] text-white">
          <div className="top-[15%] bottom-[15%] left-[15%] right-[15%] absolute bg-black/50 p-2 flex flex-col place-content-center xl:gap-4 gap-2 text-white">
            <h2 className="xl:text-4xl text-2xl">Best Cookware!</h2>
            <h3 className="xl:text-lg leading-6">
              I love all the cookware. I just bought my 4th pan and love it so
              much! I love the color of the pot and how durable the pots are.
              I've recommended the cast iron pot to all my friends and family.
            </h3>
            <h3 className="xl:text-2xl text-xl">Michelle</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
