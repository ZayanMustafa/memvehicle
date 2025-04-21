import Navbar from '@/component/Navbar'
import Link from 'next/link'
import { FiSearch, FiHome, FiPhone, FiFileText, FiAlertTriangle } from 'react-icons/fi'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
   
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-40 h-40 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <FiAlertTriangle className="text-red-500" size={80} />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-red-500 mb-6 leading-tight">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Page Not Found</h2>
          
          <p className="text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            The VIN or page you&apos;re  searching for doesn&apos;t exist in our database.
          </p>

          {/* Help Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <FiFileText className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3">New Inspection</h3>
              <p className="text-gray-600 mb-4 text-xl">Schedule a fresh vehicle inspection</p>
              <Link href="/services" className="text-primary font-semibold text-lg hover:underline">
                Get Started →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <FiPhone className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3">Contact Support</h3>
              <p className="text-gray-600 mb-4 text-xl">Our team is available 24/7</p>
              <Link href="/contact" className="text-primary font-semibold text-lg hover:underline">
                Call Now →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <FiHome className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3">Return Home</h3>
              <p className="text-gray-600 mb-4 text-xl">Back to our main page</p>
              <Link href="/" className="text-primary font-semibold text-lg hover:underline">
                Go Home →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}