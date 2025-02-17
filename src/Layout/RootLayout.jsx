import React from "react";
import Header from "../Components/Header";

import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import  { EcommerceNavbar } from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <EcommerceNavbar/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
