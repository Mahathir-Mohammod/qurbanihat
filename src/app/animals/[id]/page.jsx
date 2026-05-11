"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import data from "../../../../public/data.json";
import { authClient } from "@/lib/auth-client";
import { MapPin, Weight, Tag, Calendar, CheckCircle, X } from "lucide-react";

const AnimalDetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const animal = data.find((a) => a.id === parseInt(id));

  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  if (!animal) {
    return (
      <main className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-gray-400 text-lg">Animal not found.</p>
      </main>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      router.push("/auth/signin");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setForm({ name: "", email: "", phone: "", address: "" });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <main className="min-h-screen bg-gray-950 pt-24 pb-20 px-6">

      {showToast && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-emerald-500 text-white px-5 py-4 rounded-2xl shadow-xl shadow-emerald-500/30 animate-fade-in">
          <CheckCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm font-medium">Booking request sent successfully!</p>
          <button onClick={() => setShowToast(false)}>
            <X className="w-4 h-4 ml-2 hover:opacity-70" />
          </button>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover"
                priority
              />
              <span className="absolute top-4 left-4 bg-emerald-500/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                {animal.category}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-8">

            <div>
              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">
                {animal.type}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {animal.name}
              </h1>
              <p className="text-gray-400 leading-relaxed mb-6">
                {animal.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: <Tag className="w-4 h-4 text-emerald-400" />, label: "Breed", value: animal.breed },
                  { icon: <Weight className="w-4 h-4 text-emerald-400" />, label: "Weight", value: `${animal.weight} kg` },
                  { icon: <Calendar className="w-4 h-4 text-emerald-400" />, label: "Age", value: `${animal.age} years` },
                  { icon: <MapPin className="w-4 h-4 text-emerald-400" />, label: "Location", value: animal.location },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-900 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      {item.icon}
                      <span className="text-gray-500 text-xs uppercase tracking-wider">{item.label}</span>
                    </div>
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 border border-white/10 rounded-xl px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Price</p>
                  <p className="text-emerald-400 font-bold text-3xl">
                    ৳{animal.price.toLocaleString()}/=
                  </p>
                </div>
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
            </div>

            <div className="bg-gray-900 border border-white/10 rounded-2xl px-6 py-8">
              <h2 className="text-white font-bold text-xl mb-6">Book This Animal</h2>

              {!session && (
                <div className="mb-5 px-4 py-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm text-center">
                  You must be logged in to submit a booking request.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-600/60 text-gray-100 placeholder:text-gray-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-600/60 text-gray-100 placeholder:text-gray-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+880 1234 567890"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-600/60 text-gray-100 placeholder:text-gray-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Address</label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Your full address"
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-600/60 text-gray-100 placeholder:text-gray-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-base shadow-lg shadow-green-500/30 hover:shadow-green-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all  disabled:cursor-not-allowed disabled:scale-100">
                  {loading ? "Submitting..." : "Submit Booking Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnimalDetailsPage;