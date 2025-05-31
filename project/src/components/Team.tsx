import React, { useState } from 'react';
import { Github, Linkedin, X } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  highlights: string[];
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-charcoal-black rounded-xl border border-strong-orange/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-strong-orange/30 h-full flex flex-col">
      <div className="relative overflow-hidden group">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black to-transparent opacity-70"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
            <div className="flex space-x-2">
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-strong-orange/80  transition-colors"
                >
                  <X size={18} />
                </a>
              )}
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-strong-orange/80 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-strong-orange/80 transition-colors"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        {expanded ? (
          <div className="text-gray-300 flex-grow">
            <p className="mb-4">{member.bio}</p>
            
            <div>
              <h4 className="text-white font-medium mb-2">Highlights:</h4>
              <ul className="text-gray-400 space-y-1">
                {member.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-strong-orange mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-gray-300 flex-grow">
            <p className="line-clamp-3 mb-2">{member.bio}</p>
          </div>
        )}
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-strong-orange hover:text-strong-orange/80 font-medium"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Stefi Pereira',
      role: 'Founder & Head of Strategy',
      bio: 'Data scientist by experience, with years of experience in on-chain data. She leads strategy, client relationships, and oversees project execution.',
      highlights: [
        'Ex-Gitcoin Passport data scientist',
        'Co-created a data service offering that helped drive $1M in revenue in 2024',
        'Deployed ML algorithms detecting sybil behavioral patterns, scoring 250K+ users monthly',
      ],
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    },
    {
      name: 'Florian',
      role: 'Lead DeFi Consultant',
      bio: 'Ex-Binance Labs, DeFi researcher with a background in protocol and risk management.',
      highlights: [
        'Ex-Binance Labs, DeFi researcher with a background in protocol and risk management.',
        'Contributed to multiple open-source DeFi projects'
      ],
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    },
    // {
    //   name: 'Elena Park',
    //   role: 'Protocol Specialist',
    //   bio: 'Smart contract developer turned risk analyst with deep understanding of DeFi mechanics.',
    //   highlights: [
    //     'Designed liquidation mechanisms for lending protocols',
    //     'Contributed to risk parameter frameworks',
    //     'Regular speaker at DeFi security conferences'
    //   ],
    //   image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   social: {
    //     twitter: 'https://twitter.com',
    //     linkedin: 'https://linkedin.com'
    //   }
    // },
    // {
    //   name: 'David Nguyen',
    //   role: 'Data Engineering Lead',
    //   bio: 'Specializes in high-performance data pipelines and blockchain indexing solutions.',
    //   highlights: [
    //     'Built ETL pipelines for DeFi dashboards',
    //     'Optimized cross-chain data aggregation',
    //     'Developed real-time liquidation risk monitoring tools'
    //   ],
    //   image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   social: {
    //     github: 'https://github.com',
    //     linkedin: 'https://linkedin.com'
    //   }
    // }
  ];

  return (
    <section id="team" className="py-24 bg-charcoal-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            DeFi natives with deep expertise across risk, data science, and protocol design
          </p>
          <div className="w-24 h-1 bg-strong-orange mx-auto mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:w-1/2">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
          
          <div className="bg-charcoal-black flex flex-col justify-center h-full lg:w-1/2 p-6">
             
            <p className="text-gray-300">
            Our team blends deep technical expertise with real-world impact. From building models that scale user bases to navigating the complexities of DeFi risk, we combine rigorous data science with strategic thinking. We've worked in fast-paced, high-stakes environments and know what it takes to deliver results with precision and care.
            <br />
            <br />
            We work directly with each client to understand their unique context and business moment, curating solutions that are not just effective—but truly aligned with their goals. At our core, we're partners our clients can trust—committed to turning complexity into clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;