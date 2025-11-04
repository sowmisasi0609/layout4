import React, { useState } from "react";

// ✅ Import all images from src/assets/images
import decorImg from "../assets/images/decor.png";
import honeymoonImg from "../assets/images/honeymoon.png";
import videographerImg from "../assets/images/videographer.png";
import celebrantImg from "../assets/images/celebrant.png";
import photographerImg from "../assets/images/photographer.png";
import makeupImg from "../assets/images/makeup.png";
import venueImg from "../assets/images/venue.png";
import designerImg from "../assets/images/designer.png";

// ✅ Add 10 total items for View All (10)
const categories = [
  { id: 1, name: "Decorators", image: decorImg },
  { id: 2, name: "Honeymoon & Travel", image: honeymoonImg },
  { id: 3, name: "Videographers Wedding", image: videographerImg },
  { id: 4, name: "Celebrant", image: celebrantImg },
  { id: 5, name: "Photographer", image: photographerImg },
  { id: 6, name: "Makeup Artist", image: makeupImg },
  { id: 7, name: "Venue Planners", image: venueImg },
  { id: 8, name: "Designers", image: designerImg },
  { id: 9, name: "Caterers", image: decorImg },
  { id: 10, name: "Event Managers", image: venueImg },
];

const itemsPerPage = 4;

const CategorySection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAll, setViewAll] = useState(false);

  // Pagination logic
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = viewAll
    ? categories // ✅ show all when "View All" is clicked
    : categories.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="bg-white py-10 px-10 md:px-20">
      {/* ✅ Header Row */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Browse By Category
        </h2>

        {/* ✅ Toggle View All Button */}
        <button
          onClick={() => setViewAll(!viewAll)}
          className="text-black font-semibold hover:underline"
        >
          {viewAll ? "Show Less" : `View All (${categories.length})`}
        </button>
      </div>

      {/* ✅ Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {currentItems.map((cat) => (
          <div
            key={cat.id}
            className="rounded-md overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 bg-white"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-3 text-center bg-white">
              <h3 className="text-black font-semibold">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Pagination (hidden in View All mode) */}
      {!viewAll && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            «
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      )}
    </section>
  );
};

export default CategorySection;



