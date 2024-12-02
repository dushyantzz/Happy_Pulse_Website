import { Play, Calendar, Shield, Activity } from 'lucide-react';
import ReactPlayer from 'react-player';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-custom-white to-custom-green h-1/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive healthcare solutions at your fingertips
            </p>
            <button className="bg-blue-400 text-white px-8 py-3 rounded-md hover:bg-blue-500 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Disease Prevention</h3>
              <p className="text-gray-600">Learn how to protect yourself and stay healthy</p>
            </div>
            <div className="text-center p-6">
              <Activity className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Symptom Detection</h3>
              <p className="text-gray-600">Early detection for better treatment outcomes</p>
            </div>
            <div className="text-center p-6">
              <Calendar className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">Book appointments with top healthcare providers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Health Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <div key={video} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    width="100%"
                    height="100%"
                    light={true}
                    playIcon={<Play className="h-16 w-16 text-white" />}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Understanding COVID-19 Prevention</h3>
                  <p className="text-gray-600 text-sm">Learn about the latest prevention methods</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Schedule an Appointment</h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect with our healthcare professionals today
          </p>
          <button className="bg-blue-400 text-white px-8 py-3 rounded-md hover:bg-blue-500 shadow-lg">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;