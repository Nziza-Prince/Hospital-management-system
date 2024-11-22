import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
              <p className="mt-4 leading-7 text-gray-600">
                We're here to help you 24/7. Contact us through any of these channels.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="flex items-center text-base font-semibold text-gray-900">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  Emergency Hotline
                </h3>
                <dl className="mt-3 space-y-1 text-sm text-gray-600">
                  <div>
                    <dt className="sr-only">Phone number</dt>
                    <dd>1-800-MEDCARE</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Available</dt>
                    <dd>24/7 Emergency Services</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="flex items-center text-base font-semibold text-gray-900">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  Email Us
                </h3>
                <dl className="mt-3 space-y-1 text-sm text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>contact@medcare.com</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Response time</dt>
                    <dd>Typically within 24 hours</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="flex items-center text-base font-semibold text-gray-900">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Location
                </h3>
                <dl className="mt-3 space-y-1 text-sm text-gray-600">
                  <div>
                    <dt className="sr-only">Address</dt>
                    <dd>123 Healthcare Ave</dd>
                    <dd>Medical District</dd>
                    <dd>New York, NY 10001</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="flex items-center text-base font-semibold text-gray-900">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  Working Hours
                </h3>
                <dl className="mt-3 space-y-1 text-sm text-gray-600">
                  <div>
                    <dt className="sr-only">Hours</dt>
                    <dd>Monday - Friday: 8:00 AM - 8:00 PM</dd>
                    <dd>Saturday: 9:00 AM - 5:00 PM</dd>
                    <dd>Sunday: Emergency Only</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}