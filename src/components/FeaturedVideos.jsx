import React, { useState } from "react";

// ✅ Import all video thumbnail images
import video1 from "../assets/images/video1.png";
import video2 from "../assets/images/video2.png";
import video3 from "../assets/images/video3.png";
import video4 from "../assets/images/video4.png";
import video5 from "../assets/images/video5.png";
import video6 from "../assets/images/video6.png";
import video7 from "../assets/images/video7.png";
import video8 from "../assets/images/video8.png";

// ✅ Example dataset — You can expand this up to 50 items
const videos = [
  { id: 1, title: "Wedding Highlights", image: video1 },
  { id: 2, title: "Reception Celebration", image: video2 },
  { id: 3, title: "Haldi Video", image: video3 },
  { id: 4, title: "Couple's Portrait Session", image: video4 },
  { id: 5, title: "Traditional Wedding Ceremony", image: video5 },
  { id: 6, title: "Save The Date", image: video6 },
  { id: 7, title: "Candid Wedding Moments", image: video7 },
  { id: 8, title: "Reception Dance Video", image: video8 },
  // Add more duplicates or unique entries to simulate 50 items
  ...Array.from({ length: 42 }, (_, i) => ({
    id: 9 + i,
    title: `Wedding Video ${i + 9}`,
    image: video1, // reuse one thumbnail for demo
  })),
];

const itemsPerPage = 8;

const FeaturedVideos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAll, setViewAll] = useState(false);

  const totalPages = Math.ceil(videos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = viewAll
    ? videos // show all when "view all" is active
    : videos.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="bg-white py-10 px-10 md:px-20">
      {/* ✅ Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Featured Videos
        </h2>

        {/* ✅ Toggle View All Button */}
        <button
          onClick={() => setViewAll(!viewAll)}
          className="text-black font-semibold hover:underline"
        >
          {viewAll ? "Show Less" : `View All (${videos.length})`}
        </button>
      </div>

      {/* ✅ Video Grid */}
      <div
        className={`grid gap-6 ${
          viewAll
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        }`}
      >
        {currentItems.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={video.image}
              alt={video.title}
              className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-3 text-center bg-white">
              <h3 className="text-black font-semibold">{video.title}</h3>
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

export default FeaturedVideos;


