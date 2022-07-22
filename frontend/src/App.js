import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import SidebarBig from "./components/sidebarBig";
import Home from "./pages/home";
import Video from "./pages/video";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <BrowserRouter>
      <main className="main-section">
        <Navbar handleSidebarOpen={handleSidebarOpen} />
        <div className="content">
          {!sidebarOpen && <Sidebar />}
          {sidebarOpen && <SidebarBig handleSidebarOpen={handleSidebarOpen} />}
          <div className="main-content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="video">
                <Route path=":id" element={<Video />} />
              </Route>
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
