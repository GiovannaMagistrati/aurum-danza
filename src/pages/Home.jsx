import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedDancers from '../components/home/FeaturedDancers';
import ProcessSection from '../components/home/ProcessSection';
import Footer from '../components/layout/Footer'; 

const Home = () => {
  return (
    <main className="bg-aurum-deep">
      <Hero />
      <FeaturedDancers />
      <ProcessSection />
    </main>
  );
};

export default Home;