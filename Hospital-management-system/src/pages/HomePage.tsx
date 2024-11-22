import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

export default function HomePage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}