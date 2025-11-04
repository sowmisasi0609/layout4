

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import loginBg from "../assets/images/loginBg.png"; // ✅ Left-side image

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", remember: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${formData.email || "User"}!`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ✅ Sticky Navbar */}
      <header className="sticky top-0 z-50 shadow-sm bg-white">
        <Navbar />
      </header>

      {/* ✅ Main Login Container */}
      <section className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
        <div
          className="flex flex-col md:flex-row overflow-hidden shadow-lg"
          style={{
            width: "1312px",
            height: "696px",
            backgroundColor: "#fff",
          }}
        >
          {/* ✅ Left Image Section */}
          <div
            className="md:w-1/2 w-full bg-cover bg-center relative flex flex-col justify-center items-start text-left text-white p-10 md:p-16"
            style={{
              backgroundImage: `url(${loginBg})`,
              filter: "grayscale(100%)",
            }}
          >
            <div className="absolute inset-0 "></div>

            <div className="relative z-10 max-w-lg">
              <h1 className="text-5xl md:text-6xl text-center font-bold mb-6 leading-tight text-white">
                We bring <br /> dream weddings <br /> to life!
              </h1>
              <p className="text-xl text-center font-medium text-gray-100">
                Where Tranquility Meets <br /> Transformation.
              </p>
            </div>
          </div>

          {/* ✅ Right Login Form Section */}
          <div
            className="md:w-1/2 w-full flex flex-col justify-center items-start px-10 md:px-20 text-left"
            style={{ backgroundColor: "#1E1E1E",
              filter: "grayscale(100%)",}}
          >
            <div className="max-w-md w-full text-white">
              <h2 className="text-4xl font-semibold mb-4 text-left">Login</h2>
              <p className="text-gray-300 mb-8 text-md text-left">
                Welcome back, we are glad you're feeling beautiful today. Login to continue.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
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
                    className="w-full px-4 py-3 bg-transparent border border-gray-400 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
                    className="w-full px-4 py-3 bg-transparent border border-gray-400 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  />
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="w-5 h-5 text-gray-300 border-gray-500 bg-transparent"
                  />
                  <label className="text-gray-300 text-md">Remember me</label>
                </div>

                {/* ✅ Centered Login Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-white text-black font-semibold py-3 text-lg rounded-md w-full md:w-3/4 hover:bg-gray-200 transition"
                  >
                    Login
                  </button>
                </div>

                {/* Register Link */}
                <p className="text-gray-400 text-left mt-4">
                  Don’t have an account?{" "}
                  <span className="text-blue-500 underline hover:text-blue-400 cursor-pointer transition">
  Register
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

export default Login;
