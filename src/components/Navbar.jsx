"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const categories = [
    { name: "Crochet lace", link: "/products/crochet-lace" },
    { name: "Cotton lace", link: "/products/cotton-lace" },
    { name: "Pom Pom lace", link: "/products/pom-pom-lace" },
    { name: "GPO lace", link: "/products/gpo-lace" },
    { name: "Hakoba lace", link: "/products/Hakoba-lace" },
    { name: "Tapes", link: "/products/tapes" },
    { name: "Fringes and Tassels", link: "/products/Fringes-and-Tassels-lace" },
    { name: "Neck lace", link: "/products/neck-lace" },
    { name: "Nylon lace", link: "/products/nylon-lace" },
    { name: "Lycra lace", link: "/products/lycra-lace" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full 
  bg-white 
  shadow-sm px-8 py-4 
  flex items-center z-50"
    >
      {/* LOGO */}
      <div className="flex items-center gap-2 ml-auto">
        <Image
          src="/images/svl_logo.png"
          alt="logo"
          width={60}
          height={50}
          className="md:w-[100px] md:h-[90px]"
        />

        {/* TEXT */}
        <div className="flex flex-col leading-tight">
          <span className="text-sm md:text-2xl font-semibold tracking-wide">
            Shree Visaalakshi Lace
          </span>
        </div>
      </div>

      {/* ================= DESKTOP MENU ================= */}
      <ul className="hidden md:flex gap-12 items-center font-medium ml-auto mr-20 text-gray-700">
        <li>
          <Link
            href="/"
            className={`hover:text-orange-500 transition ${
              isActive("/") && "text-orange-500 font-semibold"
            }`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className={`hover:text-orange-500 transition ${
              isActive("/about") && "text-orange-500 font-semibold"
            }`}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/services"
            className={`hover:text-orange-500 transition ${
              isActive("/services") && "text-orange-500 font-semibold"
            }`}
          >
            Services
          </Link>
        </li>

        {/* PRODUCTS DROPDOWN */}
        <li
          className="relative py-2"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="flex items-center gap-1 hover:text-orange-500 transition">
            Products
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                showDropdown ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`hidden md:block absolute top-full left-[-10px] mt-4 w-64 
  bg-white rounded-2xl 
  shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
  py-4 
  transition-all duration-300 ease-out
  ${
    showDropdown
      ? "opacity-100 visible translate-y-0 scale-100"
      : "opacity-0 invisible -translate-y-2 scale-95"
  }`}
          >
            {categories.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="block px-6 py-3 text-gray-700 
      hover:bg-orange-50 hover:text-orange-500 
      transition-all duration-200 rounded-lg mx-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </li>

        <li>
          <Link
            href="/contact"
            className={`hover:text-orange-500 transition ${
              isActive("/contact") && "text-orange-500 font-semibold"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* ================= HAMBURGER ================= */}
      <button
        className="ml-auto md:hidden flex flex-col gap-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {/* ================= BACKDROP ================= */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[55]"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed top-0 right-0 w-[75%] h-full 
  bg-white opacity-100 z-[60] shadow-xl 
  transform transition-transform duration-300 ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col gap-6 p-5 text-gray-700">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium"
          >
            About
          </Link>

          <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium"
          >
            Services
          </Link>

          {/* MOBILE PRODUCTS */}
          <div>
            <button
              onClick={() => setMobileProductOpen(!mobileProductOpen)}
              className="w-full flex justify-between items-center text-lg font-medium"
            >
              Products
              <svg
                className={`w-5 h-5 transition-transform ${
                  mobileProductOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileProductOpen && (
              <div className="mt-4 ml-2 flex flex-col gap-4 border-l-2 border-orange-200 pl-4">
                {categories.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileProductOpen(false);
                    }}
                    className="text-sm hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
