import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

// Lazy load your pages
const Home = lazy(() => import("./sections/Home.jsx"));
const GradeDetail = lazy(() => import("./sections/GradeDetial.jsx"));
const NotFound = lazy(() => import("./sections/NotFound.jsx"));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      {/* Suspense handles fallback loader */}
      <Suspense
        fallback={
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white dark:bg-black z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grades/:params" element={<GradeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
