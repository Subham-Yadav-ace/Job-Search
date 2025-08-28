import { FaFacebookF, FaLinkedinIn, FaSlack, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready For Your Next Hire With Us?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl">
              Along with conventional advertising & below the line activities &
              organizations have come to realize that they need to invest
            </p>
          </div>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 whitespace-nowrap">
            Login to Community
          </button>
        </div>
      </div>

      {/* Main Footer Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <button className="bg-blue-600 text-white p-3 rounded-lg text-xl font-bold">
                  Jo
                </button>
                <p className="text-2xl font-bold">Jobline</p>
              </div>
              <div className="mb-6">
                <p className="text-blue-400 font-semibold mb-2">Call us</p>
                <p className="text-xl font-semibold">(123) 456-7890</p>
              </div>
              <div className="text-gray-400">
                <p>90 Fifth Avenue, 3rd Floor</p>
                <p>San Francisco, CA 1980</p>
                <p className="text-blue-400">office@jobline.com</p>
              </div>
            </div>

            {/* Community */}
            <div>
              <h6 className="text-lg font-semibold mb-6 text-white">
                Community
              </h6>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Against Discrimination
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Invite friends
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Gift cards
                  </a>
                </li>
              </ul>
            </div>

            {/* Bookings Support */}
            <div>
              <h6 className="text-lg font-semibold mb-6 text-white">
                Bookings support
              </h6>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    COVID-19
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Trust & Safety
                  </a>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h6 className="text-lg font-semibold mb-6 text-white">About</h6>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Media
                  </a>
                </li>
              </ul>
            </div>

            {/* Become an Employer */}
            <div>
              <h6 className="text-lg font-semibold mb-6 text-white">
                Become an employer
              </h6>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Post your job
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Business account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Resource Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-center md:text-left">
            All rights reserved. Isratech
          </p>
          <div className="flex items-center gap-4">
            <FaFacebookF
              size={24}
              className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:scale-110"
            />
            <FaTwitter
              size={24}
              className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:scale-110"
            />
            <FaSlack
              size={24}
              className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:scale-110"
            />
            <FaLinkedinIn
              size={24}
              className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
