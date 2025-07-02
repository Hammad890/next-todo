import React from 'react';

const AnimatedLogo = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl animate-pulse">
          DC
        </div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <h1 className="ml-4 text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
        DevConnect
      </h1>
    </div>
  );
};

export default AnimatedLogo;