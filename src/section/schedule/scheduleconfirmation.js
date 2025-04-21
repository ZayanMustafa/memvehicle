'use client'
import { FiMapPin, FiCheckCircle } from 'react-icons/fi';

export const ScheduleConfirmation = ({ 
  location, 
  setLocation, 
  vin, 
  setVin, 
  vehicleInfo, 
  setVehicleInfo,
  selectedDate,
  selectedTime,
  displayMonth,
  displayYear,
  monthNames,
  handleSubmit
}) => {
  return (
    <div className="border border-white p-8">
      <h2 className="text-3xl font-bold text-white mb-6">INSPECTION DETAILS</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <label className="block text-white mb-2">Vehicle Location</label>
          <div className="flex items-center border border-white p-4 mb-4">
            <FiMapPin className="mr-3 text-white" />
            <input 
              type="text" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter address or dealership name" 
              className="bg-transparent text-white placeholder-gray-400 w-full outline-none"
              required
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-white mb-2">Vehicle Information</label>
          <input 
            type="text" 
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            placeholder="VIN (Optional)" 
            className="w-full bg-transparent border border-white p-4 mb-3 text-white placeholder-gray-400"
          />
          <input 
            type="text" 
            value={vehicleInfo}
            onChange={(e) => setVehicleInfo(e.target.value)}
            placeholder="Make/Model/Year" 
            className="w-full bg-transparent border border-white p-4 text-white placeholder-gray-400"
            required
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-white mb-3">Service Selected</h3>
          <div className="border border-white p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white">Standard 150-Point Inspection</span>
              <span className="text-white">$199.00</span>
            </div>
            <div className="flex items-center text-green-400">
              <FiCheckCircle className="mr-2" />
              <span>Includes digital report with photos</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl text-white mb-3">Selected Appointment</h3>
          <div className="border border-white p-4">
            {selectedDate && selectedTime ? (
              <>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">Date:</span>
                  <span className="text-white">
                    {monthNames[displayMonth]} {selectedDate}, {displayYear}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Time:</span>
                  <span className="text-white">{selectedTime}</span>
                </div>
              </>
            ) : (
              <span className="text-gray-400">Please select a date and time</span>
            )}
          </div>
        </div>

        <button 
          type="submit" 
          disabled={!selectedDate || !selectedTime || !location || !vehicleInfo}
          className={`w-full py-4 text-xl font-bold transition-colors ${
            !selectedDate || !selectedTime || !location || !vehicleInfo
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-white text-black hover:bg-black hover:text-white'
          }`}
        >
          CONFIRM BOOKING
        </button>
      </form>
    </div>
  );
};