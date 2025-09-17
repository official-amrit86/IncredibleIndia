export default function Footer() {
  
  return (
    <footer className="bg-indigo-600 text-white ">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
 
        {/* About / Benefits */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Why Visit Incredible India?</h3>
          <ul className="space-y-2 text-sm">
            <li>✅ Explore World Heritage Sites</li>
            <li>✅ Rich Culture & Traditions</li>
            <li>✅ Spiritual & Yoga Tourism</li>
            <li>✅ Adventure & Nature Trails</li>
            <li>✅ Delicious Indian Cuisine</li>
          </ul>
        </div>

        {/* Travel Guidance */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Travel Guidance</h3>
          <ul className="space-y-2 text-sm">
            <li>🚆 Easy train & bus connectivity</li>
            <li>✈️ International & domestic airports across India</li>
            <li>🛣️ Safe highways with tourist facilities</li>
            <li>📍 Online maps & guides available</li>
            <li>📲 Phone:+918602310258</li>
            <li>📧 Email:incredibleindia.org</li>
          </ul>
        </div>

        {/* Government Help */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Government Assistance</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 24x7 Tourist Helpline: 1800-11-1363</li>
            <li>🌐 Website: <a href="https://www.incredibleindia.org" target="_blank" rel="noreferrer" className="underline">incredibleindia.org</a></li>
            <li>👮 Safe travel with Tourist Police support</li>
            <li>💡 Multilingual support for visitors</li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="bg-indigo-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Incredible India Tourism. All Rights Reserved.
      </div>
    </footer>
  );
  // 

}
