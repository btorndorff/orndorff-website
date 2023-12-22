// App.jsx
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx"
import Home from "./screens/Home.jsx"

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
            <Route path="/addi-website" element={<DesktopMessage />} />
            <Route path="" element={<DesktopMessage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/orndorff-website" element={<Home />} />
            <Route path="" element={<Home />} />
          </>
        )}
        {/* <Route path="/photo-video" element={<PhotoVideo />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/pastry" element={<Pastry />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
