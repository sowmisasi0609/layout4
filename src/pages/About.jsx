import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutBg from "../assets/images/aboutBg.png"; 
import aboutImg from "../assets/images/image7.png"; 
import offerImg from "../assets/images/image8.png";
import lastImg from "../assets/images/image9.png";
import aboutdreamImg from "../assets/images/image10.png";




const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ✅ Sticky Navbar */}
      <header className="sticky top-0 z-50 shadow-sm bg-white">
        <Navbar />
      </header>

      {/* ✅ Hero Section */}
      <section
        className="relative w-screen h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-end text-right overflow-hidden pr-10 md:pr-24"
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-right px-6 md:px-16">
          <h1
            className="text-4xl md:text-7xl font-bold text-white leading-snug md:leading-[1.5] text-center tracking-wide"
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

      {/* ✅ About Description Section (Text Left + Image Right) */}
      <section className="bg-white py-20 px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-2xl text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            repudiandae excepturi aut assumenda quo praesentium eos deleniti
            quae earum, fugit sed iusto eaque amet id similique molestias quas
            ipsam ut. Laboriosam consectetur iure quae dolore quam hic
            repellendus ut, adipisci aliquid sapiente corrupti voluptatum ab
            itaque. Ea ex voluptate dolores, fugiat, id, suscipit eos reiciendis
            aspernatur numquam sed quisquam quod est ut fugit incidunt officiis
            enim temporibus. Voluptatibus officia reiciendis magnam adipisci
            veniam?
            Ea ex voluptate dolores, fugiat, id, suscipit eos reiciendis
            aspernatur numquam sed quisquam quod est ut fugit incidunt officiis
            enim temporibus. Voluptatibus officia reiciendis magnam adipisci
            veniam?
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutImg}
            alt="About One Event"
            className="shadow-lg object-cover w-[652px] h-[484px]"
          />
        </div>
      </section>

      {/* ✅ Statistics Section */}
      <section
        className="w-full bg-gray-100 flex flex-wrap justify-around items-center text-center py-10"
        style={{ width: "1440px", height: "147px", margin: "0 auto" }}
      >
        <div>
          <h2 className="text-5xl font-bold text-black">10,000</h2>
          <p className="text-4xl text-gray-700 mt-2">Wedding Vendors</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-black">20,000</h2>
          <p className="text-4xl text-gray-700 mt-2">Annual Weddings</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-black">1,000</h2>
          <p className="text-4xl text-gray-700 mt-2">Wedding Venues</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-black">1.5 M</h2>
          <p className="text-4xl text-gray-700 mt-2">Monthly Followers</p>
        </div>
      </section>

      {/* ✅ What We Offer Section (Image Left + Text Right) */}
      <section className="bg-white py-20 px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={offerImg}
            alt="What We Offer"
            className=" shadow-lg object-cover w-[770px] h-[500px]"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Offer?
          </h2>
          <p className="text-2xl text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            repudiandae excepturi aut assumenda quo praesentium eos deleniti
            quae earum, fugit sed iusto eaque amet id similique molestias quas
            ipsam ut. Laboriosam consectetur iure quae dolore quam hic
            repellendus ut, adipisci aliquid sapiente corrupti voluptatum ab
            itaque. Ea ex voluptate dolores, fugiat, id, suscipit eos reiciendis
            aspernatur numquam sed quisquam quod est ut fugit incidunt officiis
            enim temporibus. Voluptatibus officia reiciendis magnam adipisci
            veniam?fugiat, id, suscipit eos reiciendis
            aspernatur numquam sed quisquam quod est ut fugit incidunt officiis
            enim temporibus. Voluptatibus officia reiciendis magnam adipisci
            veniam?
            fugiat, id, suscipit eos reiciendis
            aspernatur numquam sed quisquam quod est ut fugit incidunt officiis
            enim temporibus. Voluptatibus officia reiciendis magnam adipisci
          </p>
        </div>
      </section>
      {/* ✅ About Description Section (Text Left + Image Right) */}
      <section className="bg-white py-20 px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Are?
          </h2>
          <p className="text-2xl text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            repudiandae excepturi aut assumenda quo praesentium eos deleniti
            quae earum, fugit sed iusto eaque amet id similique molestias quas
            ipsam ut. Laboriosam consectetur iure quae dolore quam hic
            repellendus ut, adipisci aliquid sapiente corrupti voluptatum ab
            itaque. Ea ex voluptate dolores, fugiat, id, suscipit eos reiciendis
            aspernatur numquam sed quisquam quod est ut fugit incidunt officiis
            enim temporibus. Voluptatibus officia reiciendis magnam adipisci
            veniam?
            Ea ex voluptate dolores, fugiat, id, suscipit eos reiciendis
            aspernatur numquam sed quisquam quod est ut fugit incidunt officiis
            enim temporibus. Voluptatibus officia reiciendis magnam adipisci
            veniam?
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={lastImg}
            alt="About One Event"
            className="shadow-lg object-cover w-[652px] h-[484px]"
          />
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
                    src={aboutdreamImg}
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

export default About;



