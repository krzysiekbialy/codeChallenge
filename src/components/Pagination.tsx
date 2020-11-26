import { Link } from "gatsby";
import * as React from "react";
import { Global, css } from "@emotion/core";
const ArrowImg = require("../assets/arrowNext.png");

import { GlobalStyles } from "../styles/shared";

export interface PaginationProps {
  currentPage: number;
  numPages: number;
}

const navCss = css`
  text-align: center;
  div {
    display: inline-block;
  }

  a {
    opacity: 0.9;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell;
    background-color: #26252d;
    color: #383740;
    float: left;
    text-decoration: none;
    margin: 0 4px;
    margin-bottom: 5px;
    width: 50px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      color: #fefefe;
    }

    &:hover:not(.active) {
      opacity: 1;
    }

    &:hover {
      text-decoration: none;
    }
  }
`;

const Arrow = css`
  border: 0;
  background: #28272e;
  box-shadow: 0px 0px 20px rgba(17, 17, 18, 0.9);
  color: white;
  padding: 12px;
  img {
    height: 12px;
    width: 12px;
  }
  &.reverse {
    img {
      transform: rotate(180deg);
    }
  }
`;

const Pagination: React.FunctionComponent<PaginationProps> = ({
  currentPage,
  numPages,
}) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  const CorrectPrevLink = "blog/" + prevPage;
  const CorrectNextLink = "blog/" + nextPage;
  return (
    <nav css={navCss}>
      <Global styles={GlobalStyles} />
      <div>
        {!isFirst && (
          <Link className="reverse" css={Arrow} to={CorrectPrevLink} rel="prev">
            <img src={ArrowImg} alt="arrow" />
          </Link>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            className={i + 1 === currentPage ? "active" : ""}
            to={`blog/${i === 0 ? "" : i + 1}`}
          >
            {i + 1}
          </Link>
        ))}

        {!isLast && (
          <Link css={Arrow} to={CorrectNextLink} rel="next">
            <img src={ArrowImg} alt="arrow" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Pagination;
