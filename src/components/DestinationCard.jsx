import { Link } from "react-router-dom";
import { destinations } from "../data";
export default function DestinationCard({ place }) {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl shadow-xl overflow-hidden transform hover:rotate-1 hover:-translate-y-2 hover:scale-105 transition duration-500">
      {/* for click any card  */}
      <Link to={`/destination/${place.id}`}>
        {/* Image */}
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-56 object-cover rounded-t-2xl shadow-md"
        />
        {/* Content */}
        <div className="p-5">
          <h2 className="text-2xl font-extrabold text-indigo-700 drop-shadow-md">
            {place.name}
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-3">{place.details}</p>

          {/* Button */}
          <Link
            to={`/destination/${place.id}`}
            className="inline-block mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition duration-300"
          >
            Read More →
          </Link>
        </div>
      </Link>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 pointer-events-none"></div>
    </div>
  );
}
