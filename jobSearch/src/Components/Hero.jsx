import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FiBriefcase, FiTrendingUp, FiUsers } from "react-icons/fi";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const popularSearches = [
    "Frontend Developer", "Data Scientist", "UI/UX Designer", 
    "Product Manager", "DevOps Engineer"
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-[70vh] py-20 px-6">
        {/* Main Heading */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold text-gray-900 leading-tight mb-6">
            Find your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              dream jobs
            </span>{" "}
            <br />
            in{" "}
            <span className="relative">
              New Castle
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover thousands of opportunities waiting for you. Start your journey to success today.
          </p>
        </div>

        {/* Search Bar */}
        <div className={`relative lg:w-3/5 w-full max-w-4xl transition-all duration-500 ${isSearchFocused ? 'scale-105' : ''}`}>
          <div className="flex items-center bg-white border-2 border-blue-200 rounded-2xl h-20 py-3 px-3 shadow-xl hover:shadow-2xl transition-all duration-300 relative">
            {/* Search Input */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Job title or keyword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full h-full pl-16 pr-4 text-xl bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
              />
              <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-blue-500" />
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-gray-200 mx-4"></div>

            {/* Location Input */}
            <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 min-w-[200px] hover:bg-gray-100 transition-colors duration-300">
              <IoLocationOutline className="text-2xl text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Any location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent border-none outline-none text-lg text-gray-700 placeholder-gray-400 flex-1"
              />
            </div>

            {/* Search Button */}
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-8 py-3 ml-3 font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Search
            </button>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4 text-lg">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => setSearchTerm(search)}
                className="px-6 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <FiBriefcase className="text-2xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">50K+</h3>
            <p className="text-gray-600">Active Jobs</p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <FiUsers className="text-2xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">100K+</h3>
            <p className="text-gray-600">Happy Candidates</p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <FiTrendingUp className="text-2xl text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}