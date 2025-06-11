import React from 'react';
import { BadgeCheck, Compass, Handshake} from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-charcoal-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mission</h2>
          <div className="w-24 h-1 bg-strong-orange mx-auto"></div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Main content - always shows first on mobile */}
          <div className="w-full lg:order-1">
            <p className="text-gray-300 text-lg mb-6  leading-relaxed">
            With years of experience and a passion for helping crypto business succeed, XYZ team is composed by expert data scientists and engineers 
            specialized in on-chain data pipelines, DeFi risk analysis and user base  on-chain analysis to tailored the precise solution you need.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Our mission is to work together with you to provide the best data-driven solutions to help crypto businesses thrive in the ever-evolving blockchain landscape.
            </p>
          </div>

          {/* Services grid - shows on the right side */}
          <div className="w-full lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Handshake className="h-8 w-8 text-strong-orange mb-2" />,
                  title: 'Transparent Flow',
                  description: 'Built on honesty, shared goals, and sharp communication'
                },
                {
                  icon: <Compass className="h-8 w-8 text-strong-orange mb-2" />,
                  title: 'Client-Centric',
                  description: 'We solve your problem, not just any problem'
                },
                {
                  icon: <BadgeCheck className="h-8 w-8 text-strong-orange mb-2" />,
                  title: 'Trusted Talent',
                  description: 'Experienced contractors, handpicked for Web3 precision'
                }
              ].map((item, index) => (
                <div key={index} className="bg-charcoal-black border border-strong-orange p-4 rounded-xl">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;