// src/components/layout/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop'; // <--- Importalo acá
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="bg-aurum-deep min-h-screen flex flex-col">
      <ScrollToTop /> {/* <--- Ponelo acá arriba */}
      <Navbar />
      <main className="flex-1">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;