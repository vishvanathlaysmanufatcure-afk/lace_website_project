"use client";

import { useState } from "react";
import { uploadImage } from "@/lib/cloudinary";
import { addProduct } from "@/services/productService";
import { useParams, useRouter, useSearchParams } from "next/navigation";

export default function AddProduct() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const previousCategory = searchParams.get("category");

  const [category, setCategory] = useState("");
  const [categoryLabel, setCategoryLabel] = useState("Select the category");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [name, setName] = useState("");
  const [productNumber, setProductNumber] = useState("");
  const [images, setImages] = useState([]);

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

  const handleSelectCategory = (item) => {
    setCategory(item.value);
    setCategoryLabel(item.label);
    setDropdownOpen(false);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 5) {
      alert("Maximum 5 images allowed");
      return;
    }

    setImages(files);
  };

  const removeImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  const handleSubmit = async () => {
    if (!category || !name || images.length === 0) {
      alert("Please fill all fields");
      return;
    }

    try {
      const uploadedImages = [];

      for (let img of images) {
        const url = await uploadImage(img);
        uploadedImages.push(url);
      }

      await addProduct({
        category,
        name,
        productNumber,
        images: uploadedImages,
        createdAt: new Date(),
      });

      alert("Product Added");
      router.push(
        previousCategory
          ? `/admin-secret-933?category=${previousCategory}`
          : `/admin-secret-933`,
      );
    } catch (error) {
      console.error(error);
      alert("Error uploading product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10 py-20 lg:py-24">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Add the Product
        </h2>

        {/* Category */}
        <div className="mb-4 relative">
          <label className="block mb-2 text-sm font-medium">Categories</label>

          {/* Custom Dropdown */}
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full p-3 rounded-lg border bg-gray-100 cursor-pointer flex justify-between items-center"
          >
            {categoryLabel}
            <span>▾</span>
          </div>

          {dropdownOpen && (
            <div className="absolute w-full bg-white border rounded-lg mt-2 shadow z-50 max-h-60 overflow-y-auto">
              {categories.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectCategory(item)}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Name */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Product name</label>

          <input
            type="text"
            placeholder="Enter the Product Name....."
            className="w-full p-3 rounded-lg border bg-gray-100 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Product Number */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Product number (From & to)
          </label>

          <input
            type="text"
            placeholder="Eg: 2001 to 2003"
            className="w-full p-3 rounded-lg border bg-gray-100 focus:outline-none"
            value={productNumber}
            onChange={(e) => setProductNumber(e.target.value)}
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Add images</label>

          <label className="w-full flex flex-col items-center justify-center border-2 border-dashed rounded-xl h-40 cursor-pointer bg-gray-100">
            <span className="text-gray-400 text-sm">
              Upload or Drag & Drop files
            </span>

            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {/* Preview with remove button */}
          <div className="flex gap-3 mt-4 flex-wrap">
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(img)}
                  className="w-20 h-20 object-cover rounded"
                />

                {/* Remove Button */}
                <button
                  onClick={() => removeImage(index)}
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
            onClick={handleSubmit}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg"
          >
            Add items
          </button>
        </div>
      </div>
    </div>
  );
}
