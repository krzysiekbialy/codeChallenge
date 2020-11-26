import { graphql } from "gatsby";
import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { Helmet } from "react-helmet";

import AuthorCard from "../components/AuthorCard";
import SiteNav from "../components/SiteNav";
import PostContent from "../components/PostContent";
import PostFullFooter from "../components/PostFullFooter";
import Wrapper from "../components/Wrapper";
import IndexLayout from "../layouts";
import Footer from "../components/Footer";
import { colors } from "../styles/colors";
import { GlobalStyles, maxwidth } from "../styles/shared";
import config from "../website-config";

const PostTemplate = css`
  @media (min-width: 800px) {
    padding: 150px 0 0 0;
  }
`;

export const PostFull = css`
  background-color: white;
  position: relative;
  z-index: 50;
`;

export const NoImage = css`
  .post-full-content {
    padding-top: 0;
  }

  .post-full-content:before,
  .post-full-content:after {
    display: none;
  }
`;

export const PostFullHeader = styled.header`
  margin: 0 auto;
  padding-bottom: 2px;
  text-align: center;
  @media (min-width: 800px) {
    margin-top: 5px;
    border-radius: 20px;
    padding-top: 1px;
    background: linear-gradient(
      rgba(40, 39, 46, 0.76) 19.55%,
      rgba(40, 39, 46, 0) 64.22%
    );
    box-shadow: 0px 4px 20px rgba(17, 17, 18, 0.9);
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const PostFullMeta = styled.div`
  position: relative;
  margin-top: 13vw;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    padding: 0 12px;
    margin: 0;
    color: #535559;
    background-color: ${colors.greyBg};
    z-index: 2;
    @media (max-width: 500px) {
      font-weight: 500;
      font-size: 12px;
      letter-spacing: 5px;
    }
  }
  @media (min-width: 800px) {
    margin-top: 10%;
    width: 100%;
    margin-bottom: 10px;
  }
`;

const Line = styled.div`
  position: absolute;
  border-top: 1px solid #535559;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
`;

export const PostFullTitle = styled.h1`
  margin: 0;
  color: white;
  @media (max-width: 500px) {
    font-size: 2.9rem;
  }
  @media (min-width: 800px) {
    margin-top: 10%;
    font-size: 24px;
  }
`;

const Content = styled.div`
  padding: 3%;
  background-color: #e5e5e5;
  @media (max-width: 800px) {
    margin: 0;
    width: 100%;
    padding: 5%;
  }
`;

const ReadTime = styled.p`
  font-weight: 900;
  font-size: 14px;
  padding-top: 20px;
  line-height: 20px;
  color: #222127;
  padding-left: 50px;
  @media (max-width: 800px) {
    padding-left: 0;
  }
