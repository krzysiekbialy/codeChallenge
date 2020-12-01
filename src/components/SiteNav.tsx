// tslint:disable:no-http-string
import React, { useState } from "react";
import styled from "@emotion/styled";

import { colors } from "../styles/colors";

const SideMenu = styled.div`
  left: 0;
  top: 0;
  height: 100vh;
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  position: fixed;
  z-index: 500;
  transition: 0.3s;
  @media (max-width: 1300px) {
    opacity: 0;
    left: -100px;
    &.collapseActive {
      opacity: 1;
      left: 0;
      width: 60vw;
      border-right: 1px solid ${colors.lightgrey};
      background-color: white;
    }
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  border-radius: 25px;
  background-color: #f1f1f1;
  margin-top: 15px;
  padding: 12px;
  width: 50px;
  transition: 0.3s;
  p {
    margin-left: 10px;
    display: none;
    color: white;
  }
  svg {
    height: 26px;
    width: 26px;
    fill: ${colors.navyBlue};
    transition: 0.1s;
  }
  @media (max-width: 1000px) {
    margin-right: 4%;
  }
  @media (max-width: 780px) {
    width: 40px;
  }
  &:hover {
    width: max-content;
    svg {
      fill: white;
    }
    p {
      display: block;
    }
    background-color: ${colors.navyBlue};
    cursor: pointer;
  }
  &.active {
    svg {
      fill: white;
    }
    background-color: ${colors.navyBlue};
  }
  @media (max-width: 1300px) {
    width: 90%;
    padding: 15px;
    p {
      display: block;
    }
    &:hover {
      width: 90%;
    }
  }
`;

const HambMenu = styled.svg`
  position: fixed;
  right: 15px;
  top: 15px;
  fill: ${colors.navyBlueDark};
  height: 50px;
  width: 50px;
  z-index: 5;
  display: none;
  transition: 0.3s;
  @media (max-width: 1000px) {
    display: block;
  }
`;

const linksData = [
  {
    to: "Header",
    text: "option 1",
  },
  {
    to: "Consultations",
    text: "Option 2",
  },
  {
    to: "Header",
    text: "Option 3",
  },
];

export interface siteNavProps {}

const SiteNav: React.FC<siteNavProps> = ({}) => {
  const [collapseActive, setCollapseActive] = useState(false);

  return (
    <>
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

      {collapseActive ? (
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
    </>
  );
};

export default SiteNav;
