import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      if (response.status === 201) {
        setUser(response.data.user);
        navigate("/home");
      }
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      alert("Signup failed! Please try again.");
    }

    // Reset form fields
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
          alt="Uber Logo"
        />

        <form onSubmit={submitHandler}>
          {/* First Name & Last Name */}
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="w-1/2 bg-gray-200 rounded px-4 py-2 border text-base placeholder:text-sm"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your First Name"
              type="text"
            />
            <input
              className="w-1/2 bg-gray-200 rounded px-4 py-2 border text-base placeholder:text-sm"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your Last Name"
              type="text"
            />
          </div>

          {/* Email */}
          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            className="bg-gray-200 mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
          />

          {/* Password */}
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-gray-200 mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />

          <button
            className="bg-black font-semibold mb-3 rounded px-4 py-2 w-full text-base text-white"
            type="submit"
          >
            Create Account
          </button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>

      {/* Footer */}
      <div>
        <p className="text-xs leading-tight">
          By proceeding, you consent to receive calls, WhatsApp, or SMS
          messages, including by automated means, from Uber and its affiliates
          to the provided number.
        </p>
        <p className="text-sm mt-2">&copy; 2025 YourCompanyName. All rights reserved.</p>
      </div>
    </div>
  );
};

export default UserSignup;
