import React from "react";
import "../styles/Styles.css";
import { Link } from 'react-router-dom';
import { BsQuestionCircle } from "react-icons/bs";

const Header = ({ title, route1, toggle }) => {
  return (
    <>
      <div className="header-container">
        <p>{title}</p>
        <span>
          <Link to={''} onClick={toggle} className="colored-page-link">{route1}</Link>
          <span> | </span>
          <Link to={''} className="colored-page-link"><BsQuestionCircle /></Link>
        </span>
      </div>
    </>
  );
};

export default Header;