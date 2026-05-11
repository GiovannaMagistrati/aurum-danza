import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedAction = ({ children, isLoggedIn, className }) => {
  const navigate = useNavigate();

  const handleAction = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      e.stopPropagation();
      // Redirigimos al login
      navigate('/login');
    }
  };

  // Ahora el div usa la className que le pasamos (como "w-full flex justify-center")
  return (
    <div onClickCapture={handleAction} className={className}>
      {children}
    </div>
  );
};

export default ProtectedAction;