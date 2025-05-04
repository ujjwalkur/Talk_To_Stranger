import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Facebook, Instagram } from 'lucide-react';
import LogoIcon from './LogoIcon.tsx';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <LogoIcon color="white" />
              <span className="ml-2 text-xl font-bold text-white">TalkToStrangers</span>
            </div>
            <p className="mb-4">
              Connect with people from around the world through random video and text chats.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-3">
              <li><Link to="/chat?mode=video" className="hover:text-white transition-colors">Video Chat</Link></li>
              <li><Link to="/chat?mode=text" className="hover:text-white transition-colors">Text Chat</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Language Preferences</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Interest Matching</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="hover:text-white transition-colors">Community Guidelines</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Safety Tips</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Report an Issue</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">GDPR Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
          <p>© {currentYear} TalkToStrangers. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            <span>Made with </span>
            <span className="text-red-500">♥</span>
            <span> for connecting people worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;