import { useState } from "react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { FiUsers, FiDollarSign, FiMapPin } from "react-icons/fi";
import { HiStar } from "react-icons/hi";

export default function Top_company() {
  const [savedCompanies, setSavedCompanies] = useState([]);

  const toggleSaveCompany = (id) => {
    setSavedCompanies((prev) =>
      prev.includes(id)
        ? prev.filter((companyId) => companyId !== id)
        : [...prev, id]
    );
  };

  const companies = [
    {
      id: 1,
      type: "Internship",
      img: "/tcs-logo.png",
      title: "Product Design",
      color: "#1e40af",
      bg_color: "#f0f9ff",
      salary: "₹4,50,000",
      employees: "10L+",
      rating: 4.2,
    },
    {
      id: 2,
      type: "Full Time",
      img: "/flipkart-logo.png",
      title: "Product Management",
      color: "#f97316",
      bg_color: "#fff7ed",
      salary: "₹18,00,000",
      employees: "50K+",
      rating: 4.1,
    },
    {
      id: 3,
      type: "Internship",
      img: "/zomato-logo.png",
      title: "Backend Developer",
      color: "#dc2626",
      bg_color: "#fef2f2",
      salary: "₹6,50,000",
      employees: "8K+",
      rating: 3.9,
    },
    {
      id: 4,
      type: "Remote",
      img: "/paytm-logo.png",
      title: "Data Analyst",
      color: "#059669",
      bg_color: "#f0fdf4",
      salary: "₹8,50,000",
      employees: "15K+",
      rating: 4.0,
    },
  ];

  const statsData = [
    {
      icon: FiUsers,
      count: "500+",
      label: "Top Companies",
      color: "from-slate-600 to-slate-700",
    },
    {
      icon: FiDollarSign,
      count: "₹12L",
      label: "Average Salary",
      color: "from-orange-600 to-orange-700",
    },
    {
      icon: HiStar,
      count: "4.1",
      label: "Average Rating",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: FiMapPin,
      count: "50+",
      label: "Cities",
      color: "from-emerald-600 to-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Top Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing career opportunities with India's leading companies
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {companies.map((company) => {
            const isSaved = savedCompanies.includes(company.id);
            return (
              <div
                key={company.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:scale-105"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: company.bg_color,
                      color: company.color,
                    }}
                  >
                    {company.type}
                  </span>
                  <button
                    onClick={() => toggleSaveCompany(company.id)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    {isSaved ? (
                      <HiHeart className="w-5 h-5 text-red-500" />
                    ) : (
                      <HiOutlineHeart className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Company Logo */}
                <div className="flex justify-center mb-4">
                  <img
                    src={company.img}
                    alt={company.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Company Info */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {company.title}
                  </h3>
                  <p
                    className="text-2xl font-bold mb-2"
                    style={{ color: company.color }}
                  >
                    {company.salary}
                  </p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{company.employees} employees</span>
                    <div className="flex items-center">
                      <HiStar className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>{company.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} mb-4`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.count}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
