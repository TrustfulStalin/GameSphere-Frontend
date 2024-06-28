import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const footerStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderTop: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto", // Center the footer horizontally
    backgroundColor: "white", // Set background color to white
    marginTop: "20px", // Add some space between content and footer
  };

  const linkStyle = {
    padding: "4px 8px",
    borderBottom: "1px solid black", // Border between links
  };

  return (
    <footer>
      <nav className="footer-nav" style={footerStyle}>
        <Link to="/Action/Create" style={linkStyle}>
          Add an action game
        </Link>
        <Link to="/Shooting/Create" style={linkStyle}>
          Add a Shooting game
        </Link>
        <Link to="/Fighting/Create" style={linkStyle}>
          Add a Fighting game
        </Link>
        <Link to="/Sport/Create" style={linkStyle}>
          Add a Sports game
        </Link>
      </nav>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        &copy; {new Date().getFullYear()} Game Sphere. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;