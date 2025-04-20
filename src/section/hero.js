import { FiSearch, FiCheckCircle } from 'react-icons/fi'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative bg-dark text-white pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <Image 
          src="/bike.jpg"
          alt="Car inspection"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="big-text mb-6">
            Professional <span className="text-primary">Vehicle Inspections</span> You Can Trust
          </h1>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed">
            Get comprehensive vehicle inspection reports from certified professionals before you buy or sell.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="Enter VIN or License Plate" 
                className="w-full px-6 py-4 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors">
              Search
            </button>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              '200+ Certified Inspectors',
              'Instant Reports',
              'Money Back Guarantee',
              '24/7 Support'
            ].map((item) => (
              <div key={item} className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FiCheckCircle className="mr-2 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection