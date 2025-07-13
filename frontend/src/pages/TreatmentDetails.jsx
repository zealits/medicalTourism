import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Heart, 
  Building2,
  CheckCircle,
  DollarSign,
  MapPin,
  Phone,
  Calendar,
  Shield,
  Award,
  Users,
  TrendingDown
} from 'lucide-react';
import { treatments } from '../data/treatments';
import { hospitals } from '../data/hospitals';

const TreatmentDetails = () => {
  const { id } = useParams();
  const treatment = treatments.find(t => t.id === parseInt(id));
  
  if (!treatment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Treatment Not Found</h1>
          <Link to="/treatments" className="btn-primary">
            Back to Treatments
          </Link>
        </div>
      </div>
    );
  }

  const savings = ((treatment.costs.usa.total - treatment.costs.india.total) / treatment.costs.usa.total * 100).toFixed(0);
  const relatedHospitals = hospitals.filter(h => 
    h.specialties.some(s => s.toLowerCase().includes(treatment.category.toLowerCase()))
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/treatments" 
          className="flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Treatments
        </Link>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                {treatment.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {treatment.name}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{treatment.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-500 mr-2" />
                <div>
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-medium">{treatment.duration}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                <div>
                  <div className="text-sm text-gray-600">Recovery</div>
                  <div className="font-medium">{treatment.recovery}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                  <div className="font-medium">{treatment.successRate}%</div>
                </div>
              </div>
              <div className="flex items-center">
                <Building2 className="h-5 w-5 text-gray-500 mr-2" />
                <div>
                  <div className="text-sm text-gray-600">Hospitals</div>
                  <div className="font-medium">{hospitals.length}+ Available</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card overflow-hidden">
            <img 
              src={treatment.image} 
              alt={treatment.name}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <DollarSign className="h-6 w-6 mr-2 text-green-600" />
            Cost Comparison
          </h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-green-800">Potential Savings</h3>
                <p className="text-green-700">Choose India and save significantly on your treatment</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">{savings}%</div>
                <div className="text-sm text-green-600">Average Savings</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(treatment.costs).map(([country, costs]) => (
              <div key={country} className={`border rounded-lg p-4 ${country === 'india' ? 'ring-2 ring-primary-500 bg-primary-50' : ''}`}>
                <div className="flex items-center mb-3">
                  <span className="text-xl mr-2">
                    {country === 'india' ? '🇮🇳' : country === 'usa' ? '🇺🇸' : country === 'uk' ? '🇬🇧' : '🇦🇪'}
                  </span>
                  <h4 className="font-semibold capitalize">{country}</h4>
                  {country === 'india' && (
                    <span className="ml-2 bg-primary-600 text-white px-2 py-1 rounded text-xs">
                      Best Value
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Treatment:</span>
                    <span>${costs.treatment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Hospital:</span>
                    <span>${costs.hospital.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tests:</span>
                    <span>${costs.tests.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span className="text-lg">${costs.total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose India */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Why Choose India for {treatment.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">World-Class Quality</h3>
                <p className="text-gray-600 text-sm">
                  JCI-accredited hospitals with international standards and cutting-edge technology
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <TrendingDown className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cost Effective</h3>
                <p className="text-gray-600 text-sm">
                  Save up to {savings}% compared to similar treatments in USA and UK
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Expert Surgeons</h3>
                <p className="text-gray-600 text-sm">
                  Highly experienced doctors trained in top medical institutions worldwide
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Available Hospitals */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Recommended Hospitals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedHospitals.map((hospital) => (
              <div key={hospital.id} className="border rounded-lg p-4">
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
                <h3 className="font-semibold mb-2">{hospital.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{hospital.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {hospital.accreditations.slice(0, 2).map((acc, idx) => (
                    <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {acc}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/hospitals/${hospital.id}`}
                  className="btn-primary text-sm w-full justify-center"
                >
                  View Hospital
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Process Overview */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Treatment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Consultation', desc: 'Initial assessment and treatment planning' },
              { step: 2, title: 'Pre-operative', desc: 'Medical tests and preparation' },
              { step: 3, title: 'Treatment', desc: 'Surgical procedure or treatment' },
              { step: 4, title: 'Recovery', desc: 'Post-operative care and follow-up' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-semibold">{step.step}</span>
                </div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card p-8 bg-primary-50 border border-primary-200">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Ready to Start Your Treatment Journey?
            </h3>
            <p className="text-primary-700 mb-6">
              Get personalized treatment plan and cost estimate for {treatment.name}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cost-comparison" className="btn-primary">
                Get Cost Estimate
                <DollarSign className="h-5 w-5 ml-2" />
              </Link>
              <Link to="/booking" className="btn-secondary">
                Book Consultation
                <Calendar className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetails; 