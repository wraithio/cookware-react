import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-auto">
        <h1 className="text-6xl mt-28 mb-8">Start Cooking</h1>
        <div className="flex row">
          <div className="col-3 flex justify-center">
            <CardComponent
              src={"/images/StartCooking1.jpeg"}
              title={"Cast Iron Pot"}
              width={"96"}
              height={"96"}
            />
          </div>
          <div className="col-3 flex justify-center">
            <CardComponent
              src={"/images/StartCooking2.jpeg"}
              title={"Stock Pot"}
              width={"96"}
              height={"96"}
            />
          </div>
          <div className="col-3 flex justify-center">
            <CardComponent
              src={"/images/StartCooking3.jpeg"}
              title={"Sauce Pan"}
              width={"96"}
              height={"96"}
            />
          </div>
          <div className="col-3 flex justify-center">
            <CardComponent
              src={"/images/StartCooking4.jpeg"}
              title={"Accessories"}
              width={"96"}
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
            <h3 className="text-3xl text-start">Our 2023 Fall Collection just came out with beautiful autumn color cookware.</h3>
            <h3 className="text-3xl text-start">Color: <b>Apple Cinnamon</b></h3>
            <div className="flex">
            <div className="circle-red">
              <div className="circle-border"></div>
            </div>
            <div className="circle-orange"></div>
            <div className="circle-yellow"></div>
            <div className="circle-grey"></div>
          </div>
          </div>
          <div className="col-6">
            <CardComponent src={"/images/NewArrivals2.jpg"} title={"Nonstick Wok 14 Inch"} width={"full"} height={"96"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
