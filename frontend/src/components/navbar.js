import { BiMenu, BiUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar({ handleSidebarOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="navbar-icon" onClick={() => handleSidebarOpen()}>
          <BiMenu />
        </button>
        <Link className="zeetube" to="/" style={{ textDecoration: "none" }}>
          ZeeTube
        </Link>
      </div>

      <div className="navbar-center search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">
          <AiOutlineSearch />
        </button>
      </div>

      <div className="navbar-right">
        <button className="signin-button">
          <BiUserCircle className="signin-logo" />
          <span>SIGN IN</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
