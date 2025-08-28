import { useState } from "react";
import { HiStar } from "react-icons/hi";
import { FiUsers, FiTarget, FiShield, FiClock } from "react-icons/fi";

export default function Why_customers() {
  const features = [
    {
      icon: FiTarget,
      title: "Smart Job Matching",
      description:
        "Our AI-powered algorithm matches you with the perfect job opportunities based on your skills and preferences.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FiUsers,
      title: "Top Companies",
      description:
        "Connect with leading Indian companies like TCS, Flipkart, Zomato, and many more industry leaders.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: FiShield,
      title: "Verified Opportunities",
      description:
        "All job listings are verified and authenticated to ensure you're applying to legitimate positions.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FiClock,
      title: "24/7 Support",
      description:
        "Get round-the-clock assistance from our dedicated support team throughout your job search journey.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at TCS",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content:
        "Jobline helped me land my dream job at TCS. The platform made job searching so much easier with personalized recommendations!",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      role: "Product Manager at Flipkart",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content:
        "Found my ideal role through Jobline. The quality of opportunities here is exceptional, especially for Indian companies.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      role: "UX Designer at Zomato",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content:
        "Amazing experience! The user interface is intuitive and the job matching algorithm really understands what I'm looking for.",
      rating: 5,
    },
  ];

  const stats = [
    { count: "50K+", label: "Active Jobs", color: "text-slate-600" },
    { count: "1L+", label: "Happy Users", color: "text-orange-600" },
    { count: "94%", label: "Success Rate", color: "text-emerald-600" },
    { count: "24/7", label: "Support", color: "text-red-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Jobline?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for job seekers across
            India
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-200 hover:scale-105"
              >
                <div
                  className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-4`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.count}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
