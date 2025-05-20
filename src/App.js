import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Insights from './components/Insights';
import Footer from './components/Footer';
import TrustedBy from './components/TrustedBy';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <TrustedBy />
        <section id="features">
          <Features />
        </section>
      </main>
      
      <Insights />
      <Footer />
    </>
  );
}

export default App;
