import * as React from "react";
import styled from "@emotion/styled";
import { maxwidth } from "../styles/shared";

const Holder = styled.div`
  background-color: #2e476e;
  height: 393px;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const LinkHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 30%;
  margin-right: 30%;
  @media (max-width: 1000px) {
    margin-left: 0%;
    margin-right: 0%;
  }
`;
const Linklist = styled.ul`
  display: flex;
  flex-direction: column;
  width: max-content;
  p {
    color: #b8eefa;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 30px;
    text-transform: uppercase;
    text-align: center;
  }
  li {
    color: #535559;
    padding-bottom: 20px;
    a {
      color: #ccd9e7;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

const CopyrightCotent = styled.div`
  margin: 0 auto;
  p {
    margin-top: 50px;
    font-size: 12px;
    line-height: 14px;
    color: #7a8aa3;
    text-align: center;
  }
`;

const linkData = [
  {
    title: "Title 1",
    option1: "Option 1",
    option2: "Option 2",
    option3: "Option 3",
  },
  {
    title: "Title 2",
    href: "/blog",
    rel: "noopener noreferrer",
    option1: "Option 1",
    option2: "Option 2",
    option3: "Option 3",
  },
  {
    title: "Title 3",
    href: "/blog",
    rel: "noopener noreferrer",
    option1: "Option 1",
    option2: "Option 2",
    option3: "Option 3",
  },
];

export interface HomepageProps {}

const LekmedFooter: React.FC<HomepageProps> = () => {
  return (
    <Holder>
      <Wrapper css={maxwidth}>
        <LinkHolder>
          {linkData.map((v, i) => (
            <Linklist key={i}>
              <p>{v.title}</p>
              <li>
                <a href={v.href} rel={v.rel}>
                  {v.option1}
                </a>
              </li>
              <li>
                <a>{v.option2}</a>
              </li>
              <li>
                <a>{v.option3}</a>
              </li>
            </Linklist>
          ))}
        </LinkHolder>
        <CopyrightCotent>
          <p>(c) Copyright 2020</p>
        </CopyrightCotent>
      </Wrapper>
    </Holder>
  );
};

export default LekmedFooter;
