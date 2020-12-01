import * as React from "react";
import styled from "@emotion/styled";
import ThumbUp from "./ThumbUp";
import ThumbDown from "./ThumbDown";
import { css } from "@emotion/core";

const JokeCardDetailsHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  margin-right: 30px;
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
  align-self: flex-end;
  margin-right: 19px;
  @media (max-width: 764px) {
    display: none;
  }
`;

const Number = styled.p`
  font-size: 14px;
  color: #cfb995;
  display: flex;
  align-self: flex-end;
  @media (max-width: 764px) {
    flex: 1;
  }
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
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Tending = styled.div`
  display: flex;
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

const Thumbs = styled.div`
  display: flex;
  margin-top: 20px;
`;

const margin = css`
  margin-right: 30px;
`;

interface JokeCardDetailsProps {
  title?: string;
  paragraph?: string;
}
const JokeCardDetails: React.FC<JokeCardDetailsProps> = (props) => {
  return (
    <JokeCardDetailsHolder>
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

        <Paragraph>
          <p>
            {props.paragraph
              ?.replace("St.", "St,")
              .split(". ")
              .map((v, i) => {
                return (
                  <>
                    <p>{v.replace("St,", "St.")}.</p>
                    <br />
                  </>
                );
              })}
          </p>
        </Paragraph>
      </JokeCardMain>
      <Thumbs>
        <ThumbUp css={margin} />
        <ThumbDown />
      </Thumbs>
    </JokeCardDetailsHolder>
  );
};

export default JokeCardDetails;
