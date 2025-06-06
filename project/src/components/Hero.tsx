import React from 'react';
import { MessageCircle } from 'lucide-react';
import dynamicBackground from '../assets/images/dynamic_background.mp4';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src={dynamicBackground} type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-offset-white mb-6 leading-tight">
          Analytics Solutions for
            <span className="block text-strong-orange"> Web3 Business</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Empowering protocols through data-driven modeling, risk analysis, and technical insight. 
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> Contact Us via WhatsApp
            </a> */}
            <a
              href="https://t.me/hey_stefi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-light-gray border border-white hover:bg-light-orange text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              <svg
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3053 2.33033C21.9399 2.02398 21.4772 1.85958 20.9705 1.86531C20.4997 1.87086 20.0051 2.01184 19.4909 2.29122L2.27504 10.731C1.35406 11.1839 0.864396 11.6349 0.804283 12.0843C0.709989 12.8267 1.59488 13.1456 2.64346 13.5128L6.30017 14.6584C6.70376 14.7842 7.13657 14.7496 7.50524 14.5675L17.2185 9.50556C17.4669 9.38022 17.7316 9.57359 17.5405 9.76466L10.0823 17.2228C9.68489 17.6211 9.6757 18.2473 10.0612 18.6567L10.0828 18.6796C10.4683 19.089 11.0959 19.0999 11.4952 18.7043L12.8529 17.3466L16.1475 19.5318C16.7127 19.9178 17.4274 20.0554 18.0845 19.9086C18.7417 19.7619 19.2825 19.3406 19.583 18.7606L22.9646 10.8439C23.5477 9.67388 23.4983 8.25402 22.829 7.13168L22.3053 2.33033Z"
                  fill="currentColor"
                />
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center items-start p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;