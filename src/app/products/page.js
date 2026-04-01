"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProducts } from "@/services/productService";

export default function ProductsPage() {
  const router = useRouter();

  const [products, setProducts] = useState([]);

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

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Category");

  const handleSelect = (item) => {
    setSelected(item.label);
    setOpen(false);
    router.push(`/products/${item.value}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data); // 👉 NO FILTER (ALL PRODUCTS)
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 md:p-8 py-20 lg:py-24 bg-gray-100 min-h-screen">
      <div className="max-w-8xl mx-auto px-2 lg:px-2">
        {/* Header */}
        <div
          className="sticky top-[62px] md:top-[90px] z-40 
  bg-gray-100/90 backdrop-blur-md"
        >
          <div className="flex justify-between items-center py-3 mb-4">
            <h2 className="text-xl md:text-2xl font-semibold">Products</h2>

            {/* Dropdown */}
            <div className="relative w-50 sm:w-70">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
                className="flex items-center justify-between 
              px-3 py-2 sm:px-5 sm:py-3 
              rounded-xl sm:rounded-2xl 
              backdrop-blur-md bg-white/60 shadow-md sm:shadow-lg 
              cursor-pointer text-xs sm:text-sm font-medium 
              transition hover:shadow-lg"
              >
                {selected}

                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>

              {open && (
                <div
                  className="absolute top-full left-0 w-full mt-2 
              rounded-xl sm:rounded-2xl 
              backdrop-blur-md bg-white/80 shadow-lg sm:shadow-xl 
              border border-white/30 overflow-hidden z-50"
                >
                  {categories.map((item, i) => (
                    <div
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(item);
                      }}
                      className="px-3 py-2 sm:px-5 sm:py-3 
                    text-xs sm:text-sm text-gray-700 
                    hover:bg-white/60 cursor-pointer"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <img
                src={p.images?.[0] || p.imageUrl}
                className="w-full h-70 object-cover rounded-lg"
              />

              <div className="flex items-center justify-between mt-5 px-3 sm:px-4 gap-1">
                {/* Category Name */}
                <h3 className="truncate max-w-[60%] text-sm sm:text-base font-medium text-gray-800">
                  {p.category}
                </h3>

                {/* Button */}
                <button
                  onClick={() =>
                    router.push(
                      `/enquiry?category=${p.category}&productNumber=${p.productNumber}`,
                    )
                  }
                  className="bg-orange-500 hover:bg-orange-600 text-white 
                  px-3 py-1 sm:px-4 sm:py-1.5 
                  rounded-md text-xs sm:text-sm whitespace-nowrap"
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
