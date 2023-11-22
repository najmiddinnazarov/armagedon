import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Armageddon from "./components/Armageddon";
import Picture from "./Pages/Picture";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Armageddon />
    <Picture />
  </>
);
