"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Package, Shirt, FileText, Globe } from "lucide-react";

export default function AboutPage() {
  const router = useRouter();

  // 👉 Dynamic redirect function
  const handleProductClick = () => {
  router.push("/products");
};

  return (
    <div className="bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20 lg:py-30 grid md:grid-cols-2 gap-10 items-center animate-fadeIn">
        {/* LEFT */}
        <div>
          <p className="text-sm tracking-widest text-[#b8926a] mb-3">
            — ABOUT US
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Two Decades of <br />
            <span className="text-[#b8926a] italic">Lace Mastery</span>
          </h1>

          <p className="text-gray-500 mt-6 leading-relaxed">
            From a small workshop in Surat to one of India's most trusted
            lace exporters — our journey is woven with dedication, craft, and a
            relentless pursuit of quality.
          </p>

          {/* ✅ UPDATED BUTTON */}
          <button
            onClick={handleProductClick}
            className="mt-6 bg-[#b8926a] text-white px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Our Products →
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex gap-4 justify-center md:justify-end">
          {/* IMAGE 1 */}
          <div className="overflow-hidden rounded-lg group">
            <Image
              src="/images/about_img1.png"
              alt="lace"
              width={250}
              height={250}
              className="rounded-lg object-cover transform transition duration-500 group-hover:scale-110 group-hover:rotate-1"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="mt-10 overflow-hidden rounded-lg group">
            <Image
              src="/images/about_img2.png"
              alt="lace"
              width={250}
              height={300}
              className="rounded-lg object-cover transform transition duration-500 group-hover:scale-110 group-hover:-rotate-1"
            />
          </div>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 animate-slideUp">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-[#b8926a] mb-3">
            — OUR STORY
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            The Art of <span className="text-[#b8926a] italic">Fine Lace</span>
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Founded in 2015 by master weaver K.R.Rameshkumar, Shree
              Visaalakshi Lace began as a small unit crafting traditional cotton
              laces for local garment manufacturers in surat – India's textile
              capital.
            </p>

            <p>
              Over two decades, we expanded our product range to include seven
              distinct lace varieties and developed export channels to fashion
              houses across Europe, Far-East, and Middle-East.
            </p>

            <p>
              Today, we operate a state-of-the-art manufacturing facility with
              modern weaving machinery and an experienced team of artisans who
              blend traditional craftsmanship with contemporary design
              sensibilities.
            </p>

            <p>
              Every roll of lace that leaves our facility carries our commitment
              to flawless finish, consistent quality, and timely delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div className="group hover:-translate-y-2 transition duration-300">
            <Package className="mx-auto mb-4 text-orange-500" size={40} />
            <h3 className="font-semibold">Biodegradable Packaging</h3>
            <p className="text-sm text-gray-500 mt-2">
              Eco-friendly packaging materials used.
            </p>
          </div>

          <div className="group hover:-translate-y-2 transition duration-300">
            <Shirt className="mx-auto mb-4 text-orange-500" size={40} />
            <h3 className="font-semibold">100% Fair Trade</h3>
            <p className="text-sm text-gray-500 mt-2">
              Transparent and fair pricing system.
            </p>
          </div>

          <div className="group hover:-translate-y-2 transition duration-300">
            <FileText className="mx-auto mb-4 text-orange-500" size={40} />
            <h3 className="font-semibold">Automatic Invoicing</h3>
            <p className="text-sm text-gray-500 mt-2">
              Invoices generated automatically.
            </p>
          </div>

          <div className="group hover:-translate-y-2 transition duration-300">
            <Globe className="mx-auto mb-4 text-orange-500" size={40} />
            <h3 className="font-semibold">Fast Shipping</h3>
            <p className="text-sm text-gray-500 mt-2">
              Reliable global delivery partners.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-[#b8926a] py-14 px-4 md:px-8 animate-fadeIn">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Let's Create Something Beautiful
            </h2>
            <p className="text-white/80 mt-2">
              Partner with us for your next collection or embroidery project.
            </p>
          </div>

          <Link href="/services">
            <button className="bg-white text-black px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
              View Our Services →
            </button>
          </Link>
        </div>
      </section>

      {/* ===== CUSTOM ANIMATIONS ===== */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}