import React from 'react';
import { Shield, Users, Target, Award, MapPin, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Every feature is designed with safety and risk reduction as the primary objective.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe emergency response is a team effort that requires seamless coordination.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in emergency management training and simulation.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously advancing emergency preparedness through cutting-edge technology.'
    }
  ];

  const team = [
    {
      name: 'Dr. Rachel Thompson',
      title: 'CEO & Founder',
      bio: 'Former Emergency Management Director for Ontario with 20+ years in emergency response.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Michael Chen',
      title: 'CTO',
      bio: 'Technology leader specializing in simulation platforms and emergency management systems.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Captain Sarah Mitchell',
      title: 'Training Director',
      bio: 'Retired fire captain with expertise in incident command and multi-agency coordination.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'David Patel',
      title: 'VP of Operations',
      bio: 'Emergency management specialist with government and private sector experience across Canada.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-exrsim-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About EXRSIM
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We are Canada's leading emergency response simulation platform, dedicated to 
              enhancing the preparedness and effectiveness of emergency responders across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-exrsim-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To empower communities, agencies and responders with the most advanced, realistic, 
                and effective platform available to help you envision, create and execute a training scenario.
                We believe that better preparation
                saves lives and protects communities.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Founded in 2018 by a team of emergency management professionals and 
                technology experts, EXRSIM was born from the recognition that traditional 
                exercise creation methods were insufficient for today's complex emergency challenges.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-exrsim-orange">2018</div>
                  <div className="text-gray-400">Founded</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-exrsim-orange">500+</div>
                  <div className="text-gray-400">Organizations</div>
                </div> */}
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-exrsim-orange">50k+</div>
                  <div className="text-gray-400">Trained</div>
                </div> */}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Emergency Operations Center"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-exrsim-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do and drive our commitment 
              to excellence in emergency preparedness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-exrsim-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-exrsim-orange" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-exrsim-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our experienced leadership team combines decades of emergency management 
              expertise with cutting-edge technology innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-exrsim-orange font-semibold mb-4">{member.title}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canadian Focus */}
      <section className="section-padding bg-exrsim-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Canadian landscape"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-exrsim-orange mr-3" />
                <h2 className="text-4xl font-bold text-white">Proudly Canadian</h2>
              </div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                EXRSIM is headquartered in Toronto, Ontario, with operations also in Winnipeg, Manitoba. 
                We understand the unique challenges of emergency response in the Canadian context 
                - from extreme weather conditions to vast geographic distances - man-made and natural disasters.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-exrsim-orange mr-3" />
                  <span className="text-gray-300">Canadian Emergency Management Standard Compliant</span>
                </div>
                {/* <div className="flex items-center">
                  <Award className="h-6 w-6 text-exrsim-orange mr-3" />
                  <span className="text-gray-300">Bilingual Support (English & French)</span>
                </div> */}
                {/* <div className="flex items-center">
                  <Award className="h-6 w-6 text-exrsim-orange mr-3" />
                  <span className="text-gray-300">Indigenous Community Partnership Ready</span>
                </div> */}
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-exrsim-orange mr-3" />
                  <span className="text-gray-300">Civilian, Police and Military Operations Experience</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-exrsim-orange mr-3" />
                  <span className="text-gray-300">We can cover all Provinces & Territories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;