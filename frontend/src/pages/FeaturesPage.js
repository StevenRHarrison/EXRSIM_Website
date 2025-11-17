import React from 'react';
import { 
  Monitor, 
  Users, 
  Map, 
  BarChart3, 
  Clock, 
  Shield, 
  Headphones, 
  FileText,
  Smartphone,
  Cloud,
  Lock,
  RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesPage: React.FC = () => {
  const coreFeatures = [
    {
      icon: Monitor,
      title: 'Real-Time Simulation Engine',
      description: 'Advanced simulation technology providing realistic emergency scenarios with dynamic, evolving conditions.',
      details: [
        'Physics-based environmental modeling',
        'Dynamic weather and terrain integration',
        'Real-time scenario progression',
        'Consequence-based decision making',
        'Multi-variable incident evolution'
      ]
    },
    {
      icon: Users,
      title: 'Multi-Agency Collaboration',
      description: 'Seamless coordination between different organizations, departments, and jurisdictions.',
      details: [
        'Role-based access and permissions',
        'Inter-agency communication tools',
        'Unified command structure support',
        'Cross-jurisdictional coordination',
        'Real-time participant tracking'
      ]
    },
    {
      icon: Map,
      title: 'Interactive GIS Mapping',
      description: 'Comprehensive geographic information system with Canadian topographic and infrastructure data.',
      details: [
        'High-resolution Canadian mapping',
        'Infrastructure layer overlays',
        'Real-time asset tracking',
        'Evacuation route planning',
        'Resource deployment visualization'
      ]
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive performance tracking and improvement identification through detailed analytics.',
      details: [
        'Real-time performance metrics',
        'Decision timing analysis',
        'Resource utilization tracking',
        'Communication flow analysis',
        'Comparative benchmarking'
      ]
    }
  ];

  const technicalFeatures = [
    {
      icon: Cloud,
      title: 'Cloud-Based Platform',
      description: 'Scalable, accessible training platform available anywhere, anytime.',
      details: [
        '99.9% uptime guarantee',
        'Auto-scaling infrastructure',
        'Global content delivery',
        'Multi-region redundancy',
        'Instant deployment capability'
      ]
    },
    {
      icon: Smartphone,
      title: 'Multi-Device Support',
      description: 'Full functionality across desktop, tablet, and mobile devices.',
      details: [
        'Responsive web application',
        'Native mobile apps (iOS/Android)',
        'Offline mode capability',
        'Cross-device synchronization',
        'Touch-optimized interfaces'
      ]
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Military-grade security protecting sensitive training data and scenarios.',
      details: [
        'End-to-end encryption',
        'SOC 2 Type II compliance',
        'Multi-factor authentication',
        'Role-based access control',
        'Audit trail logging'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Continuous Updates',
      description: 'Regular platform updates with new scenarios and enhanced features.',
      details: [
        'Monthly scenario releases',
        'Quarterly feature updates',
        'Real-world incident integration',
        'User feedback implementation',
        'Technology advancement adoption'
      ]
    }
  ];

  const supportFeatures = [
    {
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Round-the-clock assistance from certified emergency management professionals.',
      details: [
        'Emergency management consultants',
        'Technical support specialists',
        'Training design experts',
        'Implementation specialists',
        'Multilingual support (EN/FR)'
      ]
    },
    {
      icon: FileText,
      title: 'Comprehensive Reporting',
      description: 'Detailed after-action reports and performance documentation.',
      details: [
        'Automated report generation',
        'Custom report templates',
        'Performance trend analysis',
        'Compliance documentation',
        'Training certification records'
      ]
    },
    {
      icon: Shield,
      title: 'Standards Compliance',
      description: 'Full compliance with Canadian and international emergency management standards.',
      details: [
        'ICS (Incident Command System)',
        'NIMS (National Incident Management System)',
        'Canadian Standards Association',
        'ISO 22301 (Business Continuity)',
        'Provincial emergency protocols'
      ]
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Training sessions that fit your organization\'s schedule and availability.',
      details: [
        'Self-paced learning modules',
        'Scheduled group exercises',
        'Just-in-time training',
        'Emergency drill integration',
        'Continuous assessment options'
      ]
    }
  ];

  const FeatureSection = ({ title, features, bgColor }: { title: string; features: any[]; bgColor: string }) => (
    <section className={`section-padding ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-exrsim-dark/50 rounded-lg p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-exrsim-orange rounded-lg flex items-center justify-center mr-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.details.map((detail: string, detailIndex: number) => (
                  <li key={detailIndex} className="flex items-start text-sm">
                    <div className="w-1.5 h-1.5 bg-exrsim-orange rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-gray-400">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-exrsim-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Platform Features
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Discover the comprehensive features that make EXRSIM Canada's most advanced 
            emergency response training platform.
          </p>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-exrsim-orange mb-2">Exercise Build</div>
              <div className="text-gray-300">Training or Real World</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-exrsim-orange mb-2">ICS Org.</div>
              <div className="text-gray-300">Operations, Planning, Logistics, Financial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-exrsim-orange mb-2">Mapping</div>
              <div className="text-gray-300">Situational Awareness</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-exrsim-orange mb-2">Multi-device</div>
              <div className="text-gray-300">Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-exrsim-orange mb-2">Capture</div>
              <div className="text-gray-300">Lessons Learned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-exrsim-orange mb-2">Improvement</div>
              <div className="text-gray-300">Agency and Personnel Evalutaions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-exrsim-orange mb-2">ICS Forms</div>
              <div className="text-gray-300">Forms and Reports</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-exrsim-orange mb-2">Analysis</div>
              <div className="text-gray-300">Statistical Information</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <FeatureSection title="Core Training Features" features={coreFeatures} bgColor="bg-exrsim-gray" />
      
      {/* Technical Features */}
      <FeatureSection title="Technical Capabilities" features={technicalFeatures} bgColor="bg-exrsim-dark" />
      
      {/* Support Features */}
      <FeatureSection title="Support & Compliance" features={supportFeatures} bgColor="bg-exrsim-gray" />

      {/* Integration Section */}
      <section className="section-padding bg-exrsim-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              EXRSIM integrates with your existing systems and workflows to provide 
              a comprehensive emergency preparedness solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-exrsim-gray rounded-lg p-6 border border-gray-700 text-center">
              <div className="text-2xl font-bold text-exrsim-orange mb-3">Emergency Management Systems</div>
              <p className="text-gray-300">Direct integration with existing EMO and EOC systems</p>
            </div>
            <div className="bg-exrsim-gray rounded-lg p-6 border border-gray-700 text-center">
              <div className="text-2xl font-bold text-exrsim-orange mb-3">Communication Platforms</div>
              <p className="text-gray-300">Compatible with radio, phone, and digital communication systems</p>
            </div>
            <div className="bg-exrsim-gray rounded-lg p-6 border border-gray-700 text-center">
              <div className="text-2xl font-bold text-exrsim-orange mb-3">Learning Management</div>
              <p className="text-gray-300">Integration with corporate LMS and training record systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-exrsim-orange to-exrsim-orange-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience EXRSIM Features Firsthand
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            See how our comprehensive feature set can transform your organization's 
            emergency preparedness capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-exrsim-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Request Feature Demo
            </Link>
            <Link
              to="/case-studies"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;