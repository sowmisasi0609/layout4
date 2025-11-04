import React from "react";
import dreamImg from "../assets/images/dreams.png"; // ✅ replace with your actual image

const DreamsSection = () => {
  return (
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
            src={dreamImg}
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
          <p className="text-gray-900  text-4xl mb-8 leading-relaxed">
            The "best" wedding photography <br /> style is subjective and depends on <br />
            the couple's preferences.
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
  );
};

export default DreamsSection;

