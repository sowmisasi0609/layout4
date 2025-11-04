import React, { useState } from "react";
import celinImg from "../assets/images/reviewer1.png"; // Celin's image

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "John",
      text: "Aihole is one of the least explored architectural treasures in Karnataka, offering a wedding experience like no other amidst ancient temples and carvings.",
    },
    {
      id: 2,
      name: "Celin",
      image: celinImg,
      text: "Aihole is one of the least explored architectural treasures in Karnataka, offering a wedding experience like no other amidst ancient temples and carvings.",
    },
    {
      id: 3,
      name: "Kamala",
      text: "Aihole is one of the least explored architectural treasures in Karnataka, offering a wedding experience like no other amidst ancient temples and carvings.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const prevReview = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const nextReview = () => {
    setCurrentIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-white py-16 px-10 md:px-20">
      {/* ✅ Left-Aligned Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-black text-left">
        Reviews
      </h2>

      {/* ✅ Reviews Layout */}
      <div className="relative flex justify-center items-center w-full max-w-6xl mx-auto">
        {/* Left (John) */}
        <div className="absolute left-0 opacity-40 scale-90 -translate-x-10">
          <div className="bg-gray-100 w-[300px] rounded-2xl p-6 text-center relative shadow-sm">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black rounded-full w-16 h-16"></div>
            <h3 className="text-lg font-semibold mt-8 mb-2 text-gray-800">
              John
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {reviews[0].text}
            </p>
          </div>
        </div>

        {/* Center (Celin) */}
        <div className="relative z-10 bg-gray-200 w-[600px] md:w-[700px] rounded-2xl p-10 text-center shadow-lg transition-all duration-300">
          {/* Reviewer Image */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src={reviews[1].image}
              alt={reviews[1].name}
              className="w-20 h-20 rounded-full border-4 border-white object-cover"
            />
          </div>

          {/* Reviewer Name */}
          <h3 className="text-xl font-bold mt-10 mb-4 text-black">
            {reviews[1].name}
          </h3>

          {/* Review Text */}
          <p className="text-gray-800 text-base leading-relaxed max-w-[550px] mx-auto">
            {reviews[1].text}
          </p>

          {/* ✅ Arrows Inside Box (Centered) */}
          <button
            onClick={prevReview}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black text-white text-2xl w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
          >
            ‹
          </button>

          <button
            onClick={nextReview}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black text-white text-2xl w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
          >
            ›
          </button>
        </div>

        {/* Right (Kamala) */}
        <div className="absolute right-0 opacity-40 scale-90 translate-x-10">
          <div className="bg-gray-100 w-[300px] rounded-2xl p-6 text-center relative shadow-sm">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black rounded-full w-16 h-16"></div>
            <h3 className="text-lg font-semibold mt-8 mb-2 text-gray-800">
              Kamala
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {reviews[2].text}
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        <span className="w-3 h-3 rounded-full bg-gray-800"></span>
        <span className="w-3 h-3 rounded-full bg-gray-400"></span>
        <span className="w-3 h-3 rounded-full bg-gray-400"></span>
      </div>
    </section>
  );
};

export default ReviewsSection;


