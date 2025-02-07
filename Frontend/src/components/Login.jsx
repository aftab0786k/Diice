import React, { useState } from 'react';
import './Login.css'

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  // SignUp form state
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    state: '',
    city: '',
    termsAccepted: false,
    policyAccepted: false,
  });

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // Handle input changes for SignUp
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle input changes for Login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle SignUp form submission
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log('SignUp Data:', signUpData);
  };

  // Handle Login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
  };

  return (
    <div className=" b-side min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-700 mb-4">Diice Raja</h1>
        <h2 className="text-2xl font-bold text-center text-blue-500">

          {isSignUp ? ' Gamer Sign Up' : ' Gamer Login'}
        </h2>
        
        {/* Toggle between SignUp and Login Forms */}
        {isSignUp ? (
          <form onSubmit={handleSignUpSubmit}>
            <div className="mt-4">
              <label className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={signUpData.name}
                onChange={handleSignUpChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={signUpData.email}
                onChange={handleSignUpChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold">Phone No</label>
              <input
                type="text"
                name="phone"
                value={signUpData.phone}
                onChange={handleSignUpChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={signUpData.password}
                onChange={handleSignUpChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold">State</label>
              <input
                type="text"
                name="state"
                value={signUpData.state}
                onChange={handleSignUpChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold">City</label>
              <input
                type="text"
                name="city"
                placeholder="city"
                value={signUpData.city}
                onChange={handleSignUpChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
                required
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={signUpData.termsAccepted}
                  onChange={(e) => handleSignUpChange(e)}
                  className="mr-2"
                  required
                />
                <label className="text-sm">I agree to the Terms & Conditions</label>
              </div>

              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  name="policyAccepted"
                  checked={signUpData.policyAccepted}
                  onChange={(e) => handleSignUpChange(e)}
                  className="mr-2"
                  required
                />
                <label className="text-sm">I agree to the User Policy</label>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm m-auto ">Joining fees: ₹500 (valid for 1 year)</span>
              
            </div>
            <div>
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Sign Up
            </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit}>
            <div className="mt-4">
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
                required
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
              >
                Login
              </button>
            </div>
          </form>
        )}

        <div className="mt-4 text-center">
          {isSignUp ? (
            <p>
              Already have an account?{' '}
              <span
                onClick={() => setIsSignUp(false)}
                className="text-blue-500 cursor-pointer"
              >
                Login
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <span
                onClick={() => setIsSignUp(true)}
                className="text-blue-500 cursor-pointer"
              >
                Create an account
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
