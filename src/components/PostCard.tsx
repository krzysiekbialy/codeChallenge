import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import { GlobalStyles } from "../styles/shared";
import { colors } from "../styles/colors";
import { PageContext } from "../templates/post";
import AuthorCard from "../components/AuthorCard";
import cx from "classnames";
import { navigate } from "gatsby";

const letterG = require("../assets/G.png");

const Article = styled.article`
  position: relative;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
  &.author {
    margin: 0 21px 21px 0;
  }
  @media (min-width: 850px) {
    cursor: pointer;
    box-shadow: 0px 4px 20px rgba(17, 17, 18, 0.9);
    border-radius: 20px;
    &.third,
    &.first {
      margin: 0 29px 32px 0;
    }
  }
  @media (min-width: 1300px) {
    &.first {
      flex-direction: row;
      align-items: center;
      margin: 0 0 32px;
    }
  }
`;

const PostCardContent = styled.div`
  z-index: 3;
  position: relative;
  background: ${colors.greyContent};
  border-radius: 20px;
  min-height: 162px;
  max-height: 162px;
  min-width: 90.5vw;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 10%;
  box-shadow: 0px 4px 20px rgba(17, 17, 18, 0.9);
  @media (min-width: 800px) {
    min-width: 100%;
    align-items: flex-start;
    max-height: 1000px;
    width: 368px;
    height: 140px;
    border-radius: 20px 20px 0 0;
    box-shadow: none;
    &.first {
      align-items: center;
    }
    &.second {
      padding: 24px 32px;
      box-shadow: none;
      border-radius: 20px 20px 0 0;
      width: 368px;
      height: 140px;
      background-color: ${colors.blue};
    }
    &.fourth {
      padding: 5% 8%;
      box-shadow: none;
      border-radius: 20px 20px 0 0;
    }
  }
  @media (min-width: 1300px) {
    box-shadow: none;
    &.first {
      min-width: 50%;
      flex-direction: row;
      height: 332px;
      border-radius: 20px 0 0 20px;
    }
    &.third {
      padding: 24px 32px;
      border-radius: 20px 20px 0 0;
      height: 140px;
    }
  }
`;

const TagsHeader = styled.p`
  margin: 0 0 2px 0;
  font-weight: 700;
  font-size: 14px;
  color: #535559;
  text-transform: uppercase;
  @media (max-width: 850px) {
    text-align: left;
    width: 100%;
    color: #ffffff;
  }
  &.blue {
    color: #ffffff;
  }
`;

const PostCardTitle = styled.h2`
  margin-top: 0;
  text-align: left;
  font-weight: bold;
  font-size: 24px;
  color: #f0f1f5;
  &.first {
    z-index: 5;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    @media (min-width: 1300px) {
      font-size: 48px;
    }
  }
`;

const PostCardTags = styled.div`
  margin: 10px auto 0;
  min-height: 20px;
  width: 90%;
  position: relative;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #535559;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.6em;
  text-transform: uppercase;
  text-align: center;
  /* p isn't perfect in center because api(post.frontmatter.tags[0]) have white space on end */
  p {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(34, 33, 39, 1) 45%,
      rgba(34, 33, 39, 1) 55%,
      rgba(0, 0, 0, 0) 100%
    );
    margin: 0;
    padding: 0 10px;
    z-index: 2;
  }
  @media (min-width: 850px) {
    display: none;
  }
`;

const Line = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  border-top: 1px solid #535559;
`;

const NewLabel = styled.div`
  display: none;
  &.first {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 71px;
    height: 57px;
    font-weight: bold;
    font-size: 14px;
    color: #f0f1f5;
    background-color: #1617b4;
    border-radius: 0 0 20px 0;
    @media (min-width: 1300px) {
      left: 100%;
      z-index: 5;
      font-size: 18px;
    }
  }
`;

const PostCardCollapse = styled.div`
  height: 0;
  opacity: 0;
  margin: 0;
  transition: 0.7s;
  border-radius: 20px;
  padding: 0 20px;
  &.active {
    margin-top: -30px;
    min-height: 100px;
    height: 100%;
    background-color: white;
    z-index: 2;
    box-shadow: 0px 4px 20px rgba(17, 17, 18, 0.9);
    opacity: 1;
    padding: 60px 20px 15px;
  }
  @media (min-width: 850px) {
    display: block;
    min-height: 100px;
    height: 100%;
    background-color: white;
    z-index: 2;
    opacity: 1;
    padding: 24px 32px;
    width: 368px;
    height: 260px;
    border-radius: 0 0 20px 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    &.second {
      box-shadow: none;
      margin: 0;
      display: block;
      width: 368px;
      height: 260px;
    }
    &.fourth {
      padding: 24px 32px;
      margin: 0;
      display: block;
    }
  }
  @media (min-width: 1300px) {
    box-shadow: none;
    &.first {
      padding: 90px 24px 27px 56px;
      width: 50%;
      box-shadow: none;
      margin: 0;
      display: flex;
      border-radius: 0 20px 20px 0;
      height: 332px;
    }
    &.third {
      padding: 24px 32px;
      box-shadow: none;
      border-radius: 0 0 20px 20px;
      margin: 0;
      display: block;
      width: 567px;
      height: 260px;
    }
  }
