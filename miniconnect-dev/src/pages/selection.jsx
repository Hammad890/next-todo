import React from 'react';
import { useNavigate } from 'react-router-dom';
import SelectionCard from '../components/selectionCard';

const Selection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Join DevConnect as</h1>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
        <SelectionCard 
          title="I'm a Developer" 
          description="Connect with clients and showcase your skills"
          icon="💻"
          onClick={() => navigate('/login/developer')}
        />
        <SelectionCard 
          title="I'm a User" 
          description="Find skilled developers for your projects"
          icon="👤"
          onClick={() => navigate('/login/user')}
        />
      </div>
    </div>
  );
};

export default Selection;
