import React, { useState } from "react";
import styled from "@emotion/styled";
import { menuSelectText } from "./SimpleData";

const path = require("../assets/path.svg");

const shape = require("../assets/shape.svg");

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MenuHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  width: 222px;
  cursor: pointer;
  height: 60px;
  background-color: #cfb995;
  p {
    color: white;
    align-self: center;
    font-size: 15px;
    text-transform: uppercase;
  }
`;

const Path = styled.div`
  height: 8px;
  width: 16px;
  background-image: url(${path});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Shape = styled.div`
  height: 16px;
  width: 16px;
  background-image: url(${shape});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  position: absolute;
  border-radius: 4px;
  bottom: 0;
  width: 100%;
  transform: translateY(120%);
`;

const Publish = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 35px;
  margin-left: 16px;
  margin-right: 16px;
  font-weight: bold;
  color: #cfb995;
`;

const MenuP = styled.p`
  font-size: 14px;
  color: #5e5e5e;
`;

const MenuPHolder = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
  height: 35px;
  border-bottom: solid 1px #d1d1d1;
`;
interface MenuSelectProps {
  className?: string;
}

const MenuSelect: React.FC<MenuSelectProps> = (props) => {
  const [open, setIsOpen] = useState(false);
  return (
    <Content css={props.className}>
      <MenuHolder onClick={() => setIsOpen(!open)}>
        <Shape />
        <p>MEIN BEREICH</p>
        <Path />
      </MenuHolder>
      {open && (
        <Options>
          {menuSelectText.map((v, i) => {
            return (
              <MenuPHolder>
                <MenuP key={i}>{v.text}</MenuP>
              </MenuPHolder>
            );
          })}
          <Publish>Publish new joke</Publish>
        </Options>
      )}
    </Content>
  );
};

export default MenuSelect;
