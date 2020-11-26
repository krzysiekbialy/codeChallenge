import React from "react";
import styled from "@emotion/styled";
import * as _ from "lodash";

const WrapperQuest = styled.li`
  padding: 5px 20px;
  margin-bottom: 15px;
  padding: 10px 20px;
  border-radius: 20px;
  &.active {
    box-shadow: 0px 0 25px rgba(0, 0, 0, 0.08);
  }
`;

const Quest = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 22px 0px;
  cursor: pointer;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-size: 18px;
    cursor: pointer;
    color: #00000095;

    &:hover {
      color: #7cc576;
    }
    &.active {
      color: #0563bb;
    }
  }
`;

const Collapse = styled.div`
  opacity: 1;
  background-color: white;
  height: 100%;
  padding: 20px 0px;
  cursor: pointer;
  color: #00000090;
`;

export interface FeaturesCollapse {
  QuestTittle: string;
  Content: any;
  functionChange: (which: number) => void;
  index: number;
  shownItem: number;
}

export const FeaturesCollapse: React.FC<FeaturesCollapse> = (props) => {
  return (
    <WrapperQuest
      onClick={() => {
        props.functionChange(props.index);
      }}
      className={props.shownItem === props.index ? "active" : ""}
    >
      <Quest>
        <div>
          <p
            style={{
              zIndex: 3,
            }}
            className={props.shownItem === props.index ? "active" : ""}
          >
            {props.QuestTittle}
          </p>
        </div>
      </Quest>
      <Collapse>
        <p>{props.Content}</p>
      </Collapse>
    </WrapperQuest>
  );
};
