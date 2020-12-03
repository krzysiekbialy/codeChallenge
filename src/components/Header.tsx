// tslint:disable:no-http-string
import React, { useState } from "react";
import styled from "@emotion/styled";
// import { css } from "@emotion/core";
// @ts-ignore

const img = require("../assets/background.png");
const LogoV = require("../assets/vehiculum-logo.svg");
import Search from "./Search";
import { css } from "@emotion/core";
import MenuSelect from "./MenuSelect";

const SideMenu = styled.div`
  right: -500px;
  top: 70px;
  display: flex;
  flex-direction: column;
  position: fixed;
  opacity: 0;
  border-radius: 20px;
  border: 1px solid #cfb995;
  background-color: white;
  transition-property: right;
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  @media (min-width: 1040px) {
    display: none;
  }
  &.collapseActive {
    right: 0;
    opacity: 1;
    z-index: 100;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 12px;
  width: 50px;
  p {
    color: #303030;
    &:hover {
      color: #cfb995;
    }
  }

  @media (max-width: 1040px) {
    margin-right: 4%;
  }
  @media (max-width: 780px) {
    width: 40px;
  }
  &:hover {
    width: max-content;
    p {
      display: block;
    }
    cursor: pointer;
  }
  @media (max-width: 1300px) {
    width: max-content;
    padding: 25px;
    p {
      display: block;
    }
  }
`;

const HambMenu = styled.svg`
  position: fixed;
  right: 15px;
  top: 0px;
  fill: #cfb995;
  height: 50px;
  width: 50px;
  z-index: 5;
  display: none;
  cursor: pointer;
  @media (max-width: 1040px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  height: max-content;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  left: 0;
  top: 0;
  padding-bottom: 67px;
`;

const Nav = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  background-color: #303030;
  justify-content: center;
  align-items: center;
`;

const Holder = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    height: max-content;
  }
`;

const TitleHolder = styled.div`
  margin-top: 60px;
  z-index: 2;
  @media (max-width: 992px) {
    padding: 0px 30px;
  }
`;

const TitleH1 = styled.div`
  h1 {
    z-index: 2;
    margin: 0;
    font-size: 48px;
    font-weight: normal;
    line-height: 50px;
    color: #cfb995;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
`;

const TitleP = styled.div`
  margin-top: 10px;
  max-width: 350px;
  text-align: center;
  p {
    color: #ffffff;
    line-height: 32px;
    font-size: 22px;
    font-stretch: normal;
  }
`;

const Logo = styled.div`
  margin-left: 165px;
  cursor: pointer;
  flex: 4;
  width: 198px;
  height: 36px;
  display: flex;
  background-image: url(${LogoV});
  background-repeat: no-repeat;
  @media (max-width: 1040px) {
    background-size: contain;
  }
  @media (max-width: 690px) {
    margin-left: 15px;
  }
`;

const MenuOptionHolder = styled.div`
  cursor: pointer;
  flex: 2;
  p {
    color: white;
    font-size: 15px;
    font-style: normal;
    line-height: 1.5;
  }
  @media (max-width: 1040px) {
    display: none;
  }
`;

const MenuSelectCss = css`
  flex: 2;
  @media (max-width: 1040px) {
    display: none;
  }
`;

const linksData = [
  {
    to: "Header",
    text: "SO FUNKTIONIERT’S",
  },
  {
    to: "Header",
    text: "SONDERANGEBOTE",
  },
];

const SearchHeader = css`
  /* @media (max-width: 600px) {
    width: 80%;
  } */
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export interface SiteNavProps {
  onClickTitle: (title: string) => void;
}

const Header: React.FC<SiteNavProps> = ({ onClickTitle }) => {
  const [collapseActive, setCollapseActive] = useState(false);
  return (
    <Wrapper>
      <Nav>
        <Logo />

        {linksData.map((i, v) => (
          <MenuOptionHolder>
            <p key={v}>{i.text}</p>
          </MenuOptionHolder>
        ))}
        <MenuSelect css={MenuSelectCss} />
        <HambMenu
          width="40"
          height="40"
          viewBox="0 0 24 24"
          onClick={() => {
            collapseActive ? setCollapseActive(false) : setCollapseActive(true);
          }}
        >
          {collapseActive ? (
            <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
          ) : (
            <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
          )}
        </HambMenu>

        {true ? (
          <SideMenu
            className={collapseActive ? "collapseActive" : ""}
            onClick={() => setCollapseActive(false)}
          >
            <ul>
              {linksData.map((item) => {
                return (
                  <Icon>
                    <p> {item.text}</p>
                  </Icon>
                );
              })}
            </ul>
          </SideMenu>
        ) : null}
      </Nav>

      <Holder>
        <TitleHolder>
          <TitleH1>
            <h1>The Joke Bible</h1>
          </TitleH1>
          <TitleP>
            <p>Daily Laughs for you and yours</p>
          </TitleP>
        </TitleHolder>
        <Search onClickTile={onClickTitle} css={SearchHeader} />
      </Holder>
    </Wrapper>
  );
};

export default Header;
