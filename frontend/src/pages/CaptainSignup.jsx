import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  // Form submission logic
  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    // console.log(userData); // You can send this to an API instead

    // Clear form after submission
    setEmail("");
    setFirstName("");
    setPassword("");
    setLastName("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
          alt="Uber Logo"
        />

        <form onSubmit={submitHandler}>
          {/* First Name and Last Name */}
          <h3 className="text-lg w-full font-medium mb-2">What's your Captain's name</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-base placeholder:text-sm"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your First Name"
              type="text"
            />
            <input
              className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-base placeholder:text-sm"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your Last Name"
              type="text"
            />
          </div>

          {/* Email */}
          <h3 className="text-base font-medium mb-2">What's your Captain's email</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
          />

          {/* Password */}
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />

          {/* Submit Button */}
          <button className="bg-[#111] font-semibold mb-3 rounded px-4 py-2 w-full text-base text-white">
            Sign Up
          </button>

          {/* Login link */}
          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className="text-[11px] leading-tight">
          This site is protected by reCAPTCHA and{" "}
          <span className="underline">Uber terms and policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
        <p className="text-medium leading-2">
          &copy; 2025 YourCompanyName. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default CaptainSignup;
