import { FiDownload, FiEye, FiChevronRight } from 'react-icons/fi'
import Head from 'next/head'

export default function Reports() {
  const reportSections = [
    {
      title: "Vehicle Overview",
      content: "Summary of overall condition with rating"
    },
    {
      title: "Exterior Findings",
      content: "Detailed photos and notes on body, paint, glass, etc."
    },
    {
      title: "Interior Findings",
      content: "Condition of seats, electronics, controls, and features"
    },
    {
      title: "Mechanical Assessment",
      content: "Engine, transmission, suspension, and brake evaluation"
    },
    {
      title: "Test Drive Notes",
      content: "Performance observations during road test"
    },
    {
      title: "Recommendations",
      content: "Suggested repairs and maintenance items"
    }
  ]

  return (
    <>
      <Head>
        <title>Sample Reports | MEM INSPECT</title>
      </Head>

      <section className="bg-dark-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">SAMPLE INSPECTION REPORT</h1>
          <div className="w-24 h-0.5 bg-white mb-8"></div>
          <p className="text-2xl text-gray-300 max-w-3xl">
            See what our comprehensive vehicle inspection reports include
          </p>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">REPORT PREVIEW</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our digital reports include detailed findings, high-resolution photos, and expert recommendations for each vehicle we inspect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center px-8 py-4 bg-white text-black font-bold hover:bg-black hover:text-white transition-colors">
                  <FiDownload className="mr-3" /> DOWNLOAD SAMPLE
                </button>
                <button className="flex items-center justify-center px-8 py-4 border border-white text-white font-bold hover:bg-white hover:text-black transition-colors">
                  <FiEye className="mr-3" /> VIEW ONLINE
                </button>
              </div>
            </div>
            <div className="border-2 border-white bg-gray-900 p-2">
              <div className="border border-white h-full p-6 flex flex-col">
                <div className="border-b border-white pb-4 mb-6">
                  <h3 className="text-2xl text-white">MEM INSPECT REPORT</h3>
                  <p className="text-gray-400">Sample Report - 2024 Toyota Camry</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div>
                    <p className="text-gray-400 text-sm">OVERALL RATING</p>
                    <p className="text-2xl text-white">Good</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">MILEAGE</p>
                    <p className="text-2xl text-white">24,350</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">INSPECTION DATE</p>
                    <p className="text-2xl text-white">06/15/2023</p>
                  </div>
                </div>
                <div className="flex-grow bg-gray-800 mb-6 flex items-center justify-center">
                  <p className="text-gray-400">[Report preview image]</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">MEM-2023-06-15-TOYOTA-CAMRY-24350</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-8">REPORT SECTIONS</h2>
          <div className="border border-white">
            {reportSections.map((section, index) => (
              <div key={index} className="border-b border-white last:border-b-0 group hover:bg-gray-900/30 transition-colors">
                <button className="w-full p-6 text-left flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl text-white mb-2">{section.title}</h3>
                    <p className="text-gray-300">{section.content}</p>
                  </div>
                  <FiChevronRight className="text-white text-2xl group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}