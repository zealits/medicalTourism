import React, { useState, useMemo } from "react";
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
} from "lucide-react";
import { treatments } from "../data/treatments";

const CostComparison = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [selectedOrigin, setSelectedOrigin] = useState("USA");
  const [additionalCosts, setAdditionalCosts] = useState({
    flight: 1500,
    accommodation: 100,
    days: 10,
    meals: 50,
    local_transport: 30,
    visa: 200,
  });

  const countries = [
    { code: "india", name: "India", flag: "🇮🇳" },
    { code: "usa", name: "USA", flag: "🇺🇸" },
    { code: "uk", name: "UK", flag: "🇬🇧" },
    { code: "uae", name: "UAE", flag: "🇦🇪" },
  ];

  const originCountries = [
    { code: "USA", name: "United States", flag: "🇺🇸" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
    { code: "Canada", name: "Canada", flag: "🇨🇦" },
    { code: "Australia", name: "Australia", flag: "🇦🇺" },
    { code: "Germany", name: "Germany", flag: "🇩🇪" },
    { code: "France", name: "France", flag: "🇫🇷" },
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

  const CostCard = ({ country, costs, isHighlighted = false }) => (
    <div className={`p-6 flex flex-col ${isHighlighted ? "bg-primary-50" : ""}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="text-2xl mr-2">{countries.find((c) => c.code === country)?.flag}</span>
          <h3 className="text-xl font-semibold">{countries.find((c) => c.code === country)?.name}</h3>
        </div>
        {isHighlighted && (
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">Best Value</span>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Treatment Cost</span>
          <span className="font-medium">${costs.treatment?.toLocaleString() || "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Hospital Stay</span>
          <span className="font-medium">${costs.hospital?.toLocaleString() || "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Consultations</span>
          <span className="font-medium">${costs.consultation?.toLocaleString() || "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tests & Diagnostics</span>
          <span className="font-medium">${costs.tests?.toLocaleString() || "N/A"}</span>
        </div>
        {costs.flight > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600">Flight</span>
            <span className="font-medium">${costs.flight.toLocaleString()}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-gray-600">Accommodation ({additionalCosts.days} days)</span>
          <span className="font-medium">${costs.accommodation.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Meals</span>
          <span className="font-medium">${costs.meals.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Local Transport</span>
          <span className="font-medium">${costs.transport.toLocaleString()}</span>
        </div>
        {costs.visa > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600">Visa</span>
            <span className="font-medium">${costs.visa.toLocaleString()}</span>
          </div>
        )}

        <div className="border-t pt-3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total Cost</span>
            <span className="text-2xl font-bold text-primary-600">${costs.grandTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 pt-28">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Medical Cost Comparison</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get accurate cost estimates for your medical treatment across different countries. Compare all-inclusive
            packages including treatment, travel, and accommodation.
          </p>
        </div>

        {/* Configuration Panel */}
        <div className="card p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Calculator className="h-6 w-6 mr-2 text-primary-600" />
            Customize Your Comparison
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Treatment</label>
              <select
                className="input-field"
                value={selectedTreatment.id}
                onChange={(e) => setSelectedTreatment(treatments.find((t) => t.id === parseInt(e.target.value)))}
              >
                {treatments.map((treatment) => (
                  <option key={treatment.id} value={treatment.id}>
                    {treatment.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Country</label>
              <select
                className="input-field"
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
              >
                {originCountries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hospital Stay (days)</label>
              <input
                type="number"
                className="input-field"
                value={additionalCosts.days}
                onChange={(e) => setAdditionalCosts({ ...additionalCosts, days: parseInt(e.target.value) })}
                min="1"
                max="30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation (per night)</label>
              <input
                type="number"
                className="input-field"
                value={additionalCosts.accommodation}
                onChange={(e) => setAdditionalCosts({ ...additionalCosts, accommodation: parseInt(e.target.value) })}
                min="50"
                max="500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Meals (per day)</label>
              <input
                type="number"
                className="input-field"
                value={additionalCosts.meals}
                onChange={(e) => setAdditionalCosts({ ...additionalCosts, meals: parseInt(e.target.value) })}
                min="20"
                max="200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transport (per day)</label>
              <input
                type="number"
                className="input-field"
                value={additionalCosts.local_transport}
                onChange={(e) => setAdditionalCosts({ ...additionalCosts, local_transport: parseInt(e.target.value) })}
                min="10"
                max="100"
              />
            </div>
          </div>
        </div>

        {/* Savings Highlight */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
          <div className="flex items-center mb-4">
            <TrendingDown className="h-8 w-8 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-green-800">Your Potential Savings</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-sm text-green-600 mb-1">vs USA</div>
              <div className="text-2xl font-bold text-green-800">${savings.vsUSA.amount.toLocaleString()}</div>
              <div className="text-sm text-green-600">({savings.vsUSA.percentage}% savings)</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-green-600 mb-1">vs UK</div>
              <div className="text-2xl font-bold text-green-800">${savings.vsUK.amount.toLocaleString()}</div>
              <div className="text-sm text-green-600">({savings.vsUK.percentage}% savings)</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-green-600 mb-1">vs UAE</div>
              <div className="text-2xl font-bold text-green-800">${savings.vsUAE.amount.toLocaleString()}</div>
              <div className="text-sm text-green-600">({savings.vsUAE.percentage}% savings)</div>
            </div>
          </div>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12 overflow-x-auto divide-x divide-gray-200 w-full">
          <CostCard country="india" costs={totalCostWithTravel.india} isHighlighted={true} />
          <CostCard country="usa" costs={totalCostWithTravel.usa} />
          <CostCard country="uk" costs={totalCostWithTravel.uk} />
          <CostCard country="uae" costs={totalCostWithTravel.uae} />
        </div>

        {/* Treatment Details */}
        <div className="p-6 mb-12 w-full">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Stethoscope className="h-6 w-6 mr-2 text-primary-600" />
            Treatment Details: {selectedTreatment.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-500 mr-2" />
              <div>
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-medium">{selectedTreatment.duration}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Building className="h-5 w-5 text-gray-500 mr-2" />
              <div>
                <div className="text-sm text-gray-600">Recovery</div>
                <div className="font-medium">{selectedTreatment.recovery}</div>
              </div>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <div>
                <div className="text-sm text-gray-600">Success Rate</div>
                <div className="font-medium">{selectedTreatment.successRate}%</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-500 mr-2" />
              <div>
                <div className="text-sm text-gray-600">Category</div>
                <div className="font-medium">{selectedTreatment.category}</div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">{selectedTreatment.description}</p>
          </div>
        </div>

        {/* What's Included */}
        <div className="p-6 mb-12 w-full">
          <h3 className="text-2xl font-semibold mb-4">What's Included in India Package</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Complete medical treatment</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Hospital accommodation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>All diagnostic tests</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Specialist consultations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Post-operative care</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Airport pickup/drop</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Medical visa assistance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Language interpreter</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>24/7 patient support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span>Medical tourism coordinator</span>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-yellow-50 p-6 mb-12 rounded-lg w-full">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Important Note</h4>
              <p className="text-yellow-700">
                These are estimated costs based on average prices. Final costs may vary depending on your specific
                medical condition, hospital choice, and treatment requirements. We recommend getting a personalized
                quote for accurate pricing.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <div className="card p-8 bg-primary-50 border border-primary-200">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Ready to Get Started?</h3>
            <p className="text-primary-700 mb-6">
              Get a personalized quote and start planning your medical journey to India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                <Download className="h-5 w-5 mr-2" />
                Download Cost Report
              </button>
              <button className="btn-secondary">
                <Share2 className="h-5 w-5 mr-2" />
                Share Comparison
              </button>
              <button className="btn-primary">
                Get Personalized Quote
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostComparison;
