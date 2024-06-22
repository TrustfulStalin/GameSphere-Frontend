import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Header() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",  // Center the navigation horizontally
  };

  const divStyle = {
    borderBottom: "1px solid black", // Border between divs
    padding: "4px 8px",
  };

  return (
    <header>
      <h1 style={{ textAlign: "center" }}>Game Sphere</h1>
      <nav className="navStyle" style={navStyle}>
       <Link to= "/action"> <div style={divStyle}>Action Games</div></Link>
        <Link to= "/Shooting"><div style={divStyle}>Shooting Games</div></Link>
        <Link to= "/Fighting"><div style={divStyle}>Fighting Games</div></Link>
        <Link to= "/Sport"><div style={divStyle}>Sport Games</div></Link>
        <div style={divStyle}>
          <Link to="/home">Home page</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;