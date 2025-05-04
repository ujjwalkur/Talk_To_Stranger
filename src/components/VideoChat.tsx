import React, { useRef, useEffect } from 'react';
import { ConnectionStatus } from '../utils/types';

interface VideoChatProps {
  connectionStatus: ConnectionStatus;
  isCameraOn: boolean;
  isMicOn: boolean;
}

const VideoChat: React.FC<VideoChatProps> = ({ 
  connectionStatus, 
  isCameraOn,
  isMicOn
}) => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const localStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    
    const setupLocalVideo = async () => {
      try {
        if (isCameraOn) {
          stream = await navigator.mediaDevices.getUserMedia({ 
            video: true, 
            audio: isMicOn 
          });
          
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream;
          }
          
          localStreamRef.current = stream;
        } else if (localStreamRef.current) {
          // Turn off tracks if camera is disabled
          localStreamRef.current.getTracks().forEach(track => track.stop());
          
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = null;
          }
          
          localStreamRef.current = null;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    setupLocalVideo();
    
    // Cleanup function
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isCameraOn, isMicOn]);

  useEffect(() => {
    // When disconnected, we should clean up the remote video
    if (connectionStatus === 'disconnected' && remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }
    
    // In a real implementation, this is where we would set up WebRTC 
    // connections when status is 'connected'
    if (connectionStatus === 'connected') {
      // Simulate a remote video by showing a placeholder
      // In a real app, this would be replaced with actual WebRTC connection code
    }
  }, [connectionStatus]);

  return (
    <div className="relative h-[500px] bg-gray-900">
      {connectionStatus === 'disconnected' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-center">
            Click "Start Connecting" to find someone to video chat with
          </p>
        </div>
      )}
      
      {connectionStatus === 'connecting' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-purple-500 border-white border-opacity-20 rounded-full animate-spin mb-4"></div>
          <p className="text-white">Finding someone to chat with...</p>
        </div>
      )}
      
      {/* Remote video (full size) */}
      {connectionStatus === 'connected' && (
        <div className="absolute inset-0">
          {/* This is a placeholder for remote video. In a real app, this would show the stranger's video */}
          <div className="w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center">
            <p className="text-white text-xl">Remote Video Stream</p>
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      
      {/* Local video (picture-in-picture) */}
      <div className="absolute bottom-4 right-4 w-1/4 h-1/4 rounded-lg overflow-hidden shadow-lg border-2 border-white">
        {isCameraOn ? (
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <p className="text-white text-xs">Camera Off</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoChat;