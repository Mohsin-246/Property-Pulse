import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "../components/navbar";
import Hero from "@/components/Hero";
import Land from "@/components/Land";
import InfoBoxes from "@/components/InfoBoxes";
import BoxProp from "@/components/BoxProp";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";




export const metadata = {
  title: "PropertyPulse | Find the Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rental, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body cz-shortcut-listen="true">
          <Navbar />

          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
