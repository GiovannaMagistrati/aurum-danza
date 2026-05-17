import Hero from '../components/home/Hero';
import FeaturedDancers from '../components/home/FeaturedDancers';
import ProcessSection from '../components/home/ProcessSection';


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