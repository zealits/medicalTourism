import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Calculator, Building2, Calendar, FileText, Video, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home", icon: Heart },
    { to: "/cost-comparison", label: "Cost Comparison", icon: Calculator },
    { to: "/treatments", label: "Treatments", icon: Building2 },
    { to: "/booking", label: "Booking", icon: Calendar },
    { to: "/visa-assistance", label: "Visa Support", icon: FileText },
    { to: "/telemedicine", label: "Telemedicine", icon: Video },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="border-b border-gray-200 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91-1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info@medtourism.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-primary-600 font-medium">24/7 International Patient Support</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">MedTourism</h1>
              <p className="text-sm text-gray-600">India Healthcare</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive(link.to)
                      ? "bg-primary-50 text-primary-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/cost-comparison" className="btn-secondary text-sm">
              Get Quote
            </Link>
            <Link to="/booking" className="btn-primary text-sm">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      isActive(link.to)
                        ? "bg-primary-50 text-primary-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col space-y-2">
              <Link
                to="/cost-comparison"
                className="btn-secondary text-sm justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
              <Link to="/booking" className="btn-primary text-sm justify-center" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
