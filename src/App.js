// App.jsx
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx"
import Home from "./screens/Home.jsx"
import Writings from "./screens/Writings.jsx"
import Photos from "./screens/Photos.jsx"
import About from "./screens/About.jsx"

function DesktopMessage() {
  return <p>Please use this site on desktop!</p>;
}

function App() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const { pathname } = useLocation();
  let initialTab = "home";
  if (pathname !== "/" && pathname !== "/orndorff-website" && pathname !== "") {
    initialTab = pathname.replace("/", "");
  }

  const [selectedTab, setSelectedTab] = useState(initialTab);

  const changeSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isMobileView && (
        <div className="App">
          <Navbar
            selectedTab={selectedTab}
            setSelectedTab={changeSelectedTab}
          />
        </div>
      )}

      <Routes>
        {isMobileView ? (
          <>
            <Route path="/" element={<DesktopMessage />} />
            <Route path="/orndorff-website" element={<DesktopMessage />} />
            <Route path="" element={<DesktopMessage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home setSelectedTab={changeSelectedTab} />} />
            <Route path="/orndorff-website" element={<Home setSelectedTab={changeSelectedTab} />} />
            <Route path="" element={<Home setSelectedTab={changeSelectedTab} />} />
          </>
        )}
        <Route path="/writings" element={<Writings />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
