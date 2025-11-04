import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import supplierBg from "../assets/images/image18.png";

// ✅ Category Images
import photographer from "../assets/images/suppliers1.png";
import decorator from "../assets/images/suppliers2.png";
import planner from "../assets/images/suppliers3.png";
import choreographer from "../assets/images/suppliers4.png";
import makeup from "../assets/images/suppliers5.png";
import bar from "../assets/images/suppliers6.png";
import designer from "../assets/images/suppliers7.png";

// ✅ Photographer images
import p1 from "../assets/images/photo1.png";
import p2 from "../assets/images/photo2.png";
import p3 from "../assets/images/photo3.png";
import p4 from "../assets/images/photo4.png";

// ✅ Designer images
import d1 from "../assets/images/designer1.png";
import d2 from "../assets/images/designer2.png";
import d3 from "../assets/images/designer3.png";
import d4 from "../assets/images/designer4.png";
import d5 from "../assets/images/designer1.png";
import d6 from "../assets/images/designer2.png";
import d7 from "../assets/images/designer3.png";
import d8 from "../assets/images/designer4.png";

// ✅ Choreographer images
import c1 from "../assets/images/choreo1.png";
import c2 from "../assets/images/choreo2.png";
import c3 from "../assets/images/choreo3.png";
import c4 from "../assets/images/choreo4.png";
import c5 from "../assets/images/choreo1.png";
import c6 from "../assets/images/choreo2.png";
import c7 from "../assets/images/choreo3.png";
import c8 from "../assets/images/choreo4.png";

// ✅ Dreams section image
import dreamImg from "../assets/images/dream.png"; // <-- replace with your actual image path

