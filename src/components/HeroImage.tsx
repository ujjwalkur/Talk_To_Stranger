import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-8 right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -right-4 -top-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="relative">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 gap-2 p-4">
            <div className="space-y-2">
              <div className="h-28 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg"></div>
              <div className="h-28 bg-gradient-to-r from-pink-400 to-red-400 rounded-lg"></div>
            </div>
            <div className="h-full">
              <div className="h-full bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg"></div>
            </div>
          </div>
          <div className="bg-white bg-opacity-20 p-4 backdrop-filter backdrop-blur-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <div className="text-white text-sm">120,043 people online</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;