import { BiMenu, BiUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar({ handleSidebarOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="navbar-icon" onClick={() => handleSidebarOpen()}>
          <BiMenu />
        </button>
        <p className="zeetube">ZeeTube</p>
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
