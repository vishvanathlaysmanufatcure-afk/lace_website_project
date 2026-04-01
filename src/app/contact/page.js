"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const mapLink =
    "https://www.google.com/maps/search/?api=1&query=Flat+No+306+Dhwarkesh+Apartment+Godadara+Surat+394210";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        type: "contact", // optional (good practice)
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully ✅");

      // ✅ clear form
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Failed ❌");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER (WHITE) */}
      <div className="text-center py-8 py-20 lg:py-30 px-4 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Feel free to reach out to us for any inquiries, product details, or
          business discussions.
        </p>
      </div>

      {/* GRAY BACKGROUND SECTION */}
      <div className="bg-gray-100 pt-12 pb-24">
        {/* MAIN SECTION */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 md:px-8">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Get In Touch</h2>

            {/* Address */}
            <div className="flex gap-4 items-start">
              <div className="w-13 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-md">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-gray-600">
                  Flat No: 306, Dhwarkesh Apartment, B/H Gijarat HSG Board,
                  Godadara, Surat - 394210
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-md">
                <Phone size={18} />
              </div>
              <div>
                <p className="font-medium">Phone Number</p>
                <a href="tel:9621932071" className="text-gray-600 block">
                  +91-9621932071
                </a>
                <a href="tel:9016738889" className="text-gray-600 block">
                  +91-9016738889
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-md">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-medium">E-Mail</p>
                <a href="mailto:svltrims9@gmail.com" className="text-gray-600">
                  svltrims9@gmail.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="border-t-2 border-gray-400 my-4"></div>
              <p className="font-medium mb-3">Follow Us:</p>

              <div className="flex gap-4">
                {[FaWhatsapp, FaFacebookF, FaYoutube, FaInstagram].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      target="_blank"
                      className="w-11 h-11 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-md hover:scale-110 hover:shadow-lg transition"
                    >
                      <Icon size={18} />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
              />

              <input
                name="email"
                value={form.email}
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message..."
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition resize-none"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* MAP OVERLAP */}
        <div className="max-w-6xl mx-auto px-4 mt-20 mb-20 relative">
          <iframe
            src="https://www.google.com/maps?q=Flat+No+306+Dhwarkesh+Apartment+Godadara+Surat+394210&output=embed"
            className="w-full h-[300px] md:h-[350px] rounded-xl shadow-lg relative z-10"
            style={{ marginBottom: "-350px" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* WHITE AREA BELOW MAP (FOR OVERLAP EFFECT) */}
      <div className="bg-white h-60"></div>
    </div>
  );
}
