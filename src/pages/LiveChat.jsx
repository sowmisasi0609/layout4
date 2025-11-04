import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png"; // ✅ correct path

const LiveChat = () => {
  const navigate = useNavigate();

  return (
    // ✅ Outer wrapper centers the entire LiveChat "screen"
    <div className="flex items-center justify-center min-h-screen bg-[#EDEDE7] font-sans">
      {/* ✅ Main fixed container (1440×1024) */}
      <div
        className="bg-[#FAFAF5] shadow-lg flex flex-col overflow-hidden"
        style={{
          width: "1440px",
          height: "1024px",
          borderRadius: "12px",
        }}
      >
        {/* ✅ Navbar */}
        <header className="w-full bg-[#FAFAF5] border-b border-gray-200">
          <nav className="flex items-center justify-between py-5 px-10">
            {/* WhatsApp button (left) */}
            <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              WhatsApp
            </button>

            {/* Navbar links (center) */}
            <ul className="flex flex-1 justify-center space-x-8 text-black font-medium mx-10">
              <li className="hover:underline cursor-pointer">Features</li>
              <li className="hover:underline cursor-pointer">Privacy</li>
              <li className="hover:underline cursor-pointer">Help Center</li>
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">For Business</li>
              <li className="hover:underline cursor-pointer">Apps</li>
            </ul>

            {/* Download button (right) */}
            <button className="bg-green-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-green-700 transition">
              Download
            </button>
          </nav>
        </header>

        {/* ✅ Main Content Area (Logo Section) */}
        <main
          className="flex flex-col items-center justify-start text-center flex-1 bg-[#FAFAF5]"
          style={{
            paddingTop: "80px", // ✅ pushes content closer to navbar (was centered before)
          }}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="One Event Logo"
            style={{
              width: "373px",
              height: "233px",
              objectFit: "contain",
              marginBottom: "32px",
            }}
          />

          {/* Continue Button */}
          <button
            onClick={() => navigate("/chat")}
            className="bg-green-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-700 hover:scale-105 transition-transform"
          >
            Continue With Chat
          </button>

          {/* Download prompt */}
          <p className="text-black mt-6 text-sm font-semibold ">
            Don’t&nbsp; have WhatsApp yet ?{" "} <br />
            <a href="#" className="text-blue-600 hover:underline font-semibold ">
              Download
            </a>
          </p>
        </main>
      </div>
    </div>
  );
};

export default LiveChat;
















