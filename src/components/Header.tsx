import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LogoIcon from './LogoIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isLandingPage = location.pathname === '/';
  const headerClass = isLandingPage
    ? `fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-white'
      }`
    : 'bg-white shadow-sm text-gray-800';

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <LogoIcon color={isLandingPage && !isScrolled ? "white" : "purple"} />
            <span className="ml-2 text-xl font-bold">TalkToStrangers</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:opacity-75 transition-opacity ${
                location.pathname === '/' ? 'font-medium' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/chat" 
              className={`hover:opacity-75 transition-opacity ${
                location.pathname === '/chat' ? 'font-medium' : ''
              }`}
            >
              Start Chat
            </Link>
            <Link 
              to="/chat" 
              className={`py-2 px-6 rounded-full ${
                isLandingPage && !isScrolled
                  ? 'bg-white text-purple-600 hover:bg-gray-100'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              } transition-colors duration-300`}
            >
              Connect Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="block py-2 hover:opacity-75"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/chat" 
                className="block py-2 hover:opacity-75"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Chat
              </Link>
              <Link 
                to="/chat" 
                className={`block py-2 px-4 rounded-lg text-center ${
                  isLandingPage && !isScrolled
                    ? 'bg-white text-purple-600'
                    : 'bg-purple-600 text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Connect Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;