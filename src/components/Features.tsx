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
import Header from "./Header";
import { css } from "@emotion/core";

export type Joke = {
  type: string;
  title: string;
  paragraph: string;
};
const arrow = require("../assets/arrow.svg");

const FeaturesWrapper = styled.section`
  background-color: white;
  padding-left: 165px;
  padding-right: 165px;
  padding-bottom: 32px;
  @media (max-width: 720px) {
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
    margin: 0;
  }
  /* @media (max-width: 600px) {
    margin: 0;
  } */
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
  margin-right: 30px;
  text-align: right;
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
  @media (max-width: 600px) {
    width: 80%;
    margin: 0 auto;
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

const JokeContent = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1170px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TopTen = css`
  @media (max-width: 1170px) {
    margin-top: 30px;
  }
`;

const Back = css`
  margin-left: 165px;
  @media (max-width: 1170px) {
    margin-left: 30px;
  }
`;

export interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  const [currentJokeTitle, setCurrentJokeTitle] = useState<string>();
  const [currentFilter, setCurrentFilter] = useState<string>();
  const currentJoke = jokeText.find((j) => j.title === currentJokeTitle);
  const [showAll, setShowAll] = useState(false);

  const [showJokeBoxes, showShowJokeBoxes] = useState(false);

  let allJokes = [...jokeText];
  if (currentFilter) {
    allJokes = allJokes.filter((j) => j.type === currentFilter);
  }

  const bkColor =
    jokeTypeData.find((obj) => obj.text === currentFilter)?.color || "colar";

  const viewList = showAll ? jokeTypeData : jokeTypeData.slice(0, 7);

  const viewJokeBoxes = showJokeBoxes ? allJokes : allJokes.slice(0, 5);

  const topTenJokes = allJokes.slice(0, 10) as Joke[];

  console.log(topTenJokes);
  return (
    <>
      <Header onClickTitle={(title) => setCurrentJokeTitle(title)} />
      {currentJoke ? (
        <Details>
          <GoBackButton
            css={Back}
            onClick={() => {
              setCurrentJokeTitle(undefined);
            }}
          />
          <JokeContent>
            <JokeCardDetails
              title={currentJoke.title}
              paragraph={currentJoke.paragraph}
              color={bkColor}
            />
            <TopTenJokes content={topTenJokes} css={TopTen} />
          </JokeContent>
        </Details>
      ) : (
        <FeaturesWrapper>
          <Joke>
            {viewList.map((v, i) => {
              return (
                <JokeType
                  key={i}
                  color={v.color}
                  text={v.text}
                  yellow={v.yellow}
                  onClick={() => setCurrentFilter(v.text)}
                />
              );
            })}
            <AllJokes onClick={() => setCurrentFilter(undefined)}>
              <JokesTitle
                onClick={() => {
                  setShowAll(!showAll);
                }}
              >
                VIEW ALL
              </JokesTitle>
              <Arrow />
            </AllJokes>
          </Joke>
          <Span />
          <Special
            style={{
              background: `${bkColor}`,
            }}
          >
            <p>{currentFilter || "jokes"}</p>
          </Special>
          <JokeHolderDiv>
            {viewJokeBoxes.map((v, i) => {
              return (
                <JokeCard
                  key={i}
                  title={v.title}
                  paragraph={v.paragraph}
                  onShow={() => {
                    setCurrentJokeTitle(v.title);
                  }}
                />
              );
            })}
          </JokeHolderDiv>
          <ViewMore>
            <AllJokes>
              <JokesTitle
                onClick={() => {
                  showShowJokeBoxes(!showJokeBoxes);
                }}
              >
                VIEW MORE
              </JokesTitle>
              <Arrow />
            </AllJokes>
          </ViewMore>
        </FeaturesWrapper>
      )}
    </>
  );
};

export default Features;
