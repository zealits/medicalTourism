import React, { useState } from "react";
import {
  Video,
  Calendar,
  Clock,
  User,
  Stethoscope,
  FileText,
  Phone,
  MessageSquare,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Globe,
  Monitor,
} from "lucide-react";

const Telemedicine = () => {
  const [activeTab, setActiveTab] = useState("consultation");

  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiothoracic Surgeon",
      experience: 20,
      rating: 4.9,
      reviews: 156,
      hospital: "Apollo Hospitals, Chennai",
      fee: 50,
      nextAvailable: "2024-01-15 14:00",
      image: "/api/placeholder/120/120",
      languages: ["English", "Hindi"],
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Orthopedic Surgeon",
      experience: 15,
      rating: 4.8,
      reviews: 132,
      hospital: "Fortis Healthcare, Delhi",
      fee: 45,
      nextAvailable: "2024-01-15 16:30",
      image: "/api/placeholder/120/120",
      languages: ["English", "Hindi", "Punjabi"],
    },
    {
      id: 3,
      name: "Dr. Suresh Rao",
      specialty: "Oncologist",
      experience: 22,
      rating: 4.9,
      reviews: 189,
      hospital: "Manipal Hospitals, Bangalore",
      fee: 60,
      nextAvailable: "2024-01-16 10:00",
      image: "/api/placeholder/120/120",
      languages: ["English", "Hindi", "Kannada"],
    },
  ];

  const consultationTypes = [
    {
      type: "Initial Consultation",
      duration: "30 minutes",
      description: "Comprehensive medical evaluation and treatment planning",
      price: "$50-80",
      includes: ["Medical history review", "Symptom assessment", "Treatment recommendations", "Prescription if needed"],
    },
    {
      type: "Follow-up Consultation",
      duration: "15 minutes",
      description: "Review of treatment progress and adjustments",
      price: "$30-50",
      includes: ["Progress review", "Medication adjustments", "Next steps planning", "Q&A session"],
    },
    {
      type: "Second Opinion",
      duration: "45 minutes",
      description: "Expert review of diagnosis and treatment options",
      price: "$80-120",
      includes: ["Case review", "Alternative treatment options", "Risk assessment", "Detailed report"],
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "HIPAA-compliant platform with end-to-end encryption",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Connect with Indian specialists from anywhere in the world",
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Schedule consultations at your convenience",
    },
    {
      icon: FileText,
      title: "Digital Records",
      description: "Secure access to all your medical records and reports",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Choose Doctor",
      description: "Select from our network of specialist doctors",
      icon: User,
    },
    {
      step: 2,
      title: "Book Appointment",
      description: "Schedule at your preferred time",
      icon: Calendar,
    },
    {
      step: 3,
      title: "Upload Documents",
      description: "Share your medical records securely",
      icon: FileText,
    },
    {
      step: 4,
      title: "Video Consultation",
      description: "Connect with your doctor via video call",
      icon: Video,
    },
  ];

  const tabs = [
    { id: "consultation", label: "Book Consultation", icon: Video },
    { id: "doctors", label: "Our Doctors", icon: Stethoscope },
    { id: "how-it-works", label: "How It Works", icon: Monitor },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Telemedicine Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with India's top medical specialists from the comfort of your home. Get expert medical advice,
            second opinions, and follow-up care online.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card p-6 text-center">
                <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
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
        {activeTab === "consultation" && (
          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Consultation Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {consultationTypes.map((consultation, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-2">{consultation.type}</h4>
                    <div className="text-primary-600 font-medium mb-2">{consultation.price}</div>
                    <div className="text-sm text-gray-600 mb-4">{consultation.duration}</div>
                    <p className="text-gray-700 mb-4">{consultation.description}</p>
                    <div className="space-y-2">
                      <div className="font-medium text-sm">Includes:</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {consultation.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="btn-primary w-full mt-4">Book Now</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "doctors" && (
          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Available Specialists</h3>
              <div className="space-y-6">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="border rounded-lg p-6 flex flex-col md:flex-row">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div className="mb-4 md:mb-0">
                          <h4 className="font-semibold text-lg">{doctor.name}</h4>
                          <p className="text-primary-600 font-medium">{doctor.specialty}</p>
                          <p className="text-gray-600 text-sm">{doctor.hospital}</p>
                          <div className="flex items-center mt-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                            <span className="ml-1 text-sm text-gray-600">({doctor.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Clock className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">{doctor.experience} years experience</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Globe className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">{doctor.languages.join(", ")}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-600">${doctor.fee}</div>
                          <div className="text-sm text-gray-600 mb-2">per consultation</div>
                          <div className="text-sm text-gray-600 mb-4">
                            Next available: {new Date(doctor.nextAvailable).toLocaleDateString()}
                          </div>
                          <button className="btn-primary">Book Consultation</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "how-it-works" && (
          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary-600" />
                      </div>
                      <div className="text-lg font-semibold mb-2">Step {step.step}</div>
                      <h4 className="font-medium mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-2">What You'll Need</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Stable internet connection</li>
                  <li>• Device with camera and microphone</li>
                  <li>• Medical records and reports (if available)</li>
                  <li>• List of current medications</li>
                  <li>• Insurance information (if applicable)</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="card p-8 bg-primary-50 border border-primary-200">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Ready for Your Online Consultation?</h3>
            <p className="text-primary-700 mb-6">Get expert medical advice from India's top specialists in minutes</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Book Consultation Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
              <button className="btn-secondary">
                <Phone className="h-5 w-5 mr-2" />
                Call for Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telemedicine;
