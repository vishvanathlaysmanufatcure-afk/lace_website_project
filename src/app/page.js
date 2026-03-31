"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomePage() {
  const images = [
    "/images/hero1.jpeg",
    "/images/hero2.jpeg",
    "/images/hero3.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    "COTTON LACE",
    "POM POM LACE",
    "GPO LACE",
    "Hakoba LACE",
    "TAPES",
    "Fringes and Tassels LACE",
    "CROCHET LACE",
    "NECK LACE",
    "NYLON LACE",
    "LYCRA LACE",
  ];

  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative h-[32vh] sm:h-[42vh] md:h-[90vh] overflow-hidden">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="hero"
            fill
            sizes="100vw"
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/40" />

        {/* SLIDER BUTTONS */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 
    bg-white/20 hover:bg-white/40 backdrop-blur-md 
    text-white p-2 rounded-md transition"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 
    bg-white/20 hover:bg-white/40 backdrop-blur-md 
    text-white p-2 rounded-md transition"
        >
          <ChevronRight size={18} />
        </button>
      </section>

      {/* ================= CATEGORY ================= */}
      <div className="bg-black text-white py-2 md:py-3 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...categories, ...categories].map((cat, i) => (
            <span key={i} className="mx-4 text-xs md:text-sm whitespace-nowrap">
              ✦ {cat}
            </span>
          ))}
        </div>
      </div>

      {/* ================= MOBILE CONTENT ================= */}
      <section className="md:hidden px-4 py-8 bg-white">
        {/* TEXT */}
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-gray-900">
            Finest Laces,
            <br />
            <span className="text-[#b8926a] italic">Crafted</span> for the World
          </h2>

          <p className="text-gray-500 text-sm mt-4">
            We specialize in manufacturing high-quality lace products with
            modern designs and traditional craftsmanship. Serving fashion,
            garment, and embroidery industries with reliable and consistent
            quality.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-5">
            <Link href="/products">
              <button className="bg-[#b8926a] text-white px-4 py-2 rounded-lg text-sm">
                Explore Products →
              </button>
            </Link>

            <Link href="/about">
              <button className="px-4 py-2 rounded-lg text-sm border border-gray-300 bg-white shadow-sm">
                Our Story
              </button>
            </Link>
          </div>
        </div>

        {/* IMAGES */}
        <div className="flex justify-center gap-3 mt-6">
          {/* LEFT */}
          <div className="relative w-[28%] h-[120px] mt-6">
            <Image
              src="/images/service_img4.png"
              fill
              className="rounded-lg object-cover shadow-md"
              alt=""
            />
          </div>

          {/* CENTER */}
          <div className="relative w-[32%] h-[150px]">
            <Image
              src="/images/service_img4.png"
              fill
              className="rounded-lg object-cover shadow-lg"
              alt=""
            />
          </div>

          {/* RIGHT */}
          <div className="relative w-[28%] h-[120px] mt-6">
            <Image
              src="/images/service_img4.png"
              fill
              className="rounded-lg object-cover shadow-md"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* ================= DESKTOP SECTION ================= */}
      <section className="hidden md:grid max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-semibold leading-tight">
            Finest Laces, <br />
            <span className="text-[#b8926a] italic">Crafted</span> for <br />
            the World
          </h2>

          <p className="text-gray-500 mt-6">
            We specialize in manufacturing high-quality lace products with
            modern designs and traditional craftsmanship.
          </p>

          <div className="flex gap-4 mt-6">
            <Link href="/products">
              <button className="bg-[#b8926a] text-white px-6 py-3 rounded-lg">
                Explore Products →
              </button>
            </Link>

            <Link href="/about">
              <button className="px-6 py-3 rounded-lg bg-white/30 backdrop-blur-md shadow-md">
                Our Story
              </button>
            </Link>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative w-[180px] h-[280px] mt-10">
            <Image
              src="/images/service_img4.png"
              fill
              className="rounded-lg object-cover"
              alt=""
            />
          </div>
          <div className="relative w-[220px] h-[360px]">
            <Image
              src="/images/service_img4.png"
              fill
              className="rounded-lg object-cover"
              alt=""
            />
          </div>
          <div className="relative w-[180px] h-[300px] mt-16">
            <Image
              src="/images/service_img4.png"
              fill
              className="rounded-lg object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* ================= COLLECTION ================= */}
      <section className="bg-[#f6f6f6] py-10 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6 md:mb-10 gap-4">
            <div className="flex-1">
              <p className="text-xs text-[#b8926a] mb-2">— OUR COLLECTION</p>

              <h2 className="text-xl md:text-4xl font-semibold leading-tight">
                Seven Premium <br />
                <span className="text-[#b8926a] italic">Lace Varieties</span>
              </h2>
            </div>

            <Link href="/products">
              <button
                className="whitespace-nowrap px-4 py-2 text-xs md:text-sm font-medium
    border border-[#b8926a]
    text-[#b8926a]
    bg-white
    rounded-lg
    shadow-sm hover:shadow-md
    hover:bg-[#b8926a] hover:text-white
    transition-all duration-300"
              >
                View All Products →
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                title: "GPO Lace",
                img: "/images/GPO_lace.png",
                link: "/products/gpo-lace",
              },
              {
                title: "Hakoba Lace",
                img: "/images/hakoba_lace.png",
                link: "/products/Hakoba-lace",
              },
              {
                title: "Tapes",
                img: "/images/tapes.png",
                link: "/products/tapes",
              },
              {
                title: "Fringes and Tassels Lace",
                img: "/images/lod_leed_lace.png",
                link: "/products/Fringes-and-Tassels-lace",
              },
              {
                title: "Cotton Lace",
                img: "/images/cotton_lace.png",
                link: "/products/cotton-lace",
              },
              {
                title: "Pom Pom Lace",
                img: "/images/pom_pom_lace.png",
                link: "/products/pom-pom-lace",
              },
              {
                title: "Crochet Lace",
                img: "/images/crochet_lace.png",
                link: "/products/crochet-lace",
              },
              {
                title: "Neck Lace",
                img: "/images/neck_lace.png",
                link: "/products/neck-lace",
              },
              {
                title: "Nylon Lace",
                img: "/images/nylon_lace.png",
                link: "/products/nylon-lace",
              },
              {
                title: "Lycra Lace",
                img: "/images/lycra_lace.png",
                link: "/products/lycra-lace",
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition group"
              >
                {/* IMAGE */}
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-40 group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <h3 className="font-semibold text-lg mt-4">{item.title}</h3>

                <Link href={item.link}>
                  <p className="text-[#b8926a] mt-3 text-sm cursor-pointer hover:underline">
                    View products →
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#b8926a] text-white py-10 md:py-14 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center md:flex md:justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Ready to Elevate Your Collection?
            </h2>
            <p className="text-white/80 mt-2 text-sm md:text-base">
              Contact us for bulk orders and custom designs.
            </p>
          </div>

          <div className="flex flex-row justify-center md:justify-start gap-3 mt-4 md:mt-0">
            <Link href="/contact">
              <button
                className="bg-white text-black 
    px-4 py-2 md:px-6 md:py-3 
    rounded-lg text-xs md:text-base
    whitespace-nowrap
    flex-shrink-0"
              >
                Request a Quote
              </button>
            </Link>
            <Link href="/about">
              <button
                className="border border-white 
    px-4 py-2 md:px-6 md:py-3 
    rounded-lg text-xs md:text-base
    whitespace-nowrap
    flex-shrink-0"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
