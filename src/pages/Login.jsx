import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logoAurum from '../assets/images/Logo.png';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('dancer'); // 'dancer' o 'recruiter'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí enviaríamos al backend el role, email, password y name
    console.log(isLogin ? 'Logging in...' : `Registering as ${role}...`, { email, name, role });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 relative overflow-hidden text-white font-inter">
      
      {/* LOGO OFICIAL */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-50">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logoAurum} 
            alt="Aurum Danza Logo"
            className="w-18 md:w-24 h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
        </Link>
      </div>

      {/* Aura Dorada de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-aurum-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[400px] relative z-10 py-20">
        
        {/* Header Dinámico */}
        <div className="text-center mb-10">
          <h2 className="font-cinzel text-3xl text-white tracking-[0.2em] mb-4 uppercase transition-all duration-500">
            {isLogin ? (
              <>Welcome <span className="text-aurum-gold">Partner</span></>
            ) : (
              <>Join the <span className="text-aurum-gold">Elite</span></>
            )}
          </h2>
          <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase">
            {isLogin 
              ? 'Enter your credentials to access the roster' 
              : 'Select your path to continue'}
          </p>
        </div>

        {/* SELECTOR DE ROL (Solo visible en Registro) */}
        {!isLogin && (
          <div className="flex gap-4 mb-10 animate-fade-in">
            <button 
              type="button"
              onClick={() => setRole('dancer')}
              className={`flex-1 py-3 text-[9px] tracking-[0.2em] uppercase border transition-all duration-500 ${role === 'dancer' ? 'border-aurum-gold text-aurum-gold bg-aurum-gold/5' : 'border-white/10 text-white/30'}`}
            >
              Artist
            </button>
            <button 
              type="button"
              onClick={() => setRole('recruiter')}
              className={`flex-1 py-3 text-[9px] tracking-[0.2em] uppercase border transition-all duration-500 ${role === 'recruiter' ? 'border-aurum-gold text-aurum-gold bg-aurum-gold/5' : 'border-white/10 text-white/30'}`}
            >
              Recruiter
            </button>
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Campo Nombre Dinámico */}
          {!isLogin && (
            <div className="space-y-1 animate-fade-in">
              <label className="text-[9px] text-aurum-gold uppercase tracking-[0.2em] ml-1">
                {role === 'dancer' ? 'Full Name' : 'Agency / Company Name'}
              </label>
              <input
                type="text"
                required
                className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 text-white text-sm focus:outline-none focus:border-aurum-gold/50 transition-colors"
                placeholder={role === 'dancer' ? 'GIOVANNA MAGISTRATI' : 'GLOBAL TALENT AGENCY'}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[9px] text-aurum-gold uppercase tracking-[0.2em] ml-1">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 text-white text-sm focus:outline-none focus:border-aurum-gold/50 transition-colors"
              placeholder="name@agency.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] text-aurum-gold uppercase tracking-[0.2em] ml-1">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 text-white text-sm focus:outline-none focus:border-aurum-gold/50 transition-colors"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-white text-black text-[10px] uppercase tracking-[0.3em] hover:bg-aurum-gold transition-all duration-700 mt-4"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {/* Switcher */}
        <div className="mt-12 text-center border-t border-white/5 pt-8">
          <p className="text-[10px] text-white/40 tracking-[0.1em] uppercase">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-aurum-gold hover:text-white transition-colors underline underline-offset-4 decoration-aurum-gold/30"
            >
              {isLogin ? 'Request Membership' : 'Log In Here'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;