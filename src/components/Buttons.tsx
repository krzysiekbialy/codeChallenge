import styled from "@emotion/styled";
import React from "react";
import { colors } from "../styles/colors";

const Btn = styled.button`
  padding: 15px 40px;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  transition: 0.4s;
  font-weight: 700;
  font-size: 14px;
  &.Fill {
    padding: 10px 20px;
    border: 2px solid ${colors.navyBlue};
    background-color: ${colors.navyBlue};
  }
  &.Outline {
    border: 2px solid ${colors.navyBlue};
    color: ${colors.navyBlue};
    &:hover {
      color: ${colors.white};
      background-color: ${colors.navyBlue};
    }
  }
  &.Fade {
    border: 2px solid ${colors.navyBlue};
    background-color: ${colors.navyBlue};
    &:hover {
      border: 2px solid ${colors.navyBlueDark};
      background-color: ${colors.navyBlueDark};
    }
  }
`;

export interface SiteBtnProps {
  styleProps: "Outline" | "Fill" | "Fade"; // add custom style if you need
}

export const Button: React.FC<SiteBtnProps> = ({ children, styleProps }) => {
  return <Btn className={styleProps}>{children}</Btn>;
};
