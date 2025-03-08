import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const newUser = {
      fullname: {
        firstname: userData.firstName,
        lastname: userData.lastName,
      },
      email: userData.email,
      password: userData.password,
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
      const errorMsg = error.response?.data?.message || "Signup failed! Please try again.";
      setErrorMessage(errorMsg);
    } finally {
      setLoading(false);
      setUserData({ firstName: "", lastName: "", email: "", password: "" });
    }
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
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              placeholder="Enter your First Name"
              type="text"
            />
            <input
              className="w-1/2 bg-gray-200 rounded px-4 py-2 border text-base placeholder:text-sm"
              required
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              placeholder="Enter your Last Name"
              type="text"
            />
          </div>

          {/* Email */}
          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            className="bg-gray-200 mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            placeholder="email@example.com"
          />

          {/* Password */}
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-gray-200 mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
            placeholder="Password"
          />

          {/* Error Message */}
          {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}

          {/* Submit Button */}
          <button
            className="bg-black font-semibold mb-3 rounded px-4 py-2 w-full text-base text-white"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
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
