import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import * as _ from "lodash";

import { AuthorProfileImage } from "../styles/shared";

const AuthorCardSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  color: #b7b7b8;
  p {
    padding: 0;
    margin: 0;
  }
  @media (max-width: 800px) {
    padding: 0;
    display: none;
  }
  &.isPost {
    @media (max-width: 800px) {
      display: flex;
    }
  }
`;
const AuthorCardSide = styled.div`
  display: flex;
  color: #b7b7b8;
  align-items: center;
  color: #b7b7b8;
`;

export interface AuthorCardProps {
  author: any;
  created: any;
  isPost?: boolean;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author, created, isPost }) => {
  return (
    <>
      <AuthorCardSection className={isPost ? "isPost" : ""}>
        <p>{created}</p>
        <Link to={`/author/${_.kebabCase(author.id)}/`}>
          <AuthorCardSide>
            By {author.id}
            <img
              css={AuthorProfileImage}
              src={author.avatar.children[0].fixed.src}
              alt={author.id}
            />
          </AuthorCardSide>
        </Link>
      </AuthorCardSection>
    </>
  );
};

export default AuthorCard;
