import { browserRoute, Route, Router } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import SidebarBig from "./components/sidebarBig";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <main className="main-section">
      <Navbar handleSidebarOpen={handleSidebarOpen} />
      <div className="content">
        {!sidebarOpen && <Sidebar />}
        {sidebarOpen && <SidebarBig />}
        <div className="main-content"></div>
      </div>
    </main>
  );
}

export default App;
