import * as React from "react";
import styled from "@emotion/styled";
import * as _ from "lodash";

import { css } from "@emotion/core";

import { maxwidth, wrapper } from "../styles/shared";

const dialog = require("../assets/DialogMSG.svg");

const desktop = require("../assets/DesktopMSG.svg");

const phone = require("../assets/PhoneMSG.svg");

const background = require("../assets/BackgroundBoxes.svg");

const ArrowLeft = require("../assets/ArrowVector.svg");

const WrapperDiseases = styled.div`
  height: 440px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: content-box;

  @media (max-width: 1000px) {
    height: 100%;
    padding-bottom: 0px !important;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
  color: #2e476e;
`;

const BoxHolder = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 0px;
  }
`;
const Box = styled.div`
  padding: 25px 12px 38px;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #18b3ff;
  box-shadow: 1px 1px 4px #8edaff;
  border-radius: 20px;
  width: 207px;
  height: max-content;
  h4 {
    margin-bottom: 10px;
    font-weight: 800;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    color: #2e476e;
  }

  @media (max-width: 1000px) {
    margin-bottom: 50px;
    margin-top: 50px;
    :first-child {
      margin-top: 0px;
    }
    :last-child {
      margin-bottom: 100px;
    }
  }
`;

const BoxP = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #7a8aa3;
  text-align: center;
`;

const Icon = styled.div`
  position: absolute;
  height: 90px;
  width: 90px;
  margin: 0 auto;
  padding-top: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 100;
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.25));
  :nth-child(2) {
    transform: translate(-30%, 150%);
  }
`;

const NumberDiv = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: white;
  position: absolute;
  transform: translate(0%, -105%);
`;
const PNumber = styled.p`
  padding-top: 12px;
  font-weight: 800;
  font-size: 31px;
  line-height: 20px;
  text-align: center;
  color: #334669;
`;

const ArrowVector = styled.div`
  background-image: url(${ArrowLeft});
  display: flex;
  align-self: center;
  width: 60px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1000px) {
    transform: rotate(90deg);
  }
`;

const rotate = css`
  @media (max-width: 1000px) {
    transform: translate(-30%, 150%) !important;
  }
`;

const boxData = [
  {
    number: "1",
    textH4: "Pobierz aplikację i załóz konto",
    textP: "Zarejestruj się do przychodni Lekmed24 i korzystaj z naszych usług medycznych bez wychodzenia z domu.",
    icon: phone,
    transform: "translate(140%, -100%)",
    arrow: true,
  },
  {
    number: "2",
    textH4: "Wybierz termin konsultacji",
    textP: "Nie trać czasu, określ termin i umów się na rozmowę wideo z lekarzem",
    css: rotate,
    icon: dialog,
    transform: "translate(125%, 150%)",
    arrow: true,
  },
  {
    number: "3",
    textH4: "Porozmawiaj z lekarzem",
    textP: "Porozmawiaj z lekarzem w dogodnym, wybranym przez Ciebie terminie.",
    icon: desktop,
    transform: "translate(140%, -100%)",
    arrow: false,
  },
];

export interface ContactProps {
  headerProps?: boolean;
}

const Diseases: React.FC<ContactProps> = () => {
  return (
    <WrapperDiseases className="fadeIn" css={wrapper}>
      <div css={maxwidth}>
        <Title>Jak to działa?</Title>
        <BoxHolder>
          {boxData.map((v, i) => {
            return(
              <>
              <Box>
                <Icon
                  css={v.css}
                  style={{
                    backgroundImage: `url(${v.icon})`,
                    transform: `${v.transform}`,
                  }}
                />
                <NumberDiv>
                  <PNumber>{i+1}</PNumber>
                </NumberDiv>
                <h4>{v.textH4}</h4>
                <BoxP>{v.textP}</BoxP>
              </Box>
              {v.arrow ? <ArrowVector /> : ""}
            </>
            )
          })}
        </BoxHolder>
      </div>
    </WrapperDiseases>
  );
};

export default Diseases;
