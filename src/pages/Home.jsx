import React from "react";
import bgImage from "../assets/images/wedding-bg.png";
import CategorySection from "../components/CategorySection";
import PopularVenue from "../components/PopularVenue";
import DreamsSection from "../components/DreamsSection";
import FeaturedVideos from "../components/FeaturedVideos";
import ReviewsSection from "../components/ReviewsSection";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <section
        className="relative w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* ✅ Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* ✅ Hero Content */}
        <div className="relative z-10 max-w-6xl px-6">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-12 leading-tight drop-shadow-lg">
            Your Wedding, Your Way
          </h1>

          {/* ✅ Search/Filter Section */}
          <div className="flex justify-center items-center gap-6 flex-wrap md:flex-nowrap">
            <select className="px-5 py-4 rounded-md bg-white text-gray-600 font-medium w-[250px] md:w-[320px] focus:outline-none shadow">
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

            <select className="px-5 py-4 rounded-md bg-white text-gray-600 font-medium w-[250px] md:w-[320px] focus:outline-none shadow">
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

            <button className="px-8 py-4 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-md shadow transition w-[200px] md:w-[220px]">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Category Section Below Hero */}
      <CategorySection />
      <PopularVenue/>
      <DreamsSection />
      <FeaturedVideos />
      <ReviewsSection />
      <Footer/>
    </>
  );
};

export default Home;



