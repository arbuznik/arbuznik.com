import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const SEOHead = ({
  title,
  description,
  image,
  pathname,
  postType,
  dateModified,
  datePublished,
}) => {
  const {
    title: defaultTitle,
    author,
    description: defaultDescription,
    siteUrl,
    siteLogo,
  } = useSiteMetadata();

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : `${siteUrl}${siteLogo}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  const getJSONLD = () => {
    let JSONLD = [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: siteUrl,
        name: defaultTitle,
        alternateName: defaultTitle,
      },
    ];

    if (postType) {
      JSONLD.push(
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: postType,
              item: `${siteUrl}/${postType}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: title,
              item: `${siteUrl}${pathname}`,
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title || defaultTitle,
          name: title || defaultTitle,
          image: [seo.image],
          url: `${siteUrl}${pathname}`,
          datePublished,
          dateModified,
          description: seo.description,
          author: [
            {
              "@type": "Person",
              name: author,
              jobTitle: "Software engineer",
              url: "https://github.com/arbuznik",
            },
          ],
        }
      );
    }

    return JSONLD;
  };

  return (
    <>
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <script type="application/ld+json">{JSON.stringify(getJSONLD())}</script>
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:description" content={seo.description} />
      {postType && (
        <>
          <meta property="og:type" content="article" />
          <meta property="article:published_time" content={datePublished} />
          <meta property="article:modified_time" content={dateModified} />
          <meta
            property="article:author"
            content="https://github.com/arbuznik"
          />
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:creator" content={author} />
    </>
  );
};

export default SEOHead;
