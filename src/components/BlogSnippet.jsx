import React from "react";
import { Link } from "gatsby";

const BlogSnippet = ({ post }) => {
  return (
    <div className="blog-entry" key={post.id}>
      <p className="blog-entry-date">{post.frontmatter.cdate}</p>
      <Link to={`/blog/${post.frontmatter.slug}`}>
        {post.frontmatter.title}
      </Link>
    </div>
  );
};

export default BlogSnippet;
