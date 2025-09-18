import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DestinationList from "./components/DestinationList";
import DestinationDetails from "./components/DestinationDetails";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return children({ darkMode, setDarkMode });
}

export default function App() {
  return (
    <ThemeProvider>
      {({ darkMode, setDarkMode }) => (
        <Router>
          {/* pass props here */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
                  <DestinationList />
                </>
              }
            />
            <Route path="/destinations" element={<DestinationList />} />
            <Route path="/destination/:id" element={<DestinationDetails />} />
          </Routes>
          <Footer />
      </Router>
      )}
    </ThemeProvider>
  );
}
