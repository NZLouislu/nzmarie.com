"use client";

import React from "react";

export default function Qualifications() {
  return (
    <section className="qualification-area pt-100 pb-80">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              My Qualifications
            </h1>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-6xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left side - Work Experience */}
              <div className="qty-left">
                <div className="single-qly mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 uppercase mb-2">
                    Account Manager
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    Apr 2009 - 2021
                  </p>
                  <h4 className="text-xl font-semibold text-gray-700 mb-4">
                    HuaTai Securities Co.,Ltd.
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    The job description included developing new clients and
                    managing the daily communication of the clients, answering
                    the problems encountered in the transactions of the clients,
                    and holding regular reporting meetings. Learn some
                    compliance documents and money management safety rules.
                  </p>
                </div>

                <div className="btm-border mx-auto mb-8 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>

                <div className="single-qly">
                  {/* Add additional work experience if needed */}
                </div>
              </div>

              {/* Right side - Education */}
              <div className="qty-right">
                <div className="single-qly mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    New Zealand Certificate in Real Estate (Salesperson)
                  </h4>
                  <p className="text-blue-600 font-semibold mb-2">
                    Oct 2022—Jan 2024
                  </p>
                  <p className="text-gray-700 font-medium">
                    Open Polytechnic of New Zealand
                  </p>
                </div>

                <div className="btm-border mx-auto mb-8 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>

                <div className="single-qly">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    Masters of Arts in Economics
                  </h4>
                  <p className="text-blue-600 font-semibold mb-2">
                    Mar 2010—Jul 2011
                  </p>
                  <p className="text-gray-700 font-medium">
                    People&apos;s University of China Beijing China
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
