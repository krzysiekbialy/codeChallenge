import * as React from "react";
import { Helmet } from "react-helmet";
import config from "../website-config";

// @ts-ignore

interface IndexProps {
  className?: string;
}

const IndexLayout: React.FC<IndexProps> = (props) => {
  return (
    <div className={props.className}>
      <Helmet>
        <html lang={config.lang} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl} />
        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        {config.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={config.googleSiteVerification}
          />
        )}
        <meta
          property="og:image"
          content={`${config.siteUrl}${config.defaultOpenTag}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.siteUrl} />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split("https://twitter.com/")[1]}`}
          />
        )}
      </Helmet>
      {props.children}
    </div>
  );
};

export default IndexLayout;
