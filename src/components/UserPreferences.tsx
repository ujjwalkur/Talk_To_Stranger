import React, { useState } from 'react';

interface UserPreferencesProps {
  onClose: () => void;
}

const UserPreferences: React.FC<UserPreferencesProps> = ({ onClose }) => {
  const [language, setLanguage] = useState('any');
  const [gender, setGender] = useState('any');
  const [interests, setInterests] = useState<string[]>([]);
  const [customInterest, setCustomInterest] = useState('');

  const availableInterests = [
    'Music', 'Movies', 'Gaming', 'Sports', 'Books', 
    'Technology', 'Art', 'Travel', 'Food', 'Languages'
  ];

  const handleAddInterest = () => {
    if (customInterest && !interests.includes(customInterest)) {
      setInterests([...interests, customInterest]);
      setCustomInterest('');
    }
  };

  const handleRemoveInterest = (interest: string) => {
    setInterests(interests.filter(i => i !== interest));
  };

  const handleToggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      handleRemoveInterest(interest);
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleSave = () => {
    // In a real app, this would save preferences to state or localStorage
    onClose();
  };

  return (
    <div className="py-2">
      <h2 className="text-2xl font-bold mb-6">Chat Preferences</h2>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Preferred Language
        </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="any">Any Language</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Preferred Match
        </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="any">Anyone</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Interests
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {availableInterests.map(interest => (
            <button
              key={interest}
              onClick={() => handleToggleInterest(interest)}
              className={`py-1 px-3 rounded-full text-sm ${
                interests.includes(interest)
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
        
        <div className="flex">
          <input
            type="text"
            value={customInterest}
            onChange={(e) => setCustomInterest(e.target.value)}
            placeholder="Add custom interest"
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            onClick={handleAddInterest}
            className="bg-purple-600 text-white px-4 rounded-r-lg hover:bg-purple-700"
          >
            Add
          </button>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="mr-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default UserPreferences;