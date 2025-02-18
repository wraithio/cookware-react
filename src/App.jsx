import { useState } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto">
      <h1 className="text-6xl mt-28 mb-8">Start Cooking</h1>
      <div className="row">
        <div className="col-3">
          <CardComponent
            src={"/images/StartCooking1.jpeg"}
            title={"Cast Iron Pot"}
            width={"full"}
            height={"96"}
          />
        </div>
        <div className="col-3">
          <CardComponent
            src={"/images/StartCooking2.jpeg"}
            title={"Stock Pot"}
            width={"full"}
            height={"96"}
          />
        </div>
        <div className="col-3">
          <CardComponent
            src={"/images/StartCooking3.jpeg"}
            title={"Sauce Pan"}
            width={"full"}
            height={"96"}
          />
        </div>
        <div className="col-3">
          <CardComponent
            src={"/images/StartCooking4.jpeg"}
            title={"Accessories"}
            width={"full"}
            height={"96"}
          />
        </div>
      </div>
      <h1 className="text-6xl mt-28 mb-8">New Arrivals</h1>
      <div className="row flex">
        <div className="col-6">
          <CardComponent
            src={"/images/NewArrivals1.jpg"}
            title={"Fall Collection"}
            width={"full"}
            height={"96"}
          />
          <div className="flex flex-column gap-2">
            <h3 className="text-3xl text-start">
              Our 2023 Fall Collection just came out with beautiful autumn color
              cookware.
            </h3>
            <h3 className="text-3xl text-start">
              Color: <b>Apple Cinnamon</b>
            </h3>
            <div className="flex">
              <div className="circle-red">
                <div className="circle-border"></div>
              </div>
              <div className="circle-orange"></div>
              <div className="circle-yellow"></div>
              <div className="circle-grey"></div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <CardComponent
            src={"/images/NewArrivals2.jpg"}
            title={"Nonstick Wok 14 Inch"}
            width={"full"}
            height={"96"}
          />
          <h3 className="text-3xl text-start">
            The nonstick wok is one of our most popular cookware. Perect for
            everyday stir fry.
          </h3>
        </div>
        <h1 className="text-6xl mb-20">Best Sellers</h1>
        <div className="row flex">
          <div className="col-4 border-2 border-black p-3 rounded-lg h-fit flex flex-col gap-3">
            <CardComponent
              src={"/images/BestSeller1.jpg"}
              title={"Stock Pot"}
              width={"full"}
              height={"96"}
            />
            <h3 className="text-2xl text-start">
              {" "}
              Our fall bakeware is back again with warm fall colors. Check out
              our fall line of bakeware from Fall colored pots to baking pans.
            </h3>
            <button className="hover:text-white hover:bg-black w-fit text-start border-2 border-black px-8 py-2">
              SHOP NOW
            </button>
          </div>
          <div className="col-4 border-2 border-black p-3 rounded-lg h-fit flex flex-col gap-3">
            <CardComponent
              src={"/images/BestSeller2.jpg"}
              title={"Stock Pot"}
              width={"full"}
              height={"96"}
            />
            <h3 className="text-2xl text-start">
              {" "}
              The Stock Pot is a cookware that is revolutionizing the way you
              cook! With its innovative design and advanced materials. The Stock
              Pot is the perfect choice for any kitchen. It unique combination
              of ceramic and aluminum ensures that your food cooks evenly and
              quickly, while its non-stick coating ensures that nothin sticks to
              the surface. Whether you're cooking for one or the whole family,
              the Stock Pot is the perfect choice!
            </h3>
            <button className="hover:text-white hover:bg-black w-fit text-start border-2 border-black px-8 py-2">
              SHOP NOW
            </button>
          </div>
          <div className="col-4 border-2 border-black p-3 rounded-lg h-fit flex flex-col gap-3">
            <CardComponent
              src={"/images/BestSeller3.jpg"}
              title={"Sauce Pan"}
              width={"full"}
              height={"96"}
            />
            <h3 className="text-2xl text-start">
              The Sauce Pan is the perfect cookware for making a variety of
              sauces, stews, soups, and more. Its stainless steel construction
              ensures even heat distribution for better and faster cooking. No
              matter what you're cooking, you can count on the Sauce Pan to help
              you cook like a pro.
            </h3>
            <button className="hover:text-white hover:bg-black w-fit text-start border-2 border-black px-8 py-2">
              SHOP NOW
            </button>
          </div>
        </div>
        <h1 className="text-6xl mt-28 mb-8">Reviews</h1>
        <div className="flex row">
          <div className="col-4 relative bg-[url(/images/Reviews1.jpg)] h-[60rem] object-cover">
            <div className="top-[20%] bottom[20%] left-[20%] right-[20%] absolute bg-black/50 p-4 flex flex-col gap-4 text-white">
              <h2 className="text-5xl">Wok Star!</h2>
              <h3 className="text-2xl">
                I love cooking using the cast iron work for everyday famiy
                meals. With the wok it makes the food I make turn into
                restaurant quality meals. I bought this wok for my parents and
                also siblings!
              </h3>
              <h3 className="text-2xl">David Jones</h3>
            </div>
          </div>
          <div className="col-4 relative bg-[url(/images/Reviews2.jpg)] h-[60rem] object-cover text-white">
            <div className="top-[20%] bottom[20%] left-[20%] right-[20%] absolute bg-black/50 p-4 flex flex-col gap-4 text-white">
              <h2 className="text-5xl">Built To Last</h2>
              <h3 className="text-2xl">
                Bought the cast iron pot and it lasted longer than the other
                brands I bought. Not only are the pots durable but the colors of
                the pots are so nice!
              </h3>
              <h3 className="text-2xl">Danielle Johnson</h3>
            </div>
          </div>
          <div className="col-4 relative bg-[url(/images/Reviews3.jpg)] h-[60rem] object-cover text-white">
            <div className="top-[20%] bottom[20%] left-[20%] right-[20%] absolute bg-black/50 p-4 flex flex-col gap-4 text-white">
              <h2 className="text-5xl">Best Cookware!</h2>
              <h3 className="text-2xl">
                I love all the cookware. I just bought my 4th pan and love it so
                much! I love the color of the pot and how durable the pots are.
                I've recommended the cast iron pot to all my friends and family.
              </h3>
              <h3 className="text-2xl">Michelle</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
