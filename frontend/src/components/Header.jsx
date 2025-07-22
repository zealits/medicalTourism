import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/cost-comparison", label: "Cost Comparison" },
    { to: "/treatments", label: "Treatments" },
    { to: "/booking", label: "Booking" },
    { to: "/visa-assistance", label: "Visa Support" },
    { to: "/telemedicine", label: "Telemedicine" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-primary-50 to-accent-50 backdrop-blur-md shadow-lg border-b border-primary-100">
      {/* Main Navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="bg-gradient-to-tr from-primary-500 to-accent-500 p-2 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
            <Heart className="h-7 w-7 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-gray-800">MyIndiMd</span>
            <div className="text-xs text-primary-600 font-medium">Medical Tourism</div>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`px-4 py-2 rounded-lg transition-all duration-200 text-base font-medium relative ${
                  isActive(link.to)
                    ? "bg-white/80 text-primary-700 shadow-sm backdrop-blur-sm"
                    : "text-gray-700 hover:bg-white/60 hover:text-primary-600"
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            to="/cost-comparison"
            className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-4 py-2 rounded-lg text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Get Quote
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-primary-700 hover:bg-white/60 transition-all duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      
      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-primary-100 py-4 px-6 shadow-lg">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 block ${
                    isActive(link.to)
                      ? "bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 shadow-sm"
                      : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/cost-comparison"
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-3 rounded-lg text-base font-semibold block text-center shadow-md hover:shadow-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

