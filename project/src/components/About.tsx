import React from 'react';
import { ShieldCheck, Zap, BarChart3, Activity} from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-charcoal-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mission</h2>
          <div className="w-24 h-1 bg-strong-orange mx-auto"></div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Main content - always shows first on mobile */}
          <div className="w-full lg:order-1">
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            With years of experience and a passion for helping crypto business succeed, XYZ team is composed by expert data scientists and engineers 
            specialized in on chain data, DeFi risk analysis and user base analysis to tailored the precise solution you need.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Our mission is to work together with you to provide the best data-driven solutions to help crypto businesses thrive in the ever-evolving blockchain landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Activity className="h-8 w-8 text-strong-orange mb-2" />,
                  title: 'Risk Management',
                  description: 'Identifying liquidity risks before they become exploits'
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-strong-orange mb-2" />,
                  title: 'Data Analysis',
                  description: 'Turning your user base on-chain data into strategic insights'
                },
                {
                  icon: <Zap className="h-8 w-8 text-strong-orange mb-2" />,
                  title: 'Predicitive modeling',
                  description: 'Developing predictive models to proactivelly mitigate risks and predict user behaviour'
                }
              ].map((item, index) => (
                <div key={index} className="bg-charcoal-black border border-strong-orange p-6 rounded-xl">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise section - shows last on mobile due to order in the flexbox column */}
          <div className="w-full lg:order-2 mt-12 lg:mt-0">
            <div className="rounded-2xl overflow-hidden border border-strong-orange">
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptLTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptOCA4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')]"></div>
              </div>
              <div className="p-8 md:p-12 relative z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-offset-white mb-4">Our Expertise</h3>
                  <p className="text-light-orange mb-6">Forged through market cycles</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: 'Protocol Risk Analysis', value: 90 },
                    { label: 'Market Intelligence', value: 80 },
                    { label: 'User Base Analysis', value: 85 }, 
                    { label: 'Web3 Data Integration', value: 90 },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-white">{skill.label}</span>
                        <span className="text-strong-orange">{skill.value}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-strong-orange h-2 rounded-full"
                          style={{ width: `${skill.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;