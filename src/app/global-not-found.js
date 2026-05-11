import Footer from "@/components/footer/page";
import "./globals.css";

export default function GlobalNotFound() {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-8xl font-bold text-emerald-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Sorry, the page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <div className="flex gap-4">
            <a href="/" className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              go back
            </a>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}