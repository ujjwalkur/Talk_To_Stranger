import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, location }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
      <Quote className="text-purple-300 mb-4" size={32} />
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold">
          {name[0]}
        </div>
        <div className="ml-3">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;