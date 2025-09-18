import { Link } from "react-router-dom";
import { destinations } from "../data";
export default function Hero({ darkMode, setDarkMode }) {
  return (
    <section className="pt-25 relative h-auto w-full flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-xl border-b border-white/20 text-gray-900 px-6 overflow-hidden">
      {/*  */}
      <Link to="/destinations">
        <h1
          className="text-5xl sm:text-4xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-3xl
          transform hover:scale-105 transition duration-700
          bg-gradient-to-r from-pink-400 via-blue-600 to-indigo-500
          bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]"
        >
          Explore India’s Wonders ✨
        </h1>
      </Link>

      {/* Subtexts as Hover Cards */}
      <div className="mt-10 border-x-stone-950  hover:bg-blue-50-500 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mx-auto">
        {[
          "Discover history, culture, and nature — all in one country.",
          "From the Himalayas to the Indian Ocean, every corner tells a story.",
          "🇮🇳 Incredible India awaits you!",
          "Visit the Taj Mahal, Jaipur Palaces, Kerala Backwaters & more!",
          "Adventure in Ladakh, Wildlife in Ranthambore, Beaches in Goa!",
          "Experience Festivals, Food, and Colours like never before!",
        ].map((text, idx) => (
          <div
          key={idx}
          className="p-6 bg-gray-50/50 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg
          hover:bg-gradient-to-r hover:from-pink-200 hover:via-purple-200 hover:to-indigo-200
          hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer text-gray-800"
          >
          <a href="https://www.afsusa.org/countries/india/?creative=&keyword=&matchtype=&network=x&device=c&gad_source=1&gad_campaignid=22708853252&gbraid=0AAAAADs0D___pWf1Ub9FO4MXpTq2A1QKR&gclid=Cj0KCQjwuKnGBhD5ARIsAD19Rsb56FXb5Zsco-2HITUXnYzUAfosfVslejb7X7RD04N_X7GeyESvVyYaAm7-EALw_wcB">
            {text}
            </a>
          </div>
        ))}
      </div>

      {/* React Router Button */}
      <Link
        to="/destinations"
        className="mt-12 px-10 py-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500
          text-white font-bold rounded-full shadow-2xl
          hover:scale-110 hover:shadow-pink-500/50 transition duration-500 ring-2 ring-transparent hover:ring-white"
      >
        🌍 Start Exploring
      </Link>
      <br />
      <div className="">
        <video
          src="https://v.ftcdn.net/11/05/51/50/700_F_1105515012_zEUXZ7l4XmwrjlhWE4qhhb6QQYIX0tdt_ST.mp4"
          autoPlay
          loop
          muted
          controls
          width="3000"
        />
      </div>

      {/* Floating 3D Circles */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-pink-400/30 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute bottom-16 right-12 w-36 h-36 bg-indigo-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-spin-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-ping"></div>

      {/* Animated Sparkles */}
      <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
      <div className="absolute top-2/3 right-1/2 w-2 h-2 bg-pink-300 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-indigo-300 rounded-full animate-ping"></div>
    </section>
  );
}
