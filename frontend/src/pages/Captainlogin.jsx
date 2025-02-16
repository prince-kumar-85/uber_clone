import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Captainlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`You are logged in as ${email}`);
    setUserData({
      email: email,
      password: password,
    });
    setEmail('');
    setPassword('');
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-10"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="Uber Logo"
        />

        <form onSubmit={submitHandler} action="">
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            aria-label="Email Address"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            aria-label="Password"
          />
          <button className="bg-[#111] font-semibold mb-3 rounded px-4 py-2 w-full text-lg text-white">
            Login
          </button>

          <p className="text-center mt-3">
            New Here?{' '}
            <Link to='/signup' className="text-blue-600">
              Create a new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to='/captain-login'
          className="bg-[#10b461] flex items-center justify-center font-semibold mb-15 rounded px-4 py-2 w-full text-lg text-white"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
}

export default Captainlogin;
