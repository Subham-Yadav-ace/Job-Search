import { useState } from "react";
import { HiGlobe } from "react-icons/hi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { BiChart } from "react-icons/bi";
import { PiPaintBrushThin } from "react-icons/pi";
import { GiHamburger } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { TiWaves } from "react-icons/ti";
import { GoLaw } from "react-icons/go";
import { TbWhirl } from "react-icons/tb";
import { FaCalculator } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { MdImportContacts } from "react-icons/md";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

export default function Featured_jobs() {
  const [filter, setFilter] = useState("all");
  const [savedJobs, setSavedJobs] = useState([]);

  const toggleSaveJob = (id) => {
    setSavedJobs((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
    );
  };

  const jobs = [
    {
      id: 1,
      bg1: "#f8fafc",
      bg2: "#475569",
      color: "#64748b",
      company: "Infosys",
      icon1: <BiChart size={40} />,
      icon2: <HiOutlinePencilSquare size={30} />,
      location: "Bangalore, India",
      position: "Financial Analyst",
      title: "Finance",
      type: "Full Time",
      salary: "₹6,50,000 - ₹8,50,000",
    },
    {
      id: 2,
      bg1: "#f1f5f9",
      bg2: "#0f172a",
      color: "#334155",
      company: "Wipro",
      icon1: <PiPaintBrushThin size={40} />,
      icon2: <GiHamburger size={30} />,
      location: "Pune, India",
      position: "Web Developer",
      title: "Development",
      type: "Internship",
      salary: "₹3,50,000 - ₹4,50,000",
    },
    {
      id: 3,
      bg1: "#fef7ed",
      bg2: "#9a3412",
      color: "#c2410c",
      company: "Flipkart",
      icon1: <GrAnnounce size={40} />,
      icon2: <MdImportContacts size={30} />,
      location: "Mumbai, India",
      position: "Team Leader",
      title: "Marketing",
      type: "Remote",
      salary: "₹12,00,000 - ₹15,00,000",
    },
    {
      id: 4,
      bg1: "#f0f9ff",
      bg2: "#0c4a6e",
      color: "#0369a1",
      company: "Zomato",
      icon1: <IoPersonCircleSharp size={40} />,
      icon2: <TbWhirl size={30} />,
      location: "Delhi, India",
      position: "HR Coordinator",
      title: "Human Resource",
      type: "Contract",
      salary: "₹5,50,000 - ₹7,00,000",
    },
    {
      id: 5,
      bg1: "#fef2f2",
      bg2: "#991b1b",
      color: "#dc2626",
      company: "Apollo Hospitals",
      icon1: <FaHeartPulse size={40} />,
      icon2: <GiHamburger size={30} />,
      location: "Chennai, India",
      position: "Healthcare Coordinator",
      title: "Health and Care",
      type: "Internship",
      salary: "₹4,00,000 - ₹5,50,000",
    },
    {
      id: 6,
      bg1: "#fffbeb",
      bg2: "#92400e",
      color: "#d97706",
      company: "ICICI Bank",
      icon1: <FaCalculator size={40} />,
      icon2: <TbWhirl size={30} />,
      location: "Hyderabad, India",
      position: "Senior Accountant",
      title: "Accounting",
      type: "Contract",
      salary: "₹8,00,000 - ₹10,00,000",
    },
    {
      id: 7,
      bg1: "#f0f9ff",
      bg2: "#1e3a8a",
      color: "#3b82f6",
      company: "Paytm",
      icon1: <IoPersonCircleSharp size={40} />,
      icon2: <HiOutlinePencilSquare size={30} />,
      location: "Noida, India",
      position: "Support Engineer",
      title: "Customer Services",
      type: "Full Time",
      salary: "₹6,00,000 - ₹8,00,000",
    },
    {
      id: 8,
      bg1: "#faf5ff",
      bg2: "#6b21a8",
      color: "#9333ea",
      company: "Swiggy",
      icon1: <GoLaw size={40} />,
      icon2: <TiWaves size={30} />,
      location: "Bangalore, India",
      position: "UI/UX Designer",
      title: "Designer",
      type: "Remote",
      salary: "₹9,00,000 - ₹12,00,000",
    },
  ];

  const filteredJobs =
    filter === "all"
      ? jobs
      : jobs.filter((job) =>
          job.type.toLowerCase().includes(filter.toLowerCase())
        );

  const Offers = ({
    id,
    icon1,
    title,
    position,
    location,
    type,
    company,
    icon2,
    bg1,
    color,
    bg2,
    salary,
  }) => {
    const isSaved = savedJobs.includes(id);

    return (
      <div className="group bg-white rounded-xl p-6 flex flex-col justify-between gap-5 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer border border-gray-200 hover:border-gray-300 relative overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-gray-50/0 group-hover:from-blue-50/30 group-hover:to-gray-50/30 transition-all duration-300 rounded-xl"></div>

        {/* Save button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleSaveJob(id);
          }}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
        >
          {isSaved ? (
            <HiHeart className="w-5 h-5 text-red-500" />
          ) : (
            <HiOutlineHeart className="w-5 h-5 text-gray-400 hover:text-red-500" />
          )}
        </button>

        <div className="relative z-10">
          <div className="flex items-center gap-x-3 mb-5">
            <div
              className="p-3 rounded-lg shadow-sm transition-all duration-200 group-hover:scale-105"
              style={{ backgroundColor: `${bg1}`, color: `${color}` }}
            >
              {icon1}
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                {title}
              </p>
              <p className="text-sm text-gray-500">15+ Openings</p>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">
              {position}
            </h3>
            <p className="text-lg font-medium text-green-600 mb-3">{salary}</p>

            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div className="flex items-center gap-x-2 text-gray-600">
                <HiGlobe className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium">{location}</span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  type === "Full Time"
                    ? "bg-green-100 text-green-700"
                    : type === "Internship"
                    ? "bg-blue-100 text-blue-700"
                    : type === "Remote"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {type}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">3 days ago by</p>
              <p className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                {company}
              </p>
            </div>
            <button
              className="rounded-lg p-2 text-white transition-all duration-200 hover:scale-105 hover:shadow-md"
              style={{ backgroundColor: `${bg2}` }}
            >
              {icon2}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Job Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover exciting career opportunities with India's top companies
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["all", "full time", "internship", "remote", "contract"].map(
            (filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                  filter === filterType
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md border border-gray-200"
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredJobs.map((job) => (
            <Offers key={job.id} {...job} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-md">
            View All Jobs ({jobs.length}+ available)
          </button>
        </div>
      </div>
    </section>
  );
}
