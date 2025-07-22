import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  FileText,
  CreditCard,
  CheckCircle,
  ArrowRight,
  Plane,
  Building2,
  Stethoscope,
} from "lucide-react";

const BookingPlanner = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      age: "",
      gender: "",
    },
    medicalInfo: {
      treatment: "",
      urgency: "",
      medicalHistory: "",
      currentMedication: "",
      allergies: "",
    },
    preferences: {
      city: "",
      hospital: "",
      accommodation: "",
      arrivalDate: "",
      departureDate: "",
      companion: false,
    },
    documents: {
      passport: false,
      medicalReports: false,
      insurance: false,
      photos: false,
    },
  });

  const steps = [
    { id: 1, title: "Personal Information", icon: User },
    { id: 2, title: "Medical Details", icon: Stethoscope },
    { id: 3, title: "Preferences", icon: MapPin },
    { id: 4, title: "Documents", icon: FileText },
    { id: 5, title: "Review & Book", icon: CheckCircle },
  ];

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;

        return (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                isCompleted
                  ? "bg-green-500 border-green-500 text-white"
                  : isActive
                  ? "bg-primary-600 border-primary-600 text-white"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              {isCompleted ? <CheckCircle className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
            </div>
            <div className="ml-3 hidden md:block">
              <div
                className={`text-sm font-medium ${
                  isActive ? "text-primary-600" : isCompleted ? "text-green-600" : "text-gray-400"
                }`}
              >
                Step {step.id}
              </div>
              <div
                className={`text-xs ${
                  isActive ? "text-primary-600" : isCompleted ? "text-green-600" : "text-gray-400"
                }`}
              >
                {step.title}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-8 h-0.5 mx-4 ${isCompleted ? "bg-green-500" : "bg-gray-300"}`} />
            )}
          </div>
        );
      })}
    </div>
  );

  const PersonalInfoStep = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
          <input
            type="text"
            className="input-field"
            value={formData.personalInfo.firstName}
            onChange={(e) => handleInputChange("personalInfo", "firstName", e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
          <input
            type="text"
            className="input-field"
            value={formData.personalInfo.lastName}
            onChange={(e) => handleInputChange("personalInfo", "lastName", e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            className="input-field"
            value={formData.personalInfo.email}
            onChange={(e) => handleInputChange("personalInfo", "email", e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            className="input-field"
            value={formData.personalInfo.phone}
            onChange={(e) => handleInputChange("personalInfo", "phone", e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
          <select
            className="input-field"
            value={formData.personalInfo.country}
            onChange={(e) => handleInputChange("personalInfo", "country", e.target.value)}
            required
          >
            <option value="">Select Country</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
          <input
            type="number"
            className="input-field"
            value={formData.personalInfo.age}
            onChange={(e) => handleInputChange("personalInfo", "age", e.target.value)}
            min="18"
            max="100"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.personalInfo.gender === "male"}
                onChange={(e) => handleInputChange("personalInfo", "gender", e.target.value)}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.personalInfo.gender === "female"}
                onChange={(e) => handleInputChange("personalInfo", "gender", e.target.value)}
                className="mr-2"
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.personalInfo.gender === "other"}
                onChange={(e) => handleInputChange("personalInfo", "gender", e.target.value)}
                className="mr-2"
              />
              Other
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const MedicalInfoStep = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-4">Medical Information</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Required *</label>
          <select
            className="input-field"
            value={formData.medicalInfo.treatment}
            onChange={(e) => handleInputChange("medicalInfo", "treatment", e.target.value)}
            required
          >
            <option value="">Select Treatment</option>
            <option value="cardiac">Cardiac Surgery</option>
            <option value="orthopedic">Orthopedic Surgery</option>
            <option value="dental">Dental Treatment</option>
            <option value="cosmetic">Cosmetic Surgery</option>
            <option value="transplant">Transplant Surgery</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level *</label>
          <select
            className="input-field"
            value={formData.medicalInfo.urgency}
            onChange={(e) => handleInputChange("medicalInfo", "urgency", e.target.value)}
            required
          >
            <option value="">Select Urgency</option>
            <option value="emergency">Emergency (within 1 week)</option>
            <option value="urgent">Urgent (within 1 month)</option>
            <option value="normal">Normal (within 3 months)</option>
            <option value="elective">Elective (flexible timing)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Medical History</label>
          <textarea
            className="input-field"
            rows="4"
            value={formData.medicalInfo.medicalHistory}
            onChange={(e) => handleInputChange("medicalInfo", "medicalHistory", e.target.value)}
            placeholder="Please describe your medical history, previous surgeries, chronic conditions, etc."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Medications</label>
          <textarea
            className="input-field"
            rows="3"
            value={formData.medicalInfo.currentMedication}
            onChange={(e) => handleInputChange("medicalInfo", "currentMedication", e.target.value)}
            placeholder="List any medications you are currently taking"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
          <textarea
            className="input-field"
            rows="3"
            value={formData.medicalInfo.allergies}
            onChange={(e) => handleInputChange("medicalInfo", "allergies", e.target.value)}
            placeholder="List any known allergies (medications, food, environmental)"
          />
        </div>
      </div>
    </div>
  );

  const PreferencesStep = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-4">Travel & Accommodation Preferences</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred City *</label>
          <select
            className="input-field"
            value={formData.preferences.city}
            onChange={(e) => handleInputChange("preferences", "city", e.target.value)}
            required
          >
            <option value="">Select City</option>
            <option value="delhi">New Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="kolkata">Kolkata</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Hospital Preference</label>
          <select
            className="input-field"
            value={formData.preferences.hospital}
            onChange={(e) => handleInputChange("preferences", "hospital", e.target.value)}
          >
            <option value="">No Preference</option>
            <option value="apollo">Apollo Hospitals</option>
            <option value="fortis">Fortis Healthcare</option>
            <option value="manipal">Manipal Hospitals</option>
            <option value="medanta">Medanta</option>
            <option value="max">Max Healthcare</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Type *</label>
          <select
            className="input-field"
            value={formData.preferences.accommodation}
            onChange={(e) => handleInputChange("preferences", "accommodation", e.target.value)}
            required
          >
            <option value="">Select Accommodation</option>
            <option value="hotel-luxury">Luxury Hotel</option>
            <option value="hotel-standard">Standard Hotel</option>
            <option value="guest-house">Hospital Guest House</option>
            <option value="apartment">Service Apartment</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Traveling with Companion?</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.preferences.companion}
                onChange={(e) => handleInputChange("preferences", "companion", e.target.checked)}
                className="mr-2"
              />
              Yes, I will have a companion
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Arrival Date *</label>
          <input
            type="date"
            className="input-field"
            value={formData.preferences.arrivalDate}
            onChange={(e) => handleInputChange("preferences", "arrivalDate", e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Expected Departure Date</label>
          <input
            type="date"
            className="input-field"
            value={formData.preferences.departureDate}
            onChange={(e) => handleInputChange("preferences", "departureDate", e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const DocumentsStep = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-4">Required Documents</h3>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-blue-900 mb-2">Document Checklist</h4>
        <p className="text-sm text-blue-700">
          Please ensure you have the following documents ready for your medical visa and treatment:
        </p>
      </div>
      <div className="space-y-4">
        {[
          { key: "passport", label: "Valid Passport (minimum 6 months validity)", required: true },
          { key: "medicalReports", label: "Medical Reports and Test Results", required: true },
          { key: "insurance", label: "Travel/Medical Insurance", required: false },
          { key: "photos", label: "Passport-sized Photographs", required: true },
        ].map((doc) => (
          <div key={doc.key} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-medium">{doc.label}</div>
              <div className="text-sm text-gray-600">{doc.required ? "Required" : "Optional"}</div>
            </div>
            <div className="flex items-center space-x-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.documents[doc.key]}
                  onChange={(e) => handleInputChange("documents", doc.key, e.target.checked)}
                  className="mr-2"
                />
                I have this document
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ReviewStep = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-4">Review Your Information</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h4 className="font-semibold mb-4">Personal Information</h4>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium">Name:</span> {formData.personalInfo.firstName}{" "}
              {formData.personalInfo.lastName}
            </div>
            <div>
              <span className="font-medium">Email:</span> {formData.personalInfo.email}
            </div>
            <div>
              <span className="font-medium">Phone:</span> {formData.personalInfo.phone}
            </div>
            <div>
              <span className="font-medium">Country:</span> {formData.personalInfo.country}
            </div>
            <div>
              <span className="font-medium">Age:</span> {formData.personalInfo.age}
            </div>
            <div>
              <span className="font-medium">Gender:</span> {formData.personalInfo.gender}
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h4 className="font-semibold mb-4">Medical Information</h4>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium">Treatment:</span> {formData.medicalInfo.treatment}
            </div>
            <div>
              <span className="font-medium">Urgency:</span> {formData.medicalInfo.urgency}
            </div>
            <div>
              <span className="font-medium">Medical History:</span>{" "}
              {formData.medicalInfo.medicalHistory || "Not provided"}
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h4 className="font-semibold mb-4">Travel Preferences</h4>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium">City:</span> {formData.preferences.city}
            </div>
            <div>
              <span className="font-medium">Hospital:</span> {formData.preferences.hospital || "No preference"}
            </div>
            <div>
              <span className="font-medium">Accommodation:</span> {formData.preferences.accommodation}
            </div>
            <div>
              <span className="font-medium">Arrival Date:</span> {formData.preferences.arrivalDate}
            </div>
            <div>
              <span className="font-medium">Companion:</span> {formData.preferences.companion ? "Yes" : "No"}
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h4 className="font-semibold mb-4">Documents Status</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <CheckCircle
                className={`h-4 w-4 mr-2 ${formData.documents.passport ? "text-green-500" : "text-gray-400"}`}
              />
              Passport
            </div>
            <div className="flex items-center">
              <CheckCircle
                className={`h-4 w-4 mr-2 ${formData.documents.medicalReports ? "text-green-500" : "text-gray-400"}`}
              />
              Medical Reports
            </div>
            <div className="flex items-center">
              <CheckCircle
                className={`h-4 w-4 mr-2 ${formData.documents.insurance ? "text-green-500" : "text-gray-400"}`}
              />
              Insurance
            </div>
            <div className="flex items-center">
              <CheckCircle
                className={`h-4 w-4 mr-2 ${formData.documents.photos ? "text-green-500" : "text-gray-400"}`}
              />
              Photographs
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep />;
      case 2:
        return <MedicalInfoStep />;
      case 3:
        return <PreferencesStep />;
      case 4:
        return <DocumentsStep />;
      case 5:
        return <ReviewStep />;
      default:
        return <PersonalInfoStep />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 pt-28">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Book Your Medical Journey</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your complete medical tourism experience with our step-by-step booking process
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <StepIndicator />

            <div className="min-h-[500px]">{renderCurrentStep()}</div>

            <div className="flex justify-between mt-8 pt-8 border-t">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`btn-secondary ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                Previous
              </button>

              {currentStep < steps.length ? (
                <button onClick={nextStep} className="btn-primary">
                  Next
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              ) : (
                <button className="btn-primary">
                  Submit Booking Request
                  <CheckCircle className="h-5 w-5 ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPlanner;
