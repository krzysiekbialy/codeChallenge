import * as React from "react";
import styled from "@emotion/styled";
import { topJokes } from "./SimpleData";

const TopTenMain = styled.div`
  width: 350px;
  height: 369px;
  padding: 32px 61px 35px 32px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: solid 1px #ecebe9;
`;

const Title = styled.div`
  display: flex;
  h3 {
    font-size: 15px;
    color: #313131;
    margin-bottom: 16px;
  }
`;

const TopJokesHolder = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 15px;
    line-height: 1.47;
    text-decoration: underline;
    margin-bottom: 8px;
  }
`;

interface TopTenProps {
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
}

const TopTenJokes: React.FC<TopTenProps> = (props) => {
  return (
    <TopTenMain>
      <Title>
        <h3>THE TOP 10 JOKES THIS WEEK</h3>
      </Title>
      <TopJokesHolder>
        {topJokes.map((v, i) => {
          return <p key={i}>{v.text}</p>;
        })}
      </TopJokesHolder>
    </TopTenMain>
  );
};

export default TopTenJokes;
