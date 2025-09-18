import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavBar from "./components/navbar.jsx";
import BackGround_Color from "./components/background.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BackGround_Color />
      <NavBar />
      <App />
  </StrictMode>
);
