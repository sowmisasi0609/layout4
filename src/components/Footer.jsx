import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/logo.png"; // ✅ make sure your logo exists here
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); // ✅ This line was missing!

  return (
    <footer className="bg-gray-50 text-black py-12 px-10 md:px-20 border-t">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 items-start">
        {/* ✅ Logo & Social Media */}
        <div className="col-span-1 flex flex-col items-start space-y-6">
          <img
            src={logo}
            alt="One Event Logo"
            className="w-28 object-contain"
          />

          {/* ✅ Social Media Icons */}
          <div>
            <h3 className="text-md font-semibold mb-3">Social Media</h3>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="text-black hover:scale-110 transition-transform">
                <FaFacebookF />
              </a>
              <a href="#" className="text-black hover:scale-110 transition-transform">
                <FaTwitter />
              </a>
              <a href="#" className="text-black hover:scale-110 transition-transform">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-black hover:scale-110 transition-transform">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Venues */}
        <div>
          <h3 className="font-bold text-lg mb-4">Venues</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Chennai</li>
            <li>Mumbai</li>
            <li>Dubai</li>
            <li>Delhi</li>
            <li>Madurai</li>
            <li>Kanniyakumari</li>
          </ul>
        </div>

        {/* ✅ Suppliers */}
        <div>
          <h3 className="font-bold text-lg mb-4">Suppliers</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Photographers</li>
            <li>Decorators</li>
            <li>Venues Planner</li>
            <li>Choreographers</li>
            <li>Designers</li>
            <li>Makeup Artists</li>
          </ul>
        </div>

        {/* ✅ Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* ✅ Newsletter + Live Chat */}
        <div>
          <h3 className="font-bold text-lg mb-4">Newsletter</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Subscribe To Get Latest</li>
            <li>Media Updates</li>
          </ul>

          {/* ✅ Working Live Chat button */}
          <button
            onClick={() => navigate("/livechat")}
            className="bg-white text-black border border-gray-600 text-lg px-5 py-2 rounded-md font-bold mt-2"
          >
            Live Chat
          </button>
        </div>
      </div>

      {/* ✅ Bottom Divider */}
      <div className="border-t mt-10 pt-6 text-center text-gray-600 text-sm">
        Made with love by{" "} <br />
        <a href="#" className="underline hover:text-black transition">
          thecreation.design
        </a>
      </div>
    </footer>
  );
};

export default Footer;


