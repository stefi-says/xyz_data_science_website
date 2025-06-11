import { useState, useEffect, FC } from 'react';
import { Menu, X } from 'lucide-react';
import ReactGA from 'react-ga4';
import logoImage from '../assets/images/light_xyz_logo.png';

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => { 
    const element = document.getElementById(id);
    if (element) {
      // Updated GA4 format
      ReactGA.event({
        category: 'User Interaction',
        action: 'navigation_click',
        label: id,
        menu_type: 'desktop'
      });
      
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Track mobile menu interactions with updated GA4 format
  const toggleMobileMenu = (isOpen: boolean) => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'mobile_menu_toggle',
      label: isOpen ? 'open' : 'close'
    });
    setIsMobileMenuOpen(isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-black bg-opacity-95 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logoImage} alt="Company Logo" className="h-10 mr-2" />
            <span className="text-off-white font-bold text-xl">XYZ Data Science</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['about', 'services', 'team', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-strong-orange font-medium transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => toggleMobileMenu(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {['about', 'services', 'team', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-blue-400 font-medium transition-colors text-left capitalize py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;