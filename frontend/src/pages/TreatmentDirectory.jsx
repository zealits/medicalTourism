import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Star,
  Clock,
  DollarSign,
  MapPin,
  Building2,
  ArrowRight,
  Heart,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import { treatments, categories } from "../data/treatments";
import { cities } from "../data/hospitals";

const TreatmentDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTreatments = useMemo(() => {
    let filtered = treatments;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (treatment) =>
          treatment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          treatment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          treatment.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((treatment) => treatment.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.costs.india.total - b.costs.india.total;
        case "price-high":
          return b.costs.india.total - a.costs.india.total;
        case "success-rate":
          return b.successRate - a.successRate;
        case "duration":
          return a.duration.localeCompare(b.duration);
        default:
          return b.successRate - a.successRate; // Default to popularity (success rate)
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedCity, sortBy]);

  const TreatmentCard = ({ treatment }) => {
    const savings = (
      ((treatment.costs.usa.total - treatment.costs.india.total) / treatment.costs.usa.total) *
      100
    ).toFixed(0);

    return (
      <div className="card overflow-hidden group hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <img
            src={treatment.image}
            alt={treatment.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {treatment.category}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Save {savings}%</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
            {treatment.name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{treatment.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              <span>{treatment.duration}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Star className="h-4 w-4 mr-2 text-yellow-500" />
              <span>{treatment.successRate}% success</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Heart className="h-4 w-4 mr-2 text-red-500" />
              <span>{treatment.recovery} recovery</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Building2 className="h-4 w-4 mr-2" />
              <span>Multiple cities</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-gray-500">Starting from</div>
                <div className="text-2xl font-bold text-primary-600">
                  ${treatment.costs.india.total.toLocaleString()}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 line-through">${treatment.costs.usa.total.toLocaleString()}</div>
                <div className="text-sm font-medium text-green-600">
                  You save ${(treatment.costs.usa.total - treatment.costs.india.total).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Link to={`/treatments/${treatment.id}`} className="btn-primary flex-1 justify-center">
                View Details
              </Link>
              <Link to={`/cost-comparison?treatment=${treatment.id}`} className="btn-secondary flex-1 justify-center">
                Compare Costs
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 pt-28">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Medical Treatments in India</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore world-class medical treatments at affordable prices. All procedures are performed by internationally
            trained doctors in JCI-accredited hospitals.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="card p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search treatments, procedures, or specialties..."
                className="input-field pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Toggle */}
            <button onClick={() => setShowFilters(!showFilters)} className="btn-secondary flex items-center lg:hidden">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Filters */}
          <div
            className={`mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${
              showFilters ? "block" : "hidden lg:grid"
            }`}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                className="input-field"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <select className="input-field" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="all">All Cities</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}, {city.state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select className="input-field" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="success-rate">Success Rate</option>
                <option value="duration">Duration</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                className="btn-primary w-full"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedCity("all");
                  setSortBy("popularity");
                }}
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card p-6 text-center">
            <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-primary-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{treatments.length}</div>
            <div className="text-sm text-gray-600">Available Treatments</div>
          </div>

          <div className="card p-6 text-center">
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">70%</div>
            <div className="text-sm text-gray-600">Average Savings</div>
          </div>

          <div className="card p-6 text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">50K+</div>
            <div className="text-sm text-gray-600">Patients Treated</div>
          </div>

          <div className="card p-6 text-center">
            <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTreatments.length} of {treatments.length} treatments
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== "all" && ` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
          </p>
        </div>

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>

        {/* No Results */}
        {filteredTreatments.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No treatments found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                className="btn-primary"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedCity("all");
                  setSortBy("popularity");
                }}
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* Popular Categories */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Specialty</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg text-center transition-colors duration-200 ${
                  selectedCategory === category.id ? "bg-primary-100 text-primary-600" : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium">{category.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card p-8 bg-primary-50 border border-primary-200">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Need Help Choosing?</h3>
            <p className="text-primary-700 mb-6">
              Our medical experts can help you find the right treatment and hospital based on your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cost-comparison" className="btn-primary">
                Get Cost Comparison
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link to="/booking" className="btn-secondary">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDirectory;
