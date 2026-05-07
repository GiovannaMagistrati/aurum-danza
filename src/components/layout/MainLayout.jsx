import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainLayout = () => {
  return (
    <div className="bg-aurum-deep min-h-screen">
      <Navbar />
      <main>
        {/* El Outlet es donde React Router "inyecta" la página actual */}
        <Outlet /> 
      </main>
    </div>
  );
};

export default MainLayout;