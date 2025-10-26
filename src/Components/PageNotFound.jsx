import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-purple-400 to-blue-400"></div>
        </div>

        {/* Message */}
        <h2 className="mt-8 text-3xl font-bold text-gray-800 mb-4">
        Not Found Page
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          I'm Sorry
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Go To Home 
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-200 hover:border-gray-300 hover:shadow-md transform hover:scale-105 transition-all duration-200"
          >
            Go To Home 
            </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-8 text-6xl opacity-20">
          <span className="animate-bounce">🚀</span>
          <span className="animate-bounce delay-100">⭐</span>
          <span className="animate-bounce delay-200">🌙</span>
        </div>
      </div>
    </div>
  );
}