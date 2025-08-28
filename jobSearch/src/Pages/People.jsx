import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { HiSearch, HiLocationMarker } from "react-icons/hi";
import {
  FiUser,
  FiMapPin,
  FiBriefcase,
  FiMail,
  FiLinkedin,
} from "react-icons/fi";

export default function People() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");

  const people = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Frontend Developer",
      company: "Infosys",
      location: "Bangalore, India",
      experience: "5 years",
      skills: ["React", "TypeScript", "Node.js", "GraphQL"],
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "Passionate frontend developer with expertise in modern web technologies. Love building user-centric applications.",
      connections: 2500,
      verified: true,
    },
    {
      id: 2,
      name: "Arjun Patel",
      role: "Product Manager",
      company: "Flipkart",
      location: "Mumbai, India",
      experience: "7 years",
      skills: ["Product Strategy", "Analytics", "Leadership", "Agile"],
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Product leader focused on building scalable solutions that impact millions of users across India.",
      connections: 3200,
      verified: true,
    },
    {
      id: 3,
      name: "Sneha Reddy",
      role: "UX Designer",
      company: "Zomato",
      location: "Delhi, India",
      experience: "4 years",
      skills: ["Figma", "Sketch", "Prototyping", "User Research"],
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "Creative UX designer passionate about creating intuitive and delightful user experiences for food tech.",
      connections: 1800,
      verified: true,
    },
    {
      id: 4,
      name: "Rahul Kumar",
      role: "Data Scientist",
      company: "Paytm",
      location: "Noida, India",
      experience: "6 years",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Data scientist with expertise in fintech analytics and recommendation systems for digital payments.",
      connections: 2100,
      verified: false,
    },
    {
      id: 5,
      name: "Kavya Nair",
      role: "DevOps Engineer",
      company: "ICICI Bank",
      location: "Hyderabad, India",
      experience: "5 years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      avatar:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      bio: "DevOps engineer specializing in cloud infrastructure and automation solutions for banking systems.",
      connections: 1900,
      verified: true,
    },
    {
      id: 6,
      name: "Vikram Singh",
      role: "Backend Developer",
      company: "Swiggy",
      location: "Bangalore, India",
      experience: "4 years",
      skills: ["Java", "Spring", "Microservices", "Redis"],
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      bio: "Backend developer focused on building scalable and high-performance systems for food delivery.",
      connections: 1600,
      verified: false,
    },
  ];

  const PersonCard = ({ person }) => {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group hover:scale-105">
        <div className="text-center mb-6">
          <div className="relative inline-block">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-gray-100 group-hover:border-blue-200 transition-all duration-300"
            />
            {person.verified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-4 group-hover:text-blue-600 transition-colors duration-300">
            {person.name}
          </h3>
          <p className="text-blue-600 font-semibold">{person.role}</p>
          <p className="text-gray-600">{person.company}</p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <FiMapPin className="text-lg" />
            <span>{person.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FiBriefcase className="text-lg" />
            <span>{person.experience} experience</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FiUser className="text-lg" />
            <span>{person.connections} connections</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {person.bio}
        </p>

        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-2">Skills:</p>
          <div className="flex flex-wrap gap-2">
            {person.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
            {person.skills.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                +{person.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm">
            Connect
          </button>
          <button className="p-2 border border-gray-300 text-gray-600 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
            <FiMail className="text-lg" />
          </button>
          <button className="p-2 border border-gray-300 text-gray-600 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
            <FiLinkedin className="text-lg" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center text-white mb-8">
            <h1 className="text-5xl font-bold mb-4">
              Connect with Professionals
            </h1>
            <p className="text-xl opacity-90">
              Discover and network with talented individuals in India's tech
              industry
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Name or skills"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="relative">
                <HiLocationMarker className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Roles</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
                <option value="analyst">Analyst</option>
              </select>

              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Search People
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{people.length}</span>{" "}
              professionals
            </p>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Sort by Relevance</option>
              <option>Sort by Connections</option>
              <option>Sort by Experience</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {people.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More People
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
