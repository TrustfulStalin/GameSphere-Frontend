import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; 

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link to="/Action/Create" className="footer-link">
          Add A Action Game
        </Link>
        <Link to="/Shooting/Create" className="footer-link">
          Add A Shooting Game
        </Link>
        <Link to="/Fighting/Create" className="footer-link">
          Add A Fighting Game
        </Link>
        <Link to="/Sport/Create" className="footer-link">
          Add A Sports Game
        </Link>
      </nav>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} 
      </p>
    </footer>
  );
}

export default Footer;