import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavbarComponent from "./components/NavbarComponent.jsx";
// import SplashComponent from "./components/SplashComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import Cookware from "./Cookware.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/cookware" element={<Cookware />}/> */}
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  </StrictMode>
);
