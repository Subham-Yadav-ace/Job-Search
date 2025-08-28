import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { HiSearch, HiFilter } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FiClock, FiDollarSign, FiBriefcase } from "react-icons/fi";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [sortBy, setSortBy] = useState("recent");

  const toggleSaveJob = (id) => {
    setSavedJobs((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
    );
  };

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Infosys",
      location: "Bangalore, India",
      type: "Full Time",
      experience: "3-5 years",
      salary: "₹12L - ₹18L",
      posted: "2 days ago",
      logo: "/tcs-logo.png",
      description:
        "Join our team to build the next generation of web applications using React and modern technologies...",
      skills: ["React", "TypeScript", "Node.js"],
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Flipkart",
      location: "Mumbai, India",
      type: "Full Time",
      experience: "5+ years",
      salary: "₹25L - ₹35L",
      posted: "1 day ago",
      logo: "/flipkart-logo.png",
      description:
        "Lead product strategy and development for our e-commerce platform...",
      skills: ["Product Strategy", "Analytics", "Leadership"],
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Zomato",
      location: "Delhi, India",
      type: "Full Time",
      experience: "2-4 years",
      salary: "₹10L - ₹15L",
      posted: "3 days ago",
      logo: "/zomato-logo.png",
      description:
        "Design intuitive user experiences for our food delivery platform...",
      skills: ["Figma", "Sketch", "Prototyping"],
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Paytm",
      location: "Noida, India",
      type: "Full Time",
      experience: "2-3 years",
      salary: "₹8L - ₹12L",
      posted: "4 days ago",
      logo: "/paytm-logo.png",
      description:
        "Build scalable backend systems for digital payment solutions...",
      skills: ["Java", "Spring Boot", "Microservices"],
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Swiggy",
      location: "Bangalore, India",
      type: "Full Time",
      experience: "3+ years",
      salary: "₹15L - ₹22L",
      posted: "5 days ago",
      logo: "/amazon.png",
      description:
        "Analyze user behavior and improve recommendation algorithms for food delivery...",
      skills: ["Python", "Machine Learning", "SQL"],
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "ICICI Bank",
      location: "Hyderabad, India",
      type: "Full Time",
      experience: "4+ years",
      salary: "₹14L - ₹20L",
      posted: "1 week ago",
      logo: "/amazon.png",
      description:
        "Manage cloud infrastructure and deployment pipelines for banking systems...",
      skills: ["AWS", "Docker", "Kubernetes"],
    },
  ];

  const JobCard = ({ job }) => {
    const isSaved = savedJobs.includes(job.id);

    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group hover:scale-105">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
              <img
                src={job.logo}
                alt={job.company}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {job.title}
              </h3>
              <p className="text-gray-600 font-medium">{job.company}</p>
            </div>
          </div>
          <button
            onClick={() => toggleSaveJob(job.id)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            {isSaved ? (
              <HiHeart className="text-xl text-red-500" />
            ) : (
              <HiOutlineHeart className="text-xl text-gray-400 hover:text-red-500" />
            )}
          </button>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <IoLocationOutline className="text-lg" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiBriefcase className="text-lg" />
              <span>{job.type}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <FiDollarSign className="text-lg" />
              <span className="font-semibold text-green-600">{job.salary}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-lg" />
              <span>{job.posted}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Apply Now
          </button>
          <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center text-white mb-8">
            <h1 className="text-5xl font-bold mb-4">Find Your Dream Job</h1>
            <p className="text-xl opacity-90">
              Discover thousands of opportunities from top Indian companies
            </p>
          </div>

          {/* Search Section */}
          <div className="bg-white rounded-2xl p-6 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="relative">
                <IoLocationOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Job Type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>

              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-xl hover:border-blue-400 transition-colors duration-300">
              <HiFilter className="text-lg" />
              <span>Filters</span>
            </button>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Experience Level</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="recent">Most Recent</option>
              <option value="salary">Highest Salary</option>
              <option value="relevance">Most Relevant</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{jobs.length}</span> jobs
            out of <span className="font-semibold">10,000+</span>
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Jobs
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
