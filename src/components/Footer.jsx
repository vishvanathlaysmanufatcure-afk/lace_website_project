import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-12 py-14">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-5 lg:gap-30">

        {/* ================= 1️⃣ COMPANY ================= */}
        <div className="flex flex-col gap-4 max-w-sm">
          <Image
            src="/images/svl_logo.png"
            alt="SVL Logo"
            width={80}
            height={80}
          />

          <h2 className="text-white text-xl font-semibold">
            Shree Visaalakshi Lace
          </h2>

          <p className="text-xs text-[#b8926a] tracking-wide leading-relaxed">
            MFRS OF QUALITY LACES & GARMENT ACCESSORIES
          </p>

          <p className="text-sm leading-relaxed text-gray-400">
            We specialize in manufacturing high-quality lace products with
            modern designs and traditional craftsmanship. Serving fashion,
            garment, and embroidery industries with reliable and consistent
            quality.
          </p>
        </div>

        {/* ================= 2️⃣ PAGES + PRODUCTS ================= */}
        <div className="grid grid-cols-2 gap-5 lg:gap-20">

          {/* PAGES */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">
              PAGES
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">
              PRODUCTS
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products/crochet-lace">Crochet Lace</Link></li>
              <li><Link href="/products/cotton-lace">Cotton Lace</Link></li>
              <li><Link href="/products/pom-pom-lace">Pom Pom Lace</Link></li>
              <li><Link href="/products/gpo-lace">GPO Lace</Link></li>
              <li><Link href="/products/Hakoba-lace">Hakoba Lace</Link></li>
              <li><Link href="/products/tapes">Tapes</Link></li>
              <li><Link href="/products/Fringes-and-Tassels-lace">Fringes and Tassels Lace</Link></li>
              <li><Link href="/products/neck-lace">Neck Lace</Link></li>
              <li><Link href="/products/nylon-lace">Nylon Lace</Link></li>
              <li><Link href="/products/lycra-lace">Lycra Lace</Link></li>
            </ul>
          </div>

        </div>

        {/* ================= 3️⃣ CONTACT ================= */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide">
            CONTACT
          </h3>

          <div className="flex gap-3 items-start mb-4">
            <MapPin className="text-[#b8926a]" size={18} />
            <p className="text-sm leading-relaxed">
              Flat No: 306, Dhwarkesh Apartment,<br />
              B/H Gijarat HSG Board, Godadara,<br />
              Surat - 394210
            </p>
          </div>

          <div className="flex gap-3 items-start mb-4">
            <Phone className="text-[#b8926a]" size={18} />
            <p className="text-sm">
              +91 9016738889 <br />
              +91 6387372844 <br />
              +91 9621932071
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <Mail className="text-[#b8926a]" size={18} />
            <p className="text-sm">svltrimssurat9@gmail.com</p>
          </div>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© 2026 Shree Visaalakshi Lace. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Crafted with care in India 🇮🇳</p>
      </div>
    </footer>
  );
}