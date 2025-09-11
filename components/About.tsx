"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  const skills = [
    { name: "Real Estate Client Service Skills", percentage: 100 },
    { name: "Market Analysis Skills", percentage: 100 },
    { name: "Office Support", percentage: 100 },
    { name: "Organizational Skills", percentage: 100 },
    { name: "Document Management", percentage: 100 },
  ];

  return (
    <section className="about-area section-gap" id="about">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              About Myself
            </h1>
            <p className="text-lg text-gray-600">
              Licensed Real Estate Consultant, Southern Star Realty, New Zealand
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side - Text content and skills */}
          <div className="lg:w-1/2">
            <div className="space-y-6 mb-12">
              <p className="text-gray-700 leading-relaxed">
                With over a decade of experience in finance as a broker for a
                Hong Kong-listed securities company, I&apos;ve developed a deep
                understanding of market trends, negotiation strategies, and
                decision-making. These skills have seamlessly transitioned into
                my real estate career, where I guide both buyers and sellers
                with confidence and expertise.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Since moving to New Zealand, I&apos;ve immersed myself in the
                country&apos;s vibrant real estate market, combining my
                international expertise with a deep understanding of local
                trends and community dynamics. Now based in Wellington, and as
                part of the Southern Star Realty Ltd team, I&apos;m dedicated to
                providing personalized service and expert advice to help my
                clients achieve their property goals.
              </p>

              <h5 className="text-xl font-semibold text-gray-800 pt-8">
                Let&apos;s work together to make your next move the best one
                yet.
                <br />
                Get in touch with me today!
              </h5>
            </div>

            {/* Skills section */}
            <div>
              <h4 className="text-2xl font-bold mb-8 text-gray-800">
                Experience
              </h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="skillbar">
                    <div className="skill-bar-percent">{skill.name}</div>
                    <div className="skillwrap">
                      <div
                        className="skillbar-bar"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Profile card */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="myself-wrap bg-white rounded-lg shadow-lg overflow-hidden max-w-sm">
              <div className="relative">
                <Image
                  src="/img/about-img.jpg"
                  alt="Marie Nian - Licensed Real Estate Consultant"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="desc p-6">
                <h4 className="text-2xl font-bold mb-2 text-gray-800">
                  Marie Nian
                </h4>
                <p className="text-gray-600 mb-4">
                  Licensed Real Estate Consultant, Southern Star Realty
                </p>

                <div className="contact-info space-y-2 mb-6">
                  <p className="flex items-center text-gray-700">
                    <span className="w-5 h-5 mr-3 text-blue-600">📞</span>
                    (+64) 21 069 3089
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="w-5 h-5 mr-3 text-blue-600">✉️</span>
                    marie@ssrealty.co.nz
                  </p>
                </div>

                <a
                  href="#contact"
                  className="talk-btn block text-center w-full"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
