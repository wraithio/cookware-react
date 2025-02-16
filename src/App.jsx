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
        <div className="flex justify-evenly gap-6">
          <CardComponent src={"/images/StartCooking1.jpeg"} title={"Cast Iron Pot"} width={"80"} height={"80"}/>
          <CardComponent src={"/images/StartCooking2.jpeg"} title={"Stock Pot"} width={"80"} height={"80"}/>
          <CardComponent src={"/images/StartCooking3.jpeg"} title={"Sauce Pan"} width={"80"} height={"80"}/>
          <CardComponent src={"/images/StartCooking4.jpeg"} title={"Accessories"} width={"80"} height={"80"}/>

        </div>
      </div>
    </>
  );
}

export default App;
