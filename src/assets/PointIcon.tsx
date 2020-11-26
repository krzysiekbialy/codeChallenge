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
const PointIcon = () => (
  <Svg version="1.1" viewBox="0 0 139 139">
    <circle cx="69.5" cy="54.5" id="XMLID_3_" r="35.2" />
    <circle
      className="white"
      style={{
        width: "40px",
      }}
      cx="69.5"
      cy="54.5"
      id="XMLID_1_"
      r="20.8"
    />
    <path
      d="M69.5,121c-0.9,0-2.2-1.3-2.2-1.3c-38-43.7-33-65.2-33-65.2s11,35.1,35.2,35.2"
      id="XMLID_8_"
    />
    <path
      d="M69.5,121c0.9,0,2.2-1.3,2.2-1.3c38-43.7,33-65.2,33-65.2s-11,35.1-35.2,35.2"
      id="XMLID_6_"
    />
  </Svg>
);
export default PointIcon;
