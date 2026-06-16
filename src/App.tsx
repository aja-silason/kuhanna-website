import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Solutions from './components/Solutions';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Solutions />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;