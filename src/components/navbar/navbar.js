import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <li>
        <Link to="/">Homepage</Link>
      </li>
      <li>
        <Link to="/experiences">Experiences</Link>
      </li>
    </div>
  );
};
export default Navbar;
