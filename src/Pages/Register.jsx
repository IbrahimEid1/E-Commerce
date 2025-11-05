import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useRegister } from "../hooks/useRegister";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const navigate = useNavigate();
  
  const [FormLog, setFormLog] = useState({
    username: "",
    email: "",
    password: "",
  });

  const register = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!FormLog.username || !FormLog.email || !FormLog.password) {
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

    register.mutate(FormLog, {
      onSuccess: () => {
        navigate("/login");
      },
      onError: (err) => {
        setError("Registration failed. Please try again.");
        console.log(err, "error");
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
        {/* Main Card with 3D effect */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10 transform-gpu"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-2xl mb-4 shadow-lg shadow-pink-500/50"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <User className="text-white" size={28} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Create Account
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-sm"
            >
              Sign up to start your journey
            </motion.p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Username Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <label className="block text-sm font-semibold text-gray-300">Username</label>
              <div className="relative">
                <User 
                  className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${
                    focusedField === 'username' ? 'text-cyan-400' : 'text-gray-500'
                  }`} 
                  size={20} 
                />
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={FormLog.username}
                  name="username"
                  onChange={handelOnChange}
                  onFocus={() => setFocusedField('username')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-11 pr-4 py-3.5 border-2 border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition-all text-sm bg-white/5 text-white placeholder:text-gray-500 focus:bg-white/10"
                />
              </div>
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-2"
            >
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
                  value={FormLog.email}
                  name="email"
                  onChange={handelOnChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-11 pr-4 py-3.5 border-2 border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition-all text-sm bg-white/5 text-white placeholder:text-gray-500 focus:bg-white/10"
                />
              </div>
            </motion.div>

            {/* Password Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-2"
            >
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
                  placeholder="Create a password"
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
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300"
              >
                <AlertCircle className="text-red-500 flex-shrink-0" size={18} />
                <p className="text-sm text-red-700">{error}</p>
              </motion.div>
            )}

            {/* Terms and Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-start pt-1"
            >
              <label className="flex items-start gap-2.5 cursor-pointer group">
                <div className="relative mt-0.5">
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
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors flex-1">
                  I agree to the{" "}
                  <Link to="/terms" className="text-cyan-400 hover:text-cyan-300 underline">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              type="submit"
              disabled={register.isLoading}
              className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 transform ${
                error || register.isLoading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              {register.isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating account...
                </span>
              ) : (
                "Create Account"
              )}
            </motion.button>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="relative my-6"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-900 text-gray-400 font-medium">Or continue with</span>
              </div>
            </motion.div>

            {/* Google Sign Up */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
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
            </motion.button>

            {/* Sign In Promotion */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-500/20 rounded-xl"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium mb-1">
                    Already have an account?
                  </p>
                  <p className="text-xs text-gray-400 mb-3">
                    Sign in now to access your personalized dashboard and exclusive features
                  </p>
                  <Link
                    to="/login"
                    className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Sign in to your account
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          Protected by industry-standard encryption
        </motion.p>
      </div>
    </div>
  );
}