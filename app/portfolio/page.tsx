"use client";

import Header from "@/app/component/header"; // Importing the Header component
import Footer from "../component/footer"; // Importing the Footer component
import Portfolio from "../component/portfolioGallery"; // Importing Portfolio component

export default function PFGal() {
  return (
    <>
      <Header /> {/* Adding the Header component here */}
      
      <Portfolio /> {/* Adding the Portfolio component here */}

      <Footer /> {/* Adding the Footer component here */}
    </>
  );
}