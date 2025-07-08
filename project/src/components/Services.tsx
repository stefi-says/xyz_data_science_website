import React from 'react';
import { Database, BarChart2, CircleUser, ArrowRight } from 'lucide-react';
import ReactGA from 'react-ga4';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  telegramMessage: string;
  iconClassName?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features, 
  telegramMessage,
  iconClassName = "text-blue-500 group-hover:text-blue-400" 
}) => {
  const encodedMessage = encodeURIComponent(telegramMessage);
  const telegramLink = `https://t.me/hey_stefi?text=${encodedMessage}`;
  
  // Track service click event
  const handleServiceClick = () => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'service_click',
      label: `${title}`,
      service_name: title
    });
  };
  
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
        <a 
          href={telegramLink} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleServiceClick}
          className="text-strong-orange hover:text-light-orange inline-flex items-center group-hover:underline"
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Database className="h-10 w-10" />,
      title: "Data Pipeline Integration and Automations",
      description: "Custom data integrations and processes automation into your existing systems.",
      features: [
        "Custom blockchain data pipelines",
        "Automations using AI and machine learning",
        "Real-time data processing"
      ],
      telegramMessage: "Hi, I would like to know more about the Data Integration Service you provide",
      iconClassName: "text-strong-orange group-hover:text-light-orange"
    },
    {
      icon: <BarChart2 className="h-10 w-10" />,
      title: "Analytics & Modeling",
      description: "Bespoke dashboards and reports for strategic insights.",
      features: [
        "User base analysis and reports",
        "Marketing campaigns and grants impact analysis",
        "Custom analytics dashboards",
        "Custom predicitive model development and implementation"
      ],
      telegramMessage: "Hi, I'm interested in learning more about your Analytics & Modeling services",
      iconClassName: "text-strong-orange group-hover:text-light-orange"
    },
    {
      icon: <CircleUser className="h-10 w-10" />,
      title: "Consulting Services",
      description: "Hands-on advisory for protocols navigating the blockchain landscape.",
      features: [
        "Growth metrics and KPIs definition",
        "Web3 campaign incentives design",
        "Process analysis for automation and optimization"
      ],
      telegramMessage: "Hi, I would like to learn more about your Consulting Services",
      iconClassName: "text-strong-orange group-hover:text-light-orange"
    }
  ];

  return (
      <section id="services" className="py-24 bg-charcoal-black">
        <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored for businesses and DAOs growth, transparency and ROI optimization.
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
              telegramMessage={service.telegramMessage}
              iconClassName={service.iconClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;