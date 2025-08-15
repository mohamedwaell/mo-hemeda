import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./sections/Home.jsx";
import GradeDetial from "./sections/GradeDetial.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { GridBackground } from "./components/Backgrounds.jsx"; // or DotBackground

const App = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => setVisible(false), 1000);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {/* Background behind everything */}
      <div className="fixed inset-0 z-0">
        <GridBackground gridSize={30} fadeIntensity={40} />
      </div>

      {/* Loading Screen (above background) */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-white dark:bg-black transition-opacity duration-700 z-50 ${
          loading
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ${visible ? "" : "hidden"}`}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50" />
      </div>

      {/* Main App Content (above background) */}
      <div className="relative z-10 min-h-screen">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grades/:name" element={<GradeDetial />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
