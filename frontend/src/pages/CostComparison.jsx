import React, { useState, useMemo, useRef } from "react";
import {
  Calculator,
  TrendingDown,
  DollarSign,
  MapPin,
  Plane,
  Building,
  Stethoscope,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Download,
  Share2,
  Star,
  Shield,
  Award,
  Users
} from "lucide-react";
import hospitalBg from "../assets/modern-style-hospital-building-straight-lines-concrete-facing-30588884.webp";
import laptopBg from "../assets/laptop-820274_1280.jpg";

const CostComparison = () => {
  // Sample treatments data
  const treatments = [
    {
      id: 1,
      name: "Heart Bypass Surgery",
      category: "Cardiology",
      duration: "4-6 hours",
      recovery: "6-8 weeks",
      successRate: 95,
      description: "Coronary artery bypass surgery to improve blood flow to the heart.",
      costs: {
        india: { treatment: 8000, hospital: 2000, consultation: 500, tests: 800, total: 11300 },
        usa: { treatment: 80000, hospital: 15000, consultation: 2000, tests: 3000, total: 100000 },
        uk: { treatment: 65000, hospital: 12000, consultation: 1500, tests: 2500, total: 81000 },
        uae: { treatment: 45000, hospital: 8000, consultation: 1000, tests: 2000, total: 56000 }
      }
    },
    {
      id: 2,
      name: "Hip Replacement",
      category: "Orthopedic",
      duration: "2-3 hours",
      recovery: "4-6 weeks",
      successRate: 98,
      description: "Total hip replacement surgery for improved mobility and pain relief.",
      costs: {
        india: { treatment: 6000, hospital: 1500, consultation: 400, tests: 600, total: 8500 },
        usa: { treatment: 50000, hospital: 10000, consultation: 1500, tests: 2000, total: 63500 },
        uk: { treatment: 40000, hospital: 8000, consultation: 1200, tests: 1800, total: 51000 },
        uae: { treatment: 28000, hospital: 6000, consultation: 800, tests: 1200, total: 36000 }
      }
    },
    // Added more treatment options (static, for dropdown only)
    {
      id: 3,
      name: "Knee Replacement",
      category: "Orthopedic",
      duration: "2-3 hours",
      recovery: "4-6 weeks",
      successRate: 97,
      description: "Surgical procedure to replace the weight-bearing surfaces of the knee joint.",
      costs: {
        india: { treatment: 5500, hospital: 1200, consultation: 350, tests: 500, total: 7550 },
        usa: { treatment: 48000, hospital: 9000, consultation: 1200, tests: 1800, total: 60000 },
        uk: { treatment: 35000, hospital: 7000, consultation: 1000, tests: 1500, total: 44500 },
        uae: { treatment: 25000, hospital: 5000, consultation: 700, tests: 1000, total: 31700 }
      }
    },
    {
      id: 4,
      name: "Dental Implants",
      category: "Dental",
      duration: "1-2 hours",
      recovery: "1-2 weeks",
      successRate: 96,
      description: "Replacement of tooth roots with metal, screwlike posts and artificial teeth.",
      costs: {
        india: { treatment: 1200, hospital: 300, consultation: 100, tests: 200, total: 1800 },
        usa: { treatment: 6000, hospital: 1000, consultation: 300, tests: 400, total: 7700 },
        uk: { treatment: 5000, hospital: 800, consultation: 250, tests: 350, total: 6400 },
        uae: { treatment: 3500, hospital: 600, consultation: 200, tests: 300, total: 4600 }
      }
    },
    {
      id: 5,
      name: "Cosmetic Rhinoplasty",
      category: "Cosmetic",
      duration: "1-2 hours",
      recovery: "2-3 weeks",
      successRate: 92,
      description: "Surgical procedure to change the shape of the nose for cosmetic reasons.",
      costs: {
        india: { treatment: 2500, hospital: 700, consultation: 200, tests: 300, total: 3700 },
        usa: { treatment: 12000, hospital: 2500, consultation: 500, tests: 800, total: 15800 },
        uk: { treatment: 9000, hospital: 1800, consultation: 400, tests: 600, total: 11800 },
        uae: { treatment: 7000, hospital: 1200, consultation: 300, tests: 500, total: 9000 }
      }
    },
  ];

  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [selectedOrigin, setSelectedOrigin] = useState("USA");
  const [additionalCosts, setAdditionalCosts] = useState({
    flight: 1500,
    accommodation: 100,
    days: 10,
    meals: 50,
    local_transport: 30,
    visa: 200,
    insurance: 0,
    postOpDays: 0,
    misc: 0,
    travelers: 1,
  });
  const [currency, setCurrency] = useState("USD");

  const countries = [
    { code: "india", name: "India", flag: "🇮🇳", color: "from-blue-500 to-blue-400" },
    { code: "usa", name: "USA", flag: "🇺🇸", color: "from-blue-500 to-blue-400" },
    { code: "uk", name: "UK", flag: "🇬🇧", color: "from-blue-500 to-blue-400" },
    { code: "uae", name: "UAE", flag: "🇦🇪", color: "from-blue-500 to-blue-400" },
  ];

  const originCountries = [
    { code: "USA", name: "United States", flag: "🇺🇸" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
    { code: "Canada", name: "Canada", flag: "🇨🇦" },
    { code: "Australia", name: "Australia", flag: "🇦🇺" },
    { code: "Germany", name: "Germany", flag: "🇩🇪" },
    { code: "France", name: "France", flag: "🇫🇷" },
    // Added more countries
    { code: "Italy", name: "Italy", flag: "🇮🇹" },
    { code: "Spain", name: "Spain", flag: "🇪🇸" },
    { code: "Russia", name: "Russia", flag: "🇷🇺" },
    { code: "Japan", name: "Japan", flag: "🇯🇵" },
    { code: "China", name: "China", flag: "🇨🇳" },
    { code: "Brazil", name: "Brazil", flag: "🇧🇷" },
    { code: "SouthAfrica", name: "South Africa", flag: "🇿🇦" },
    { code: "UAE", name: "United Arab Emirates", flag: "🇦🇪" },
    { code: "SaudiArabia", name: "Saudi Arabia", flag: "🇸🇦" },
    { code: "Singapore", name: "Singapore", flag: "🇸🇬" },
    { code: "Thailand", name: "Thailand", flag: "🇹🇭" },
    { code: "Malaysia", name: "Malaysia", flag: "🇲🇾" },
  ];

  const flightCosts = {
    USA: 1500,
    UK: 800,
    Canada: 1200,
    Australia: 1800,
    Germany: 600,
    France: 550,
  };

  const totalCostWithTravel = useMemo(() => {
    const flightCost = flightCosts[selectedOrigin] || 1500;
    const accommodationCost = additionalCosts.accommodation * additionalCosts.days;
    const mealsCost = additionalCosts.meals * additionalCosts.days;
    const transportCost = additionalCosts.local_transport * additionalCosts.days;
    const visaCost = additionalCosts.visa;

    return {
      india: {
        ...selectedTreatment.costs.india,
        flight: flightCost,
        accommodation: accommodationCost,
        meals: mealsCost,
        transport: transportCost,
        visa: visaCost,
        grandTotal:
          selectedTreatment.costs.india.total + flightCost + accommodationCost + mealsCost + transportCost + visaCost,
      },
      usa: {
        ...selectedTreatment.costs.usa,
        flight: 0,
        accommodation: 200 * additionalCosts.days,
        meals: 80 * additionalCosts.days,
        transport: 50 * additionalCosts.days,
        visa: 0,
        grandTotal:
          selectedTreatment.costs.usa.total +
          200 * additionalCosts.days +
          80 * additionalCosts.days +
          50 * additionalCosts.days,
      },
      uk: {
        ...selectedTreatment.costs.uk,
        flight: 0,
        accommodation: 150 * additionalCosts.days,
        meals: 70 * additionalCosts.days,
        transport: 40 * additionalCosts.days,
        visa: 0,
        grandTotal:
          selectedTreatment.costs.uk.total +
          150 * additionalCosts.days +
          70 * additionalCosts.days +
          40 * additionalCosts.days,
      },
      uae: {
        ...selectedTreatment.costs.uae,
        flight: selectedOrigin === "UAE" ? 0 : flightCost * 0.6,
        accommodation: 120 * additionalCosts.days,
        meals: 60 * additionalCosts.days,
        transport: 35 * additionalCosts.days,
        visa: 100,
        grandTotal:
          selectedTreatment.costs.uae.total +
          (selectedOrigin === "UAE" ? 0 : flightCost * 0.6) +
          120 * additionalCosts.days +
          60 * additionalCosts.days +
          35 * additionalCosts.days +
          100,
      },
    };
  }, [selectedTreatment, selectedOrigin, additionalCosts]);

  const savings = useMemo(() => {
    const indiaCost = totalCostWithTravel.india.grandTotal;
    const usaCost = totalCostWithTravel.usa.grandTotal;
    const ukCost = totalCostWithTravel.uk.grandTotal;
    const uaeCost = totalCostWithTravel.uae.grandTotal;

    return {
      vsUSA: {
        amount: usaCost - indiaCost,
        percentage: (((usaCost - indiaCost) / usaCost) * 100).toFixed(1),
      },
      vsUK: {
        amount: ukCost - indiaCost,
        percentage: (((ukCost - indiaCost) / ukCost) * 100).toFixed(1),
      },
      vsUAE: {
        amount: uaeCost - indiaCost,
        percentage: (((uaeCost - indiaCost) / uaeCost) * 100).toFixed(1),
      },
    };
  }, [totalCostWithTravel]);

  const CostCard = ({ country, costs, isHighlighted = false }) => {
    const countryData = countries.find((c) => c.code === country);
    return (
      <div className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
        isHighlighted 
          ? "bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200" 
          : "bg-white border border-gray-100"
      }`}>
        {/* Header with gradient */}
        <div className={`bg-gradient-to-r ${countryData.color} p-6 text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{countryData.flag}</span>
              <div>
                <h3 className="text-xl font-bold">{countryData.name}</h3>
                <p className="text-white/80 text-sm">Medical Destination</p>
              </div>
            </div>
            {isHighlighted && (
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-sm font-semibold flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  Best Value
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center">
                <Stethoscope className="h-4 w-4 mr-2" />
                Treatment Cost
              </span>
              <span className="font-semibold text-gray-900">${costs.treatment?.toLocaleString() || "N/A"}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center">
                <Building className="h-4 w-4 mr-2" />
                Hospital Stay
              </span>
              <span className="font-semibold text-gray-900">${costs.hospital?.toLocaleString() || "N/A"}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Consultations
              </span>
              <span className="font-semibold text-gray-900">${costs.consultation?.toLocaleString() || "N/A"}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Tests & Diagnostics</span>
              <span className="font-semibold text-gray-900">${costs.tests?.toLocaleString() || "N/A"}</span>
            </div>
            
            {costs.flight > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 flex items-center">
                  <Plane className="h-4 w-4 mr-2" />
                  Flight
                </span>
                <span className="font-semibold text-gray-900">${costs.flight.toLocaleString()}</span>
              </div>
            )}
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Accommodation ({additionalCosts.days} days)</span>
              <span className="font-semibold text-gray-900">${costs.accommodation.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Meals & Transport</span>
              <span className="font-semibold text-gray-900">${(costs.meals + costs.transport).toLocaleString()}</span>
            </div>
            
            {costs.visa > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Visa</span>
                <span className="font-semibold text-gray-900">${costs.visa.toLocaleString()}</span>
              </div>
            )}
          </div>

          {/* Total */}
          <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total Cost</span>
              <div className="text-right">
                <div className={`text-2xl font-bold ${isHighlighted ? 'text-blue-600' : 'text-blue-600'}`}>
                  ${costs.grandTotal.toLocaleString()}
                </div>
                {isHighlighted && (
                  <div className="text-sm text-blue-600 font-medium">Includes everything</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const comparisonRef = useRef(null);

  const handleScrollToComparison = () => {
    if (comparisonRef.current) {
      comparisonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with dark overlay background */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden mb-8">
        {/* Background image with dark overlay */}
        <img
          src={laptopBg}
          alt="Laptop Medical"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105"
        />
        <div className="absolute inset-0 bg-black/60 z-0" />
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-start px-6 md:px-12 py-12 gap-8 gap-x-12 min-h-[70vh] mt-12 md:mt-20">
          {/* Left: Heading, subtitle, badges, button */}
          <div className="flex-1 flex flex-col justify-center md:justify-center md:items-start items-center text-left text-white px-0 md:px-0">
            <h1
              className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.25)] opacity-0 animate-fadein-down text-center md:text-left"
              style={{ letterSpacing: '-0.03em' }}
            >
              Medical Cost Comparison
            </h1>
            <p
              className="text-base md:text-lg font-light mb-8 max-w-xl text-gray-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)] opacity-0 animate-fadein-up text-center md:text-left"
            >
              Compare comprehensive medical treatment packages across countries. Get accurate estimates including treatment, travel, accommodation, and all associated costs for your medical journey.
            </p>
            <div className="flex flex-row gap-6 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex-wrap justify-center md:justify-start">
              <div className="flex items-center text-base font-semibold bg-white/20 rounded-full px-4 py-2 shadow-sm backdrop-blur-sm text-yellow-200 min-w-[140px] justify-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />4.9/5 Rating
              </div>
              <div className="flex items-center text-base font-semibold bg-white/20 rounded-full px-4 py-2 shadow-sm backdrop-blur-sm text-blue-200 min-w-[140px] justify-center">
                <Users className="h-5 w-5 text-blue-300 mr-2" />10,000+ Patients
              </div>
              <div className="flex items-center text-base font-semibold bg-white/20 rounded-full px-4 py-2 shadow-sm backdrop-blur-sm text-green-200 min-w-[140px] justify-center">
                <Shield className="h-5 w-5 text-green-300 mr-2" />100% Secure
              </div>
            </div>
            <button
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-lg px-8 py-3 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 opacity-0 animate-fadein-up w-full md:w-fit"
              onClick={handleScrollToComparison}
              aria-label="Start Cost Comparison"
              style={{ boxShadow: '0 4px 24px 0 rgba(37, 99, 235, 0.18)' }}
            >
              Start Cost Comparison
            </button>
          </div>
          {/* Right: Why use our comparison? card - centered, with extra content */}
          <div className="flex-1 flex flex-col items-center justify-center md:items-center md:justify-center mt-8 md:mt-0 w-full md:w-auto px-0 md:px-0">
            <div className="bg-white/80 rounded-2xl p-6 shadow-2xl max-w-xs w-full border border-white/40 backdrop-blur-md transition-all duration-300 self-center text-center mb-6">
              <div className="font-semibold mb-2 text-lg text-gray-900">Why use our comparison?</div>
              <ul className="list-disc list-inside pl-0 text-base space-y-1 text-gray-800 text-center">
                <li>All-inclusive cost breakdown</li>
                <li>Personalized for your needs</li>
                <li>Trusted by thousands of patients</li>
              </ul>
            </div>
            {/* Additional right-side content */}
            <div className="bg-white/70 rounded-xl p-4 shadow-md max-w-xs w-full border border-gray-100 text-gray-700 text-center flex flex-col items-center gap-2">
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto mb-2 text-blue-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm0 0c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm0 8v-2m0 0c-4.418 0-8-1.79-8-4V7a2 2 0 012-2h16a2 2 0 012 2v6c0 2.21-3.582 4-8 4z" /></svg>
              <div className="font-semibold text-gray-900">Trusted Worldwide</div>
              <p className="text-sm">Our platform is recommended by patients from over 50 countries. Your journey is safe with us.</p>
              <div className="italic text-xs text-gray-500 mt-2">“The process was smooth and the support team was amazing!”<br/>– Sarah, UK</div>
            </div>
          </div>
        </div>
      </div>
      {/* Main content below hero section */}
      <div ref={comparisonRef} className="w-full px-0 md:px-0 mt-12">
        {/* Configuration Panel */}
        <section className="w-full flex justify-center items-center my-12">
          <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8 border border-blue-100 mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center text-blue-900">
            <Calculator className="h-8 w-8 mr-3 text-blue-600" />
            Customize Your Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Stethoscope className="h-4 w-4 text-blue-500" />
                  Select Treatment
                </label>
                <div className="relative">
              <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm appearance-none pr-10"
                value={selectedTreatment.id}
                onChange={(e) => setSelectedTreatment(treatments.find((t) => t.id === parseInt(e.target.value)))}
              >
                {treatments.map((treatment) => (
                  <option key={treatment.id} value={treatment.id}>
                    {treatment.name}
                  </option>
                ))}
              </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                    <Stethoscope className="h-5 w-5" />
                  </span>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  Your Country
                </label>
                <div className="relative">
              <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm appearance-none pr-10"
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
              >
                {originCountries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                    <MapPin className="h-5 w-5" />
                  </span>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  Hospital Stay (days)
                </label>
                <div className="relative">
              <input
                type="number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm pr-10"
                value={additionalCosts.days}
                onChange={(e) => setAdditionalCosts({ ...additionalCosts, days: parseInt(e.target.value) })}
                min="1"
                max="30"
              />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                    <Clock className="h-5 w-5" />
                  </span>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Building className="h-4 w-4 text-blue-500" />
                  Accommodation (per night)
                </label>
                <div className="relative">
              <input
                type="number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm pr-10"
                value={additionalCosts.accommodation}
                onChange={(e) => setAdditionalCosts({ ...additionalCosts, accommodation: parseInt(e.target.value) })}
                min="50"
                max="500"
              />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                    <Building className="h-5 w-5" />
                  </span>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  Meals (per day)
                </label>
                <div className="relative">
              <input
                type="number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm pr-10"
                value={additionalCosts.meals}
                onChange={(e) => setAdditionalCosts({ ...additionalCosts, meals: parseInt(e.target.value) })}
                min="20"
                max="200"
              />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                    <Users className="h-5 w-5" />
                  </span>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Plane className="h-4 w-4 text-blue-500" />
                  Transport (per day)
                </label>
                <div className="relative">
              <input
                type="number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm pr-10"
                value={additionalCosts.local_transport}
                onChange={(e) => setAdditionalCosts({ ...additionalCosts, local_transport: parseInt(e.target.value) })}
                min="10"
                max="100"
              />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                    <Plane className="h-5 w-5" />
                  </span>
                </div>
              </div>
              {/* New: Visa Cost (per person) */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-500" />
                  Visa Cost (per person)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm pr-10"
                    value={additionalCosts.visa}
                    onChange={(e) => setAdditionalCosts({ ...additionalCosts, visa: parseInt(e.target.value) })}
                    min="0"
                    max="1000"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                    <Shield className="h-5 w-5" />
                  </span>
                </div>
              </div>
              {/* New: Number of Travelers */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  Number of Travelers
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm pr-10"
                    value={additionalCosts.travelers}
                    onChange={(e) => setAdditionalCosts({ ...additionalCosts, travelers: parseInt(e.target.value) })}
                    min="1"
                    max="10"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                    <Users className="h-5 w-5" />
                  </span>
                </div>
              </div>
              {/* New: Insurance Cost */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Award className="h-4 w-4 text-blue-500" />
                  Insurance Cost
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm pr-10"
                    value={additionalCosts.insurance}
                    onChange={(e) => setAdditionalCosts({ ...additionalCosts, insurance: parseInt(e.target.value) })}
                    min="0"
                    max="10000"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                    <Award className="h-5 w-5" />
                  </span>
                </div>
              </div>
              {/* New: Post-Operative Stay (days) */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  Post-Operative Stay (days)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm pr-10"
                    value={additionalCosts.postOpDays}
                    onChange={(e) => setAdditionalCosts({ ...additionalCosts, postOpDays: parseInt(e.target.value) })}
                    min="0"
                    max="30"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                    <Clock className="h-5 w-5" />
                  </span>
                </div>
              </div>
              {/* New: Miscellaneous Costs */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-blue-500" />
                  Miscellaneous Costs
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm pr-10"
                    value={additionalCosts.misc}
                    onChange={(e) => setAdditionalCosts({ ...additionalCosts, misc: parseInt(e.target.value) })}
                    min="0"
                    max="10000"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                    <AlertCircle className="h-5 w-5" />
                  </span>
                </div>
              </div>
              {/* New: Currency Selector */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-blue-500" />
                  Currency
                </label>
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm appearance-none pr-10"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="INR">INR (₹)</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                    <DollarSign className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Savings Highlight */}
        <section className="w-full flex justify-center items-center my-12">
          <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8 border border-blue-100 mx-auto">
          <div className="flex items-center mb-6">
            <TrendingDown className="h-10 w-10 mr-4 text-blue-600" />
              <h3 className="text-3xl font-bold text-blue-900">Your Potential Savings</h3>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center bg-blue-50 rounded-xl p-8 shadow border border-blue-100">
                <DollarSign className="h-8 w-8 mb-2 text-blue-500" />
                <div className="text-sm text-blue-700 mb-2 font-semibold">vs USA</div>
                <div className="text-3xl font-bold text-blue-900">${savings.vsUSA.amount.toLocaleString()}</div>
              <div className="text-sm text-blue-700">({savings.vsUSA.percentage}% savings)</div>
            </div>
              <div className="flex flex-col items-center bg-blue-50 rounded-xl p-8 shadow border border-blue-100">
                <DollarSign className="h-8 w-8 mb-2 text-blue-500" />
                <div className="text-sm text-blue-700 mb-2 font-semibold">vs UK</div>
                <div className="text-3xl font-bold text-blue-900">${savings.vsUK.amount.toLocaleString()}</div>
              <div className="text-sm text-blue-700">({savings.vsUK.percentage}% savings)</div>
            </div>
              <div className="flex flex-col items-center bg-blue-50 rounded-xl p-8 shadow border border-blue-100">
                <DollarSign className="h-8 w-8 mb-2 text-blue-500" />
                <div className="text-sm text-blue-700 mb-2 font-semibold">vs UAE</div>
                <div className="text-3xl font-bold text-blue-900">${savings.vsUAE.amount.toLocaleString()}</div>
              <div className="text-sm text-blue-700">({savings.vsUAE.percentage}% savings)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison Cards */}
        <section className="w-full flex justify-center items-center my-12">
          <div className="w-full max-w-5xl bg-blue-50 rounded-2xl shadow p-8 mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center text-blue-900 justify-center">
              Cost Comparison by Country
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
              <CostCard country="india" costs={totalCostWithTravel.india} isHighlighted={true} />
              <CostCard country="usa" costs={totalCostWithTravel.usa} />
              <CostCard country="uk" costs={totalCostWithTravel.uk} />
              {/* <CostCard country="uae" costs={totalCostWithTravel.uae} /> Removed as per user request */}
            </div>
          </div>
        </section>
        {/* Remove Treatment Details section as per user request */}

        {/* What's Included */}
        <div className="w-full flex justify-center items-center my-12">
          <div className="w-full max-w-7xl bg-blue-50 rounded-2xl shadow p-8 mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-blue-900">What's Included in India Package</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                <span className="font-medium text-gray-900">Complete medical treatment</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                <span className="font-medium text-gray-900">Hospital accommodation</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                <span className="font-medium text-gray-900">All diagnostic tests</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                <span className="font-medium text-gray-900">Specialist consultations</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                <span className="font-medium text-gray-900">Post-operative care</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                <span className="font-medium text-gray-900">Airport pickup/drop</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                <span className="font-medium text-gray-900">Medical visa assistance</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                <span className="font-medium text-gray-900">Language interpreter</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                <span className="font-medium text-gray-900">24/7 patient support</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                <span className="font-medium text-gray-900">Medical tourism coordinator</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="w-full flex justify-center items-center my-12">
          <div className="w-full max-w-7xl bg-blue-200 rounded-2xl shadow p-8 mx-auto">
          <div className="flex items-start">
            <AlertCircle className="h-8 w-8 text-blue-600 mr-4 mt-1" />
            <div>
              <h4 className="font-bold text-blue-800 mb-3 text-xl">Important Note</h4>
              <p className="text-blue-900 text-lg leading-relaxed">
                These are estimated costs based on average prices. Final costs may vary depending on your specific
                medical condition, hospital choice, and treatment requirements. We recommend getting a personalized
                quote for accurate pricing.
              </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full flex justify-center items-center my-12">
          <div className="w-full max-w-7xl bg-blue-600 text-white rounded-2xl shadow p-10 mx-auto">
          <h3 className="text-4xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a personalized quote and start planning your medical journey to India with our expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
              <Download className="h-6 w-6 mr-3" />
              Download Cost Report
            </button>
            <button className="bg-blue-200 text-blue-900 border-2 border-blue-300 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-300 transition-all duration-300 flex items-center justify-center">
              <Share2 className="h-6 w-6 mr-3" />
              Share Comparison
            </button>
            <button className="bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
              Get Personalized Quote
              <ArrowRight className="h-6 w-6 ml-3" />
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostComparison;