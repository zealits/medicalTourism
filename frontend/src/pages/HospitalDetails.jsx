import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Building2,
  Users,
  Award,
  Shield,
  CheckCircle,
  Clock,
  DollarSign,
  Heart,
  Stethoscope,
  Bed,
  Image as ImageIcon,
} from "lucide-react";
import { hospitals } from "../data/hospitals";

const HospitalDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const hospital = hospitals.find((h) => h.id === parseInt(id));

  if (!hospital) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Hospital Not Found</h1>
          <Link to="/treatments" className="btn-primary">
            Back to Treatments
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: Building2 },
    { id: "doctors", label: "Doctors", icon: Stethoscope },
    { id: "facilities", label: "Facilities", icon: Shield },
    { id: "packages", label: "Packages", icon: DollarSign },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 pt-28">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/treatments" className="flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Treatments
        </Link>

        {/* Header */}
        <div className="card p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-600">
                  {hospital.city}, {hospital.state}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{hospital.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{hospital.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <div>
                    <div className="font-medium">{hospital.rating} Rating</div>
                    <div className="text-sm text-gray-600">{hospital.reviews} Reviews</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <div className="font-medium">Est. {hospital.established}</div>
                    <div className="text-sm text-gray-600">Founded</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bed className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <div className="font-medium">{hospital.beds} Beds</div>
                    <div className="text-sm text-gray-600">Capacity</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <div className="font-medium">{hospital.doctors.length}+ Doctors</div>
                    <div className="text-sm text-gray-600">Specialists</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {hospital.accreditations.map((acc, index) => (
                  <span key={index} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {acc}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {hospital.specialties.map((specialty, index) => (
                  <span key={index} className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="card overflow-hidden">
              <img src={hospital.image} alt={hospital.name} className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="card p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-primary-600 mr-3" />
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-sm text-gray-600">{hospital.contact.phone}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-primary-600 mr-3" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-gray-600">{hospital.contact.email}</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-primary-600 mr-3" />
              <div>
                <div className="font-medium">Address</div>
                <div className="text-sm text-gray-600">{hospital.contact.address}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id ? "bg-primary-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "overview" && (
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Hospital Overview</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">About {hospital.name}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {hospital.description} Located in {hospital.city}, {hospital.state}, this hospital has been serving
                    patients since {hospital.established} with a commitment to providing world-class healthcare
                    services.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Statistics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">{hospital.beds}</div>
                      <div className="text-sm text-gray-600">Total Beds</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">{hospital.doctors.length}+</div>
                      <div className="text-sm text-gray-600">Specialist Doctors</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">{hospital.rating}</div>
                      <div className="text-sm text-gray-600">Patient Rating</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">{hospital.reviews}</div>
                      <div className="text-sm text-gray-600">Reviews</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Accreditations & Certifications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {hospital.accreditations.map((acc, index) => (
                      <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                        <Award className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-medium text-green-800">{acc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "doctors" && (
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Medical Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hospital.doctors.map((doctor) => (
                  <div key={doctor.id} className="border rounded-lg p-6">
                    <div className="flex items-start">
                      <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-full object-cover mr-4" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{doctor.name}</h4>
                        <p className="text-primary-600 font-medium">{doctor.specialty}</p>
                        <p className="text-gray-600 text-sm">{doctor.education}</p>
                        <div className="flex items-center mt-2">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                          <span className="ml-2 text-sm text-gray-600">{doctor.experience} years exp.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "facilities" && (
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Facilities & Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hospital.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "packages" && (
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Treatment Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hospital.packages.map((pkg) => (
                  <div key={pkg.id} className="border rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-2">{pkg.name}</h4>
                    <div className="text-2xl font-bold text-primary-600 mb-2">${pkg.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-600 mb-4">{pkg.duration}</div>
                    <div className="space-y-2">
                      <div className="font-medium text-sm">Includes:</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="btn-primary w-full mt-4">Book Package</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Hospital Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hospital.gallery.map((image, index) => (
                  <div key={index} className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${hospital.name} - Image ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="card p-8 bg-primary-50 border border-primary-200">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Ready to Get Treatment at {hospital.name}?</h3>
            <p className="text-primary-700 mb-6">
              Contact us to schedule your consultation and plan your medical journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn-primary">
                Book Consultation
                <Calendar className="h-5 w-5 ml-2" />
              </Link>
              <Link to="/cost-comparison" className="btn-secondary">
                Get Cost Estimate
                <DollarSign className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
