import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  variant = 'outline', // 'outline', 'solid', o 'minimal'
  className = '', 
  ...props 
}) => {
  // Clases base compartidas
  const baseStyles = "font-inter uppercase tracking-[0.3em] transition-all duration-700 text-center inline-block";
  
  const variants = {
    // Para formularios y acciones principales (Login/Sign Up)
    outline: "px-8 py-3 text-[10px] border border-aurum-gold/40 text-aurum-gold hover:bg-aurum-gold hover:text-black",
    
    // Para botones destacados
    solid: "px-8 py-3 text-[10px] bg-white text-black border border-white hover:bg-transparent hover:text-white",
    
    // NUEVA: Para Cards de Talento y Casting (estilo sutil)
    minimal: "w-full py-3 text-[9px] border border-white/10 text-white/40 hover:border-aurum-gold/50 hover:text-aurum-gold hover:bg-aurum-gold/[0.02]"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={combinedClasses} {...props}>{children}</Link>;
  }

  return <button className={combinedClasses} {...props}>{children}</button>;
};

export default Button;