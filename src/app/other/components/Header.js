import React from "react";
import "../styles/Styles.css";
import { Link } from 'react-router-dom';

const Header = ({ title, route1, toggle }) => {
  return (
    <>
      <div className="header-container">
        <p>{title}</p>
        <span>
          <Link to={''} onClick={toggle} className="colored-page-link">{route1}</Link>
          <span> | </span>
          <Link to={''} className="colored-page-link">Other screen 2</Link>
        </span>
      </div>
    </>
  );
};

export default Header;