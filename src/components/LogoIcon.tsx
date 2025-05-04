import React from 'react';
import { MessageCircle } from 'lucide-react';

interface LogoIconProps {
  color: 'white' | 'purple';
}

const LogoIcon: React.FC<LogoIconProps> = ({ color }) => {
  const iconColor = color === 'white' ? 'text-white' : 'text-purple-600';
  const bgColor = color === 'white' ? 'bg-white bg-opacity-20' : 'bg-purple-100';
  
  return (
    <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center`}>
      <MessageCircle size={20} className={iconColor} />
    </div>
  );
};

export default LogoIcon;