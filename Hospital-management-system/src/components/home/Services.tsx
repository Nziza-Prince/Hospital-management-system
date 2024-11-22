import { 
    Heart, 
    Brain, 
    Baby, 
    Bone, 
    Eye, 
    Pill,
    ArrowRight
  } from 'lucide-react';
  
  const services = [
    {
      name: 'Cardiology',
      description: 'Comprehensive heart care with state-of-the-art facilities and expert cardiologists.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Neurology',
      description: 'Expert care for neurological conditions with advanced diagnostic and treatment options.',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents in a child-friendly environment.',
      icon: Baby,
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Orthopedics',
      description: 'Complete treatment for bone, joint, and muscle conditions using modern techniques.',
      icon: Bone,
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Ophthalmology',
      description: 'Comprehensive eye care services and surgical procedures by experienced specialists.',
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Pharmacy',
      description: '24/7 pharmacy services with home delivery options and expert medication counseling.',
      icon: Pill,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
  ];
  
  export default function Services() {
    return (
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Medical Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a comprehensive range of medical services with cutting-edge technology and expert care
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-x-3">
                    <service.icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 hover:text-blue-500">
                    <a
                      href={`/services/${service.name.toLowerCase()}`}
                      className="text-sm font-semibold flex items-center"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }