import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'Emergency Management Director',
      organization: 'City of Vancouver',
      content: 'EXRSIM has revolutionized our emergency preparedness training. The realistic scenarios and multi-agency coordination features have significantly improved our response capabilities.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Operations Manager',
      organization: 'TransCanada Pipeline',
      content: 'The platform\'s ability to simulate complex pipeline emergency scenarios has been invaluable for training our response teams across multiple provinces.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Chief of Emergency Medicine',
      organization: 'Toronto General Hospital',
      content: 'EXRSIM\'s mass casualty incident simulations have prepared our medical staff for real-world emergencies. The training is incredibly realistic and effective.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Captain James McKenzie',
      title: 'Fire Chief',
      organization: 'Calgary Fire Department',
      content: 'The wildfire simulation modules are exceptional. Our crews are better prepared for Alberta\'s challenging fire seasons thanks to EXRSIM\'s training scenarios.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section className="section-padding bg-exrsim-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Emergency Professionals
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from the emergency management professionals who rely on EXRSIM 
            to keep their communities safe and prepared.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-exrsim-gray rounded-lg p-8 border border-gray-700 relative">
              <Quote className="h-8 w-8 text-exrsim-orange mb-4" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed text-lg italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-exrsim-orange text-sm">{testimonial.title}</div>
                  <div className="text-gray-400 text-sm">{testimonial.organization}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-exrsim-gray/50 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              Certified & Accredited Training
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-exrsim-orange mb-2">ISO 22301</div>
                <div className="text-gray-300">Business Continuity Certified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-exrsim-orange mb-2">NIMS</div>
                <div className="text-gray-300">National Incident Management Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-exrsim-orange mb-2">CAN/CSA</div>
                <div className="text-gray-300">Canadian Standards Association Approved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;