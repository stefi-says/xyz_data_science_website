import React from 'react';
import { Database, BarChart2, AlertCircle, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  iconClassName?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, iconClassName = "text-blue-500 group-hover:text-blue-400" }) => {
  return (
    <div className="bg-graphite-grey rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-strong-orange/30 hover:translate-y-[-4px] group">
      <div className={`mb-4 transition-colors ${iconClassName}`}>{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-5">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-strong-orange mr-2 mt-1">•</span>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <button className="text-strong-orange hover:text-light-orange inline-flex items-center group-hover:underline">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Database className="h-10 w-10" />,
      title: "Data Pipeline Integration",
      description: "Custom ETL workflows and Web3 indexing solutions for DeFi data.",
      features: [
        "Custom blockchain data pipelines",
        "Real-time data processing", 
        "Data normalization"
      ],
      iconClassName: "text-strong-orange group-hover:text-light-orange"
    },
    {
      icon: <BarChart2 className="h-10 w-10" />,
      title: "Analytics & Modeling",
      description: "Bespoke dashboards and protocol-level simulations for strategic insights.",
      features: [
        "Risk modeling & stress testing",
        "Custom analytics dashboards",
        "Liquidity flow visualization",
        "User base analysis and reports"
      ],
      iconClassName: "text-strong-orange group-hover:text-light-orange"
    },
    {
      icon: <AlertCircle className="h-10 w-10" />,
      title: "Consulting Services",
      description: "Hands-on advisory for protocols navigating DeFi's complex landscape.",
      features: [
        "Collateral risk assessment",
        "Liquidation strategy design",
        "Governance mechanism review",
        "Risk parameter optimization", 
        "Web3 campaign incentives design"
      ],
      iconClassName: "text-strong-orange group-hover:text-light-orange"
    }
  ];

  return (
      <section id="services" className="py-24 bg-charcoal-black">
        <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored for protocols and DAOs navigating the evolving Web3 data landscape
          </p>
          <div className="w-24 h-1 bg-light-orange mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              iconClassName={service.iconClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;