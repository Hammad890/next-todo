import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/formInput';
import AuthCard from '../components/authCard';
import { mockUsers } from '../mockData/mockUser'

const LoginUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError('');
    
    if (validate()) {
      // Mock authentication
      const user = mockUsers.find(
        u => u.email === formData.email && u.password === formData.password
      );
      
      if (user) {
        console.log('Login successful:', user);
        // In a real app, you would set auth state and redirect
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/dashboard');
      } else {
        setLoginError('Invalid email or password');
      }
    }
  };

  return (
    <AuthCard
      title="User Login"
      subtitle="Access your account to find developers"
      footerText="Don't have an account?"
      footerLinkText="Sign up"
      footerLink="/signup/user"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {loginError && (
          <div className="text-red-500 text-sm text-center">{loginError}</div>
        )}
        
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
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Sign In
        </button>
      </form>
    </AuthCard>
  );
};

export default LoginUser;