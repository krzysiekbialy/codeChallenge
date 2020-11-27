import React from "react";
import { Global } from "@emotion/core";
import { GlobalStyles } from "../styles/shared";
// @ts-ignore
import Header from "../components/Header";
import Features from "../components/Features";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
      <Features />
      <Footer />
    </>
  );
};

export default About;
