"use client";

import React from "react";

export default function Services() {
  const services = [
    {
      icon: "👤",
      title: "Understand the real estate market",
      description:
        "We can provide vendors with market reports, which summarize current trends and prices. We can also help vendors understand the different types of properties available and the factors that influence property values.",
    },
    {
      icon: "🏠",
      title: "Providing property showings",
      description:
        "We can schedule showings for potential buyers and accompany them on the tours. We can answer buyer questions and highlight the property's strengths.",
    },
    {
      icon: "💎",
      title: "Price assessments",
      description:
        "We can use knowledge of the market to provide vendors with an accurate estimate of their property's value. We can also help vendors consider factors such as the property's condition, location, and current market conditions when setting a price.",
    },
    {
      icon: "🚀",
      title: "Promoting properties",
      description:
        "We can list properties on websites, advertise in newspapers and magazines, and attend open homes. We can also network with other real estate agents and brokers to reach a wider audience.",
    },
    {
      icon: "📞",
      title: "Negotiating for vendors",
      description:
        "We can represent vendors in negotiations with buyers. We can use knowledge of the market and negotiating skills to reach a fair deal for both parties.",
    },
    {
      icon: "💬",
      title: "Providing after-sales service",
      description:
        "We can help vendors with the closing process and answer any questions they may have after the sale. And we can also provide referrals for services such as home inspections and title insurance.",
    },
  ];

  return (
    <section className="feature-area pt-100" id="service">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              Why Choose My Services?
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am more than just a real estate agent; I am your trusted
              property guide in the dynamic New Zealand market. Beyond merely
              facilitating sales, I specialize in customizing services to meet
              the distinctive needs of each client. This commitment guarantees a
              smooth and successful journey toward achieving your real estate
              objectives.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="single-feature">
              <div className="title flex items-start gap-4 mb-5">
                <span className="text-3xl">{service.icon}</span>
                <h4 className="text-xl font-semibold text-gray-800">
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    {service.title}
                  </a>
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
