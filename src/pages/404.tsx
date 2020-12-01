import { Link } from "gatsby";
import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import Wrapper from "../components/Wrapper";
import IndexLayout from "../layouts";
import { colors } from "../styles/colors";
import { maxwidth, SiteHeader } from "../styles/shared";

const ErrorTemplate = css`
  padding: 7vw 4vw;
`;

const ErrorCode = styled.h1`
  margin: 0;
  font-size: 12vw;
  line-height: 1em;
  letter-spacing: -5px;
  opacity: 0.3;
`;

const ErrorDescription = styled.p`
  margin: 0;
  color: ${colors.midgrey};
  font-size: 3rem;
  line-height: 1.3em;
  font-weight: 400;
`;

const ErrorLink = css`
  display: inline-block;
  margin-top: 5px;
`;

const NotFoundPage: React.FC = () => {
  return (
    <IndexLayout>
      <Wrapper>
        <header css={[SiteHeader, maxwidth]}>
          <div className="inner"></div>
        </header>
        <main id="site-main" css={[ErrorTemplate, maxwidth]}>
          <div>
            <section style={{ textAlign: "center" }}>
              <ErrorCode>404</ErrorCode>
              <ErrorDescription>Page not found</ErrorDescription>
              <Link css={ErrorLink} to="">
                Go to the front page →
              </Link>
            </section>
          </div>
        </main>
      </Wrapper>
    </IndexLayout>
  );
};

export default NotFoundPage;
