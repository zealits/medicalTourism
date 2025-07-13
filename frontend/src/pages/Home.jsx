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
} from "lucide-react";
import { treatments } from "../data/treatments";
import { hospitals } from "../data/hospitals";

const Home = () => {
  const featuredTreatments = treatments.slice(0, 3);
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                World-Class
                <span className="text-primary-200 block">Medical Treatment</span>
                in India
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Save up to 80% on medical costs while receiving top-quality healthcare from JCI-accredited hospitals and
                internationally trained doctors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cost-comparison" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
                  Get Cost Estimate
                  <Calculator className="h-5 w-5 ml-2" />
                </Link>
                <Link to="/treatments" className="btn-primary bg-primary-700 hover:bg-primary-800">
                  Browse Treatments
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <Icon className="h-8 w-8 text-primary-200 mx-auto mb-2" />
                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                        <div className="text-sm text-primary-200">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Medical Tourism Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cost comparison to post-treatment care, we handle every aspect of your medical journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="card p-6 hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="bg-primary-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center text-primary-600 font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Medical Treatments</h2>
            <p className="text-xl text-gray-600">
              Explore our most sought-after medical procedures with significant cost savings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTreatments.map((treatment) => {
              const savings = (
                ((treatment.costs.usa.total - treatment.costs.india.total) / treatment.costs.usa.total) *
                100
              ).toFixed(0);
              return (
                <div key={treatment.id} className="card overflow-hidden group">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        {treatment.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{treatment.successRate}%</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{treatment.name}</h3>
                    <p className="text-gray-600 mb-4">{treatment.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Starting from</div>
                        <div className="text-2xl font-bold text-primary-600">
                          ${treatment.costs.india.total.toLocaleString()}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Save up to</div>
                        <div className="text-lg font-bold text-green-600">{savings}%</div>
                      </div>
                    </div>
                    <Link to={`/treatments/${treatment.id}`} className="btn-primary w-full mt-4 justify-center">
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/treatments" className="btn-secondary">
              View All Treatments
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
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
