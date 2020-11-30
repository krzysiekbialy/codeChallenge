import React from "react";
import styled from "@emotion/styled";
import * as _ from "lodash";
import JokeType from "./JokeType";
import JokeCard from "./JokeCard";
import { jokeTypeData, jokeText } from "./SimpleData";

const arrow = require("../assets/arrow.svg");

const FeaturesWrapper = styled.section`
  /* height: 1012px; */
  background-color: white;
  padding-left: 165px;
  padding-right: 165px;
  padding-bottom: 32px;
`;

const Arrow = styled.div`
  margin-right: 16px;
  width: 16px;
  height: 11px;
  background-image: url(${arrow});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(90deg);
`;

const Joke = styled.div`
  background-color: white;
  margin-left: -10px;
  margin-right: -10px;
  height: 214px;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  padding-top: 61px;
  padding-bottom: 41px;
  margin: 0 -20px;
  justify-content: flex-start;
`;

const Span = styled.span`
  display: flex;
  height: 2px;
  width: 100%;
  margin-top: 10px;
  background-color: #ecebe9;
`;

const AllJokes = styled.div`
  display: flex;
  width: 206px;
  height: 48px;
  margin-left: 20px;
  padding: 14px 0;
  border-radius: 2px;
  border: 2px solid #d1bb91;
`;

const JokesTitle = styled.p`
  flex: 1;
  text-align: center;
  color: #d1bb91;
  text-transform: uppercase;
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

const JokeHolderDiv = styled.div`
  justify-content: flex-start;
  margin: 0px -10px 0px -5px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 16px;
`;

const ViewMore = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: center;
`;

export interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  return (
    <FeaturesWrapper>
      <Joke>
        {jokeTypeData.map((v, i) => {
          return (
            <JokeType key={i} color={v.color} text={v.text} yellow={v.yellow} />
          );
        })}
        <AllJokes>
          <JokesTitle>VIEW ALL</JokesTitle>
          <Arrow />
        </AllJokes>
      </Joke>
      <Span />
      <Special>
        <p>special jokes</p>
      </Special>
      <JokeHolderDiv>
        {jokeText.map((v, i) => {
          return <JokeCard key={i} title={v.title} paragraph={v.paragraph} />;
        })}
      </JokeHolderDiv>
      <ViewMore>
        <AllJokes>
          <JokesTitle>VIEW MORE</JokesTitle>
          <Arrow />
        </AllJokes>
      </ViewMore>
    </FeaturesWrapper>
  );
};

export default Features;
