import { FiPhone, FiMail, FiMessageSquare , FiAlertTriangle , FiDollarSign } from 'react-icons/fi'
import Head from 'next/head'

export default function Consultation() {
  return (
    <>
      <Head>
        <title>Expert Consultation | MEM Vehicle Inspection</title>
      </Head>

      <section className="bg-dark-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">EXPERT CONSULTATION</h1>
          <div className="w-24 h-0.5 bg-white mb-8"></div>
          <p className="text-2xl text-gray-300 max-w-3xl">
            Discuss your inspection results with our certified technicians
          </p>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">UNDERSTAND YOUR REPORT</h2>
            <p className="text-xl text-gray-300 mb-6">
              Our post-inspection consultations help you make informed decisions about your vehicle purchase or maintenance needs.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                  <FiMessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-2">Report Walkthrough</h3>
                  <p className="text-gray-300">
                    We'll explain each section of your inspection report in plain language and answer all your questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                  <FiAlertTriangle size={24} />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-2">Critical Findings</h3>
                  <p className="text-gray-300">
                    We'll highlight any urgent issues that need attention and help you understand their implications.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                  <FiDollarSign size={24} />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-2">Repair Estimates</h3>
                  <p className="text-gray-300">
                    Get rough cost estimates for recommended repairs to help with negotiations or budgeting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-white p-8">
            <h2 className="text-3xl font-bold text-white mb-6">REQUEST CONSULTATION</h2>
            <p className="text-gray-300 mb-8">
              Complete the form below and we'll contact you to schedule your consultation session.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border border-white p-4 text-white placeholder-gray-400" 
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border border-white p-4 text-white placeholder-gray-400" 
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border border-white p-4 text-white placeholder-gray-400" 
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Inspection Report ID</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border border-white p-4 text-white placeholder-gray-400" 
                  placeholder="MEM-XXXX-XX-XX"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Preferred Contact Method</label>
                <div className="flex flex-wrap gap-3">
                  {['Phone Call', 'Video Call', 'Email'].map(method => (
                    <label key={method} className="flex items-center">
                      <input type="radio" name="contactMethod" className="mr-2" />
                      <span className="text-gray-300">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-white text-black text-xl font-bold hover:bg-black hover:text-white transition-colors"
              >
                REQUEST CONSULTATION
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">NEED IMMEDIATE HELP?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a href="tel:+18005551234" className="flex items-center justify-center px-8 py-5 border border-white text-white hover:bg-white hover:text-black transition-colors">
              <FiPhone className="mr-3" /> CALL: (311) 25128 21
            </a>
            <a href="mailto:support@memvehicle.com" className="flex items-center justify-center px-8 py-5 border border-white text-white hover:bg-white hover:text-black transition-colors">
              <FiMail className="mr-3" /> EMAIL: support@memvehicle.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}