import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import signupBg from "../assets/images/signupBg.png"; // ✅ Left-side image

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome to One Event, ${formData.name || "Guest"}!`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ✅ Sticky Navbar */}
      <header className="sticky top-0 z-50 shadow-sm bg-white">
        <Navbar />
      </header>

      {/* ✅ Centered Signup Container */}
      <section className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
        <div
          className="flex flex-col md:flex-row overflow-hidden shadow-lg"
          style={{
            width: "1312px",
            height: "696px",
            backgroundColor: "#fff",
          }}
        >
          {/* ✅ Left Image Section (Only Image Grayscale, Text Colored) */}
          <div
            className="md:w-1/2 w-full relative flex flex-col justify-center items-start text-left p-10 md:p-16 overflow-hidden"
          >
            {/* Grayscale Background Layer */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${signupBg})`,
                filter: "grayscale(100%)",
                zIndex: 0,
              }}
            ></div>

            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Gradient Text Above */}
            <div className="relative z-20 max-w-lg">
              <h1
                className="text-5xl md:text-6xl text-center font-bold mb-6 leading-tight"
                style={{
                  background: "linear-gradient(90deg, #D300A5, #0CC9EF, #1C1E99)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                We bring <br /> dream weddings <br /> to life!
              </h1>
            </div>
          </div>

          {/* ✅ Right Signup Form Section */}
          <div
            className="md:w-1/2 w-full flex flex-col justify-center items-start px-10 md:px-20 text-left"
            style={{ backgroundColor: "#948A8A" }}
          >
            <div className="max-w-md w-full text-white">
              <h2 className="text-4xl font-semibold mb-4 text-left">Sign Up</h2>
              <p className="text-gray-100 mb-8 text-md text-left">
                Welcome to One Event, we hope your stay with us feels as bright
                as the morning sun.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                {/* Name */}
                <div>
                  <label className="block text-lg font-medium mb-2 text-gray-200">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-gray-300 text-white rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-lg font-medium mb-2 text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-gray-300 text-white rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-lg font-medium mb-2 text-gray-200">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-gray-300 text-white rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  />
                </div>

                {/* ✅ Centered Sign Up Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-white text-black font-semibold py-3 text-lg rounded-md w-full md:w-3/4 hover:bg-gray-200 transition"
                  >
                    Sign Up
                  </button>
                </div>

                {/* Login Link */}
                <p className="text-gray-200 text-left mt-2 text-center">
                  Already have an account?{" "}
                  <span className="text-blue-800 underline cursor-pointer">
                    Login
                  </span>
                </p>
              </form>
            </div>
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

export default Signup;


