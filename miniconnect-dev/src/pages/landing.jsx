import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedLogo from '../components/animatedLogo';

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, you would handle search here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center p-4">
      <AnimatedLogo />
      <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center">
        Connect with developers or find your next project
      </h2>
      
      <form onSubmit={handleSearch} className="w-full max-w-md mb-8">
        <div className="flex shadow-sm rounded-lg overflow-hidden">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search developers or projects..."
            className="flex-1 px-4 py-3 border-0 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 transition duration-200"
          >
            Search
          </button>
        </div>
      </form>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate('/selection')}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition duration-200"
        >
          Join DevConnect
        </button>
        <button
          onClick={() => console.log('Learn more clicked')}
          className="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-8 py-3 rounded-lg font-medium border border-gray-300 dark:border-gray-600 transition duration-200"
        >
          Learn More
        </button>
      </div>
      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {['React', 'Node.js', 'Python', 'AWS'].map((tech) => (
          <div key={tech} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="font-medium text-gray-800 dark:text-white">{tech}</p>
            <p className="text-sm text-gray-500">Developers</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;