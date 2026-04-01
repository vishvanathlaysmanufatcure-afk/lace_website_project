//src/app/admin-secret-933/page.js
"use client";

import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "@/services/productService";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const categories = [
    { label: "All Category", value: "" },
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

  // ✅ GET CATEGORY FROM URL
  const initialCategory = searchParams.get("category") || "";

  const [categoryFilter, setCategoryFilter] = useState(initialCategory);

  const [selected, setSelected] = useState(() => {
    const found = categories.find((c) => c.value === initialCategory);
    return found ? found.label : "All Category";
  });

  // 🔄 FETCH DATA
  const fetchData = async () => {
    const data = await getProducts();
    setProducts(data);
    setFilteredProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔍 FILTER + SEARCH
  useEffect(() => {
    let result = [...products];

    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }

    if (search) {
      result = result.filter(
        (p) =>
          (p.productNumber || "")
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          (p.name || "").toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [search, categoryFilter, products]);

  // 🗑 DELETE
  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchData();
  };

  // ✅ HANDLE CATEGORY SELECT + UPDATE URL
  const handleSelect = (item) => {
    setSelected(item.label);
    setCategoryFilter(item.value);
    setOpen(false);

    router.push(
      item.value
        ? `/admin-secret-933?category=${item.value}`
        : `/admin-secret-933`
    );
  };

  // 🔄 SYNC URL → STATE
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || "";

    setCategoryFilter(categoryFromUrl);

    const found = categories.find((c) => c.value === categoryFromUrl);
    setSelected(found ? found.label : "All Category");
  }, [searchParams]);

  // 🔽 CLOSE DROPDOWN
  useEffect(() => {
    const handleClick = () => setOpen(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="p-4 md:p-6 pt-[80px] md:pt-[100px] pb-10">
      
      {/* ✅ STICKY HEADER */}
      <div className="sticky top-[63px] md:top-[90px] z-40 bg-white/90 backdrop-blur-md ">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-3">

          {/* LEFT */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Admin Panel
          </h2>

          {/* RIGHT */}
          <div className="flex flex-col md:flex-row gap-4">
            
            <Link href="/admin-secret-933/add-product">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
                Add Product
              </button>
            </Link>

            <div className="flex flex-col sm:flex-row gap-3">
              
              {/* CATEGORY DROPDOWN */}
              <div className="relative w-full sm:w-52">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(!open);
                  }}
                  className="flex justify-between items-center px-4 py-2 bg-white rounded-lg text-sm cursor-pointer shadow-sm border border-gray-100"
                >
                  {selected}

                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>

                {open && (
                  <div className="absolute top-full left-0 w-full rounded-lg bg-white shadow-sm border border-gray-200 text-sm z-50">
                    {categories.map((item, i) => (
                      <div
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect(item);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* SEARCH */}
              <input
                type="text"
                placeholder="Search product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2 rounded-lg bg-white shadow-sm border border-gray-200 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden"
          >
            <div className="w-full h-52 bg-gray-100">
              <img
                src={p.images?.[0] || p.imageUrl}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {p.category}
              </h2>

              <p className="text-gray-600">{p.productNumber}</p>

              <div className="flex gap-2 mt-4">
                <Link
                  href={`/admin-secret-933/edit-product/${p.id}?category=${categoryFilter}`}
                  className="flex-1"
                >
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm">
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(p.id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No products found
        </p>
      )}
    </div>
  );
}