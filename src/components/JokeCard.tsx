import * as React from "react";
import styled from "@emotion/styled";

const arrow = require("../assets/arrow.svg");

const bolt = require("../assets/bolt.svg");

const JokeCardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 360px;
  min-height: 264px;
  border-radius: 2px;
  border: solid 1px #ecebe9;
  margin-bottom: 38px;
  margin-right: 15px;
  &:hover {
    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.15);
  }
`;

const Bolt = styled.div`
  margin-left: 16px;
  margin-right: 8px;
  width: 8px;
  height: 14px;
  background-image: url(${bolt});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Arrow = styled.div`
  cursor: pointer;
  margin-left: 8px;
  width: 21px;
  height: 14px;
  background-image: url(${arrow});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  margin-top: 16px;
  margin-bottom: 6px;
  display: flex;
  width: 100%;
  h3 {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: #303030;
  }
`;

const Paragraph = styled.p`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  color: #303030;
`;

const Stats = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 16px;
  padding-right: 16px;
  align-items: center;
  justify-content: flex-end;
  p {
    color: #cfb995;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

interface JokeCardProps {
  title: string;
  paragraph: string;
  onShow: () => void;
}

const JokeCard: React.FC<JokeCardProps> = (props) => {
  return (
    <JokeCardMain>
      <Title>
        <Bolt />
        <h3>{props.title}</h3>
      </Title>
      <Paragraph>{props.paragraph}</Paragraph>
      <Stats>
        <p onClick={props.onShow}>see stats</p>
        <Arrow />
      </Stats>
    </JokeCardMain>
  );
};

export default JokeCard;
