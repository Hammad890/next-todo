import React, { useState } from "react";
import axios from "axios";
import './App.css';

function App (){
  const [username, setUsername]= useState('')
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [protectedData, setProtectedData] = useState('');

  // Handle login form submit
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        setToken(token);
        setMessage('Login successful!');
        setProtectedData('');
      }
    } catch (error) {
      setMessage('Invalid credentials');
    }
  };

  
  const fetchProtectedData = async () => {
    if (!token) {
      setMessage('Please login first');
      return;
    }

    try {
      const response = await axios.get('http://localhost:3000/protected', {
        headers: {
          Authorization: token,
        },
      });

      if (response.status === 200) {
        setProtectedData(JSON.stringify(response.data, null, 2));
        setMessage('');
      }
    } catch (error) {
      setMessage('Error fetching protected data');
    }
  };

  return (
    <div className="App">
      <h2>JWT Authentication with React & Express</h2>
     
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}

      <button onClick={fetchProtectedData} disabled={!token}>
        Fetch Protected Data
      </button>

      {protectedData && (
        <pre>
          <code>{protectedData}</code>
        </pre>
      )}
    </div>
  );
}

export default App;
