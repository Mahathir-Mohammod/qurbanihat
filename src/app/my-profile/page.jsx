"use client";

import React from "react";
import { User, Mail, Camera, Pencil, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const MyProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return (
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-emerald-950 to-lime-950" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-green-500 border-t-transparent animate-spin" />
            </div>
        );
    }

    if (!session) {
        return (
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-emerald-950 to-lime-950" />
                </div>
                <div className="text-center text-gray-400">
                    Please{" "}
                    <Link href="/auth/signin" className="text-green-400 hover:underline">
                        sign in
                    </Link>{" "}
                    to view your profile.
                </div>
            </div>
        );
    }

    const user = session.user;

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 px-4">
            
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-emerald-950 to-lime-950" />
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[100px]" />
                <div className="absolute -bottom-32 left-1/4 w-[450px] h-[450px] bg-lime-500/15 rounded-full blur-[110px]" />
            </div>

            <div className="relative w-full max-w-lg mx-auto">
                <div className="backdrop-blur-xl bg-gray-900/50 rounded-3xl shadow-2xl shadow-green-500/5 border border-gray-700/40 px-8 py-10">

                    <div className="flex items-center gap-3 mb-8">
                        <Link
                            href="/"
                            className="p-2 rounded-lg bg-gray-800/60 border border-gray-700/60 text-gray-400 hover:text-gray-200 hover:bg-gray-800/80 transition-all duration-200">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-100">My Profile</h1>
                    </div>

                    <div className="space-y-6">
                        
                        <div className="flex flex-col items-center space-y-4 pb-6 border-b border-gray-700/40">
                            <div className="relative group">
                                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 p-1">
                                    {user.image ? (
                                        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-700/60 border-2 border-gray-600/40">
                                            <Image
                                                src={form.image}
                                                alt="Preview"
                                                width={56}         
                                                height={56}        
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full rounded-full bg-gray-800/80 flex items-center justify-center border-4 border-gray-900/50">
                                            <User className="w-14 h-14 text-gray-500" />
                                        </div>
                                    )}
                                </div>
                                <div className="absolute bottom-0 right-0 p-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/30">
                                    <Camera className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-gray-100 mb-1">
                                    {user.name || "No Name Set"}
                                </h2>
                                <p className="text-sm text-gray-400">Welcome back!</p>
                            </div>
                        </div>

                        <div className="space-y-4">

                            <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/40">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                                        <User className="w-4 h-4 text-green-400" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                            Full Name
                                        </label>
                                        <p className="text-base font-semibold text-gray-100">
                                            {user.name || "Not provided"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/40">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                        <Mail className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                            Email Address
                                        </label>
                                        <p className="text-base font-semibold text-gray-100">
                                            {user.email || "Not provided"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/my-profile/update"
                            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-base shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer mt-6">
                            <Pencil className="w-5 h-5" />
                            Update Information
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;