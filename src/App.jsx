import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import About from "./Components/About";
import Shop from "./Pages/Shop";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
