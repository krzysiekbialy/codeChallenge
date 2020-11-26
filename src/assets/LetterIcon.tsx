import * as React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";

const Svg = styled.svg`
  fill: ${colors.navyBlue};
  width: 1200px;
  padding: 6px;
  transition: 0.1s;
  circle {
    &.white {
      fill: white;
    }
  }
  :hover {
    fill: white;
    circle {
      &.white {
        fill: ${colors.navyBlue};
      }
    }
  }
`;

const LetterIcon = () => (
  <Svg
    height="45"
    viewBox="0 0 48 48"
    width="45"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z" />
    <path d="M0 0h48v48H0z" fill="none" />
  </Svg>
);
export default LetterIcon;
