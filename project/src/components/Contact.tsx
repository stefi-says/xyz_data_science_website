import React, { useState } from 'react';
import { MessageCircle, Mail, Send, CheckCircle } from 'lucide-react';
import ReactGA from 'react-ga4';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false,
    submitting: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitting: true }));
    
    // Track form submission
    ReactGA.event({
      category: 'Form',
      action: 'Submit',
      label: 'Contact Form'
    });
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        submitted: true, 
        submitting: false,
        name: '',
        email: '',
        message: ''
      }));
    }, 1500);
  };

  // Track contact method clicks
  const trackContactClick = (method: string) => {
    ReactGA.event({
      category: 'Contact',
      action: 'Click',
      label: method
    });
  };

  return (
  <section id="contact" className="py-24 bg-gray-700 relative">
      <div className="h-full w-full absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptLTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptOCA4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')]"></div>
      <div className="h-full w-full absolute inset-0 bg-charcoal-black bg-opacity-90 z-[1]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
           Wondering how we could help? Let's have a quick chat!
          </p>
          <div className="w-24 h-1 bg-strong-orange mx-auto mt-6"></div>
        </div>

        <div className="flex justify-center">
          <div className="container bg-charcoal-black border border-strong-orange rounded-xl max-w-4xl w-full p-8">
            {/* Contact Form section - commented out as requested
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Form</h3>
              
              {formState.submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-medium text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                    className="mt-6 text-blue-400 hover:text-blue-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70"
                  >
                    {formState.submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            */}
            
            <div>
              <div className="bg-gradient-to-br from-charcoal-black max-w-4xl mx-auto to-charcoal-black rounded-xl p-4">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start p-4">
                    <a 
                      href="https://wa.me/5391170800728" 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackContactClick('WhatsApp')}
                      className="bg-strong-orange p-3 rounded-lg mr-4 hover:bg-strong-orange/80 transition-colors"
                    >
                      <MessageCircle className="h-8 w-8 text-white" />
                    </a>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">WhatsApp</h4>
                      <p className="text-gray-300">
                        +54 9 11 7080-0728
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 md:border-x border-strong-orange/30">
                    <a 
                      href="https://t.me/hey_stefi" 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackContactClick('Telegram')}
                      className="bg-strong-orange p-3 rounded-lg mr-4 hover:bg-strong-orange/80 transition-colors"
                    >
                      <svg
                        className="h-8 w-8 text-white"
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
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Telegram</h4>
                      <p className="text-gray-300">
                        @hey_stefi
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4">
                    <a 
                      href="mailto:stefi@xyzdatascience.com"
                      onClick={() => trackContactClick('Email')}
                      className="bg-strong-orange p-3 rounded-lg mr-4 hover:bg-strong-orange/80 transition-colors"
                    >
                      <Mail className="h-8 w-8 text-white" />
                    </a>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                      <p className="text-gray-300">
                        stefi@xyzdatascience.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Our Clients section - commented out as requested
              <div className="bg-gray-900 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Our Clients</h3>
                <p className="text-gray-400 mb-6">
                  Trusted by leading protocols and DAOs across the DeFi ecosystem.
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div 
                      key={i} 
                      className="bg-gray-800 h-16 rounded-lg flex items-center justify-center"
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="text-blue-500 text-xs font-medium">Logo</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;