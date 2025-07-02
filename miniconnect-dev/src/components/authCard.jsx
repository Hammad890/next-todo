import React from 'react';

const AuthCard = ({ title, subtitle, children, footerText, footerLinkText, footerLink }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h1>
          {subtitle && (
            <p className="mt-1 text-gray-600 dark:text-gray-300">{subtitle}</p>
          )}
          <div className="mt-6">{children}</div>
        </div>
        {(footerText || footerLinkText) && (
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              {footerText}{' '}
              <a
                href={footerLink}
                className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
              >
                {footerLinkText}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthCard;