export default function Footer() {
  return (
    <footer className="  hover:text-neutral-950 dark:bg-black dark:bg-gradient-to-r dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-gray-900 dark:text-white drop-shadow-2xl transform-gpu">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* About / Benefits */}
        <div className="hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            Why Visit Incredible India?
          </h3>
          <ul className="space-y-2 text-sm md:text-base font-medium">
            <li>✅ Explore World Heritage Sites</li>
            <li>✅ Rich Culture & Traditions</li>
            <li>✅ Spiritual & Yoga Tourism</li>
            <li>✅ Adventure & Nature Trails</li>
            <li>✅ Delicious Indian Cuisine</li>
          </ul>
        </div>

        {/* Travel Guidance */}
        <div className="hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            Travel Guidance
          </h3>
          <ul className="space-y-3 text-sm md:text-base font-medium">
            <li>🚆 Easy train & bus connectivity</li>
            <li>✈️ International & domestic airports across India</li>
            <li>
              🛣️ Safe highways with tourist facilities – <br />
              <a
                href="tel:+911234567890"
                className="hover:text-yellow-300 hover:underline"
              >
                📞 +91 12345 67890
              </a>{" "}
              |{" "}
              <a
                href="mailto:info@incredibleindia.org"
                className="hover:text-yellow-300 hover:underline"
              >
                📧 info@incredibleindiafacilities.com
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-300 hover:underline"
              >
                📍 Online maps & guides available
              </a>
            </li>
          </ul>
        </div>

        {/* Government Help */}
        <div className="hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            Government Assistance
          </h3>
          <ul className="space-y-3 text-sm md:text-base font-medium">
            <li>
              <a
                href="tel:+911800111363"
                className="hover:text-yellow-300 hover:underline"
              >
                📞 24x7 Tourist Helpline: 1800-11-1363
              </a>
            </li>
            <li>
              🌐 Website:{" "}
              <a
                href="https://www.incredibleindia.org"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-300 hover:underline"
              >
                incredibleindia.org
              </a>
            </li>
            <li>
              <a
                href="tel:100"
                className="hover:text-yellow-300 hover:underline"
              >
                👮 Tourist Police Support (Dial 100)
              </a>
            </li>
            <li>
              <a
                href="tel:+911800111363"
                className="hover:text-yellow-300 hover:underline"
              >
                💡 Multilingual Visitor Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="bg-gray-200 dark:bg-gray-900 text-center py-4 text-sm md:text-base font-semibold tracking-wide drop-shadow-md text-gray-900 dark:text-white">
        © {new Date().getFullYear()} Incredible India Tourism. All Rights
        Reserved.
      </div>
    </footer>
  );
}
