import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactBg from "../assets/images/contactBg.png";
import contactdreamImg from "../assets/images/contactdreamlast.png";

const ContactUs = () => {
  // ✅ Form State
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", number: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ✅ Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
      </header>

      {/* ✅ Hero Section */}
      <section
        className="relative w-screen h-[80vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-end text-right overflow-hidden pr-10 md:pr-24"
        style={{
          backgroundImage: `url(${contactBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-right px-6 md:px-16">
          <h1
            className="text-4xl md:text-7xl font-bold text-white leading-snug md:leading-[1.5] text-center"
            style={{
              lineHeight: "1.6",
            }}
          >
            <span className="block mb-4">We bring</span>
            <span className="block mb-4">dream weddings</span>
            <span className="block mb-4">to life!</span>
          </h1>
        </div>
      </section>

     {/* ✅ Contact Section (Form Left + Info Right) */}
<section className="w-full bg-white py-20 px-10 md:px-20 flex flex-col md:flex-row items-start justify-between gap-10">
  {/* Left: Contact Form */}
  <div className="md:w-1/2 bg-white p-8 shadow-md rounded-md">
    <h2 className="text-6xl font-semibold text-gray-900 mb-8">Say Hello!</h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Full Name */}
      <div>
        <label className="block text-2xl font-semibold text-gray-800 mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: "600px", height: "82px" }}
          className="border border-gray-300 rounded-md px-4 text-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
      </div>

      {/* Contact Number */}
      <div>
        <label className="block text-2xl font-semibold text-gray-800 mb-2">
          Contact Number
        </label>
        <input
          type="text"
          name="number"
          placeholder="Contact Number"
          value={formData.number}
          onChange={handleChange}
          style={{ width: "600px", height: "82px" }}
          className="border border-gray-300 rounded-md px-4 text-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-2xl font-semibold text-gray-800 mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "600px", height: "82px" }}
          className="border border-gray-300 rounded-md px-4 text-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-2xl font-semibold text-gray-800 mb-2">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          style={{ width: "600px", height: "343px" }}
          className="border border-gray-300 rounded-md px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        style={{ width: "600px", height: "82px" }}
        className="bg-gray-400 hover:bg-gray-500 text-white font-semibold text-2xl rounded-md transition"
      >
        Submit
      </button>
    </form>
  </div>

  {/* Right: Info Section */}
  <div className="md:w-1/2 flex flex-col justify-center items-start">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">Vendors</h2>
    <p className="text-2xl text-gray-700 leading-relaxed mb-8">
      If you are a registered vendor or a business looking to promote
      your brand on our portal, please send in <br /> your queries at
      <span className=" text-black underline ml-1">
        vendors@company.com
      </span>
    </p>

    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      Marketing Collaborations
    </h2>
    <p className="text-2xl text-gray-700 leading-relaxed mb-6">
      For brand collaborations - sponsored content, social <br /> media activations
      etc., please write into
      <br />
      <span className=" text-black underline ml-1">
        partnerships@company.com
      </span>
    </p>

    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      Wedding Submissions
    </h2>
    <p className="text-2xl text-gray-700 leading-relaxed mb-6">
      Company Name features weddings across cultures, <br />
      styles and budgets. To submit your wedding, kindly <br />
      email us 15-20 photos at 
      <span className="text-black underline ml-1">
        submissions@company.com
      </span>
    </p>

    <h2 className="text-4xl font-bold text-gray-900 mb-6">Careers</h2>
    <p className="text-2xl text-gray-700 leading-relaxed mb-6">
      We are a team of passionate young minds looking to <br />
      reinvent the wedding space. Please check our Careers <br /> page for
      current openings and email us at
      <span className=" text-black underline ml-1">
        hr@company.com
      </span>
    </p>

    <h2 className="text-4xl font-bold text-gray-900 mb-6">Customers</h2>
    <p className="text-2xl text-gray-700 leading-relaxed mb-6">
      We love to hear from our precious users. For any 
      feedback or queries simply write in to
      <br />
      <span className=" text-black underline ml-1">
        info@company.com
      </span>
    </p>
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
                    src={contactdreamImg}
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

export default ContactUs;

