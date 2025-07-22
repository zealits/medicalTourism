import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calculator,
  Building2,
  Calendar,
  FileText,
  Video,
  Shield,
  Award,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  Star,
  MapPin,
  Heart,
  Stethoscope,
  Plane,
  Phone,
  Search,
} from "lucide-react";
import { treatments } from "../data/treatments";
import { hospitals } from "../data/hospitals";
import videoBg from "../assets/63241-505964153.mp4";
import dentalImplantImg from "../assets/Dental Implant.webp";
import hipReplacementImg from "../assets/Hip Replacement.jpg";
import cardiacBypassImg from "../assets/Cardiac Bypass Surgery.webp";

const Home = () => {
  const featuredTreatments = treatments.slice(0, 3).map((t, i) => ({
    ...t,
    image: [cardiacBypassImg, hipReplacementImg, dentalImplantImg][i] || t.image,
  }));
  const topHospitals = hospitals.slice(0, 3);

  const stats = [
    { icon: Users, value: "50K+", label: "Happy Patients" },
    { icon: Building2, value: "200+", label: "Partner Hospitals" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: DollarSign, value: "70%", label: "Average Savings" },
  ];

  const features = [
    {
      icon: Calculator,
      title: "Cost Comparison",
      description: "Compare treatment costs across India vs USA, UK, and UAE",
      link: "/cost-comparison",
    },
    {
      icon: Building2,
      title: "Top Hospitals",
      description: "Access to JCI-accredited hospitals with world-class facilities",
      link: "/treatments",
    },
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Book consultations, treatments, and travel arrangements",
      link: "/booking",
    },
    {
      icon: FileText,
      title: "Visa Support",
      description: "Complete assistance with medical visa documentation",
      link: "/visa-assistance",
    },
    {
      icon: Video,
      title: "Telemedicine",
      description: "Remote consultations with Indian medical experts",
      link: "/telemedicine",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "International standards with NABH and JCI certifications",
      link: "/treatments",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      treatment: "Cardiac Surgery",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Excellent care at a fraction of the cost. The doctors were highly skilled and the facilities were world-class.",
    },
    {
      name: "David Smith",
      country: "UK",
      treatment: "Hip Replacement",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "From visa assistance to post-operative care, everything was handled professionally. Highly recommended!",
    },
    {
      name: "Ahmed Al-Rashid",
      country: "UAE",
      treatment: "Dental Implants",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The quality of treatment in India exceeded my expectations. Great value for money and excellent results.",
    },
  ];

  const whyChooseIndia = [
    {
      title: "World-Class Healthcare",
      description: "JCI-accredited hospitals with international standards",
      icon: Award,
    },
    {
      title: "Highly Skilled Doctors",
      description: "Surgeons trained in USA, UK, and leading medical institutions",
      icon: Stethoscope,
    },
    {
      title: "Significant Cost Savings",
      description: "Save 60-80% compared to USA and UK medical costs",
      icon: DollarSign,
    },
    {
      title: "No Waiting Lists",
      description: "Get treated immediately without long waiting periods",
      icon: Clock,
    },
    {
      title: "English-Speaking Staff",
      description: "Clear communication throughout your medical journey",
      icon: Users,
    },
    {
      title: "Tourism Opportunities",
      description: "Combine treatment with exploring incredible India",
      icon: Plane,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-secondary-300 rounded-full blur-3xl"></div>
      </div>
      
      {/* Hero Section - Fullscreen Video Background, Two Columns */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
          style={{ pointerEvents: 'none' }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Hero Content - Two Columns */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-center w-full h-full px-4 gap-12">
          {/* Left Side: Headline, Description, Search */}
          <div className="flex-1 flex flex-col justify-center items-start text-left max-w-xl pl-8 md:pl-16">
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-xs font-semibold mb-6 inline-block shadow-lg">
                #1 Medical Tourism Platform
              </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg">
              Discover, compare, and book {" "}
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                world-class medical care
              </span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 font-light leading-relaxed drop-shadow">
              Your gateway to affordable, high-quality healthcare in India. Simple. Transparent. Trusted.
            </p>
            <form className="flex bg-white/90 rounded-xl shadow-lg p-2 max-w-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 w-full mb-2">
              <div className="flex items-center flex-1 px-3">
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search treatments, hospitals, or doctors..."
                  className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
                />
              </div>
              <button 
                type="submit" 
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
              >
                Search
              </button>
            </form>
          </div>
          {/* Right Side: Stats Block */}
          <div className="flex-1 flex flex-col justify-center items-center w-full pr-8 md:pr-16">
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col items-center min-w-[120px]">
                    <Icon className="h-8 w-8 mb-1 text-white" />
                    <span className="text-2xl font-bold text-white drop-shadow">{stat.value}</span>
                    <span className="text-sm text-gray-200 opacity-80 text-center">{stat.label}</span>
              </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive medical tourism solutions tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-50 group">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">{feature.description}</p>
                  <Link to={feature.link} className="mt-3 text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm">
                    Learn more →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recommended Treatments (Cards) */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Popular Treatments</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our most sought-after medical procedures</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTreatments.map((treatment) => (
              <div key={treatment.id} className="bg-white rounded-2xl shadow-lg p-5 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-50 group">
                <div className="relative overflow-hidden rounded-xl mb-3">
                  <img src={treatment.image} alt={treatment.name} className="w-full h-40 object-cover shadow-md group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-2 right-2 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {treatment.successRate}% Success
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{treatment.name}</h3>
                <p className="text-gray-500 mb-2 font-light text-sm">{treatment.category}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-primary-500 font-bold">${treatment.costs.india.total.toLocaleString()}</span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="text-xs text-gray-600 ml-1">4.9</span>
                  </div>
                </div>
                <Link to={`/treatments/${treatment.id}`} className="mt-auto bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-4 py-2 rounded-xl text-center transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 text-sm">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose India */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose India for Medical Treatment?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India has emerged as a global leader in medical tourism, offering world-class healthcare at affordable
              prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseIndia.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partner Hospitals</h2>
            <p className="text-xl text-gray-600">
              JCI-accredited hospitals with world-class infrastructure and expert medical teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topHospitals.map((hospital) => (
              <div key={hospital.id} className="card overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img src={hospital.image} alt={hospital.name} className="w-full h-48 object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600">{hospital.city}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{hospital.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{hospital.name}</h3>
                  <p className="text-gray-600 mb-4">{hospital.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hospital.specialties.slice(0, 3).map((specialty, index) => (
                      <span key={index} className="text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <Link to={`/hospitals/${hospital.id}`} className="btn-primary w-full justify-center">
                    View Hospital
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">
              Real experiences from international patients who chose India for their medical treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="text-sm text-primary-600 font-medium">Treatment: {testimonial.treatment}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Medical Journey?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get personalized treatment recommendations and cost estimates from our medical experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cost-comparison" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
              <Phone className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Link>
            <Link to="/treatments" className="btn-primary bg-primary-700 hover:bg-primary-800">
              Browse Treatments
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
