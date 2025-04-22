'use client'
import { FiMapPin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/component/UI/input'

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
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false)
  const [bookingError, setBookingError] = useState('')
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({
    location: '',
    vehicleInfo: ''
  })
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken')
      setIsLoggedIn(!!token)
    }
    checkAuth()
  }, [])

  const validateFields = () => {
    const errors = {
      location: !location ? 'Location is required' : '',
      vehicleInfo: !vehicleInfo ? 'Vehicle information is required' : ''
    }
    setFieldErrors(errors)
    return !errors.location && !errors.vehicleInfo
  }

  const checkBookingAvailability = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.random() > 0.5)
      }, 1000)
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setBookingError('')
    setBookingSuccess(false)

    if (!isLoggedIn) {
      setBookingError('Please login to book an inspection')
      router.push('/login')
      return
    }

    if (!validateFields()) return

    if (!selectedDate || !selectedTime) {
      setBookingError('Please select a date and time')
      return
    }

    setIsCheckingAvailability(true)

    try {
      const isAvailable = await checkBookingAvailability()
      
      if (!isAvailable) {
        setBookingError('This time slot is already booked. Please choose another time.')
        return
      }

      await handleSubmit(e)
      setBookingSuccess(true)
    } catch (error) {
      setBookingError('An error occurred while processing your booking')
      console.error('Booking error:', error)
    } finally {
      setIsCheckingAvailability(false)
    }
  }

  return (
    <div className="border border-white p-8">
      <h2 className="text-3xl font-bold text-white mb-6">INSPECTION DETAILS</h2>
      
      {!isLoggedIn && (
        <div className="mb-6 p-4 bg-yellow-900/30 border border-yellow-500 text-yellow-300 flex items-center">
          <FiAlertCircle className="mr-2" />
          <span>Please login to book an inspection</span>
        </div>
      )}

      {bookingError && (
        <div className="mb-6 p-4 bg-red-900/30 border border-red-500 text-red-300 flex items-center">
          <FiAlertCircle className="mr-2" />
          <span>{bookingError}</span>
        </div>
      )}

      {bookingSuccess && (
        <div className="mb-6 p-4 bg-green-900/30 border border-green-500 text-green-300 flex items-center">
          <FiCheckCircle className="mr-2" />
          <span>Booking confirmed successfully!</span>
        </div>
      )}

      <form onSubmit={handleFormSubmit}>
        <div className="mb-8">
          <label className="block text-white mb-2">Vehicle Location</label>
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter address or dealership name"
            required
            icon={<FiMapPin className="text-white" />}
            error={fieldErrors.location}
          />
        </div>

        <div className="mb-8">
          <label className="block text-white mb-2">Vehicle Information</label>
          <Input
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            placeholder="VIN (Optional)"
            className="mb-3"
          />
          <Input
            value={vehicleInfo}
            onChange={(e) => setVehicleInfo(e.target.value)}
            placeholder="Make/Model/Year"
            required
            error={fieldErrors.vehicleInfo}
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
          disabled={
            !isLoggedIn || 
            !selectedDate || 
            !selectedTime || 
            !location || 
            !vehicleInfo ||
            isCheckingAvailability
          }
          className={`w-full py-4 text-xl font-bold transition-colors flex items-center justify-center ${
            !isLoggedIn || !selectedDate || !selectedTime || !location || !vehicleInfo
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-white text-black hover:bg-black hover:text-white'
          }`}
        >
          {isCheckingAvailability ? (
            <>
              <span className="inline-block h-6 w-6 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></span>
              Checking Availability...
            </>
          ) : (
            'CONFIRM BOOKING'
          )}
        </button>
      </form>
    </div>
  )
}