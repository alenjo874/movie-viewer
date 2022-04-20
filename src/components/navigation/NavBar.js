import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <div>Logo</div>
      <ul className="nav-elements">
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/tv_series">TV Series</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