`;

const Excerpt = styled.p`
  color: #1c1c1f;
  margin-top: 8px;
  font-weight: 500;
  font-size: 18px;
  @media (min-width: 850px) {
    min-height: 120px;
  }
`;

const ReadTime = styled.p`
  margin: 0;
  font-weight: 900;
  font-size: 14px;
  line-height: 20px;
  color: #222127;
  @media (min-width: 850px) {
    display: none;
  }
`;

const ReadTimeDisplay = styled.p`
  margin: 0;
  font-weight: 900;
  font-size: 14px;
  line-height: 20px;
  color: #222127;
  @media (max-width: 850px) {
    display: none;
  }
`;

const TextAlignRight = styled.p`
  margin-left: 83%;
  text-align: right;
  color: #fb826f;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 0 2px 2px;
  border-bottom: 2px solid #fb826f;
  @media (min-width: 850px) {
    display: none;
  }
  &:first-of-type {
    margin-left: 70%;
    color: #b7b7b8;
    margin-bottom: 0;
    font-size: 14px;
    border-bottom: none;
  }
`;

const SideTags = styled.p`
  position: absolute;
  top: 50%;
  left: 20px;
  width: 16px;
  z-index: 3;
  font-weight: 500;
  font-size: 16px;
  color: #f0f1f5;
  transform: translateY(-50%);
  @media (max-width: 1300px) {
    display: none;
  }
`;

const SideLetter = styled.img`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 20%;
  z-index: 3;
  transform: translateY(-55%);
  @media (max-width: 800px) {
    height: 3vh;
    left: 15%;
  }
  @media (max-width: 1300px) {
    transform: translateY(-50%);
    margin-left: 11%;
    height: 130px;
    margin-left: 23px;
  }
`;
export interface PostCardProps {
  post: PageContext;
  layer?: "first" | "second" | "third" | "fourth" | "author";
  key: any;
  marginRight?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, layer, marginRight }) => {
  const [collapseActive, setCollapseActive] = useState(false);

  if (typeof window !== `undefined`) {
    const windowGlobal = typeof window !== "undefined" && window;

    const deactivateLink = () => {
      if (windowGlobal.innerWidth <= 800) {
      } else {
        navigate(post.fields.slug);
      }
    };
  }
  return (
    <Article className={marginRight ? "marginRight" : layer}>
      <Global styles={GlobalStyles} />

      <PostCardContent
        className={layer}
        onClick={() => {
          setCollapseActive(true);
        }}
      >
        {typeof window !== `undefined` ? (
          <a onClick={deactivateLink}>
            {layer === "first" && <NewLabel className={layer}>New</NewLabel>}
            {layer !== "first" && (
              <TagsHeader className={layer === "second" ? "blue" : ""}>
                {" "}
                {post.frontmatter.tags}{" "}
              </TagsHeader>
            )}
            <PostCardTitle className={layer}>
              {post.frontmatter.title}
            </PostCardTitle>
            {layer === "first" && <SideLetter src={letterG} />}
          </a>
        ) : (
          ""
        )}
        }
      </PostCardContent>
      <PostCardCollapse
        className={cx(layer, {
          active: collapseActive,
        })}
      >
        <Link
          style={{
            textDecoration: "none",
          }}
          to={post.fields.slug}
        >
          <TextAlignRight>
            {new Date(post.frontmatter.date).toLocaleDateString()}
          </TextAlignRight>
          <ReadTime>{post.timeToRead} MIN. READ</ReadTime>
          <ReadTimeDisplay>{post.timeToRead} MINUTES READ</ReadTimeDisplay>
          <Excerpt>{post.excerpt}</Excerpt>
          <TextAlignRight>Read</TextAlignRight>
        </Link>
        <AuthorCard
          created={new Date(post.frontmatter.date).toLocaleDateString()}
          author={post.frontmatter.author}
        />
      </PostCardCollapse>
      {post.frontmatter.tags && (
        <PostCardTags>
          <Line />
          <p>{post.frontmatter.tags[0]}</p>
        </PostCardTags>
      )}
      {layer === "first" && <SideTags>* S o u r c e *</SideTags>}
    </Article>
  );
};

export default PostCard;
