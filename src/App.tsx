import Navbar from './components/NavBar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import About from './components/About.tsx';
import Solutions from './components/Solutions.tsx';
import Process from './components/Process.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

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