import { useState } from "react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { FiMapPin, FiClock, FiBriefcase } from "react-icons/fi";

export default function Recommended_jobs() {
  const [savedJobs, setSavedJobs] = useState([]);

  const toggleSaveJob = (id) => {
    setSavedJobs((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
    );
  };

  const jobs = [
    {
      id: 1,
      amount: "8,00,000-12,00,000",
      bgColor: "#f8fafc",
      color: "#475569",
      country: "Bangalore, India",
      job: "Software Development",
      time: "3",
      title: "Senior Software Engineer",
      type: "Full-time",
      company: "Infosys",
    },
    {
      id: 2,
      amount: "3,50,000-5,00,000",
      bgColor: "#fef7ed",
      color: "#c2410c",
      country: "Pune, India",
      job: "Frontend Development",
      time: "1",
      title: "Junior Developer",
      type: "Internship",
      company: "Wipro",
    },
    {
      id: 3,
      amount: "15,00,000-20,00,000",
      bgColor: "#f0f9ff",
      color: "#0369a1",
      country: "Mumbai, India",
      job: "Product Management",
      time: "2",
      title: "Product Manager",
      type: "Full-time",
      company: "Flipkart",
    },
  ];

  const Recommended = ({
    id,
    time,
    type,
    title,
    amount,
    country,
    job,
    bgColor,
    color,
    company,
  }) => {
    const isSaved = savedJobs.includes(id);

    return (
      <div className="group w-full rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300 hover:scale-[1.02]">
        <div className="p-6" style={{ backgroundColor: bgColor }}>
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-2">
              <span
                className="px-3 py-1 bg-white rounded-full text-sm font-medium"
                style={{ color }}
              >
                {type}
              </span>
              <span className="text-sm text-gray-600">{time} days ago</span>
            </div>
            <button
              onClick={() => toggleSaveJob(id)}
              className="p-2 rounded-full hover:bg-white/50 transition-colors"
            >
              {isSaved ? (
                <HiHeart className="w-5 h-5 text-red-500" />
              ) : (
                <HiOutlineHeart className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>

          {/* Job Details */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-xl font-medium text-green-700 mb-2">
              ₹{amount} / yearly
            </p>
            <p className="text-gray-600 mb-4">at {company}</p>
            <p className="text-gray-600">
              {job} position with competitive benefits
            </p>
          </div>

          {/* Job Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <FiMapPin className="w-4 h-4 mr-1" />
              {country}
            </div>
            <div className="flex items-center">
              <FiBriefcase className="w-4 h-4 mr-1" />
              {job}
            </div>
            <div className="flex items-center">
              <FiClock className="w-4 h-4 mr-1" />
              {type}
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02]">
            Apply Now
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recommended Jobs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover job opportunities tailored just for you
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <Recommended
              key={job.id}
              id={job.id}
              time={job.time}
              type={job.type}
              title={job.title}
              amount={job.amount}
              country={job.country}
              job={job.job}
              bgColor={job.bgColor}
              color={job.color}
              company={job.company}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
