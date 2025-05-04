import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Video, MessageSquare, Mic, MicOff, Camera, CameraOff, RefreshCw, Flag, X } from 'lucide-react';
import ChatInterface from '../components/ChatInterface';
import VideoChat from '../components/VideoChat';
import { ConnectionStatus } from '../utils/types';
import UserPreferences from '../components/UserPreferences';

const HomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultMode = searchParams.get('mode') === 'text' ? 'text' : 'video';
  
  const [chatMode, setChatMode] = useState<'video' | 'text'>(defaultMode);
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('disconnected');
  const [showPreferences, setShowPreferences] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  useEffect(() => {
    // Cleanup function
    return () => {
      // This would disconnect any active connections when component unmounts
      if (connectionStatus === 'connected') {
        handleDisconnect();
      }
    };
  }, [connectionStatus]);

  const handleConnect = () => {
    setConnectionStatus('connecting');
    
    // Simulate finding a match after a delay
    setTimeout(() => {
      setConnectionStatus('connected');
    }, 2000);
  };

  const handleDisconnect = () => {
    setConnectionStatus('disconnected');
  };

  const handleNext = () => {
    setConnectionStatus('connecting');
    
    // Simulate finding a new match after a delay
    setTimeout(() => {
      setConnectionStatus('connected');
    }, 2000);
  };

  const handleReport = () => {
    // In a real app, this would open a report dialog
    alert('Report functionality would be implemented here');
  };

  return (
    <div className="w-full bg-gray-50 min-h-[calc(100vh-64px)]">
      <div className="container mx-auto px-4 py-8">
        {/* Mode Selection */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex justify-between items-center">
          <div className="flex space-x-4">
            <button
              onClick={() => setChatMode('video')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                chatMode === 'video' ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
              }`}
            >
              <Video size={20} className="mr-2" />
              Video Chat
            </button>
            <button
              onClick={() => setChatMode('text')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                chatMode === 'text' ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
              }`}
            >
              <MessageSquare size={20} className="mr-2" />
              Text Chat
            </button>
          </div>
          <button 
            onClick={() => setShowPreferences(true)}
            className="text-gray-600 hover:text-purple-700 transition-colors"
          >
            Preferences
          </button>
        </div>

        {/* Main Chat Area */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          {chatMode === 'video' ? (
            <VideoChat 
              connectionStatus={connectionStatus} 
              isCameraOn={isCameraOn}
              isMicOn={isMicOn}
            />
          ) : (
            <ChatInterface 
              connectionStatus={connectionStatus} 
            />
          )}
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-3 mb-4 sm:mb-0">
              {connectionStatus === 'disconnected' ? (
                <button
                  onClick={handleConnect}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Start Connecting
                </button>
              ) : (
                <button
                  onClick={handleDisconnect}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Disconnect
                </button>
              )}
              
              {connectionStatus === 'connected' && (
                <button
                  onClick={handleNext}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center"
                >
                  <RefreshCw size={18} className="mr-2" />
                  Next Person
                </button>
              )}

              {connectionStatus === 'connected' && (
                <button
                  onClick={handleReport}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center"
                >
                  <Flag size={18} className="mr-2" />
                  Report
                </button>
              )}
            </div>

            {chatMode === 'video' && (
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsMicOn(!isMicOn)}
                  className={`p-3 rounded-full ${
                    isMicOn ? 'bg-gray-200 text-gray-700' : 'bg-red-100 text-red-600'
                  }`}
                >
                  {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
                </button>
                <button
                  onClick={() => setIsCameraOn(!isCameraOn)}
                  className={`p-3 rounded-full ${
                    isCameraOn ? 'bg-gray-200 text-gray-700' : 'bg-red-100 text-red-600'
                  }`}
                >
                  {isCameraOn ? <Camera size={20} /> : <CameraOff size={20} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowPreferences(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <UserPreferences onClose={() => setShowPreferences(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;