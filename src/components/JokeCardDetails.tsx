import * as React from "react";
import styled from "@emotion/styled";
import { jokeText } from "./SimpleData";

const JokeCardMain = styled.div`
  padding-top: 17px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 730px;
  height: 287px;
  border-radius: 4px;
  border: solid 1px #ecebe9;
`;

const TitleHolder = styled.div`
  display: flex;
  width: 100%;
`;

const Special = styled.div`
  width: 119px;
  height: 22px;
  border-radius: 11px;
  background-color: #57e690;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    font-size: 12px;
    font-weight: 22px;
    text-align: center;
    text-transform: uppercase;
  }
`;

const Title = styled.div`
  height: 60px;
  margin-right: 14px;
  h3 {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: normal;
    color: #cfb995;
    padding-top: 13px;
  }
`;

const Line = styled.span`
  background-color: #cfb995;
  width: 235px;
  height: 1px;
  display: flex;
  align-self: end;
  margin-right: 19px;
`;
const Number = styled.p`
  font-size: 14px;
  color: #cfb995;
  display: flex;
  align-self: end;
`;
const Paragraph = styled.div`
  flex: 1;
  margin-top: 24px;
  padding-right: 76px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  p {
    font-size: 15px;
    line-height: 1.47;
  }
`;

const TopHolder = styled.div`
  display: flex;
`;

const Tending = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: center;
  margin-right: 22px;
  p {
    font-size: 14px;
    text-transform: uppercase;
    color: #f3a536;
  }
`;

const Dot = styled.span`
  height: 4px;
  width: 4px;
  margin-right: 4px;
  border-radius: 50px;
  background-color: #f3a536;
`;

interface JokeCardDetailsProps {
  title?: string;
  // paragraph1?: string;
  // paragraph2?: string;
  // paragraph3?: string;
}

// const found = jokesText.find(element.tittle => element.tittle == props.titte);

// console.log(found);

const JokeCardDetails: React.FC<JokeCardDetailsProps> = (props) => {
  const found = jokeText.find((element) => element.title == props.children);

  return (
    <JokeCardMain>
      <TopHolder>
        <Special>
          <p>Special Joke</p>
        </Special>
        <Tending>
          <Dot />
          <p>Tending</p>
        </Tending>
      </TopHolder>

      <TitleHolder>
        <Title>
          <h3>{props.title}</h3>
        </Title>
        <Line />
        <Number>NO #1</Number>
      </TitleHolder>

      <Paragraph>{found}</Paragraph>
    </JokeCardMain>
  );
};

export default JokeCardDetails;
