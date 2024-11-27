export default function Testimonials() {
  const testimonials = [
    {
      content: "The care I received was exceptional. The staff was professional and caring throughout my treatment.",
      author: {
        name: "Sarah Johnson",
        role: "Patient",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      content: "State-of-the-art facilities and a dedicated team. Proud to be part of this institution.",
      author: {
        name: "Dr. Michael Chen",
        role: "Cardiologist",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      content: "The emergency response team saved my life. Forever grateful for their quick action and expertise.",
      author: {
        name: "Robert Martinez",
        role: "Patient",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Read about the experiences of our patients and medical professionals
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
                <blockquote className="text-gray-900">
                  <p>"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author.name}</div>
                    <div className="text-sm leading-6 text-gray-600">{testimonial.author.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}