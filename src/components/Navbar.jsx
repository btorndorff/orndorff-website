// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/styles.css"

const Navbar = ({ selectedTab, setSelectedTab }) => {
  let color = "#9A1A31";
  let selectedColor = "#D9798AC9";

  return (
    <div className='background'>
      <div className="nav-container">
        <Link to="/" onClick={() => setSelectedTab("home")}> <h1 className="nav-title">ORNDORFF</h1></Link>

        <nav>
          <ul>
            <li>
              <Link to="/"
                className={selectedTab === "home" ? "selected" : ""}
                onClick={() => setSelectedTab("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/writings"
                className={selectedTab === "writings" ? "selected" : ""}
                onClick={() => setSelectedTab("writings")}
              >
                Writings
              </Link>
            </li>
            <li>
              <Link to="/photos"
                className={selectedTab === "photos" ? "selected" : ""}
                onClick={() => setSelectedTab("photos")}
              >
                Photos
              </Link>
            </li>
            <li>
              <Link to="/About"
                className={selectedTab === "about" ? "selected" : ""}
                onClick={() => setSelectedTab("about")}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  );
};

export default Navbar;
