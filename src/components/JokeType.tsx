import * as React from "react";
import styled from "@emotion/styled";

const yellowP = "#5e5e5e";
const borderP = "solid 1px #5e5e5e";

const JokeHolder = styled.div`
  width: 206px;
  height: 48px;
  margin-left: 20px;
  padding: 14px 0;
  border-radius: 2px;
  margin-bottom: 16px;
  cursor: pointer;
`;

const Title = styled.p`
  color: white;
  text-align: center;
`;

interface JokeTypeProps {
  color: string;
  text: string;
  yellow?: boolean;
}

const JokeType: React.FC<JokeTypeProps> = (props) => {
  return (
    <JokeHolder
      style={{
        backgroundColor: `${props.color}`,
        ...(props.yellow && { border: borderP }),
      }}
    >
      <Title
        style={{
          ...(props.yellow && { color: yellowP }),
        }}
      >
        {props.text}
      </Title>
    </JokeHolder>
  );
};

export default JokeType;
