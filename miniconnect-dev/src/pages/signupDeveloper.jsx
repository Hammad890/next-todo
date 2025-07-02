import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/formInput';
import AuthCard from '../components/authCard';
import { mockDevelopers } from '../mockData/mockUser';

const SignupDeveloper = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    techStack: '',
    githubUrl: ''
  });

  const [errors, setErrors] = useState({});
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) 
      newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.techStack) newErrors.techStack = 'Tech stack is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      // Mock signup - generate new ID and add to mock data
      const newDeveloper = {
        id: Math.max(...mockDevelopers.map(d => d.id)) + 1,
        ...formData,
        type: 'developer'
      };
      
      // In a real app, you would send this to your backend
      console.log('New developer:', newDeveloper);
      mockDevelopers.push(newDeveloper);
      
      // Store in localStorage for demo purposes
      localStorage.setItem('currentUser', JSON.stringify(newDeveloper));
      setSignupSuccess(true);
      
      // Redirect after 2 seconds
      setTimeout(() => navigate('/dashboard'), 2000);
    }
  };

  if (signupSuccess) {
    return (
      <AuthCard title="Signup Successful">
        <div className="text-center py-8">
          <div className="text-green-500 text-xl mb-4">🎉 Account created successfully!</div>
          <p>Redirecting to dashboard...</p>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Developer Sign Up"
      subtitle="Join our community of skilled developers"
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerLink="/login/developer"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Full Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />
        
        <FormInput
          label="Tech Stack (comma separated)"
          name="techStack"
          type="text"
          value={formData.techStack}
          onChange={handleChange}
          error={errors.techStack}
          placeholder="e.g., React, Node.js, Python"
        />
        
        <FormInput
          label="GitHub Profile URL"
          name="githubUrl"
          type="url"
          value={formData.githubUrl}
          onChange={handleChange}
          placeholder="https://github.com/yourusername"
        />
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Create Account
        </button>
      </form>
    </AuthCard>
  );
};

export default SignupDeveloper;