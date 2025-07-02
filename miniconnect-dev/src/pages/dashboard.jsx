import React, { useEffect, useState } from 'react';
import DashboardSidebar from '../components/dashboardSidebar';
import Navbar from '../components/navBar';

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage (mock auth)
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
  }, []);

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Welcome, {currentUser.name}!
          </h1>
          
          {currentUser.type === 'developer' && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <h2 className="text-lg font-semibold mb-4">Developer Profile</h2>
              <p><span className="font-medium">Tech Stack:</span> {currentUser.techStack}</p>
              <p><span className="font-medium">GitHub:</span> 
                <a href={currentUser.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 ml-2">
                  {currentUser.githubUrl}
                </a>
              </p>
            </div>
          )}
          
          {/* Rest of your dashboard content */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;