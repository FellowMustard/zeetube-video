function SidebarBig({ handleSidebarOpen }) {
  return (
    <div className="sidebar-big-container">
      <div className="sidebar-big"></div>
      <div className="sidebar-close" onClick={() => handleSidebarOpen()}></div>
    </div>
  );
}

export default SidebarBig;
