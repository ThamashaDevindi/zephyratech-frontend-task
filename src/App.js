import React from 'react';

// Importing reusable components
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Insights from './components/Insights';
import Footer from './components/Footer';
import TrustedBy from './components/TrustedBy';

function App() {
  return (
    <>
      {/* Website Header with Navigation */}
      <Header />

      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Section showing trusted brands */}
        <TrustedBy />

        {/* Features Section */}
        <section id="features">
          <Features />
        </section>
      </main>

      {/* Insights Section */}
      <section id="growth">
        <Insights />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
