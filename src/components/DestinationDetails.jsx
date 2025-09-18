import { useParams, Link } from "react-router-dom";
import { destinations } from "../data";

export default function DestinationDetails() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === parseInt(id));

  if (!destination) {
    return (
      <p className="p-10 text-center text-red-500 text-xl font-semibold">
        Destination not found ❌
      </p>
    );
  }

  return (
    <section className="p-5 mx-auto w-full relative">
      {/* Full width Hero Media (Image or Video) */}
      <div className=" mt-22 relative w-full h-auto md:h-auto rounded-2xl overflow-hidden shadow-2xl">
        {destination.video ? (
          <video
            src={destination.video}
            autoPlay
            loop
            muted
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-in-out"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <h2 className="absolute bottom-6 left-6 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
          {destination.name}
        </h2>
      </div>

      {/* Details Section */}
      <div className="mt-10 space-y-8">
        {/* About */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500">
          <h3 className="text-2xl font-bold text-indigo-600 hover:text-pink-500 transition">
            About
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            {destination.details}
          </p>
        </div>

        {/* Travel */}
        <div className="bg-gradient-to-r from-indigo-100 via-pink-100 to-purple-100 rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition duration-500">
            <a href="https://www.google.com/maps/@30.704354,76.6984421,15z?entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D">
          <h3 className="text-2xl font-bold text-indigo-700 hover:text-purple-600 transition">
            How to Reach <a href="https://www.irctc.com/internet-ticketing.php#">🚆</a>
          </h3>
            </a>
          <p className="mt-3 text-gray-800">{destination.travel}</p>
        </div>

        {/* Beneficiary */}
        <div className="bg-white/90 backdrop-blur-lg border border-indigo-100 rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition duration-500">
          <h3 className="text-2xl font-bold text-pink-600 hover:text-indigo-600 transition">
            Beneficiary Impact 💡
          </h3>
          <p className="mt-3 text-gray-800">{destination.beneficiary}</p>
        </div>
      </div>

      {/* Back Link */}
      <div className="mt-10 text-center">
        <Link
          to="/destinations"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-pink-500 text-white font-semibold shadow-lg hover:shadow-pink-400/50 hover:scale-110 transition duration-500"
        >
          ← Back to Destinations
        </Link>
      </div>
    </section>
  );
}
