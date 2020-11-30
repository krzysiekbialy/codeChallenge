import React, { useState } from "react";
import styled from "@emotion/styled";
import * as _ from "lodash";
import JokeType from "./JokeType";
import JokeCard from "./JokeCard";
import { jokeTypeData, jokeText } from "./SimpleData";
// import { topJokes } from "./SimpleData";
import JokeCardDetails from "./JokeCardDetails";
import GoBackButton from "./GoBackButton";
import TopTenJokes from "./TopTenJokes";
import { css } from "@emotion/core";

const arrow = require("../assets/arrow.svg");

const FeaturesWrapper = styled.section`
  background-color: white;
  padding-left: 165px;
  padding-right: 165px;
  padding-bottom: 32px;
  @media (max-width: 690px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const Arrow = styled.div`
  margin-right: 16px;
  width: 16px;
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
  display: flex;
  flex-wrap: wrap;
  padding-top: 61px;
  padding-bottom: 41px;
  margin: 0 -20px;
  justify-content: flex-start;
  @media (max-width: 1420px) {
    justify-content: center;
  }
  @media (max-width: 690px) {
    flex-direction: column;
    align-items: center;
  }
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
  cursor: pointer;
  @media (max-width: 690px) {
    margin-left: 0;
  }
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
  @media (max-width: 1439px) {
    justify-content: center;
  }
`;

const ViewMore = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: center;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  /* min-height: calc(100vh - 598px); */
  padding-top: 46px;
  padding-bottom: 73px;
`;

// let data = topJokes;

// const filter = (v: string) => {
//   const filterJokes = topJokes.filter((el) => {
//     return el.text.includes(v);
//   });
//   data = filterJokes;
// };

const JokeContent = styled.div`
  display: flex;
`;

export interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  const [currentJoke, setCurrentJoke] = useState({
    title: "",
    paragraph: "",
  });
  const [showJoke, setShowJoke] = useState(false);

  return (
    <FeaturesWrapper>
      {showJoke ? (
        <Details>
          <GoBackButton
            onClick={() => {
              setShowJoke(false);
            }}
          />
          <JokeContent>
            <JokeCardDetails
              title={currentJoke.title}
              paragraph={currentJoke.paragraph}
            />
            <TopTenJokes />
          </JokeContent>
        </Details>
      ) : (
        <>
          <Joke>
            {jokeTypeData.map((v, i) => {
              return (
                <JokeType
                  key={i}
                  color={v.color}
                  text={v.text}
                  yellow={v.yellow}
                />
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
              return (
                <JokeCard
                  key={i}
                  title={v.title}
                  paragraph={v.paragraph}
                  onShow={() => {
                    setCurrentJoke(v);
                    setShowJoke(true);
                  }}
                />
              );
            })}
          </JokeHolderDiv>
          <ViewMore>
            <AllJokes>
              <JokesTitle>VIEW MORE</JokesTitle>
              <Arrow />
            </AllJokes>
          </ViewMore>
        </>
      )}
    </FeaturesWrapper>
  );
};

export default Features;
