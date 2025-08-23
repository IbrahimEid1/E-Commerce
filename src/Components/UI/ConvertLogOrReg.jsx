import React from 'react'
import { Link } from 'react-router-dom'
export default function ConvertLogOrReg({to , text}) {
  return (
 <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?
          <Link to={to} className="text-blue-500 hover:underline">
                {text}
          </Link>
          </p>
  )
}
