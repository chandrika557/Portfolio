import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassApp from "./ClassApp";

const About = () => {
  return <h1>About Page</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/classapp" element={<ClassApp />} />
      <Route path="*" element={"We can render error"} />
    </Routes>
  </BrowserRouter>
);
