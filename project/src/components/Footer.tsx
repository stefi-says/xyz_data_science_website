import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import logoImage from '../assets/images/xyz_top_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-black border-t border-strong-orange pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img src={logoImage} alt="Company Logo" className="h-8 mr-2" />
              <span className="text-white font-bold text-xl">XYZ Data Science</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering Web3 protocols through data-driven modeling, risk analysis, and technical insight.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-strong-orange hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://t.me/hey_stefi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-strong-orange hover:text-blue-500 transition-colors"
                aria-label="Telegram"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.3053 2.33033C21.9399 2.02398 21.4772 1.85958 20.9705 1.86531C20.4997 1.87086 20.0051 2.01184 19.4909 2.29122L2.27504 10.731C1.35406 11.1839 0.864396 11.6349 0.804283 12.0843C0.709989 12.8267 1.59488 13.1456 2.64346 13.5128L6.30017 14.6584C6.70376 14.7842 7.13657 14.7496 7.50524 14.5675L17.2185 9.50556C17.4669 9.38022 17.7316 9.57359 17.5405 9.76466L10.0823 17.2228C9.68489 17.6211 9.6757 18.2473 10.0612 18.6567L10.0828 18.6796C10.4683 19.089 11.0959 19.0999 11.4952 18.7043L12.8529 17.3466L16.1475 19.5318C16.7127 19.9178 17.4274 20.0554 18.0845 19.9086C18.7417 19.7619 19.2825 19.3406 19.583 18.7606L22.9646 10.8439C23.5477 9.67388 23.4983 8.25402 22.829 7.13168L22.3053 2.33033Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              {/* <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a> */}
            </div>
          </div>
          
          {/* 
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {['Data Pipeline Integration', 'Analytics & Modeling', 'Consulting Services', 'Custom Dashboards', 'Risk Assessment'].map((item, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Team', 'Careers', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest insights and research.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-r-lg transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
          */}
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-500 text-sm text-center">
              &copy; {new Date().getFullYear()} XYZ Data Science™. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;