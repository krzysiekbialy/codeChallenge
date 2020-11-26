import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,800,900&display=swap");
  font-family: "Montserrat";
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: 0.6s;
    text-rendering: optimizeLegibility;
  }
  body {
    width: 100vw;
    overflow-x: hidden;
  }
  ul {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap");
    font-family: "Montserrat";
  }
  h1 {
    font-size: 48px;
    @media (max-width: 768px) {
    }
  }
  h2 {
    font-size: 32px;
    font-family: "Montserrat";
  }
  h3 {
    font-size: 34px;
  }
  h4 {
    font-size: 20px;
  }
  p {
    font-family: "Montserrat";
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: #313030;
    font-family: "Montserrat";
  }
`;

// Centered content container blocks
export const maxwidth = css`
  margin: 0 auto;
  max-width: 1140px;
  width: 90%;
  @media (max-width: 1200px) {
    max-width: 940px;
  }
  @media (max-width: 1000px) {
    max-width: 630px;
  }
`;

export const wrapper = css`
  padding: 50px 0;
`;

export const wrapperColor = css`
  background-color: rgba(116, 111, 109, 0.1);
  padding: 55px 0;
`;

export const sectionHeader = css`
  text-align: center;
  h2 {
    margin-bottom: 20px;
    color: #2E476E;
  }
  p {
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 90%;
    color: #7A8AA3
  }
`;

export const SiteMain = css`
  z-index: 100;
  flex-grow: 1;
  @media (min-width: 850px) {
    margin-top: 70px;
  }
`;

export const SiteTitle = styled.h1`
  z-index: 10;
  margin: 0;
  padding: 0;
  font-size: 3.8rem;
  font-weight: 700;
`;

export const SiteDescription = styled.h2`
  z-index: 10;
  margin: 0;
  padding: 5px 0;
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  opacity: 0.8;
`;

export const PostFeed = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  @media (min-width: 850px) {
    padding: 120px 0 0 0;
  }
`;

export const PostFeedRaise = css`
  margin-top: 10%;
  @media (min-width: 850px) {
    margin-top: -50px;
    padding-top: 0;
  }
`;

export const SocialLink = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;
  color: #fff;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }

  svg {
    height: 1.8rem;
    fill: #fff;
  }
`;

export const SiteHeader = css`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-size: cover;
`;

export const SiteHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vw 4vw;
  min-height: 200px;
  max-height: 450px;
  text-align: center;
`;

export const SiteHeaderStyles = css`
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: auto;
  left: 0;
  z-index: 10;
  display: block;
  height: 80px;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: block;
    background: rgba(0, 0, 0, 0.18);
  }

  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: auto;
    left: 0;
    z-index: 10;
    display: block;
    height: 80px;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
  }
  @media (max-width: 800px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const AuthorProfileImage = css`
  display: block;
  border-radius: 100%;
  object-fit: cover;
  margin-left: 15px;
  width: 40px;
  height: 40px;
`;
