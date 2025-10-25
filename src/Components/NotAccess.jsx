import React from 'react';
import { ShieldX, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NoAccess() {
  const navigate =  useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
              <ShieldX className="w-12 h-12 text-red-600" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <Lock className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Access Denied
        </h1>
        
        <p className="text-lg text-gray-600 mb-2">
          You Do Not Have Access to Dashboard
        </p>
        
        <p className="text-sm text-gray-500 mb-8">
          Please contact your administrator to request access permissions.
        </p>
        
        <div className="space-y-3">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
            Contact Administrator
          </button>
          
          <button onClick={()=>{navigate("/")}} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition duration-200">
            Go Back
          </button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Error Code: 403 - Forbidden Access
          </p>
        </div>
      </div>
    </div>
  );
}