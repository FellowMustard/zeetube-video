import { AiFillHome, AiOutlineCompass } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import { VscColorMode } from "react-icons/vsc";
import { MdOndemandVideo, MdVideoLibrary } from "react-icons/md";
function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-list">
          <AiFillHome className="sidebar-logo" />
          <span>Home</span>
        </li>
        <li className="sidebar-list">
          <AiOutlineCompass className="sidebar-logo" />
          <span>Explore</span>
        </li>
        <li className="sidebar-list">
          <BiPlayCircle className="sidebar-logo" />
          <span>Shorts</span>
        </li>
        <li className="sidebar-list">
          <MdOndemandVideo className="sidebar-logo" />
          <span>Subscriptions</span>
        </li>
        <li className="sidebar-list">
          <MdVideoLibrary className="sidebar-logo" />
          <span>Library</span>
        </li>
        <li className="sidebar-list">
          <VscColorMode className="sidebar-logo" />
          <span>Dark Mode</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
