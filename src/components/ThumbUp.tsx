import * as React from "react";
import styled from "@emotion/styled";

const hand = require("../assets/handUp.svg");

const ThumbUpMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThumbUpHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #68b680;
`;

const Icon = styled.div`
  background-image: url(${hand});
  background-size: contain;
  background-repeat: no-repeat;
  height: 24px;
  width: 22px;
`;

const ThumbUpNumber = styled.p``;

interface ThumbUpProps {
  className?: string;
}

const ThumbUp: React.FC<ThumbUpProps> = (props) => {
  return (
    <ThumbUpMain css={props.className}>
      <ThumbUpHolder>
        <Icon></Icon>
      </ThumbUpHolder>
      <ThumbUpNumber></ThumbUpNumber>
    </ThumbUpMain>
  );
};

export default ThumbUp;
