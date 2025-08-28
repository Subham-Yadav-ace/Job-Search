import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FiDownload, FiEdit, FiEye, FiPlus, FiTrash2 } from "react-icons/fi";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("builder");
  const [personalInfo, setPersonalInfo] = useState({
    name: "Subham Yadav",
    email: "subham@example.com",
    phone: "+91 888xxxx980",
    location: "Mumbai, India",
    title: "Frontend Developer",
    summary:
      "Passionate frontend developer with 3+ years of experience building modern web applications for Indian startups and MNCs...",
  });

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Mastercard",
      location: "Bangalore, India",
      startDate: "2022-01",
      endDate: "Present",
      description:
        "Led development of responsive web applications using React and TypeScript for enterprise clients...",
    },
  ]);

  const [skills, setSkills] = useState([
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "MongoDB",
  ]);

  const [newSkill, setNewSkill] = useState("");

  const templates = [
    { id: 1, name: "Modern", preview: "/resume-template-1.jpg", popular: true },
    {
      id: 2,
      name: "Classic",
      preview: "/resume-template-2.jpg",
      popular: false,
    },
    {
      id: 3,
      name: "Creative",
      preview: "/resume-template-3.jpg",
      popular: true,
    },
    {
      id: 4,
      name: "Minimal",
      preview: "/resume-template-4.jpg",
      popular: false,
    },
  ];

  const tips = [
    {
      title: "Keep it concise",
      description:
        "Limit your resume to 1-2 pages and focus on relevant experience for Indian companies.",
    },
    {
      title: "Use action verbs",
      description:
        "Start bullet points with strong action verbs like 'Led', 'Developed', 'Implemented'.",
    },
    {
      title: "Quantify achievements",
      description:
        "Include numbers and metrics to demonstrate your impact - especially important for Indian recruiters.",
    },
    {
      title: "Tailor for each job",
      description:
        "Customize your resume for each Indian company and position you apply to.",
    },
    {
      title: "Include relevant skills",
      description:
        "Highlight skills that are in demand in the Indian job market like React, Python, AWS.",
    },
    {
      title: "Add certifications",
      description:
        "Include relevant certifications from platforms like Coursera, Udemy, or AWS that are valued in India.",
    },
  ];

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Resume Builder</h1>
            <p className="text-xl opacity-90 mb-8">
              Create a professional resume that gets you noticed by Indian
              recruiters
            </p>

            {/* Section Tabs */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: "builder", label: "Resume Builder", icon: <FiEdit /> },
                { id: "templates", label: "Templates", icon: <FiEye /> },
                { id: "tips", label: "Tips & Advice", icon: <FiPlus /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeSection === tab.id
                      ? "bg-white text-blue-600"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Resume Builder Section */}
        {activeSection === "builder" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="space-y-8">
              {/* Personal Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={personalInfo.name}
                    onChange={(e) =>
                      setPersonalInfo({ ...personalInfo, name: e.target.value })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={personalInfo.email}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        email: e.target.value,
                      })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (+91 888xxxx980)"
                    value={personalInfo.phone}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        phone: e.target.value,
                      })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Location (City, India)"
                    value={personalInfo.location}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        location: e.target.value,
                      })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Professional Title"
                  value={personalInfo.title}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, title: e.target.value })
                  }
                  className="w-full mt-4 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Professional Summary"
                  value={personalInfo.summary}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      summary: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full mt-4 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Skills Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full"
                    >
                      {skill}
                      <button
                        onClick={() => removeSkill(skill)}
                        className="hover:text-red-500 transition-colors duration-300"
                      >
                        <FiTrash2 className="text-sm" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a skill (e.g., React, Python)"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={addSkill}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  <FiDownload />
                  Download PDF
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
                  <FiEye />
                  Preview
                </button>
              </div>
            </div>

            {/* Preview Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Resume Preview
              </h3>
              <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 min-h-[600px]">
                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {personalInfo.name}
                  </h1>
                  <p className="text-xl text-blue-600 font-semibold">
                    {personalInfo.title}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-2 text-gray-600">
                    <span>{personalInfo.email}</span>
                    <span>{personalInfo.phone}</span>
                    <span>{personalInfo.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">
                    Professional Summary
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {personalInfo.summary}
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">
                    Experience
                  </h2>
                  {experiences.map((exp) => (
                    <div key={exp.id} className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {exp.company} • {exp.location}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        {exp.startDate} - {exp.endDate}
                      </p>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Templates Section */}
        {activeSection === "templates" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose a Template
              </h2>
              <p className="text-xl text-gray-600">
                Select from our professionally designed templates optimized for
                Indian recruiters
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:scale-105"
                >
                  {template.popular && (
                    <div className="absolute -top-3 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  )}
                  <div className="bg-gray-200 rounded-xl h-64 mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Template Preview</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {template.name}
                  </h3>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Use Template
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips Section */}
        {activeSection === "tips" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Resume Writing Tips for Indian Job Market
              </h2>
              <p className="text-xl text-gray-600">
                Expert advice to make your resume stand out to Indian recruiters
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Need Professional Help?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Get your resume reviewed by Indian industry experts
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
