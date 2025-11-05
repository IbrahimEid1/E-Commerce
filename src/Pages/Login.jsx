import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, AlertCircle, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [FormLog, setFormLog] = useState({
    identifier: "",
    password: "",
  });
  const login = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!FormLog.identifier || !FormLog.password) {
      setError("Please fill in all fields!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(FormLog.identifier)) {
      setError("Please enter a valid email address!");
      return;
    }

    if (FormLog.password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }
    
    setError(null);
    login.mutate(FormLog, {
      onSuccess: () => {
        navigate("/");
      },
      onError: (err) => {
        setError("Invalid email or password. Please try again.");
      }
    });
  };

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setFormLog({ ...FormLog, [name]: value });
    if (error) setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-md relative">
        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-2xl mb-4 shadow-lg shadow-pink-500/50">
              <Lock className="text-white" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400 text-sm">Sign in to continue to your account</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300">Email Address</label>
              <div className="relative">
                <Mail 
                  className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${
                    focusedField === 'email' ? 'text-cyan-400' : 'text-gray-500'
                  }`} 
                  size={20} 
                />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={FormLog.identifier}
                  name="identifier"
                  onChange={handelOnChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-11 pr-4 py-3.5 border-2 border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition-all text-sm bg-white/5 text-white placeholder:text-gray-500 focus:bg-white/10"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300">Password</label>
              <div className="relative">
                <Lock 
                  className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${
                    focusedField === 'password' ? 'text-cyan-400' : 'text-gray-500'
                  }`} 
                  size={20} 
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={FormLog.password}
                  name="password"
                  onChange={handelOnChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-11 pr-12 py-3.5 border-2 border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition-all text-sm bg-white/5 text-white placeholder:text-gray-500 focus:bg-white/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-cyan-400 transition-colors p-1"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
                <AlertCircle className="text-red-500 flex-shrink-0" size={18} />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                  />
                  {rememberMe && (
                    <CheckCircle2 className="absolute top-0 left-0 text-blue-600 pointer-events-none" size={20} />
                  )}
                </div>
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                  Remember me
                </span>
              </label>
              <Link 
                to="/forgot-password" 
                className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={login.isLoading}
              className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 transform ${
                error || login.isLoading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              {login.isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-900 text-gray-400 font-medium">Or continue with</span>
              </div>
            </div>

            {/* Google Sign In */}
            <button 
              type="button"
              className="w-full py-3.5 bg-white/5 border-2 border-white/10 text-white rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/20 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
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
              Continue with Google
            </button>

            {/* Sign Up Promotion */}
            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-500/20 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium mb-1">
                    New to our platform?
                  </p>
                  <p className="text-xs text-gray-400 mb-3">
                    Sign up now and get <span className="font-bold text-cyan-400">$9 off</span> on free shipping with AusFF company
                  </p>
                  <Link
                    to="/register"
                    className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Create an account
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Protected by industry-standard encryption
        </p>
      </div>
    </div>
  );
}