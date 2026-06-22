import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { useAdmin } from './context/AdminContext';

function AdminRoute({ onBack }: { onBack: () => void }) {
  const { isAuthenticated } = useAdmin();
  return isAuthenticated ? <AdminDashboard onBack={onBack} /> : <AdminLogin onBack={onBack} />;
}

function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [route]);

  const goHome = () => { window.location.hash = ''; setRoute(''); };
  const isAdmin = route === '#admin' || route === '#/admin';

  if (isAdmin) {
    return <AdminRoute onBack={goHome} />;
  }

  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
