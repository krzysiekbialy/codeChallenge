import * as React from "react";
import styled from "@emotion/styled";
import * as _ from "lodash";

import { maxwidth, sectionHeader } from "../styles/shared";

const arrow = require("../assets/Arrow.svg");
const IconImg = require("../assets/PricingIcon.svg");

const Holder = styled.div`
  background-color: rgba(24, 179, 255, 0.05);
  padding-top: 43px;
`;

const Arrow = styled.div`
  background-image: url(${arrow});
  transform: translateY(-23px);
  width: 418px;
  height: 430px;
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
`;

const FlexPricing = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 577px) {
    justify-content: center;
  }
`;
const PricingItem = styled.div`
  position: relative;
  background-color: white;
  width: 320px;
  margin-bottom: 50px;
  border: 2px solid#CCD9E7;
  border-radius: 16px;
  &.blue {
    border: 2px solid rgba(0, 191, 147, 0.47);
    border-radius: 16px;
  }
`;
const ItemTittle = styled.div`
  padding: 0px 20px;
  text-align: center;
  h3 {
    font-size: 16px;
  }
  &.blue {
    padding: 0px 20px;
    h3 {
      color: black;
    }
  }
`;
const ItemContent = styled.div`
  background-color: white;
  padding: 20px 40px;
  ul > li {
    margin-bottom: 18px;
    font-family: "Lato";
    color: #7a8aa3;
    font-weight: 300;
    &.deactive {
      text-decoration: line-through;
      color: #ccc;
    }
  }
`;
const PriceHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  font-weight: 800;
  font-size: 60px;
  line-height: 20px;
  font-family: "Lato";

  color: #2e476e;
  sup {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #2e476e;
    font-family: "Lato";
  }
  span {
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 2px;
    font-weight: 300;
    color: #ccd9e7;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const ItemBuy = styled.div`
  padding: 20px 20px;
`;
const BuyBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: #83ebf1;
  width: 200px;
  height: 64px;
  border-radius: 20px;
  color: #007d8e;
  font-size: 18px;
  font-weight: 600;
  &:hover {
    background: white;
    border: 2px solid #83ebf1;
    p {
      color: #007d8e;
    }
  }
`;

const BuyBtnWhite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: white;
  width: 200px;
  height: 64px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  border: 2px solid #83ebf1;
  p {
    color: #007d8e;
  }
  &:hover {
    background: #83ebf1;
    p {
      color: #007d8e;
    }
  }
`;

const TitleH2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  line-height: 20px;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #2e476e;
`;

const ButtonP = styled.p`
  text-transform: uppercase;
`;

const PricingBadge = styled.div`
  margin-top: 10px;
  z-index: 3;
  font-size: 12px;
  padding: 10px 5px;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 600;
  width: 40%;
  margin: 0 auto;
  margin-top: 10px;
`;

const PricingBadgeP = styled.p`
  font-size: 16px;
  color: #00bf93;
  font-weight: 700;
  line-height: 20px;
`;

const Icon = styled.div`
  background-image: url(${IconImg});
  height: 70px;
  width: 70px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 100;
`;

const IconSpan = styled.div`
  height: 70px;
  width: 70px;
`;

const PopularSpan = styled.div`
  height: 50px;
`;
const availablePricing = [
  {
    tittle: "e-Recepta / e-Skierowanie",
    cost: 59,
    popular: false,
    FirstParagraph: "Rozmowa audio/video",
    SecondParagraph: "Konsultacja stanu zdrowia",
    ThirdParagraph: "Określenie przyjmowanych leków",
    FourthParagraph: "Wystawienie e-Recepty / e-Skierowania",
    blue: false,
    ButtonP: "wybieram",
  },
  {
    tittle: "Terapia medyczną marihuaną",
    cost: 199,
    popular: true,
    FirstParagraph: "Medyczyny formularz kwalifikacyjny",
    SecondParagraph: "Rozmowa audio/wideo",
    ThirdParagraph: "Określenie problemów zdrowotnych",
    FourthParagraph: "Diagnoza w oparciu o wywiad medyczny",
    FifthParagraph: "Możliwośc wystawienia e-Recepty / e-Zwolnienia",
    blue: true,
    ButtonP: "wybieram",
  },
  {
    tittle: "Konsultacja lekarska",
    cost: 89,
    popular: false,
    FirstParagraph: "Rozmowa audio/video",
    SecondParagraph: "Określenie problemu i objawów",
    ThirdParagraph: "Diagnoza w oparciu o wywiad medyczny",
    FourthParagraph: "Możliwośc wystawienia e-Recepty / e-Zwolnienia",
    blue: false,
    ButtonP: "wybieram",
  },
];

export interface PricingProps {}

const Pricing: React.FC<PricingProps> = () => {
  return (
    <Holder id="Pricing" className="fadeIn">
      <Arrow />
      <section css={maxwidth}>
        <div>
          <div css={sectionHeader}>
            <TitleH2>Zakreś świadczeń</TitleH2>
            <p>Sprawdź cenę wybranej konsultacji i dokonaj transakcji online</p>
          </div>
          <FlexPricing>
            {availablePricing.map((item) => {
              return (
                <div key={item.tittle}>
                  <PricingItem className={item.blue ? "blue" : ""}>
                    {item.popular ? (
                      <PricingBadge>
                        <PricingBadgeP>Popularne</PricingBadgeP>
                      </PricingBadge>
                    ) : (
                      <PopularSpan />
                    )}

                    <ItemTittle className={item.blue ? "blue" : ""}>
                      {item.popular ? (
                        <div>
                          <h3>{item.tittle}</h3> <Icon />
                        </div>
                      ) : (
                        <div>
                          <h3>{item.tittle}</h3>
                          <IconSpan />
                        </div>
                      )}
                    </ItemTittle>
                    <ItemContent>
                      <PriceHolder>
                        <Price>
                          {item.cost}
                          <sup>zł</sup>
                        </Price>
                        <span>za wizytę</span>
                      </PriceHolder>
                      <ul>
                        <li>{item.FirstParagraph}</li>
                        <li>{item.SecondParagraph}</li>
                        <li>{item.ThirdParagraph}</li>
                        {item.FourthParagraph ? (
                          <li>{item.FourthParagraph}</li>
                        ) : (
                          <li className="deactive">Wystawenie e-Recepty</li>
                        )}
                        <li>{item.FifthParagraph}</li>
                      </ul>
                    </ItemContent>
                    <ItemBuy>
                      <a href="#">
                        {item.popular ? (
                          <BuyBtn>
                            <ButtonP>{item.ButtonP}</ButtonP>
                          </BuyBtn>
                        ) : (
                          <BuyBtnWhite>
                            <ButtonP>{item.ButtonP}</ButtonP>
                          </BuyBtnWhite>
                        )}
                      </a>
                    </ItemBuy>
                  </PricingItem>
                </div>
              );
            })}
          </FlexPricing>
        </div>
      </section>
    </Holder>
  );
};

export default Pricing;
