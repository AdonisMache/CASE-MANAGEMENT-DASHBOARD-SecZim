import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Prudential RBS
          </h1>
          <p className="text-gray-600">Case Management System</p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/login"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition duration-200"
          >
            Login to Dashboard
          </Link>
          
          <div className="text-center text-sm text-gray-500 mt-6">
            <p>Secure access for authorized personnel only</p>
          </div>
        </div>
      </div>
    </div>
  )
}