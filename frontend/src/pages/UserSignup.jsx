import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  // logis
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
    // console.log(userData);
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
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
        >
          {/*  for first name */}

          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 border  text-base placeholder:text-sm"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="Enter your FirstName"
              type="text"
            />
            <input
              className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-base placeholder:text-sm"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Enter your LastName"
              type="text"
            />
          </div>

          {/* for email */}
          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="email@example.com"
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>

          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="password"
          />
          <button className="bg-[#111] font-semibold mb-3 rounded px-4 py-2  w-full text-base text-white">
            Login
          </button>

          <p className="text-center mt-3">
            Already have a account
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[11px] leading-tight">
          By proceeding, you consent to get calls, whatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          nuber provided.
        </p>
        <p className="text-medium leading-2">
          &copy; 2025 YourCompanyName. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default UserSignup;
