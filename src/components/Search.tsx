import * as React from "react";
import usePortal from "react-useportal";
import styled from "@emotion/styled";
import { topJokes } from "./SimpleData";
import { Link } from "gatsby";

const search = require("../assets/search.svg");
const bolt = require("../assets/bolt.svg");

const Holder = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchInput = styled.input`
  margin-top: 45px;
  type: text;
  height: 48px;
  width: 458px;
  border-radius: 4px;
  border: 2px solid white;
  background-color: transparent;
  padding-left: 10px;
  font-size: 16px;
  color: #b2b2b2;
`;

const SearchAnswer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  margin-top: 115px;
  display: flex;
  align-items: left;
  height: max-content;
  padding-right: 16px;
  padding-left: 16px;
  width: 458px;
  border-radius: 4px;
  border: 2px solid white;
  background-color: white;
`;
const Icon = styled.div`
  position: absolute;
  background-image: url(${search});
  background-size: contain;
  background-repeat: no-repeat;
  height: 24px;
  width: 22px;
  padding-left: 16px;
  transform: translateX(420px) translateY(55px);
  cursor: pointer;
`;

const AnswerContent = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 100;
  p {
    cursor: pointer;
    &:hover {
      color: #cfb995;
    }
  }
`;

const Bolt = styled.div`
  margin-right: 8px;
  width: 8px;
  height: 14px;
  background-image: url(${bolt});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Span = styled.span`
  background: #d1d1d1;
  height: 1px;
`;

interface SearchProps {}

let data = topJokes;

const filter = (v: string) => {
  const filterJokes = topJokes.filter((el) => {
    return el.text.includes(v);
  });
  data = filterJokes;
};

const Search: React.FC<SearchProps> = (props) => {
  const [openPortal, closePortal, isOpen, Portal] = usePortal();

  return (
    <Holder>
      <SearchInput
        placeholder={"How can we make you laugh today?"}
        onChange={(e) => {
          filter(e.target.value);
        }}
      ></SearchInput>
      <Icon onClick={openPortal} />

      {isOpen && (
        <SearchAnswer>
          {data.map((v, i) => {
            return (
              <>
                <AnswerContent>
                  <Bolt />
                  <p key={i}>{v.text}</p>
                </AnswerContent>
                {i !== topJokes.length - 1 && <Span />}
              </>
            );
          })}
        </SearchAnswer>
      )}
    </Holder>
  );
};

export default Search;
