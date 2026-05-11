"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { User, Mail, Camera, Loader2 } from "lucide-react";

const MyProfile = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
      </div>
    );
  }

  if (!session) {
    router.push("/auth/signin");
    return null;
  }

  const { user } = session;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-emerald-950 to-lime-950" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 left-1/4 w-[450px] h-[450px] bg-lime-500/15 rounded-full blur-[110px]" />
      </div>

      <div className="relative w-full max-w-md mx-4">
        <div className="backdrop-blur-xl bg-gray-900/50 rounded-3xl shadow-2xl shadow-green-500/5 border border-gray-700/40 px-8 py-10">

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-100">My Profile</h2>
            <p className="text-gray-400 mt-1">Manage your account information</p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="relative">
              {user?.image ? (
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-lg shadow-emerald-500/20">
                  <Image
                    src={user.image}
                    alt={user.name || "Profile"}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <div className="w-28 h-28 rounded-full bg-emerald-500/20 border-4 border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <User className="w-12 h-12 text-emerald-400" />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/40 border border-gray-700/40">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <User className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Name</p>
                <p className="text-gray-100 font-medium">{user?.name || "Not set"}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/40 border border-gray-700/40">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</p>
                <p className="text-gray-100 font-medium">{user?.email || "Not set"}</p>
              </div>
            </div>
          </div>

          <Link
            href="/my-profile/update"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
          >
            <Camera className="w-5 h-5" />
            Update Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;