import styled from "@emotion/styled";
import React, { useState } from "react";

const hand = require("../assets/handUp.svg");

const ThumbUpMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThumbUpHolder = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #68b680;
  &:hover {
    background-color: #46915d;
  }
`;

const Icon = styled.div`
  background-image: url(${hand});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 24px;
  width: 22px;
`;

const ThumbUpNumber = styled.p`
  margin-top: 5px;
  color: #68b680;
  font-size: 12px;
  text-align: center;
  font-weight: 600;
`;

interface ThumbUpProps {
  className?: string;
}

const ThumbUp: React.FC<ThumbUpProps> = (props) => {
  const [addPlus, setaddPlus] = useState(328);
  return (
    <ThumbUpMain css={props.className}>
      <ThumbUpHolder
        onClick={() => {
          console.log(addPlus);
          setaddPlus(addPlus + 1);
        }}
      >
        <Icon></Icon>
      </ThumbUpHolder>
      <ThumbUpNumber>{addPlus}</ThumbUpNumber>
    </ThumbUpMain>
  );
};

export default ThumbUp;
