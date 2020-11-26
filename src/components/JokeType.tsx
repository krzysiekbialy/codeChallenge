import * as React from "react";
import styled from "@emotion/styled";

const JokeHolder = styled.div`
  width: 206px;
  height: 48px;
  margin-left: 20px;
  padding: 14px 0;
  border-radius: 2px;
  p {
    color: white;
    text-align: center;
  }
`;

interface JokeTypeProps {
  color: string;
  text: string;
}

const JokeType: React.FC<JokeTypeProps> = (props) => {
  return (
    <JokeHolder
    style={{
      backgroundColor:`${props.color || 'blue'}`
    }}
    >
      <p>{props.text}</p>
    </JokeHolder>
  );
};

export default JokeType;
