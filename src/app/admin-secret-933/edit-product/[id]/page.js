"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { getProducts, updateProduct } from "@/services/productService";
import { uploadImage } from "@/lib/cloudinary";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();

  const searchParams = useSearchParams();
  const previousCategory = searchParams.get("category");

  const [product, setProduct] = useState(null);

  const [category, setCategory] = useState("");
  const [categoryLabel, setCategoryLabel] = useState("Select the category");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [name, setName] = useState("");
  const [productNumber, setProductNumber] = useState("");

  const [existingImages, setExistingImages] = useState([]);
  const [newImages, setNewImages] = useState([]);

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

  // 🔹 Load product
  useEffect(() => {
    const loadProduct = async () => {
      const data = await getProducts();
      const found = data.find((p) => p.id === id);

      if (found) {
        setProduct(found);
        setCategory(found.category);
        setName(found.name);
        setProductNumber(found.productNumber || "");
        setExistingImages(found.images || []);

        const label = categories.find((c) => c.value === found.category)?.label;
        setCategoryLabel(label || "Select the category");
      }
    };

    loadProduct();
  }, [id]);

  // 🔹 Select category
  const handleSelectCategory = (item) => {
    setCategory(item.value);
    setCategoryLabel(item.label);
    setDropdownOpen(false);
  };

  // 🔹 Add new images
  const handleNewImages = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + existingImages.length > 5) {
      alert("Max 5 images allowed");
      return;
    }

    setNewImages(files);
  };

  // 🔹 Remove existing image
  const removeExistingImage = (index) => {
    const updated = [...existingImages];
    updated.splice(index, 1);
    setExistingImages(updated);
  };

  // 🔹 Remove new image
  const removeNewImage = (index) => {
    const updated = [...newImages];
    updated.splice(index, 1);
    setNewImages(updated);
  };

  // 🔹 Update product
  const handleUpdate = async () => {
    if (!category || !name) {
      alert("Fill all fields");
      return;
    }

    try {
      const uploadedNewImages = [];

      for (let img of newImages) {
        const url = await uploadImage(img);
        uploadedNewImages.push(url);
      }

      const finalImages = [...existingImages, ...uploadedNewImages];

      await updateProduct(id, {
        category,
        name,
        productNumber,
        images: finalImages,
      });

      alert("Product Updated");
      router.push(
        previousCategory
          ? `/admin-secret-933?category=${previousCategory}`
          : `/admin-secret-933`,
      );
    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  };

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10 py-20 lg:py-24">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Edit Product</h2>

        {/* Category */}
        <div className="mb-4 relative">
          <label className="block mb-2 text-sm font-medium">Categories</label>

          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full p-3 rounded-lg border bg-gray-100 cursor-pointer flex justify-between"
          >
            {categoryLabel} <span>▾</span>
          </div>

          {dropdownOpen && (
            <div className="absolute w-full bg-white border rounded-lg mt-2 shadow z-50">
              {categories.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleSelectCategory(item)}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Product name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg border bg-gray-100"
          />
        </div>

        {/* Product Number */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Product number
          </label>
          <input
            value={productNumber}
            onChange={(e) => setProductNumber(e.target.value)}
            className="w-full p-3 rounded-lg border bg-gray-100"
          />
        </div>

        {/* Existing Images */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Existing Images
          </label>

          <div className="flex gap-3 flex-wrap">
            {existingImages.map((img, i) => (
              <div key={i} className="relative">
                <img src={img} className="w-20 h-20 rounded object-cover" />

                <button
                  onClick={() => removeExistingImage(i)}
                  className="absolute top-0 right-0 bg-black text-white text-xs px-1 rounded"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Images */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">
            Add New Images
          </label>

          {/* Upload Box */}
          <label className="w-full flex flex-col items-center justify-center border-2 border-dashed rounded-xl h-40 cursor-pointer bg-gray-100">
            <span className="text-gray-400 text-sm">
              Upload or Drag & Drop files
            </span>

            <input
              type="file"
              multiple
              onChange={handleNewImages}
              className="hidden"
            />
          </label>

          {/* Preview New Images */}
          <div className="flex gap-3 mt-4 flex-wrap">
            {newImages.map((img, i) => (
              <div key={i} className="relative">
                <img
                  src={URL.createObjectURL(img)}
                  className="w-20 h-20 rounded object-cover"
                />

                {/* Remove Button */}
                <button
                  onClick={() => removeNewImage(i)}
                  className="absolute top-0 right-0 bg-black text-white text-xs px-1 rounded"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 border rounded-lg"
          >
            Back
          </button>

          <button
            onClick={handleUpdate}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
