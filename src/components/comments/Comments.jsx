import { useEffect } from "react";

const Comments = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.async = true;
    script.src = "https://utteranc.es/client.js";
    script.id = "utterances";
    script.setAttribute("repo", "arbuznik/utterances-comments");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("crossOrigin", "anonymous");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      script.setAttribute(
        "theme",
        `${savedTheme === "dark" ? "github-dark-orange" : "github-light"}`
      );
    }

    const commentsSection = document.getElementById("comments");

    if (commentsSection) {
      commentsSection.appendChild(script);
    }
  }, []);

  return null;
};

export default Comments;
