"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconButton } from "@radix-ui/themes";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = ["home", "about", "service", "properties", "contact"];
    const fromHash =
      typeof window !== "undefined"
        ? window.location.hash.replace("#", "")
        : "";
    if (sections.includes(fromHash)) setActiveSection(fromHash || "home");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.id;
          if (sections.includes(id)) setActiveSection(id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkCls = (id: string) =>
    `hover:text-blue-600 transition-colors duration-300 ${
      activeSection === id ? "text-blue-600 font-semibold" : "text-gray-700"
    }`;

  return (
    <header className="default-header sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link href="#home" aria-label="Go to home" className="navbar-brand">
            <Image
              src="/img/logo.png"
              alt="NZ Marie - Real Estate Consultant"
              width={120}
              height={40}
              priority
              className="h-auto w-auto max-h-10"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="#home"
              className={linkCls("home")}
              onClick={() => setActiveSection("home")}
            >
              Home
            </Link>
            <Link
              href="#about"
              className={linkCls("about")}
              onClick={() => setActiveSection("about")}
            >
              About
            </Link>
            <Link
              href="#service"
              className={linkCls("service")}
              onClick={() => setActiveSection("service")}
            >
              Service
            </Link>
            <Link
              href="#properties"
              className={linkCls("properties")}
              onClick={() => setActiveSection("properties")}
            >
              Properties
            </Link>
            <Link
              href="#contact"
              className={linkCls("contact")}
              onClick={() => setActiveSection("contact")}
            >
              Contact
            </Link>
            <Link
              href="https://nzmarie.com/blog"
              className="hover:text-blue-600 transition-colors duration-300 text-gray-700"
            >
              Blog
            </Link>
          </div>

          <div className="lg:hidden">
            <IconButton
              variant="ghost"
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              title="Toggle menu"
              className="text-gray-700 hover:text-blue-600"
            >
              {open ? <Cross2Icon /> : <HamburgerMenuIcon />}
            </IconButton>
          </div>
        </nav>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white/95">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#home"
              onClick={() => {
                setActiveSection("home");
                setOpen(false);
              }}
              className={linkCls("home")}
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => {
                setActiveSection("about");
                setOpen(false);
              }}
              className={linkCls("about")}
            >
              About
            </Link>
            <Link
              href="#service"
              onClick={() => {
                setActiveSection("service");
                setOpen(false);
              }}
              className={linkCls("service")}
            >
              Service
            </Link>
            <Link
              href="#properties"
              onClick={() => {
                setActiveSection("properties");
                setOpen(false);
              }}
              className={linkCls("properties")}
            >
              Properties
            </Link>
            <Link
              href="#contact"
              onClick={() => {
                setActiveSection("contact");
                setOpen(false);
              }}
              className={linkCls("contact")}
            >
              Contact
            </Link>
            <Link
              href="https://nzmarie.com/blog"
              className="hover:text-blue-600 transition-colors duration-300 text-gray-700"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
