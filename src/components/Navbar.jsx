import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    setActive(item);
    if (item === "Home") navigate("/");
    else if (item === "Venue") navigate("/venue");
    else if (item === "Suppliers") navigate("/suppliers");
    else if (item === "Media") navigate("/media");
    else if (item === "About") navigate("/about");
    else if (item === "Contact") navigate("/contact");
    else if (item === "Login") navigate("/login");
    else if (item === "Signup") navigate("/signup");
  };

  const menuItems = [
    "Home",
    "Venue",
    "Suppliers",
    "Media",
    "About",
    "Contact",
    "Login",
    "Signup",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-12 py-3">
        {/* ✅ Logo (clickable - goes Home) */}
        <div
          onClick={() => navigate("/")}
          className="flex-shrink-0 cursor-pointer"
        >
          <img
            src={logo}
            alt="One Event Logo"
            className="w-[150px] h-auto object-contain"
          />
        </div>

        {/* ✅ Evenly Spaced Menu Items */}
        <ul className="flex flex-1 justify-between text-black text-lg font-medium ml-12">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => handleNavigation(item)}
              className={`cursor-pointer transition-all duration-200 
                ${active === item ? "font-bold underline" : ""}
                hover:font-bold hover:underline`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;






