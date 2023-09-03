import React from "react";
import "../styles/Styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header-container">
        <p>Screen title</p>
        <span>
          <Link to={''} className="colored-page-link">Other screen 1</Link>
          <span> | </span>
          <Link to={''} className="colored-page-link">Other screen 2</Link>
        </span>
      </div>
    </>
  );
};

export default Header;