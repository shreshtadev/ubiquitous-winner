import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for cannot be found.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
