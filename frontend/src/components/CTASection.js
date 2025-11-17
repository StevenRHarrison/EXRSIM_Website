import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-exrsim-orange to-exrsim-orange-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Strengthen Your
            <span className="block">Emergency Preparedness?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Join hundreds of Canadian organizations that trust EXRSIM to prepare 
            their teams for critical emergency situations.
          </p>

          {/* CTA Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Free Demo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Calendar className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Free Demo</h3>
              <p className="text-white/80 mb-4">
                Schedule a personalized demonstration of our platform
              </p>
              <Link
                to="/contact"
                className="bg-white text-exrsim-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Book Demo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* Contact Sales */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Phone className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Contact Sales</h3>
              <p className="text-white/80 mb-4">
                Speak with our emergency preparedness experts
              </p>
              <a
                href="tel:+14165559999"
                className="bg-white text-exrsim-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Call Now
                <Phone className="h-4 w-4 ml-2" />
              </a>
            </div>

            {/* Get Started */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Mail className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Get Started</h3>
              <p className="text-white/80 mb-4">
                Request information and pricing details
              </p>
              <Link
                to="/contact"
                className="bg-white text-exrsim-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Get Info
                <Mail className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-3">
              Need Immediate Training Support?
            </h3>
            <p className="text-white/90 mb-4">
              Our emergency response training specialists are available 24/7 to support 
              your critical preparedness needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+14165559999"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                Emergency: +1 (416) 555-9999
              </a>
              <a
                href="mailto:emergency@exrsim.ca"
                className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                emergency@exrsim.ca
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;