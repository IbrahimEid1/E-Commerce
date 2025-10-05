import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const DataUser = JSON.parse(localStorage.getItem("signup"));
  const navigate = useNavigate();
  const [FormLog, setFormLog] = useState({
    email: "",
    password: "",
  });
  const handelLog = () => {
    if (
      DataUser?.email === FormLog.email &&
      DataUser?.password === FormLog.password
    ) {
      alert("sucess");
      navigate("/");
    } else {
      setError("Please Sign Up To Complete ");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!FormLog.email || !FormLog.password) {
      setError("Please fill in all fields!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(FormLog.email)) {
      setError("Please enter a valid email address!");
      return;
    }

    if (FormLog.password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }
    handelLog();
  };
  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setFormLog({ ...FormLog, [name]: value });
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-6">Sign in</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Email address"
              value={FormLog.email}
              name="email"
              onChange={handelOnChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={FormLog.password}
                name="password"
                onChange={handelOnChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500">{error}</p>}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />

              <span className="text-sm text-gray-700">
                Remember for 30 days
              </span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password
            </a>
          </div>

          <button
            className={
              error
                ? " w-full py-3 bg-gray-500 text-white rounded-md font-medium cursor-not-allowed  mt-6"
                : " w-full py-3 bg-blue-500 text-white rounded-md font-medium  mt-6"
            }
            type="submit"
          >
            {" "}
            SIGN IN{" "}
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <button className="w-full py-3 bg-gray-800 text-white rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign In by google
          </button>

          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-2">
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-red-500 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm text-red-700 flex flex-row justify-between w-[100%]">
              <span className="font-semibold">
                Sign up to save $9 for free shipping with AusFF company through
                australian territory
              </span>
              <Link
                to="/register"
                className="
              text-blue-500 text-[16px]"
              >
                {" "}
                Sign Up{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
