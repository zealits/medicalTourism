import React from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Cost Comparison", to: "/cost-comparison" },
      { label: "Treatment Directory", to: "/treatments" },
      { label: "Booking & Planning", to: "/booking" },
      { label: "Visa Assistance", to: "/visa-assistance" },
      { label: "Telemedicine", to: "/telemedicine" },
    ],
    specialties: [
      { label: "Cardiac Surgery", to: "/treatments?category=cardiac" },
      { label: "Orthopedic Care", to: "/treatments?category=orthopedic" },
      { label: "Dental Treatment", to: "/treatments?category=dental" },
      { label: "Cosmetic Surgery", to: "/treatments?category=cosmetic" },
      { label: "Transplant Surgery", to: "/treatments?category=transplant" },
    ],
    support: [
      { label: "Help Center", to: "/help" },
      { label: "Contact Us", to: "/contact" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "FAQ", to: "/faq" },
    ],
    company: [
      { label: "About Us", to: "/about" },
      { label: "Our Team", to: "/team" },
      { label: "Careers", to: "/careers" },
      { label: "Press", to: "/press" },
      { label: "Blog", to: "/blog" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">MedTourism</h3>
                <p className="text-gray-400">India Healthcare</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for world-class medical treatment in India. We connect international patients with
              top-tier hospitals and surgeons across the country, ensuring quality care at affordable prices.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400">New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400">+91-1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400">info@medtourism.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400">24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Specialties</h4>
            <ul className="space-y-2">
              {footerLinks.specialties.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400">Get the latest medical tourism updates and offers</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary px-6 py-2 whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} MedTourism India. All rights reserved.</p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
