"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Sending test email with data:", formData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `${formData.subject} - Website Development Test`,
          message: `${formData.message}\n\n--- This is a test message for Marie's real estate website development ---\nTesting email functionality to marie@ssrealty.co.nz`,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("API Response:", result);
        alert(
          `✅ Test Successful!\n\n${formData.name}, your test message has been submitted.\n\n📧 This is a website development test\n📍 Target email: marie@ssrealty.co.nz\n\nIn production environment, Marie will receive real email notifications.`
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Email sending failed:", error);

      // Fallback: Create a mailto link for direct email
      const subject = encodeURIComponent(
        `${formData.subject} - Website Contact`
      );
      const body = encodeURIComponent(
        `Hi Marie,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
      );
      const mailtoLink = `mailto:marie@ssrealty.co.nz?subject=${subject}&body=${body}`;

      alert(
        `❌ Test Failed\n\nAutomatic sending encountered an issue.\n\n🔧 Alternative option:\nAfter clicking OK, an email client will open. You can send an email directly to Marie.\n\n📧 Target: marie@ssrealty.co.nz`
      );

      window.open(mailtoLink, "_blank");
    }
  };

  return (
    <section className="contact-area section-gap" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Contact Marie Nian - Real Estate Consultant
            </h1>
            <p className="text-lg text-gray-600">
              Marie Nian, Licensed Real Estate Consultant, Southern Star Realty,
              New Zealand
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="contact-form grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Left side - Form inputs */}
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="common-input"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                className="common-input"
                required
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                className="common-input"
                required
              />
            </div>

            {/* Right side - Textarea and submit button */}
            <div className="flex flex-col">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={8}
                className="common-textarea flex-1 mb-6"
                required
              ></textarea>

              <button
                type="submit"
                className="primary-btn flex items-center justify-center gap-2"
              >
                Send Message
                <span className="text-lg">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
