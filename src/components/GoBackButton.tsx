import * as React from "react";
import styled from "@emotion/styled";

const arrow = require("../assets/arrowLeft.svg");

const GoBackHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background-color: #303030;
  border-radius: 22% 78% 73% 27% / 24% 30% 70% 76%;
  cursor: pointer;
  margin-bottom: 30px
`;

const Icon = styled.div`
  background-image: url(${arrow});
  background-size: contain;
  background-repeat: no-repeat;
  height: 18px;
  width: 10px;

`;

interface GoBackProps {
  style?: React.CSSProperties;
  onClick: () => void;
}

const GoBackButton: React.FC<GoBackProps> = (props) => {
  return (
    <GoBackHolder onClick={props.onClick}>
      <Icon></Icon>
    </GoBackHolder>
  );
};

export default GoBackButton;
