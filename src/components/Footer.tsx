import * as React from "react";
import styled from "@emotion/styled";
// import { css } from "@emotion/core";
// import { maxwidth } from "../styles/shared";

const img = require("../assets/bottomBackground.png");

const arrow = require("../assets/arrow.svg");

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 194px;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-left: 181px;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 690px) {
    padding-left: 0px;
    align-items: center;
  }
`;
const Arrow = styled.div`
  margin-left: 8px;
  width: 21px;
  height: 14px;
  background-image: url(${arrow});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const GetJokes = styled.div`
  display: flex;
  width: 206px;
  height: 40px;
`;
const GetP = styled.p`
  font-size: 16px;
  color: white;
  text-transform: uppercase;
`;

const Submit = styled.div`
  display: flex;
  width: 150px;
  align-items: center;
  margin-top: 13px;
  cursor: pointer;
`;

const SubmitP = styled.p`
  color: #cfb995;
  font-size: 14px;
  margin-right: 8px;
  text-transform: uppercase;
`;

export interface HomepageProps {}

const Footer: React.FC<HomepageProps> = () => {
  return (
    <footer>
      <Wrapper>
        <GetJokes>
          <GetP>Got jokes? Get paid for submitting!</GetP>
        </GetJokes>
        <Submit>
          <SubmitP>Submmit joke</SubmitP>
          <Arrow />
        </Submit>
      </Wrapper>
    </footer>
  );
};

export default Footer;
