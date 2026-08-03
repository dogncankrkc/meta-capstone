import './App.css';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Specials from './components/ui/Specials';
import Testimonials from './components/ui/Testimonials';
import Footer from './components/layout/Footer';
import About from './components/ui/About';

function App() {
  return (
    <div className="App">
    {/* header  -- logo + navigation */}
    < Header />

    {/* main content -- hero section + weeks specials + testimonials + about */}
    <main>
      <section >
        <Hero />
      </section>

      <section className="specials-section">
        <Specials />
      </section>

      <section className="testimonials">
        <Testimonials />
      </section>

      <section className="about-section">
        <About />
      </section>

    </main>

    {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
