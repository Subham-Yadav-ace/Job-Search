import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiBell, FiUser, FiHeart } from "react-icons/fi";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn] = useState(true);
  const location = useLocation();

  const currentUser = {
    name: "Subham Yadav",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    loginTime: "2025-08-28 08:35:22",
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const navItems = [
    { path: "/jobs", label: "Find jobs" },
    { path: "/people", label: "People" },
    { path: "/hiring", label: "Hiring site" },
    { path: "/resume", label: "Resume" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`w-full h-24 flex flex-col justify-center items-center fixed z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto lg:px-6">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-x-2 group cursor-pointer"
          >
            <div className="flex items-center lg:text-5xl text-3xl">
              <button className="rounded-2xl py-2 px-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 lg:text-5xl text-3xl outline-none border-none font-bold transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                Jo
              </button>
              <p className="font-bold leading-tight ml-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                bline
              </p>
            </div>
          </Link>

          <div className="flex-1 flex justify-center items-center xl:gap-12 gap-x-6 max-lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative leading-normal no-underline font-bold text-lg transition-all duration-300 hover:scale-105 ${
                  isActive(item.path)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          <div className="flex max-lg:hidden gap-x-4 items-center">
            {isLoggedIn ? (
              <>
                <button className="p-3 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 relative">
                  <FiHeart className="text-xl" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>

                <button className="p-3 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 relative">
                  <FiBell className="text-xl" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
                    2
                  </span>
                </button>

                <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-900">
                      {currentUser.name}
                    </p>
                    <p className="text-xs text-gray-500">Online</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <button className="rounded-2xl bg-gray-100 text-lg text-gray-700 border-none font-bold px-8 py-3 hover:bg-gray-200 hover:scale-105 transition-all duration-300">
                  Sign Up
                </button>

                <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-lg text-white border-none font-bold px-8 py-3 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Sign In
                </button>
              </>
            )}
          </div>

          <button
            onClick={showDropdown}
            className="lg:hidden text-2xl cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2 rounded-xl hover:bg-blue-50"
          >
            {dropdown ? <MdClose /> : <HiMenuAlt3 />}
          </button>
        </div>

        {dropdown && (
          <div className="lg:hidden fixed inset-0 top-24 bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full min-h-screen pt-8 px-6 animate-slide-down">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setDropdown(false)}
                    className={`text-left py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {isLoggedIn ? (
                  <div className="pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-3 px-6 py-4">
                      <img
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {currentUser.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Logged in at {currentUser.loginTime}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 pt-8">
                    <button className="w-full rounded-2xl bg-gray-100 text-lg text-gray-700 border-none font-bold py-4 hover:bg-gray-200 transition-all duration-300">
                      Sign Up
                    </button>
                    <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-lg text-white border-none font-bold py-4 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Sign In
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
