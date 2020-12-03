import * as React from "react";
import styled from "@emotion/styled";
import ThumbUp from "./ThumbUp";
import ThumbDown from "./ThumbDown";
import { css } from "@emotion/core";

const arrow = require("../assets/arrowLeft.svg");

const JokeCardDetailsHolder = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    align-items: center;
  }
`;

const JokeCardMain = styled.div`
  padding-top: 17px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 730px;
  min-height: 287px;
  border-radius: 4px;
  border: solid 1px #ecebe9;
  margin-right: 30px;
  @media (max-width: 800px) {
    width: 80%;
    margin-right: 0px;
  }
  @media (max-width: 320px) {
    padding-right: 0px;
  }
`;

const TitleHolder = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 320px) {
    flex-direction: column-reverse;
  }
`;

const Special = styled.div`
  width: 119px;
  height: 22px;
  border-radius: 11px;
  background-color: coral;
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
    @media (max-width: 320px) {
      text-align: center;
    }
  }
  @media (max-width: 320px) {
    margin-right: 14px;
    height: 100%;
  }
`;

const Line = styled.span`
  background-color: #cfb995;
  height: 1px;
  display: flex;
  align-self: flex-end;
  margin-right: 19px;
  flex: 1;
  width: 100%;
  @media (max-width: 764px) {
    display: none;
  }
`;

const Number = styled.p`
  font-size: 14px;
  color: #cfb995;
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  margin-right: 45px;
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
  @media (max-width: 320px) {
    padding-right: 0px;
    padding: 10px;
  }
`;

const TopHolder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 320px) {
    /* flex-direction: column-reverse; */
  }
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

const Addons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  padding-top: 22px;
  @media (max-width: 800px) {
    width: 80%;
    padding-right: 0;
  }
  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

const NextPreviusJoke = styled.div`
  display: flex;
  @media (max-width: 320px) {
    margin-top: 10px;
  }
`;

const ArrowRight = styled.div`
  margin-left: 8px;
  width: 8.5px;
  height: 14.9px;
  z-index: 100;
  background-image: url(${arrow});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(180deg);
`;

const Next = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  justify-content: space-between;
  border: solid 1px #ecebe9;
  width: 131px;
  height: 40px;
  align-items: center;
  cursor: pointer;
  p {
    color: #cfb995;
    text-transform: uppercase;
    font-size: 14px;
  }
  &:hover ${ArrowRight} {
    transform: translateX(10px) rotate(180deg);
  }
`;

const ArrowLeft = styled.div`
  width: 8.5px;
  z-index: 100;
  height: 14.9px;
  background-image: url(${arrow});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Previus = styled.div`
  display: flex;
  padding-right: 16px;
  padding-left: 16px;
  justify-content: space-between;
  border: solid 1px #ecebe9;
  width: 131px;
  height: 40px;
  margin-right: 8px;
  align-items: center;
  cursor: pointer;
  p {
    color: #cfb995;
    text-transform: uppercase;
    font-size: 14px;
  }

  &:hover ${ArrowLeft} {
    transform: translateX(-10px) !important;
  }
`;

interface JokeCardDetailsProps {
  title?: string;
  paragraph?: string;
  color: string;
  text: string;
}
const JokeCardDetails: React.FC<JokeCardDetailsProps> = (props) => {
  return (
    <JokeCardDetailsHolder>
      <JokeCardMain>
        <TopHolder>
          <Special
            style={
              {
                // backgroundColor: `#${props.color}`,
              }
            }
          >
            <p>{props.text}</p>
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
              .map((v) => {
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

      <Addons>
        <Thumbs>
          <ThumbUp css={margin} />
          <ThumbDown />
        </Thumbs>

        <NextPreviusJoke>
          <Previus>
            <ArrowLeft />
            <p>Prev. joke</p>
          </Previus>

          <Next>
            <p>Next Joke</p>
            <ArrowRight />
          </Next>
        </NextPreviusJoke>
      </Addons>
    </JokeCardDetailsHolder>
  );
};

export default JokeCardDetails;
