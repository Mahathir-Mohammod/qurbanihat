"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { LogOut, Menu, X } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/auth/signin");
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Animals", href: "/animals" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-white/10 ">
      <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
        
        <Link href="/" className="text-4xl font-bold text-emerald-400 tracking-tight hover:text-emerald-300 transition-colors">
          Qurbani<span className="text-white">Hat</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 font-medium hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-3">

              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold text-sm">
                  {session.user.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  {session.user.name}
                </span>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 text-gray-300 text-sm font-medium hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/auth/signin"
                className="px-4 py-2 rounded-xl border border-white/20 text-gray-300 font-medium hover:bg-white/10 transition-all duration-200"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 text-sm font-medium hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
            {session ? (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold text-sm">
                    {session.user.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-gray-300 text-sm font-medium">
                    {session.user.name}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 text-gray-300 text-sm font-medium hover:bg-white/10 transition-all duration-200 cursor-pointer w-fit"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 rounded-xl border border-white/20 text-gray-300 text-sm font-medium hover:bg-white/10 transition-all duration-200 text-center"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold text-center shadow-lg shadow-green-500/30"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;