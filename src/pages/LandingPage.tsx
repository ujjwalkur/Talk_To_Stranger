import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Video, MessageSquare, Shield, Globe } from 'lucide-react';
import HeroImage from '../components/HeroImage';
import TestimonialCard from '../components/TestimonialCard';
import FeatureCard from '../components/FeatureCard';

const LandingPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Connect With New People Around the World
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              Meet interesting strangers through random video and text chats. 
              No registration required - just click and start connecting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/chat" className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
                Start Video Chat
                <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Link>
              <Link to="/chat?mode=text" className="bg-purple-800 bg-opacity-50 text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                Try Text Chat
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <HeroImage />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Video className="text-purple-600" size={32} />}
              title="Video Chat"
              description="Connect face-to-face with people worldwide through high-quality video chat."
            />
            <FeatureCard 
              icon={<MessageSquare className="text-purple-600" size={32} />}
              title="Text Chat"
              description="Prefer typing? Use our text chat option to connect with others."
            />
            <FeatureCard 
              icon={<Shield className="text-purple-600" size={32} />}
              title="Privacy First"
              description="No registration or personal information required. Stay anonymous."
            />
            <FeatureCard 
              icon={<Globe className="text-purple-600" size={32} />}
              title="Global Reach"
              description="Meet people from different cultures and backgrounds worldwide."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple & Fast</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            No complicated setup. No registration. Just instant connections.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Mode</h3>
              <p className="text-gray-600">Select between video chat or text chat based on your preference.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Click Connect</h3>
              <p className="text-gray-600">Hit the connect button and we'll find someone to chat with instantly.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Start Chatting</h3>
              <p className="text-gray-600">Begin your conversation! If you want to meet someone new, just click "Next".</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Users Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="I've made friends from countries I never thought I'd connect with. This platform has truly expanded my worldview."
              name="Alex J."
              location="United States"
            />
            <TestimonialCard 
              quote="As someone learning languages, this has been an amazing way to practice with native speakers from around the globe."
              name="Mia S."
              location="Canada"
            />
            <TestimonialCard 
              quote="The simplicity is what I love. No accounts, no setup - just instant connections with interesting people."
              name="Raj P."
              location="India"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Meet Someone New?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Thousands of people are connecting right now. Join them and start a conversation!
          </p>
          <Link to="/chat" className="inline-block bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Start Chatting Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;