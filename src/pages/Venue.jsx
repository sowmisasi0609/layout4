import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import venueBg from "../assets/images/image17.png";
import venuedream from "../assets/images/venuedream.png"

// ✅ Import all 12 venue images properly
import venue1 from "../assets/images/venue1.png";
import venue2 from "../assets/images/venue2.png";
import venue3 from "../assets/images/venue3.png";
import venue4 from "../assets/images/venue4.png";
import venue5 from "../assets/images/venue5.png";
import venue6 from "../assets/images/venue6.png";
import venue7 from "../assets/images/venue7.png";
import venue8 from "../assets/images/venue8.png";
import venue9 from "../assets/images/venue9.png";
import venue10 from "../assets/images/venue10.png";
import venue11 from "../assets/images/venue11.png";
import venue12 from "../assets/images/venue12.png";

const Venue = () => {
  const venues = [
    { id: 1, name: "ASD Venue, Chennai", img: venue1 },
    { id: 2, name: "CVY Venue, Chennai", img: venue2 },
    { id: 3, name: "KLM Venue, Chennai", img: venue3 },
    { id: 4, name: "EC Resort, Kanniya Kumari", img: venue4 },
    { id: 5, name: "FGT Resort, Madurai", img: venue5 },
    { id: 6, name: "LO Resort, Madurai", img: venue6 },
    { id: 7, name: "REM Resort, Mumbai", img: venue7 },
    { id: 8, name: "VBG Resort, Mumbai", img: venue8 },
    { id: 9, name: "MNB Resort, Dubai", img: venue9 },
    { id: 10, name: "SIM Resort, Chennai", img: venue10 },
    { id: 11, name: "SFF Resort, Dubai", img: venue11 },
    { id: 12, name: "LOE Resort, Delhi", img: venue12 },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ✅ Sticky Navbar */}
      <header className="sticky top-0 z-50 shadow-sm bg-white">
        <Navbar />
      </header>

      {/* ✅ Full-width Hero Section */}
      <section
        className="relative w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${venueBg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text + Top Filters */}
        <div className="relative z-10 text-center w-full max-w-6xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-10">
            Our Wedding Venues
          </h1>

          {/* ✅ Top Filters Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <select className="px-5 py-4 rounded-md bg-white text-gray-600 font-medium w-[250px] md:w-[300px] focus:outline-none shadow">
              <option>Select Category</option>
              <option>Decorators</option>
              <option>Venue Planners</option>
              <option>Choreographers</option>
              <option>Makeup Artist</option>
              <option>Bar Services</option>
              <option>Designers</option>
              <option>Celebrant</option>
              <option>Honeymoon</option>
              <option>Photographer</option>
              <option>Videographer</option>
            </select>

            <select className="px-5 py-4 rounded-md bg-white text-gray-600 font-medium w-[250px] md:w-[300px] focus:outline-none shadow">
              <option>Select Location</option>
              <option>Chennai</option>
              <option>Mumbai</option>
              <option>Madurai</option>
              <option>Delhi</option>
              <option>Dubai</option>
              <option>Kanyakumari</option>
              <option>Tirunelveli</option>
              <option>Bangalore</option>
              <option>Thiruvananthapuram</option>
              <option>Kochi</option>
            </select>

            <button className="px-8 py-4 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-md shadow transition w-[180px]">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Second Filters Row */}
      <section className="w-full bg-white py-8 flex justify-center">
        <div className="flex justify-between items-center w-full max-w-6xl gap-1 flex-wrap px-6 overflow-hidden">
          <select className="px-5 py-4 rounded-md border border-gray-400 text-gray-700 w-[220px] focus:outline-none flex-shrink-0">
            <option>No. of Guests</option>
            <option>Up to 100</option>
            <option>100 - 300</option>
            <option>300 - 500</option>
            <option>500+</option>
          </select>

          <select className="px-5 py-4 rounded-md border border-gray-400 text-gray-700 w-[220px] focus:outline-none flex-shrink-0">
            <option>Venue Type</option>
            <option>Banquet</option>
            <option>Resort</option>
            <option>Farmhouse</option>
            <option>Beachside</option>
          </select>

          <select className="px-5 py-4 rounded-md border border-gray-400 text-gray-700 w-[220px] focus:outline-none flex-shrink-0">
            <option>Space Preference</option>
            <option>Indoor</option>
            <option>Outdoor</option>
            <option>Poolside</option>
          </select>

          <select className="px-5 py-4 rounded-md border border-gray-400 text-gray-700 w-[220px] focus:outline-none flex-shrink-0">
            <option>Rating</option>
            <option>5 Star</option>
            <option>4 Star</option>
            <option>3 Star</option>
          </select>

          <button className="px-8 py-4 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-md shadow transition w-[180px] flex-shrink-0">
            Search
          </button>
        </div>
      </section>

      {/* ✅ Wedding Venues Section */}
      <section className="w-full bg-white py-12 px-10 md:px-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Wedding Venues
          </h2>
          <button className="text-black font-semibold hover:underline">
            View All (22)
          </button>
        </div>

        {/* 12 Venue Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:scale-105 bg-white"
            >
              {/* Image with Explore Overlay */}
              <div className="relative">
                <img
                  src={venue.img}
                  alt={venue.name}
                  className="w-full h-60 object-cover"
                />
                <span className="absolute bottom-3 right-4 text-white text-sm font-semibold bg-black/50 px-2 py-1 rounded">
                  Explore
                </span>
              </div>

              {/* Venue Info */}
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-black mb-1">
                  {venue.name}
                </h3>

                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-black font-bold">★★★★★ </span>
                  <span className="text-gray-600 font-medium text-sm">(22)</span>
                </div>

                <p className="text-gray-600 font-medium text-sm">
                  Up to 500 Guests
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white py-10 flex justify-center">
            {/* Outer Rectangle Box */}
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
                  src={venuedream}
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
                <p className="text-gray-900  text-3xl mb-8 leading-relaxed">
                  We love to hear from our precious users. For <br /> any feedback or queries simply write in to
                </p>
      
                {/* Button aligned left */}
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

export default Venue;