const Suppliers = () => {
  const categories = [
    { id: 1, name: "Photographer / Videographer", img: photographer },
    { id: 2, name: "Decorators", img: decorator },
    { id: 3, name: "Venue Planners", img: planner },
    { id: 4, name: "Choreographers", img: choreographer },
    { id: 5, name: "Makeup Artist", img: makeup },
    { id: 6, name: "Bar Services", img: bar },
    { id: 7, name: "Designers", img: designer },
  ];

  // ✅ Photographer/Videographer Data
  const photographers = [
    { id: 1, name: "UIO Videos", city: "Chennai", img: p1, rating: 5, reviews: 22 },
    { id: 2, name: "QWE Videos", city: "Chennai", img: p2, rating: 5, reviews: 22 },
    { id: 3, name: "XYZ Videos", city: "Chennai", img: p3, rating: 5, reviews: 22 },
    { id: 4, name: "ABC Videos", city: "Chennai", img: p4, rating: 5, reviews: 22 },
    { id: 5, name: "PQR Videos", city: "Chennai", img: p1, rating: 5, reviews: 22 },
    { id: 6, name: "LMN Videos", city: "Chennai", img: p2, rating: 5, reviews: 22 },
    { id: 7, name: "DEF Videos", city: "Chennai", img: p3, rating: 5, reviews: 22 },
    { id: 8, name: "JKL Videos", city: "Chennai", img: p4, rating: 5, reviews: 22 },
    { id: 9, name: "NOP Videos", city: "Chennai", img: p1, rating: 5, reviews: 22 },
    { id: 10, name: "STU Videos", city: "Chennai", img: p2, rating: 5, reviews: 22 },
    { id: 11, name: "GHI Videos", city: "Chennai", img: p3, rating: 5, reviews: 22 },
    { id: 12, name: "VWX Videos", city: "Chennai", img: p4, rating: 5, reviews: 22 },
  ];

  // ✅ Designers Data
  const designersList = [
    { id: 1, name: "RTY Designers", city: "Chennai", img: d1, rating: 5, reviews: 22 },
    { id: 2, name: "JKL Designers", city: "Chennai", img: d2, rating: 5, reviews: 22 },
    { id: 3, name: "BNM Designers", city: "Chennai", img: d3, rating: 5, reviews: 22 },
    { id: 4, name: "CVB Designers", city: "Chennai", img: d4, rating: 5, reviews: 22 },
    { id: 5, name: "PLM Designers", city: "Chennai", img: d5, rating: 5, reviews: 22 },
    { id: 6, name: "WER Designers", city: "Chennai", img: d6, rating: 5, reviews: 22 },
    { id: 7, name: "TYU Designers", city: "Chennai", img: d7, rating: 5, reviews: 22 },
    { id: 8, name: "OPQ Designers", city: "Chennai", img: d8, rating: 5, reviews: 22 },
  ];

  // ✅ Choreographers Data
  const choreographersList = [
    { id: 1, name: "MNO Dancers", city: "Chennai", img: c1, rating: 5, reviews: 22 },
    { id: 2, name: "BHY Dancers", city: "Chennai", img: c2, rating: 5, reviews: 22 },
    { id: 3, name: "WDR Dancers", city: "Chennai", img: c3, rating: 5, reviews: 22 },
    { id: 4, name: "PQR Dancers", city: "Chennai", img: c4, rating: 5, reviews: 22 },
    { id: 5, name: "TYU Dancers", city: "Chennai", img: c5, rating: 5, reviews: 22 },
    { id: 6, name: "VBN Dancers", city: "Chennai", img: c6, rating: 5, reviews: 22 },
    { id: 7, name: "GHJ Dancers", city: "Chennai", img: c7, rating: 5, reviews: 22 },
    { id: 8, name: "RTY Dancers", city: "Chennai", img: c8, rating: 5, reviews: 22 },
  ];

  // ✅ Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [designerPage, setDesignerPage] = useState(1);
  const [choreoPage, setChoreoPage] = useState(1);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(photographers.length / itemsPerPage);
  const designerTotalPages = Math.ceil(designersList.length / itemsPerPage);
  const choreoTotalPages = Math.ceil(choreographersList.length / itemsPerPage);

  const currentPhotographers = photographers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const currentDesigners = designersList.slice(
    (designerPage - 1) * itemsPerPage,
    designerPage * itemsPerPage
  );
  const currentChoreographers = choreographersList.slice(
    (choreoPage - 1) * itemsPerPage,
    choreoPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ✅ Sticky Navbar */}
      <header className="sticky top-0 z-50 shadow-sm bg-white">
        <Navbar />
      </header>

      {/* ✅ Hero Section */}
      <section
        className="relative w-screen h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center overflow-hidden"
        style={{ backgroundImage: `url(${supplierBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Suppliers
          </h1>
        </div>
      </section>

      {/* ✅ Suppliers Categories */}
      <section className="w-full bg-white py-20 px-10 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-14">
          Suppliers Categories
        </h2>

        {/* Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center mb-16">
          {categories.slice(0, 4).map((cat) => (
            <div key={cat.id} className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden shadow-md hover:scale-105 transition">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-lg font-semibold text-black uppercase tracking-wide">
                {cat.name}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 justify-items-center">
          {categories.slice(4).map((cat) => (
            <div key={cat.id} className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden shadow-md hover:scale-105 transition">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-lg font-semibold text-black uppercase tracking-wide">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Popular Photographers/Videographers */}
      <DisplaySection
        title="Popular Photographers / Videographers"
        items={currentPhotographers}
        totalPages={totalPages}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />

      {/* ✅ Trending Designers */}
      <DisplaySection
        title="Trending Designers"
        items={currentDesigners}
        totalPages={designerTotalPages}
        currentPage={designerPage}
        setPage={setDesignerPage}
      />

      {/* ✅ Trending Choreographers */}
      <DisplaySection
        title="Trending Choreographers"
        items={currentChoreographers}
        totalPages={choreoTotalPages}
        currentPage={choreoPage}
        setPage={setChoreoPage}
      />

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

// ✅ Reusable Display Section Component
const DisplaySection = ({ title, items, totalPages, currentPage, setPage }) => (
  <section className="w-full py-16 px-10 md:px-20 bg-white">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-3xl text-black font-bold">{title}</h2>
      <button className="text-black hover:underline font-semibold">
        View All (22)
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-transform hover:scale-105 w-[309px]"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-[309px] h-[305px] object-cover rounded-md"
          />
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold text-black">{item.name}</h3>
            <p className="text-md font-bold text-black mt-1">{item.city}</p>
            <div className="flex justify-center items-center text-black mt-2">
              <span className="text-lg">★★★★★</span>
              <span className="text-lg font-semibold ml-2">{item.rating}</span>
              <span className="text-gray-600 ml-1">({item.reviews})</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <Pagination totalPages={totalPages} currentPage={currentPage} setPage={setPage} />
  </section>
);

// ✅ Pagination Component (Reusable)
const Pagination = ({ totalPages, currentPage, setPage }) => (
  <div className="flex justify-center items-center mt-10 gap-3">
    <button
      onClick={() => setPage((p) => Math.max(p - 1, 1))}
      disabled={currentPage === 1}
      className={`px-3 py-2 rounded-md border ${
        currentPage === 1
          ? "bg-gray-200 text-gray-500"
          : "bg-white text-black border-gray-400 hover:bg-gray-100"
      }`}
    >
      «
    </button>
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i + 1}
        onClick={() => setPage(i + 1)}
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
      onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
      disabled={currentPage === totalPages}
      className={`px-3 py-2 rounded-md border ${
        currentPage === totalPages
          ? "bg-gray-200 text-gray-500"
          : "bg-white text-black border-gray-400 hover:bg-gray-100"
      }`}
    >
      »
    </button>
  </div>
);

export default Suppliers;






