import React from "react";
import { Link } from "gatsby";
import "../styles/styles.css";
import "../styles/prism.css";

const IndexPage = () => {
  return (
    <section className="section-content">
      <h1>Hi! 👋</h1>
      <p>
        I'm Nikita. I love creating digital products. I realized that I better
        understand the essence of how something works if I write a detailed
        note. Here you will find a collection of{" "}
        <Link to="/blog">such notes</Link> that I (initially) made for myself. I
        made them public because it helps my motivation to learn and make more
        notes. Hope they can help you too. Also you'll find here some of my{" "}
        <Link to="/projects">projects</Link>.
      </p>
    </section>
  );
};

export default IndexPage;