`;

interface PageTemplateProps {
  pathContext: {
    slug: string;
  };
  data: {
    logo: {
      childImageSharp: {
        fixed: any;
      };
    };
    markdownRemark: {
      html: string;
      htmlAst: any;
      excerpt: string;
      timeToRead: string;
      frontmatter: {
        title: string;
        date: string;
        userDate: string;
        image: {
          childImageSharp: {
            fluid: any;
          };
        };
        tags: string[];
        author: {
          id: string;
          bio: string;
          avatar: {
            children: Array<{
              fixed: {
                src: string;
              };
            }>;
          };
        };
      };
    };
    relatedPosts: {
      totalCount: number;
      edges: Array<{
        node: {
          timeToRead: number;
          frontmatter: {
            title: string;
          };
          fields: {
            slug: string;
          };
        };
      }>;
    };
  };
  pageContext: {
    prev: PageContext;
    next: PageContext;
  };
}

export interface PageContext {
  excerpt: string;
  timeToRead: number;
  fields: {
    slug: string;
  };
  frontmatter: {
    image: {
      childImageSharp: {
        fluid: any;
      };
    };
    title: string;
    date: string;
    draft?: boolean;
    tags: string[];
    author: {
      id: string;
      bio: string;
      avatar: {
        children: Array<{
          fixed: {
            src: string;
          };
        }>;
      };
    };
  };
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data, pathContext }) => {
  const post = data.markdownRemark;
  let width = "";
  let height = "";
  if (post.frontmatter.image && post.frontmatter.image.childImageSharp) {
    width = post.frontmatter.image.childImageSharp.fluid.sizes
      .split(", ")[1]
      .split("px")[0];
    height = String(
      Number(width) / post.frontmatter.image.childImageSharp.fluid.aspectRatio
    );
  }

  return (
    <IndexLayout className="post-template">
      <Global styles={GlobalStyles} />
      <Helmet>
        <html lang={config.lang} />
        <title>{post.frontmatter.title}</title>

        <meta name="description" content={post.excerpt} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={config.siteUrl + pathContext.slug} />
        {post.frontmatter.image && post.frontmatter.image.childImageSharp && (
          <meta
            property="og:image"
            content={`${config.siteUrl}${post.frontmatter.image.childImageSharp.fluid.src}`}
          />
        )}
        <meta
          property="article:published_time"
          content={post.frontmatter.date}
        />
        {/* not sure if modified time possible */}
        {/* <meta property="article:modified_time" content="2018-08-20T15:12:00.000Z" /> */}
        {post.frontmatter.tags && (
          <meta property="article:tag" content={post.frontmatter.tags[0]} />
        )}

        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        {config.facebook && (
          <meta property="article:author" content={config.facebook} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:url" content={config.siteUrl + pathContext.slug} />
        {post.frontmatter.image && post.frontmatter.image.childImageSharp && (
          <meta
            name="twitter:image"
            content={`${config.siteUrl}${post.frontmatter.image.childImageSharp.fluid.src}`}
          />
        )}
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content={post.frontmatter.author.id} />
        <meta name="twitter:label2" content="Filed under" />
        {post.frontmatter.tags && (
          <meta name="twitter:data2" content={post.frontmatter.tags[0]} />
        )}
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split("https://twitter.com/")[1]}`}
          />
        )}
        {config.twitter && (
          <meta
            name="twitter:creator"
            content={`@${config.twitter.split("https://twitter.com/")[1]}`}
          />
        )}
        {width && <meta property="og:image:width" content={width} />}
        {height && <meta property="og:image:height" content={height} />}
      </Helmet>
      <Wrapper css={PostTemplate}>
        {/* <SiteNav /> */}
        <main>
          <article>
            <PostFullHeader css={maxwidth}>
              <PostFullTitle>{post.frontmatter.title}</PostFullTitle>
              <PostFullMeta>
                {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                  <>
                    <p>{post.frontmatter.tags[0]}</p>
                  </>
                )}
                <Line />
              </PostFullMeta>
            </PostFullHeader>
            <Content css={maxwidth}>
              <ReadTime>{post.timeToRead} MIN. READ</ReadTime>
              <PostContent article={true} htmlAst={post.htmlAst} />
              <PostFullFooter>
                <AuthorCard
                  created={post.frontmatter.date}
                  author={post.frontmatter.author}
                  isPost
                />
              </PostFullFooter>
            </Content>
          </article>
        </main>
      </Wrapper>
      <Footer homePage isPost />
    </IndexLayout>
  );
};

export default PageTemplate;

export const query = graphql`
  query($slug: String, $primaryTag: String) {
    logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      excerpt
      timeToRead
      frontmatter {
        title
        userDate: date(formatString: "D MMMM YYYY")
        date: date(formatString: "DD/MM/YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 3720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        author {
          id
          bio
          avatar {
            children {
              ... on ImageSharp {
                fixed(quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    relatedPosts: allMarkdownRemark(
      filter: {
        frontmatter: { tags: { in: [$primaryTag] }, draft: { ne: true } }
      }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
