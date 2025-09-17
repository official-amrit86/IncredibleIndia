import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { destinations } from "../data"; // ✅ Fix: import destinations

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter logic
  const filteredDestinations = destinations.filter((place) => {
    return (
      place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.travel.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <nav className="fixed w-full bg-white/30 backdrop-blur-lg border-b border-white/20 text-gray-400 px-6 md:px-12 py-4 flex justify-between items-center shadow-lg shadow-indigo-900/20 z-50 md:hover:bg-black">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 drop-shadow-md">
          Incredible India 🇮🇳
        </h1>
      </Link>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1 bg-white text-indigo-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? "🌞 Light" : "🌙 Dark"}
      </button>

      {/* Search Box */}
      <div className="relative w-full sm:w-80 ml-6">
        <input
          type="text"
          placeholder=" Search city, state, or place..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded-lg pl-10 pr-4 py-2 shadow-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        {/* Icon inside input */}
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />

        {/* Dropdown for search results */}
        {searchTerm && (
          <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-60 overflow-y-auto z-50">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((place) => (
                <Link
                  key={place.id}
                  to={`/destinations/${place.id}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                  onClick={() => setSearchTerm("")}
                >
                  {place.name}
                </Link>
              ))
            ) : (
              <p className="px-4 py-2 text-gray-500">No results found 😕</p>
            )}
          </div>
        )}
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-lg font-semibold">
        <Link
          to="/"
          className="px-3 py-1 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:shadow-md"
        >
          Home
        </Link>
        <Link
          to="/destinations"
          className="px-3 py-1 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 hover:text-white hover:shadow-md"
        >
          Destinations
        </Link>
         {/* <Link
          to="/about"
          className="px-3 py-1 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-400 hover:text-white hover:shadow-md"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="px-3 py-1 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-400 hover:text-white hover:shadow-md"
        >
          Contact
        </Link>  */}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-white/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg border-t border-white/20 shadow-md flex flex-col items-center space-y-4 py-6 md:hidden">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            to="/destinations"
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold hover:text-pink-500"
          >
            Destinations
          </Link>
          {/* <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold hover:text-green-500"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold hover:text-yellow-500"
          >
            Contact
          </Link> */}
        </div>
      )}
    </nav>
  );
}
