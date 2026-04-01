//src/app/enquiry/page.js
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function EnquiryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const productNumberParam = searchParams.get("productNumber");
  const categoryParam = searchParams.get("category");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    category: "",
    productNumber: "",
    address: "",
    zip: "",
    state: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });

  const [open, setOpen] = useState(false);

  const categories = [
    { label: "Crochet lace", value: "crochet-lace" },
    { label: "Cotton lace", value: "cotton-lace" },
    { label: "Pom Pom lace", value: "pom-pom-lace" },
    { label: "GPO lace", value: "gpo-lace" },
    { label: "Hakoba lace", value: "Hakoba-lace" },
    { label: "Tapes", value: "tapes" },
    { label: "Fringes and Tassels lace", value: "Fringes-and-Tassels-lace" },
    { label: "Neck lace", value: "neck-lace" },
    { label: "Nylon lace", value: "nylon-lace" },
    { label: "Lycra lace", value: "lycra-lace" },
  ];

  // ✅ Autofill
  useEffect(() => {
    if (productNumberParam || categoryParam) {
      setForm((prev) => ({
        ...prev,
        productNumber: productNumberParam || "",
        category: categoryParam || "",
      }));
    }
  }, [productNumberParam, categoryParam]);

  // ✅ Close dropdown
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Enquiry sent successfully ✅");

      // ✅ CLEAR FORM
      setForm({
        firstName: "",
        lastName: "",
        category: "",
        productNumber: "",
        address: "",
        zip: "",
        state: "",
        country: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Failed ❌");
    }
  };

  const handleCategorySelect = (item) => {
    setForm({ ...form, category: item.value });
    setOpen(false);
  };

  // 🔥 Common Input Style
  const inputStyle =
    "w-full px-4 py-2 rounded-md bg-white/60 backdrop-blur-md border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm";

  const labelStyle = "block mb-1 text-sm font-semibold text-gray-700";

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8 py-20 lg:py-30">
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-6 md:p-8">
        {/* Title */}
        <h2 className="text-lg md:text-xl font-semibold mb-6">
          FILL THE ENQUIRY FORM
        </h2>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* First Name */}
          <div>
            <label className={labelStyle}>First Name *</label>
            <input
              name="firstName"
              placeholder="Enter your first name"
              value={form.firstName}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className={labelStyle}>Last Name *</label>
            <input
              name="lastName"
              value={form.lastName}
              placeholder="Enter your last name"
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* Category */}
          <div>
            <label className={labelStyle}>Category</label>

            <div className="relative">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
                className={`${inputStyle} flex justify-between items-center cursor-pointer`}
              >
                {categories.find((c) => c.value === form.category)?.label ||
                  "Select category"}

                <svg
                  className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>

              {open && (
                <div className="absolute w-full mt-2 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl z-50 max-h-52 overflow-y-auto">
                  {categories.map((item, i) => (
                    <div
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategorySelect(item);
                      }}
                      className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Number */}
          <div>
            <label className={labelStyle}>Product Number</label>
            <input
              name="productNumber"
              value={form.productNumber}
              onChange={handleChange}
              placeholder="Eg: 2001 - 2003"
              className={inputStyle}
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className={labelStyle}>Address *</label>
            <input
              name="address"
              placeholder="Enter full address"
              value={form.address}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* Zip */}
          <div>
            <label className={labelStyle}>Postcode / Zip *</label>
            <input
              name="zip"
              placeholder="Zip code"
              value={form.zip}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* State */}
          <div>
            <label className={labelStyle}>State *</label>
            <input
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* Country */}
          <div>
            <label className={labelStyle}>Country *</label>
            <input
              name="country"
              value={form.country}
              placeholder="Country"
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* Email */}
          <div>
            <label className={labelStyle}>Email Address *</label>
            <input
              name="email"
              value={form.email}
              placeholder="example@mail.com"
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* Phone */}
          <div>
            <label className={labelStyle}>Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              placeholder="+91 XXXXX XXXXX"
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className={labelStyle}>Message</label>
            <textarea
              name="message"
              value={form.message}
              placeholder="Write your message..."
              onChange={handleChange}
              className={`${inputStyle} h-24 resize-none`}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 rounded-lg 
  bg-white/70 backdrop-blur-md border border-gray-200
  shadow-md hover:shadow-lg 
  text-gray-700 font-medium text-sm
  transition-all duration-200
  hover:bg-gray-200 active:scale-95"
          >
            Back
          </button>

          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
