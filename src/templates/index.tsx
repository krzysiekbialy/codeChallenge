import React from "react";
import { Global } from "@emotion/core";
import { GlobalStyles } from "../styles/shared";
import Header from "../components/Header";
import Features from "../components/Features";
import Footer from "../components/Footer";
const About: React.FC = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
      {/* <div
        style={{
          width: "100%",
          height: 400,
          display: "flex",
          justifyContent: "center",
          background: "#d6e0e2",
        }}
      >
        <Search />
      </div> */}
      <Features />
      <Footer />
    </>
  );
};

export default About;
