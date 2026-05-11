import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  variant = 'outline', // 'outline' o 'solid'
  className = '', 
  ...props 
}) => {
  // Clases base siguiendo el estilo cinematográfico
  const baseStyles = "px-8 py-2.5 font-inter text-[10px] uppercase tracking-[0.3em] transition-all duration-500 rounded-sm inline-block text-center";
  
  // Variantes de color y estilo
  const variants = {
    outline: "border border-aurum-gold/40 text-aurum-gold hover:bg-aurum-gold hover:text-black",
    solid: "bg-white text-black border border-white hover:bg-transparent hover:text-white"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  // Si tiene la prop 'to', se comporta como un link de React Router
  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  // Si no, es un botón normal
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;