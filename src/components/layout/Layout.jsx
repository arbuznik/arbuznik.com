import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { Toggle } from "../toggle/Toggle";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [logoRotation, setLogoRotation] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefferedTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    setTheme(savedTheme || prefferedTheme);
    document.body.className = savedTheme || prefferedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  const handleLogoClick = () => {
    setLogoRotation(Math.floor(Math.random() * 360));
  };

  return (
    <div className="layout">
      <header className="header">
        <Link
          className="site-link"
          style={{ transform: `rotate(${logoRotation}deg)` }}
          onClick={handleLogoClick}
          to="/"
        >
          <span>🍉</span>
        </Link>
        <div className="header-controls">
          <ul className="nav-links">
            <li className="nav-link-icon">
              <Link
                style={{
                  display: "block",
                  transform: `rotate(${logoRotation}deg)`,
                }}
                onClick={handleLogoClick}
                to="/"
              >
                <span>🍉</span>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link nav-link_projects"
                activeClassName="active"
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="nav-link nav-link_blog"
                activeClassName="active"
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/404">
                404
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/4dsolf04">
                404 dev
              </Link>
            </li>
          </ul>
          {theme && <Toggle checked={theme === "dark"} onClick={toggleTheme} />}
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p>
          2022&nbsp;&mdash;&nbsp;{new Date().getFullYear()} Made by Arbuznik
          with Gatsby
        </p>
      </footer>
    </div>
  );
};

export default Layout;
