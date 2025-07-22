import React, { useState } from "react";
import {
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Upload,
  Phone,
  Mail,
  MapPin,
  User,
  Calendar,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const VisaAssistance = () => {
  const [activeTab, setActiveTab] = useState("requirements");

  const visaTypes = [
    {
      type: "Medical Visa",
      duration: "60 days",
      description: "For medical treatment in India",
      fee: "$80",
      processing: "3-5 business days",
      recommended: true,
    },
    {
      type: "Medical Attendant Visa",
      duration: "60 days",
      description: "For companions of medical patients",
      fee: "$80",
      processing: "3-5 business days",
      recommended: false,
    },
    {
      type: "Tourist Visa",
      duration: "90 days",
      description: "For tourism with medical treatment",
      fee: "$100",
      processing: "5-7 business days",
      recommended: false,
    },
  ];

  const requiredDocuments = [
    {
      name: "Passport",
      description: "Valid passport with at least 6 months validity",
      required: true,
      format: "Original + Photocopy",
    },
    {
      name: "Visa Application Form",
      description: "Completed and signed visa application form",
      required: true,
      format: "Online form",
    },
    {
      name: "Photographs",
      description: "Recent passport-sized photographs",
      required: true,
      format: "2 photos (51mm x 51mm)",
    },
    {
      name: "Medical Letter",
      description: "Letter from recognized hospital in India",
      required: true,
      format: "Original letter",
    },
    {
      name: "Medical Reports",
      description: "Latest medical reports and test results",
      required: true,
      format: "Certified copies",
    },
    {
      name: "Financial Proof",
      description: "Bank statements or financial guarantee",
      required: true,
      format: "Last 3 months statements",
    },
    {
      name: "Travel Insurance",
      description: "Medical travel insurance coverage",
      required: false,
      format: "Insurance certificate",
    },
    {
      name: "Accommodation Proof",
      description: "Hotel booking or accommodation arrangement",
      required: false,
      format: "Booking confirmation",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Document Preparation",
      description: "Gather all required documents and ensure they meet the specifications",
      duration: "2-3 days",
      icon: FileText,
    },
    {
      step: 2,
      title: "Application Submission",
      description: "Submit your visa application online or at the consulate",
      duration: "1 day",
      icon: Upload,
    },
    {
      step: 3,
      title: "Processing",
      description: "Visa processing by Indian consulate/embassy",
      duration: "3-5 days",
      icon: Clock,
    },
    {
      step: 4,
      title: "Visa Collection",
      description: "Collect your visa or receive it by mail",
      duration: "1 day",
      icon: CheckCircle,
    },
  ];

  const consulates = [
    {
      country: "United States",
      locations: [
        {
          city: "New York",
          address: "3 East 64th Street, New York, NY 10065",
          phone: "+1-212-774-0600",
          email: "cons.newyork@mea.gov.in",
        },
        {
          city: "San Francisco",
          address: "540 Arguello Blvd, San Francisco, CA 94118",
          phone: "+1-415-668-0683",
          email: "cg.sanfrancisco@mea.gov.in",
        },
      ],
    },
    {
      country: "United Kingdom",
      locations: [
        {
          city: "London",
          address: "India House, Aldwych, London WC2B 4NA",
          phone: "+44-20-7836-8484",
          email: "hci.london@mea.gov.in",
        },
      ],
    },
    {
      country: "Canada",
      locations: [
        {
          city: "Toronto",
          address: "365 Bloor Street East, Suite 1003, Toronto, ON M4W 3L4",
          phone: "+1-416-960-0751",
          email: "cg.toronto@mea.gov.in",
        },
      ],
    },
  ];

  const faqs = [
    {
      question: "How long does it take to get a medical visa?",
      answer:
        "Medical visas are typically processed within 3-5 business days. However, during peak seasons, it may take up to 7 business days.",
    },
    {
      question: "Can I extend my medical visa in India?",
      answer:
        "Yes, medical visas can be extended up to 1 year depending on the treatment requirements. You need to apply through the Foreigners Regional Registration Office (FRRO).",
    },
    {
      question: "Do I need a medical attendant visa for my companion?",
      answer:
        "Yes, if your companion is traveling specifically to assist you during medical treatment, they need a medical attendant visa.",
    },
    {
      question: "What if my visa application is rejected?",
      answer:
        "If rejected, you can reapply with additional documentation. Common reasons for rejection include incomplete forms, insufficient financial proof, or inadequate medical documentation.",
    },
    {
      question: "Can I travel for tourism with a medical visa?",
      answer:
        "Medical visas are primarily for medical treatment. Limited tourism activities are allowed, but extensive tourism should be done with a tourist visa.",
    },
  ];

  const tabs = [
    { id: "requirements", label: "Requirements", icon: FileText },
    { id: "process", label: "Process", icon: Clock },
    { id: "consulates", label: "Consulates", icon: MapPin },
    { id: "faq", label: "FAQ", icon: AlertCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 pt-28">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Medical Visa Assistance</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guidance for obtaining your Indian medical visa. We'll help you through every step of the process.
          </p>
        </div>

        {/* Visa Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Visa Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visaTypes.map((visa, index) => (
              <div
                key={index}
                className={`card p-6 ${visa.recommended ? "ring-2 ring-primary-500 bg-primary-50" : ""}`}
              >
                {visa.recommended && (
                  <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Recommended
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{visa.type}</h3>
                <p className="text-gray-600 mb-4">{visa.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Duration:</span>
                    <span className="font-medium">{visa.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Fee:</span>
                    <span className="font-medium">{visa.fee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Processing:</span>
                    <span className="font-medium">{visa.processing}</span>
                  </div>
                </div>
              </div>
            ))}
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
          {activeTab === "requirements" && (
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Document Requirements</h3>
              <div className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="font-semibold">{doc.name}</h4>
                          {doc.required && (
                            <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Required</span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">{doc.description}</p>
                        <p className="text-sm text-primary-600 font-medium">Format: {doc.format}</p>
                      </div>
                      <CheckCircle className="h-6 w-6 text-green-500 ml-4" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Important Note</h4>
                    <p className="text-blue-700 text-sm mt-1">
                      All documents must be in English or translated by a certified translator. Original documents may
                      be required for verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "process" && (
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Visa Application Process</h3>
              <div className="space-y-6">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="font-semibold">
                            Step {step.step}: {step.title}
                          </h4>
                          <span className="ml-2 bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="absolute left-6 mt-12 w-0.5 h-8 bg-gray-300"></div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Need Help?</h4>
                <p className="text-green-700 mb-4">
                  Our visa assistance team can help you with document preparation and application submission.
                </p>
                <button className="btn-primary">
                  Get Visa Assistance
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          )}

          {activeTab === "consulates" && (
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Indian Consulates & Embassies</h3>
              <div className="space-y-6">
                {consulates.map((country, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-4">{country.country}</h4>
                    <div className="space-y-4">
                      {country.locations.map((location, locIndex) => (
                        <div key={locIndex} className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-medium mb-3">{location.city}</h5>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                              <span className="text-sm text-gray-600">{location.address}</span>
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 text-gray-500 mr-2" />
                              <span className="text-sm text-gray-600">{location.phone}</span>
                            </div>
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 text-gray-500 mr-2" />
                              <span className="text-sm text-gray-600">{location.email}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "faq" && (
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="card p-8 bg-primary-50 border border-primary-200">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Ready to Apply for Your Medical Visa?</h3>
            <p className="text-primary-700 mb-6">
              Let our experts handle your visa application process from start to finish
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Visa Application
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
              <button className="btn-secondary">
                <Phone className="h-5 w-5 mr-2" />
                Speak with Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaAssistance;
