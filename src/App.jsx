import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType
} from "react-router-dom";
import Home from "./sections/Home.jsx";
import Grades from "./sections/Grades.jsx";
import GradeDetial from "./sections/GradeDetial.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx"; // make sure path is correct

const Loader = ({ loading, visible }) => (
  <div
    className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-white dark:bg-black transition-opacity duration-700 ${
      loading ? "opacity-100 pointer-events-auto z-50" : "opacity-0 pointer-events-none"
    } ${visible ? "" : "hidden"}`}
  >
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50" />
  </div>
);

// Custom hook to track route changes
const useRouteLoading = () => {
  const location = useLocation();
  const navigationType = useNavigationType(); // capture back/forward clicks
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // on mount or route change
    setLoading(true);
    setVisible(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setVisible(false), 500); // fade out
    }, 1000); // adjust duration as needed

    return () => clearTimeout(timeout);
  }, [location.pathname, navigationType]);

  return { loading, visible };
};

const AppRoutes = () => {
  const { loading, visible } = useRouteLoading();

  return (
    <>
      <Loader loading={loading} visible={visible} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/grades/:link" element={<GradeDetial />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
