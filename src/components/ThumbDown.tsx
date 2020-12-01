import * as React from "react";
import styled from "@emotion/styled";

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
const ThumbUpNumber = styled.p``;

interface ThumbUpProps {}

const ThumbUp: React.FC<ThumbUpProps> = (props) => {
  return (
    <ThumbUpMain>
      <ThumbDownHolder>
        <Icon></Icon>
      </ThumbDownHolder>
      <ThumbUpNumber></ThumbUpNumber>
    </ThumbUpMain>
  );
};

export default ThumbUp;
