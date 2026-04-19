import { Link, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About RSZ" },
    { path: "/what-we-do", label: "What We Do" },
    { path: "/programs", label: "Programs & Impact" },
    { path: "/team", label: "Our Team" },
    { path: "/contact", label: "Contact & Partners" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 min-w-0">
              <img
                src="/logo.png"
                alt=""
                className="h-12 w-auto shrink-0 object-contain object-left md:h-14"
                decoding="async"
                fetchPriority="high"
                width={577}
                height={568}
              />
              <div className="min-w-0">
                <div className="font-bold text-sm sm:text-base md:text-xl text-gray-900 truncate">Resilient Societies of Zimbabwe</div>
                <div className="text-xs text-green-600 hidden sm:block">Building Community Resilience</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Resilient Societies of Zimbabwe</h3>
              <p className="text-gray-400 text-sm">
                Building community resilience through sustainable disaster mitigation, preparedness, and response solutions.
              </p>
              <p className="text-gray-400 text-sm mt-3 md:mt-4">PVO 19/20 © 2020</p>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Contact Us</h3>
              <p className="text-gray-400 text-sm">Stand Number 2288, Mutare (Chikanga)</p>
              <p className="text-gray-400 text-sm">Manicaland Province, Zimbabwe</p>
              <p className="text-gray-400 text-sm mt-2">Email: rsocieties@gmail.com</p>
              <p className="text-gray-400 text-sm">Phone: +263 772 978 904</p>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Resilient Societies of Zimbabwe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
