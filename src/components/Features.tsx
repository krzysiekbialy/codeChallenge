import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import * as _ from "lodash";
import JokeType from "./JokeType";
import JokeCard from "./JokeCard";

const FeaturesWrapper = styled.section`
  height: 1586px;
  background-color: white;
  padding-left: 165px;
  padding-right: 165px;
`;

const Joke = styled.div`
  background-color: white;
  height: 214px;
  border-bottom: 2px solid #ecebe9;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const AllJokes = styled.div`
  width: 206px;
  height: 48px;
  margin-left: 20px;
  padding: 14px 0;
  border-radius: 2px;
  border: 2px solid #d1bb91;
  p {
    color: #d1bb91;
    text-align: center;
    text-transform: uppercase;
  }
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

const JokeHolder = styled.div`
margin-top: 16px;
display: flex;
flex-wrap: wrap;

`

const jokeTypeData = [
  {
    text: "Adult Jokes",
    color: "#ff5b5b",
  },
  {
    text: "Dad Jokes",
    color: "#ff915b",
  },
  {
    text: "Christmas Jokes",
    color: "#ffbe5b",
  },
  {
    text: "Job Jokes",
    color: "#ffdf5b",
  },
  {
    text: "Birthday Jokes",
    color: "#8fe360",
  },
  {
    text: "Special Jokes",
    color: "#57e690",
  },
  {
    text: "Puns",
    color: "#57dbe6",
  },
];

const jokeText = [
  {
    title: "Lawyer Joke",
    paragraph: `A lawyer dies and goes to Heaven. "There must be some mistake," the lawyer argues. "I'm too young to die. I'm only 55." "Fifty-five?" says Saint Peter. "No, according to out calculations, you're 82." "How'd you get that?" the lawyer asks. Answers St. Peter, "We added up your time sheets."`,
  },
  {
    title: "Doctor Joke",
    paragraph: `I’d never had surgery, and I was nervous. “This is a very simple, noninvasive procedure,” the anesthesiologist reassured me. I felt better, until … “Heck,” he continued, “you have 
    a better chance of dying from the 
    anesthesia than the surgery itself.”`,
  },
  {
    title: "Business Joke",
    paragraph: `I went to my boss at work and said, "I need a raise. Three other companies are after me."
    He said, "Really? Which other companies are after you?"
    I said, "The electric company, the gas company and the phone company.`,
  },
  {
    title: "Police Jokes",
    paragraph: `An officer conducting speed enforcement stops a young man for traveling in excess of 40 mph over the speed limit. The officer approaches the driver and says, "Well, 40 over...I been waiting for you to come along all day."
    Without pause, the young man replies, "I got here as fast as I could!"`,
  },
  {
    title: "Doctor joke",
    paragraph: `An officer observes a woman standing in the middle of the street. He approaches her and asks, "Are you okay?"
    The woman replies, "Yes, but how do I get to the hospital?"
    The officer replies, "Just keep standing there."`,
  },
  {
    title: "Boss Joke",
    paragraph: `My boss asked me to put a joke on the first slide of the presentation…apparently a picture of my pay slip wasn’t what he was looking for.`,
  },
];

export interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  return (
    <FeaturesWrapper>
      <Joke>
        {jokeTypeData.map((v, i) => {
          return <JokeType key={i} color={v.color} text={v.text} />;
        })}

        <AllJokes>
          <p>VIEW ALL</p>
        </AllJokes>
      </Joke>
      <Special>
        <p>special jokes</p>
      </Special>
      <JokeHolder>
      {jokeText.map((v, i) => {
        return <JokeCard key={i} title={v.title} paragraph={v.paragraph} />;
      })}

      </JokeHolder>


    </FeaturesWrapper>
  );
};

export default Features;
