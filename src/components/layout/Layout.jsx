import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { Toggle } from "../toggle/Toggle";

const Layout = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [logoRotation, setLogoRotation] = useState(0);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDark) {
      setDarkTheme(true);
      document.body.className = "dark";
    }
  }, []);

  // TODO: turn on the local storage
  // useEffect(() => {
  // const savedTheme = localStorage.getItem("theme");
  // if (savedTheme) {
  //   setTheme(theme);
  // document.body.className = theme;
  // }
  // }, []);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.className = darkTheme ? "light" : "dark";
    // localStorage.setItem("theme", newTheme);
  };

  const handleLogoClick = () => {
    setLogoRotation(Math.floor(Math.random() * 360));
  };

  return (
    <>
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
          <Toggle checked={darkTheme} onClick={changeTheme} />
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
