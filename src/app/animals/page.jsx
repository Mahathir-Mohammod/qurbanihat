"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "../../../public/data.json";
import { MapPin, Weight, Tag, ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react";

const ITEMS_PER_PAGE = 6;

const AnimalsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("default");

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === "low") return a.price - b.price;
    if (sortOrder === "high") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAnimals = sortedData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSort = (value) => {
    setSortOrder(value);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-gray-950 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-1">
              Browse
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              All Animals
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {data.length} animals available for Qurbani
            </p>
          </div>

          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-emerald-400" />
            <select
              value={sortOrder}
              onChange={(e) => handleSort(e.target.value)}
              className="bg-gray-900 border border-white/10 text-gray-300 text-sm rounded-xl px-4 py-2.5 outline-none focus:border-emerald-500/40 cursor-pointer"
            >
              <option value="default">Sort by Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentAnimals.map((animal) => (
            <div
              key={animal.id}
              className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group">

              <div className="relative h-52 bg-gray-800 overflow-hidden">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-emerald-500/90 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                  {animal.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold text-xl mb-1 truncate">
                  {animal.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {animal.description}
                </p>

                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {animal.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Weight className="w-3.5 h-3.5 text-emerald-400" />
                    {animal.weight} kg
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Tag className="w-3.5 h-3.5 text-emerald-400" />
                    {animal.breed}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 font-bold text-lg">
                    ৳{animal.price.toLocaleString()}/=
                  </span>
                  <Link
                    href={`/animals/${animal.id}`}
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-medium hover:bg-emerald-500 hover:text-white transition-all duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-xl border text-sm font-medium transition-all duration-200 ${
                currentPage === page
                  ? "bg-emerald-500 border-emerald-500 text-white"
                  : "border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40"
              }`}>
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          Page {currentPage} of {totalPages}
        </p>
      </div>
    </main>
  );
};

export default AnimalsPage;