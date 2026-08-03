import './App.css';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
// import Specials from './components/layout/Specials';
// import Testimonials from './components/layout/Testimonials';
// import About from './components/layout/About';
import Footer from './components/layout/Footer';

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

      {/* <section className="specials">
        <Specials />
      </section>

      <section className="testimonials">
        <Testimonials />
      </section>

      <section className="about">
        <About />
      </section> */}

      <section>
        <div style={{ height: "200px" }}></div>
      </section>

      <section>
        <div style={{ height: "200px" }}></div>
      </section>

    </main>

    {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
