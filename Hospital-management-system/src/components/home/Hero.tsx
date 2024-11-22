import { ArrowRight, Calendar, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
          alt="Modern hospital facility"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-900/70" />
      </div>
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Your Health,<br />
                <span className="text-blue-400">Our Priority</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300 max-w-xl">
                Experience world-class healthcare with our team of dedicated professionals. 
                We combine cutting-edge technology with compassionate care to ensure your well-being.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/register"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-20">
              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 text-center">
                <Calendar className="mx-auto h-8 w-8 text-blue-400" />
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-white">Easy Booking</h3>
                  <p className="mt-2 text-sm text-gray-300">Schedule appointments online 24/7</p>
                </div>
              </div>
              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 text-center">
                <Shield className="mx-auto h-8 w-8 text-blue-400" />
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-white">Safe & Secure</h3>
                  <p className="mt-2 text-sm text-gray-300">Top-tier medical protocols</p>
                </div>
              </div>
              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 text-center">
                <Clock className="mx-auto h-8 w-8 text-blue-400" />
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-white">24/7 Care</h3>
                  <p className="mt-2 text-sm text-gray-300">Round-the-clock emergency service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}