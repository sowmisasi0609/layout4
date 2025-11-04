import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LiveChat from "./pages/LiveChat";
import Venue from "./pages/Venue";
import Suppliers from "./pages/Suppliers";
import Media from "./pages/Media";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";


function App() {
  const location = useLocation();

  // ✅ Hide Navbar only on /livechat
  const hideNavbar = location.pathname === "/livechat";

  return (
    <div className="overflow-x-hidden w-full min-h-screen bg-white">
      {/* ✅ Conditionally render Navbar */}
      {!hideNavbar && <Navbar />}

      {/* ✅ Page Content */}
      <div className={!hideNavbar ? "pt-[100px]" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livechat" element={<LiveChat />} />
          <Route path="/venue" element={<Venue />} />
           <Route path="/suppliers" element={<Suppliers />} />
           <Route path="/media" element={<Media />} />
           <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;





