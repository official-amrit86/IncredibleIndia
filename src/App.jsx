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
function About() {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">
        About Incredible India
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        India is a land of diversity, offering history, culture, spirituality,
        and natural beauty. From the Himalayas in the north to the beaches of
        Goa in the west, from the deserts of Rajasthan to the backwaters of
        Kerala — India has it all.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">Contact Us</h2>
      <p className="dark:text-gray-300">Email: info@incredibleindia.com</p>
      <p className="dark:text-gray-300">Phone: +91 9876543210</p>
    </section>
  );
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </ThemeProvider>
  );
}
