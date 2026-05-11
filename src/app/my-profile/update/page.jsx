"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { User, Image as ImageIcon, Loader2, ArrowLeft, Upload } from "lucide-react";

const UpdateProfile = () => {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const { data: session, isPending: sessionPending } = authClient.useSession();

  const [name, setName] = useState(() => session?.user?.name || "");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(() => session?.user?.image || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  React.useEffect(() => {
    if (!sessionPending && !session) {
      router.push("/auth/signin");
    }
  }, [session, sessionPending, router]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const updateData = {
        name: name.trim(),
      };

      if (image) {
        updateData.image = imagePreview;
      }
      const { data, error: updateError } = await authClient.updateUser({
        ...updateData,
      });

      if (updateError) {
        setError(updateError.message || "Failed to update profile");
        return;
      }

      setSuccess("Profile updated successfully!");
      
      setTimeout(() => {
        router.push("/my-profile");
      }, 1500);
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Update error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (sessionPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
      </div>
    );
  }

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

          <button
            onClick={() => router.push("/my-profile")}
            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Profile
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-100">Update Profile</h2>
            <p className="text-gray-400 mt-1">Edit your account information</p>
          </div>

          {error && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">Profile Photo</label>
              <div className="flex flex-col items-center">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="relative cursor-pointer group"
                >
                  {imagePreview ? (
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-lg shadow-emerald-500/20 group-hover:border-emerald-400 transition-all">
                      <Image
                        src={imagePreview}
                        alt="Profile Preview"
                        width={112}
                        height={112}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-28 h-28 rounded-full bg-gray-800/60 border-4 border-dashed border-gray-600/60 flex items-center justify-center group-hover:border-emerald-400 transition-all">
                      <ImageIcon className="w-10 h-10 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                    </div>
                  )}
                  
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                
                <p className="mt-3 text-sm text-gray-500">
                  Click to upload a new photo
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800/60 border border-gray-600/60 text-gray-100 placeholder:text-gray-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Information"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;