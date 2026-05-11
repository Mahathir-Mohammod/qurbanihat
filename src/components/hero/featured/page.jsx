import Link from "next/link";
import data from "../../../../public/data.json";
import { MapPin, Weight, Tag } from "lucide-react";
import Image from "next/image";

const featured = data.slice(0, 4);

const FeaturedAnimals = () => {
  return (
    <section className="bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">
              Hand Picked
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured Animals
            </h2>
          </div>
          <Link
            href="/animals"
            className="hidden md:block px-5 py-2.5 rounded-xl border border-white/20 text-gray-300 text-sm font-medium hover:bg-white/10 transition-all duration-200">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
          {featured.map((animal) => (
            <div
              key={animal.id}
              className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group">

              <div className="relative h-48 bg-gray-800 overflow-hidden">
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
                <h3 className="text-white font-semibold text-2xl mb-1 truncate">
                  {animal.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {animal.description}
                </p>

                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {animal.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Weight className="w-3.5 h-3.5 text-emerald-400" />
                    {animal.weight} kg
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
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
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-medium hover:bg-emerald-500 hover:text-white transition-all duration-200">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/animals"
            className="px-6 py-3 rounded-xl border border-white/20 text-gray-300 text-sm font-medium hover:bg-white/10 transition-all duration-200">
            View All Animals
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;