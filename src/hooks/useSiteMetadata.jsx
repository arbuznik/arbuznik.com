import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          siteLogo
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
