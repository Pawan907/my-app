import React, { useState } from 'react';

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="relative font-poppins">
      {/* Button to Open Profile */}
      <button
        onClick={() => setShowProfile(true)}
        className="text-white px-5 py-2 mt-4 ml-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg transition-all"
      >
        View Profile
      </button>

      {/* Slide-In Profile Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 md:w-96 bg-gradient-to-br from-[#1a1c2c] via-[#2e2e40] to-[#1a1c2c] text-white transform transition-transform duration-500 ease-in-out z-50 shadow-2xl border-l-2 border-indigo-500 ${
          showProfile ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center p-4 border-b border-gray-600 bg-opacity-30 backdrop-blur">
          <h2 className="text-2xl font-bold tracking-wide font-mono">👤 My Profile</h2>
          <button
            onClick={() => setShowProfile(false)}
            className="text-white text-2xl hover:text-red-400"
          >
            &times;
          </button>
        </div>

        {/* Profile Info */}
        <div className="p-6 space-y-4 font-sans">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/100" // replace with your image
              alt="Profile"
              className="rounded-full w-28 h-28 border-4 border-indigo-500 shadow-xl"
            />
          </div>

          {/* Name and Role */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">Pawan Vashisth</h3>
            <p className="text-sm text-gray-300">MCA Student | React Developer</p>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-200 leading-relaxed">
            I'm passionate about web development. I build responsive applications using React and modern tools. Always learning and solving problems.
          </p>
        </div>
      </div>

      {/* Background Overlay */}
      {showProfile && (
        <div
          onClick={() => setShowProfile(false)}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
        />
      )}
    </div>
  );
};

export default Header;
