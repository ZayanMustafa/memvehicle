


import { FiUsers, FiCheckCircle,  FiAward } from 'react-icons/fi'
import { TfiCar } from "react-icons/tfi";
const StatsSection = () => {
  const stats = [
    {
      icon: <FiUsers size={48} className="text-primary" />,
      value: "10,000+",
      label: "Satisfied Customers",
    },
    {
      icon: <FiCheckCircle size={48} className="text-primary" />,
      value: "25,000+",
      label: "Inspections Completed",
    },
    {
      icon: <TfiCar size={48} className="text-primary" />,
      value: "50+",
      label: "Vehicle Makes Covered",
    },
    {
      icon: <FiAward size={48} className="text-primary" />,
      value: "200+",
      label: "Certified Inspectors",
    },
  ]

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection