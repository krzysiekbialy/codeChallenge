import * as React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

const hand = require("../assets/handDown.svg");

const ThumbUpMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThumbDownHolder = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #ff3750;
  &:hover {
    background-color: #ce2c40;
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
  color: #ff3750;
  font-size: 12px;
  text-align: center;
  font-weight: 600;
`;

interface ThumbUpProps {}

const ThumbUp: React.FC<ThumbUpProps> = () => {
  const [unlikeSate, setUnlikeState] = useState(98);
  return (
    <ThumbUpMain>
      <ThumbDownHolder onClick={() => setUnlikeState(unlikeSate + 1)}>
        <Icon></Icon>
      </ThumbDownHolder>
      <ThumbUpNumber>{unlikeSate}</ThumbUpNumber>
    </ThumbUpMain>
  );
};

export default ThumbUp;
