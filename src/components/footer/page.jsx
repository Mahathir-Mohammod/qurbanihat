import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-emerald-400 mb-1">
              Qurbani<span className="text-white">Hat</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Qurbani Hat is your trusted platform for finding premium quality animals for Eid ul Adha. We connect buyers with verified sellers across Bangladesh for a hassle-free Qurbani experience.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <Link
                href="https://www.linkedin.com/in/mahathir-mohammod"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-gray-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200">
                <FaLinkedin className="w-4 h-4" />
              </Link>
              <Link
                href="https://github.com/Mahathir-Mohammod"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-gray-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200">
                <FaGithub className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.instagram.com/mohammod_mahathir_/"
                target="_blank"
                className="w-10 h-10 rounded-xl bg-gray-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200">
                <FaInstagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "All Animals", href: "/animals" },
                { label: "Sign In", href: "/auth/signin" },
                { label: "Register", href: "/auth/signup" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <a
                  href="mailto:mahathirmohammod88@gmail.com"
                  className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-200">
                  mahathirmohammod88@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">+880 1997818054</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 QurbaniHat. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with 💚 for Eid ul Adha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;