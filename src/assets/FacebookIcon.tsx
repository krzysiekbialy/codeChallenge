import * as React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  transition: none;
  cursor: pointer;
  margin-right: 20px;
  width: 30px;
  height: 30px;
  fill: #45505b;
  &:hover {
    fill: #0563bb;
  }
`;

const FacebookIcon: React.FC = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
  </Svg>
);
export default FacebookIcon;
