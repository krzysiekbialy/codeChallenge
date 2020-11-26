import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { maxwidth } from "../styles/shared";

const FooterStyle = css`
  @media (min-width: 800px) {
    margin-top: 25px;
    box-shadow: 0px -6px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;
const Wrapper = styled.div`
  padding: 20px 0;
  margin-bottom: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    justify-content: space-between;
    flex-direction: row;
  }
  &.post {
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

const Line = styled.div`
  position: absolute;
  top: 40%;
  width: 100%;
  border: 1px solid #1a191e;
  @media (min-width: 800px) {
    display: none;
  }
`;

const H4 = styled.h4`
  padding: 0 6px;
  background-color: #222127;
  font-size: 16px;
  z-index: 2;
  color: #494850;
  @media (min-width: 800px) {
    display: none;
  }
`;

const P = styled.p`
  margin: 0;
  font-size: 14px;
  color: #494850;
  @media (min-width: 800px) {
    font-size: 16px;
    color: #c4c4c4;
  }
`;
const Linklist = styled.ul`
  display: none;
  @media (min-width: 800px) {
    margin: 0;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    font-size: 16px;
  }
  li {
    margin-right: 8px;
    padding-right: 8px;
    color: #535559;
    border-right: 1px solid #535559;
    &:last-child {
      border-right: none;
      margin-right: 0;
      padding-right: 0;
    }
    a {
      color: #535559;
      text-decoration: none;
      margin-right: 5px;
      cursor: pointer;
    }
  }
`;

const OnlyDestop = styled.span`
  @media (max-width: 800px) {
    display: none;
  }
`;

export interface HomepageProps {
  homePage?: boolean;
  isPost?: boolean;
}

const Footer: React.FC<HomepageProps> = ({ homePage, isPost }) => {
  return (
    <footer css={!homePage && FooterStyle}>
      <Wrapper css={maxwidth} className={isPost ? "post" : ""}>
        <Line />
        <H4>AEXOL</H4>
        <P>
          <OnlyDestop>Aexol -</OnlyDestop> Innovative Software Development
          studio © 2020
        </P>
        <Linklist>
          <li>
            <a href="/blog" rel="noopener noreferrer">
              Latest Posts
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Aexol"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Aexol"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.aexol.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aexol
            </a>
          </li>
          <li>
            {" "}
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
              RSS
            </a>
          </li>
        </Linklist>
      </Wrapper>
    </footer>
  );
};

export default Footer;
