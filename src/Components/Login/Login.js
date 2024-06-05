import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., validate credentials and make an API request
    console.log('Submitted:', { username, password });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p id="heading">Login</p>
      <div className="field">
        <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          {/* SVG path for username icon */}
        </svg>
        <input
          autoComplete="off"
          placeholder="Username"
          className="input-field"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="field">
        <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          {/* SVG path for password icon */}
        </svg>
        <input
          placeholder="Password"
          className="input-field"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="btn">
        <button className="button1">Login</button>
        <button className="button2">Sign Up</button>
      </div>
      <button className="button3">Forgot Password</button>
    </form>
  );
}

export default Login;
