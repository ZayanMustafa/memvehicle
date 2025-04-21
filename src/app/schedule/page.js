'use client'
import { useState } from 'react';
import { FiCalendar, FiClock, FiMapPin, FiCheckCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Head from 'next/head';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Schedule() {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [displayMonth, setDisplayMonth] = useState(currentMonth);
  const [displayYear, setDisplayYear] = useState(currentYear);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [location, setLocation] = useState('');
  const [vin, setVin] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState('');

  const handleDateSelect = (date) => {
    // Prevent selecting dates before current date
    if (
      displayMonth === currentMonth && 
      displayYear === currentYear && 
      date < currentDay
    ) {
      toast.error("Cannot select past dates");
      return;
    }
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleMonthChange = (direction) => {
    if (direction === 'prev' && (displayMonth > currentMonth || displayYear > currentYear)) {
      setDisplayMonth(prev => (prev === 0 ? 11 : prev - 1));
      if (displayMonth === 0) setDisplayYear(prev => prev - 1);
    } else if (direction === 'next') {
      setDisplayMonth(prev => (prev === 11 ? 0 : prev + 1));
      if (displayMonth === 11) setDisplayYear(prev => prev + 1);
    }
    setSelectedDate(null);
    setSelectedTime('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !location || !vehicleInfo) {
      toast.error("Please fill all required fields");
      return;
    }

    const bookingDate = new Date(displayYear, displayMonth, selectedDate);
    const formattedDate = bookingDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    toast.success(
      <div>
        <h4 className="font-bold">Booking Confirmed!</h4>
        <p>Date: {formattedDate}</p>
        <p>Time: {selectedTime}</p>
        <p>Location: {location}</p>
      </div>,
      { autoClose: 5000 }
    );

    // Reset form
    setSelectedDate(null);
    setSelectedTime('');
    setLocation('');
    setVin('');
    setVehicleInfo('');
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(displayMonth, displayYear);
    const firstDayOfMonth = getFirstDayOfMonth(displayMonth, displayYear);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isPastDate = 
        displayMonth === currentMonth && 
        displayYear === currentYear && 
        day < currentDay;
      
      days.push(
        <button
          key={day}
          onClick={() => !isPastDate && handleDateSelect(day)}
          disabled={isPastDate}
          className={`py-2 rounded-full ${
            day === selectedDate 
              ? 'bg-white text-black' 
              : isPastDate
                ? 'text-gray-500 cursor-not-allowed'
                : 'text-white hover:bg-gray-700'
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <>
      <Head>
        <title>Schedule Inspection | MEM Vehicle Inspection</title>
      </Head>
      <ToastContainer position="top-right" />

      <section className="bg-dark-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">SCHEDULE YOUR INSPECTION</h1>
          <div className="w-24 h-0.5 bg-white mb-8"></div>
          <p className="text-2xl text-gray-300 max-w-3xl">
            Book your 150-point vehicle inspection with our certified technicians
          </p>
        </div>
      </section>

      <section className="py-20 bg-dark-500">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">AVAILABLE TIME SLOTS</h2>
            
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl text-white flex items-center">
                  <FiCalendar className="mr-3" /> 
                  {monthNames[displayMonth]} {displayYear}
                </h3>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleMonthChange('prev')}
                    disabled={displayMonth <= currentMonth && displayYear <= currentYear}
                    className={`p-2 rounded-full ${
                      displayMonth <= currentMonth && displayYear <= currentYear
                        ? 'text-gray-500 cursor-not-allowed'
                        : 'text-white hover:bg-gray-700'
                    }`}
                  >
                    <FiChevronLeft />
                  </button>
                  <button 
                    onClick={() => handleMonthChange('next')}
                    className="p-2 rounded-full text-white hover:bg-gray-700"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                  <div key={i} className="text-center text-gray-400 text-sm">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {renderCalendarDays()}
              </div>
            </div>

            {selectedDate && (
              <div>
                <h3 className="text-2xl text-white mb-4 flex items-center">
                  <FiClock className="mr-3" /> Available Times
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'].map(time => (
                    <button 
                      key={time} 
                      onClick={() => handleTimeSelect(time)}
                      className={`py-3 border ${
                        time === selectedTime
                          ? 'bg-white text-black'
                          : 'border-white text-white hover:bg-white hover:text-black'
                      } transition-colors`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

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


          
        </div>
      </section>
    </>
  );
}