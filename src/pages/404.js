import * as React from "react";
import SEOHead from "../components/SEOHead";

const NotFoundPage = () => {
  return (
    <section>
      <p className="not-found">🐒‍</p>
    </section>
  );
};

export const Head = (props) => (
  <SEOHead title={404} pathname={props.location.pathname} />
);

export default NotFoundPage;
