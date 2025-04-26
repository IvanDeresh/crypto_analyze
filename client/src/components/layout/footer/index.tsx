import React from "react";
import { Twitter, Instagram, Github } from "lucide-react";

const TheFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Логотип та опис */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-cyan-400 drop-shadow-lg">
            CryptoAnalyze
          </h3>
          <p className="text-sm text-gray-400">
            Dive into the neon world of crypto analytics.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-200 mb-2">
            Quick Links
          </h4>
          <ul className="space-y-1 text-[#535bf2] ">
            <li>
              <a href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/charts"
                className="hover:text-cyan-400 transition-colors"
              >
                Charts
              </a>
            </li>
            <li>
              <a href="/news" className="hover:text-cyan-400 transition-colors">
                News
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-200 mb-2">
            Follow Us
          </h4>
          <div className="flex space-x-4 text-[#535bf2]">
            <a
              href="https://twitter.com"
              className=" hover:text-cyan-400 text-[#535bf2] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 drop-shadow-lg" />
            </a>
            <a
              href="https://instagram.com"
              className="text-[#535bf2] hover:text-cyan-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 drop-shadow-lg" />
            </a>
            <a
              href="https://github.com"
              className="text-[#535bf2] hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 drop-shadow-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Нижній рядок з авторським правом */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CryptoAnalyze. All rights reserved.
      </div>
    </footer>
  );
};

export default TheFooter;
