import * as React from "react";
import SEO from "../components/seo/SEO";

const NotFoundPage = () => {
  return (
    <section>
      <p className="not-found">🐒‍</p>
    </section>
  );
};

export const Head = (props) => (
  <SEO title={404} pathname={props.location.pathname} />
);

export default NotFoundPage;
