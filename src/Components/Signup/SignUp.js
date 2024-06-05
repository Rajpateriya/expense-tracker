import React, { useState } from 'react';
import './SignUp.css'; 
import Login from '../Login/Login'; // Update the import path for the Login component

function SignUp(props) { // Add props parameter to the function
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., validate input fields and make an API request to register the user
    console.log('Submitted:', { username, email, password });
    // Reset form fields after submission
    setUsername('');
    setEmail('');
    setPassword('');
    // Redirect to login component after successful registration
    // Assuming onLogin function is passed as a prop
    if (typeof props.onLogin === 'function') {
      props.onLogin();
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p id="heading">Sign Up</p>
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
          {/* SVG path for email icon */}
        </svg>
        <input
          autoComplete="off"
          placeholder="Email"
          className="input-field"
          type="email"
          value={email}
          onChange={handleEmailChange}
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
        <button type="submit" className="button1">Register</button>
        {/* Call onLogin function passed as a prop when login button is clicked */}
        <button className="button1" onClick={props.onLogin}>Login</button>
      </div>
    </form>
  );
}

export default SignUp;
