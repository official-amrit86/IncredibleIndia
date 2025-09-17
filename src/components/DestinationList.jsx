import { useState } from "react";
import { destinations } from "../data";
import DestinationCard from "./DestinationCard";
import { Search } from "lucide-react"; // icon import

export default function DestinationList() {
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
    <section className="w-full  pt-2">
      {/* Search + Dropdown Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-25 mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
       

        {/* Search Box */}
        <div className="relative w-full sm:w-80">
          
          <input
            type="text"
            placeholder=" Search city, state, or place..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border rounded-lg pl-10 pr-4 py-2 shadow-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          {/* Icon inside input */}
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
          
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        🌏 Explore Destinations
      </h1>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((place) => (
            <DestinationCard key={place.id} place={place} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No destinations found 😕
          </p>
        )}
      </div>
    </section>
  );
}
