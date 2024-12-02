import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Calendar, Clock, User, Phone, Mail, MapPin, Star, Filter, Search, Calendar as CalendarIcon } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  location: string;
  availability: string[];
  image: string;
  price: string;
  languages: string[];
  education: string;
  nextAvailable: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: '15 years',
    rating: 4.8,
    location: 'Medical Center, New York',
    availability: ['Monday', 'Wednesday', 'Friday'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200',
    price: '$200',
    languages: ['English', 'Spanish'],
    education: 'Harvard Medical School',
    nextAvailable: '2024-02-28'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    experience: '12 years',
    rating: 4.9,
    location: 'Health Complex, Boston',
    availability: ['Tuesday', 'Thursday', 'Saturday'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
    price: '$180',
    languages: ['English', 'Mandarin'],
    education: 'Stanford Medical School',
    nextAvailable: '2024-02-27'
  },
  {
    id: 3,
    name: 'Dr. Emily White',
    specialty: 'Pediatrician',
    experience: '10 years',
    rating: 4.7,
    location: 'Children\'s Hospital, Chicago',
    availability: ['Monday', 'Tuesday', 'Thursday'],
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
    price: '$150',
    languages: ['English', 'French'],
    education: 'Johns Hopkins University',
    nextAvailable: '2024-02-26'
  }
];

const specialties: string[] = ['All', 'Cardiologist', 'Neurologist', 'Pediatrician', 'Dermatologist', 'Orthopedist'];

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  reason: string;
}

const Appointments: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate booking success
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        reason: ''
      });
      setSelectedDoctor(null);
    }, 3000);
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h1>
          <p className="text-xl text-gray-600">Schedule a consultation with our expert doctors</p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctors List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className={`bg-white rounded-xl shadow-md p-6 cursor-pointer transition-all duration-200 ${
                    selectedDoctor?.id === doctor.id ? 'ring-2 ring-blue-400' : ''
                  }`}
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-xl font-semibold">{doctor.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="ml-1">{doctor.rating}</span>
                        </div>
                      </div>
                      <p className="text-blue-500">{doctor.specialty}</p>
                      <p className="text-gray-600">{doctor.experience} experience</p>
                      <p className="text-gray-600">Consultation: {doctor.price}</p>
                      <div className="flex items-center mt-2">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-gray-600 text-sm">{doctor.location}</span>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm text-gray-600">Languages: {doctor.languages.join(', ')}</p>
                        <p className="text-sm text-gray-600">Education: {doctor.education}</p>
                        <p className="text-sm text-blue-600">Next Available: {doctor.nextAvailable}</p>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm text-gray-600">Available on:</p>
                        <div className="flex gap-2 mt-1">
                          {doctor.availability.map((day, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                            >
                              {day}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-6">Book Appointment</h2>
              {bookingSuccess ? (
                <div className="text-center p-4 bg-green-100 rounded-lg text-green-800">
                  <p>Your appointment has been successfully booked!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Appointment Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">Appointment Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Visit</label>
                    <textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Book Appointment
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
