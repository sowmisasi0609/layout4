import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mediaBg from "../assets/images/mediaBg.png";
import dreamImg from "../assets/images/dreamImg.png"; // ✅ Add your dream section image

// ✅ Media images (replace with your actual images)
import media1 from "../assets/images/media1.png";
import media2 from "../assets/images/media2.png";
import media3 from "../assets/images/media3.png";
import media4 from "../assets/images/media4.png";
import media5 from "../assets/images/media5.png";
import media6 from "../assets/images/media6.png";
import media7 from "../assets/images/media7.png";
import media8 from "../assets/images/media8.png";
import media9 from "../assets/images/media9.png";
import media10 from "../assets/images/media1.png";
import media11 from "../assets/images/media2.png";
import media12 from "../assets/images/media3.png";

const Media = () => {
  // ✅ Media data list
  const mediaItems = [
    { id: 1, title: "Outdoor Venue", desc: "Latest updates for new venue, also", img: media1 },
    { id: 2, title: "Reception Highlights", desc: "New decor inspiration & trends", img: media2 },
    { id: 3, title: "Candid Wedding Moments", desc: "Beautiful captures from real weddings", img: media3 },
    { id: 4, title: "Haldi Event", desc: "Bright colors and festive vibes", img: media4 },
    { id: 5, title: "Stage Setup", desc: "Modern themes for special days", img: media5 },
    { id: 6, title: "Pre-Wedding Shoots", desc: "Creative moments before big day", img: media6 },
    { id: 7, title: "Indoor Venue", desc: "Elegant spaces for celebrations", img: media7 },
    { id: 8, title: "Dance Performance", desc: "Choreography highlights & fun", img: media8 },
    { id: 9, title: "Wedding Gallery", desc: "Memories that last forever", img: media9 },
    { id: 10, title: "Engagement Decor", desc: "Classy setups for grand beginnings", img: media10 },
    { id: 11, title: "Cultural Events", desc: "Beautiful themes for traditional events", img: media11 },
    { id: 12, title: "Sangeet Night", desc: "Music, lights, and unforgettable energy", img: media12 },
  ];

  // ✅ Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(mediaItems.length / itemsPerPage);

  const currentItems = mediaItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ✅ Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
      </header>

      {/* ✅ Hero Section */}
      <section
        className="relative w-screen h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-end text-right overflow-hidden pr-16"
        style={{
          backgroundImage: `url(${mediaBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-right px-6 md:px-16">
          <h1
            className="text-4xl md:text-7xl font-bold text-white text-center leading-snug md:leading-[1.5] tracking-wide"
            style={{
              lineHeight: "1.6",
              letterSpacing: "0.5px",
            }}
          >
            <span className="block mb-6">We bring</span>
            <span className="block mb-6">dream weddings</span>
            <span className="block mb-6">to life!</span>
          </h1>
        </div>
      </section>

      {/* ✅ Latest Media Section */}
      <section className="w-full bg-white py-20 px-10 md:px-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl text-black font-bold">Latest Media</h2>
          <button className="text-black hover:underline font-semibold">
            View All (100)
          </button>
        </div>

        {/* Grid of Media Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 rounded-md overflow-hidden shadow-md hover:shadow-xl transition-transform hover:scale-105 w-[360px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[230px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-black mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-800 text-base mb-3">
                  {item.desc}
                </p>
                <p className="text-right italic font-semibold text-black">
                  Read More
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Pagination */}
        <div className="flex justify-center items-center mt-10 gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-md border ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white text-black border-gray-400 hover:bg-gray-100"
            }`}
          >
            «
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md font-semibold border ${
                currentPage === i + 1
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-400 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-md border ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white text-black border-gray-400 hover:bg-gray-100"
            }`}
          >
            »
          </button>
        </div>
      </section>

      {/* ✅ Dreams Section */}
      <section className="bg-white py-10 flex justify-center">
        <div
          className="border border-gray-600 bg-gray-50 flex items-center justify-between shadow-sm px-10"
          style={{
            width: "1276px",
            height: "522px",
          }}
        >
          {/* Left Side Image */}
          <div className="flex-shrink-0">
            <img
              src={dreamImg}
              alt="Wedding Dreams"
              className="object-cover"
              style={{
                width: "400px",
                height: "400px",
              }}
            />
          </div>

          {/* Right Side Text */}
          <div className="flex flex-col justify-center text-left ml-10 max-w-[700px]">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Yours Dreams, Our Dreams...
            </h2>
            <p className="text-gray-900 text-4xl mb-8 leading-relaxed">
              We love to hear from our precious users. <br />For any feedback or queries simply write <br /> in to ...
            </p>

            {/* Button */}
            <button
              className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 px-14 text-2xl shadow-none transition-none"
              style={{ borderRadius: "0px", width: "160px" }}
            >
              View
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Sticky Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Media;

