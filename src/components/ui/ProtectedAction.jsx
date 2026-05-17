import { useNavigate } from 'react-router-dom';

const ProtectedAction = ({ children, isLoggedIn, className }) => {
  const navigate = useNavigate();

  const handleAction = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      e.stopPropagation();
      // Redirect to login
      navigate('/login');
    }
  };

  return (
    <div onClickCapture={handleAction} className={className}>
      {children}
    </div>
  );
};

export default ProtectedAction;