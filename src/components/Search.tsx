import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { jokeText } from "./SimpleData";

const search = require("../assets/search.svg");
const bolt = require("../assets/bolt.svg");

const Holder = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchInput = styled.input`
  margin-top: 45px;
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

interface SearchProps {
  onClickTile: (title: string) => void;
}

const Search: React.FC<SearchProps> = ({ onClickTile }) => {
  const [foundJokes, setFoundJokes] = useState<typeof jokeText>([]);
  const [inputString, setInputString] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!inputString || inputString.length === 0) {
      setFoundJokes([]);
      setIsOpen(false);
      return;
    }
    setFoundJokes(
      jokeText.filter((el) => {
        return el.title.toLowerCase().includes(inputString.toLowerCase());
      })
    );
    setIsOpen(true);
  }, [inputString]);

  return (
    <Holder>
      <SearchInput
        type="text"
        value={inputString}
        placeholder={"How can we make you laugh today?"}
        onChange={(e) => {
          setInputString(e.target.value);
        }}
      ></SearchInput>
      <Icon onClick={() => setIsOpen(true)} />

      {isOpen && (
        <SearchAnswer>
          {foundJokes.map((v, i) => {
            return (
              <React.Fragment key={v.title}>
                <AnswerContent
                  onClick={() => {
                    onClickTile(v.title);
                    setIsOpen(false);
                  }}
                >
                  <Bolt />
                  <p key={i}>{v.title}</p>
                </AnswerContent>
                {i !== foundJokes.length - 1 && <Span />}
              </React.Fragment>
            );
          })}
        </SearchAnswer>
      )}
    </Holder>
  );
};

export default Search;
