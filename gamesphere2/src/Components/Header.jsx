import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",  // Center the navigation horizontally
    backgroundColor: "white", // Set background color to white
  };

  const divStyle = {
    padding: "4px 8px",
    borderBottom: "1px solid black", // Border between divs
    borderRight: "1px solid black", // Border between links
  };

  return (
    <header>
      <h1 style={{ textAlign: "center" }}>Game Sphere</h1>
      <nav className="navStyle" style={navStyle}>
        <Link to="/action" style={divStyle}>
          Action Games
        </Link>
        <Link to="/Shooting" style={divStyle}>
          Shooting Games
        </Link>
        <Link to="/Fighting" style={divStyle}>
          Fighting Games
        </Link>
        <Link to="/Sport" style={divStyle}>
          Sport Games
        </Link>
        <div style={{ ...divStyle, borderRight: "none" }}>
          <Link to="/home">Home page</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;