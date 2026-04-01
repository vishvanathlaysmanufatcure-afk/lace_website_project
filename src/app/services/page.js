"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20 lg:py-30 grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT */}
        <div className="pt-2">
          <p className="text-sm tracking-widest text-[#b8926a] mb-3">
            — SERVICES & PRODUCTS
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Everything You Need <br />
            for <span className="text-[#b8926a] italic">Premium Lace</span>
          </h1>

          <p className="text-gray-500 mt-6 leading-relaxed max-w-md">
            Seven lace varieties. Full manufacturing, custom design, and
            worldwide export — all under one roof in Surat.
          </p>

          <Link href="/contact">
            <button className="mt-6 bg-[#b8926a] text-white px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
              Get a Free Quote →
            </button>
          </Link>
        </div>

        {/* RIGHT MODERN IMAGE LAYOUT */}
        <div className="grid grid-cols-2 gap-4">
          {/* BIG IMAGE */}
          <div className="col-span-1 row-span-2">
            <Image
              src="/images/service_img1.png"
              alt="service1"
              width={400}
              height={500}
              className="rounded-xl object-cover h-full w-full hover:scale-105 transition duration-300"
            />
          </div>

          {/* SMALL TOP */}
          <div>
            <Image
              src="/images/service_img2.png"
              alt="service2"
              width={300}
              height={200}
              className="rounded-xl object-cover w-full h-40 hover:scale-105 transition duration-300"
            />
          </div>

          {/* SMALL BOTTOM */}
          <div>
            <Image
              src="/images/service_img3.png"
              alt="service3"
              width={300}
              height={200}
              className="rounded-xl object-cover w-full h-40 hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* ================= PRODUCT CATALOG ================= */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-[#b8926a] mb-3">
            — PRODUCT CATALOGUE
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            Complete Lace{" "}
            <span className="text-[#b8926a] italic">Collection</span>
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CARD */}
            {[
              {
                title: "GPO Lace",
                img: "/images/GPO_lace.png",
                desc: "Fine net ground with precision embroidery. Popular for bridal and couture wear.",
                link: "/products/gpo-lace",
              },
              {
                title: "Hakoba Lace",
                img: "/images/hakoba_lace.png",
                desc: "Traditional South Indian weave with rich motifs for sarees and ethnic wear.",
                link: "/products/Hakoba-lace",
              },
              {
                title: "Tapes",
                img: "/images/tapes.png",
                desc: "Flat woven tapes for hem binding and premium export lines.",
                link: "/products/tapes",
              },
              {
                title: "Fringes and Tassels Lace",
                img: "/images/lod_leed_lace.png",
                desc: "Premium export lace designed for finishing and decorative usage.",
                link: "/products/Fringes-and-Tassels-lace",
              },
              {
                title: "Cotton Lace",
                img: "/images/cotton_lace.png",
                desc: "Natural, breathable, hypoallergenic. Perfect for children’s wear.",
                link: "/products/cotton-lace",
              },
              {
                title: "Pom Pom Lace",
                img: "/images/pom_pom_lace.png",
                desc: "Decorative lace with pom pom elements for trendy fashion styles.",
                link: "/products/pom-pom-lace",
              },
              {
                title: "Crochet Lace",
                img: "/images/crochet_lace.png",
                desc: "Handcrafted crochet lace with intricate traditional patterns.",
                link: "/products/crochet-lace",
              },
              {
                title: "Neck Lace",
                img: "/images/neck_lace.png",
                desc: "Elegant neck lace for formal and bridal wear.",
                link: "/products/neck-lace",
              },
              {
                title: "Nylon Lace",
                img: "/images/nylon_lace.png",
                desc: "Durable and versatile nylon lace for everyday use.",
                link: "/products/nylon-lace",
              },
              {
                title: "Lycra Lace",
                img: "/images/lycra_lace.png",
                desc: "Stretchable and comfortable lycra lace for activewear.",
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

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>

                <Link href={item.link}>
                  <p className="text-[#b8926a] mt-3 text-sm cursor-pointer hover:underline">
                    View products →
                  </p>
                </Link>
              </div>
            ))}

            {/* EMPTY SPACE + BUTTON (LIKE YOUR DESIGN) */}
            <div className="hidden lg:flex items-center justify-center col-span-1">
              <Link href="/products">
                <button className="bg-[#8a6a4a] text-white px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition">
                  Explore Products →
                </button>
              </Link>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <div className="lg:hidden flex justify-center mt-10">
            <Link href="/products">
              <button className="bg-[#8a6a4a] text-white px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition">
                Explore Products →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#b8926a] py-14 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Let's Connect for Your Project
            </h2>
            <p className="text-white/80 mt-2">
              Have a question or custom request? Let's discuss your next
              collection.
            </p>
          </div>

          <Link href="/enquiry">
            <button className="bg-white text-black px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition">
              Make an Enquiry →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
