import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { UseTheme } from "../../theme-context";

const Navbar = () => {
  const { theme, toggleTheme } = UseTheme();
  console.log(theme);

  return (
    <nav className="header">
      <div className="nav-wrapper">
        <div className="mode-switch">
          <label>
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <ul className="nav-list">
          {" "}
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/experiences">Experiences</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
