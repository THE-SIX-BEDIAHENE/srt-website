import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx"
const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default RootLayout;
