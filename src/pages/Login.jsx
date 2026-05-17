import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Button from '../components/ui/Button';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('dancer');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', agencyName: '', contactPerson: '',
    email: '', phone: '', password: '', confirmPassword: '',
    category: '' 
  });

  const [errors, setErrors] = useState({});
  const danceCategories = ['Contemporary', 'Commercial', 'Neoclassical', 'Classical'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";
    if (formData.password.length < 6) newErrors.password = "Min. 6 characters";
    
    if (!isLogin) {
      if (formData.phone.length < 8) newErrors.phone = "Invalid number";
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Mismatch detected";
      }
      if (role === 'dancer') {
        if (!formData.firstName) newErrors.firstName = "Required";
        if (!formData.lastName) newErrors.lastName = "Required";
        if (!formData.category) newErrors.category = "Select a category";
      } else {
        if (!formData.agencyName) newErrors.agencyName = "Required";
        if (!formData.contactPerson) newErrors.contactPerson = "Required";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(`Accessing as ${role}...`);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 relative overflow-hidden py-20">
      <style>{`
        @keyframes subtle-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake { animation: subtle-shake 0.3s cubic-bezier(.36,.07,.19,.97) both; }

        input:-webkit-autofill {
          -webkit-text-fill-color: rgba(255, 255, 255, 0.9) !important;
          -webkit-box-shadow: 0 0 0px 1000px #0a0a0a inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      {/* Logo */}
      <div className="absolute top-12 left-12 z-50">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 opacity-50 hover:opacity-100 transition-opacity duration-700" />
        </Link>
      </div>

      <div className="w-full max-w-[480px] relative z-10 mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl text-white/80 tracking-[0.3em] mb-4 uppercase">
            {isLogin ? 'Sign In' : 'Create Account'}
          </h2>
          
          {!isLogin && (
            <div className="flex gap-2 mt-8 justify-center">
              {['dancer', 'recruiter'].map((r) => (
                <button 
                  key={r}
                  type="button"
                  onClick={() => { setRole(r); setErrors({}); }}
                  className={`px-8 py-2 text-[8px] tracking-[0.4em] uppercase border transition-all duration-500 
                    ${role === r ? 'border-aurum-gold text-aurum-gold bg-aurum-gold/5' : 'border-white/5 text-white/20 hover:text-white/40'}`}
                >
                  {r === 'dancer' ? 'Artist' : 'Recruiter'}
                </button>
              ))}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {!isLogin && (
            <div className="grid grid-cols-2 gap-6">
              {role === 'dancer' ? (
                <>
                  <InputField label="First Name" name="firstName" placeholder="Giovanna" value={formData.firstName} onChange={handleChange} error={errors.firstName} />
                  <InputField label="Last Name" name="lastName" placeholder="Magistrati" value={formData.lastName} onChange={handleChange} error={errors.lastName} />
                  <div className="col-span-2">
                    <SelectField 
                      label="Dance Category" 
                      name="category" 
                      value={formData.category} 
                      onChange={handleChange} 
                      error={errors.category}
                      options={danceCategories}
                    />
                  </div>
                </>
              ) : (
                <>
                  <InputField label="Agency Name" name="agencyName" placeholder="Global Art" value={formData.agencyName} onChange={handleChange} error={errors.agencyName} />
                  <InputField label="Contact Person" name="contactPerson" placeholder="Full name" value={formData.contactPerson} onChange={handleChange} error={errors.contactPerson} />
                </>
              )}
            </div>
          )}

          <InputField label="Email Address" name="email" type="email" placeholder="official@agency.com" value={formData.email} onChange={handleChange} error={errors.email} />
          
          {!isLogin && (
            <InputField label="Contact Phone" name="phone" type="tel" placeholder="+1 000 000 000" value={formData.phone} onChange={handleChange} error={errors.phone} />
          )}

          <div className={`grid gap-6 ${!isLogin ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
            <InputField 
              label={isLogin ? "Access Key" : "Create Password"} 
              name="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleChange} error={errors.password}
              isVisible={showPassword} onToggleVisibility={() => setShowPassword(!showPassword)}
            />
            {!isLogin && (
              <InputField 
                label="Confirm Password" name="confirmPassword" type="password" placeholder="••••••••" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword}
                isVisible={showConfirmPassword} onToggleVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            )}
          </div>

          <Button type="submit" variant="outline" className="w-full py-4 mt-4 tracking-[0.4em] text-[10px] opacity-80 hover:opacity-100 uppercase">
            {isLogin ? 'Sign In' : 'Create Account'}
          </Button>
        </form>

        <div className="mt-12 text-center border-t border-white/5 pt-8">
          <button type="button" onClick={() => { setIsLogin(!isLogin); setErrors({}); }} className="text-[9px] text-white/30 uppercase tracking-[0.2em] hover:text-aurum-gold transition-colors duration-500">
            {isLogin ? "New here? Create account" : "Already a member? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type = "text", placeholder, value, onChange, error, isVisible, onToggleVisibility }) => {
  const isPasswordField = type === 'password';
  const inputType = isPasswordField && isVisible ? 'text' : type;

  return (
    <div className={`space-y-2 ${error ? 'animate-shake' : ''}`}>
      <label className="text-[9px] uppercase tracking-[0.3em] ml-1 text-white/60 block mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          name={name} type={inputType} placeholder={placeholder} value={value} onChange={onChange}
          className={`w-full bg-white/[0.02] border px-4 py-3 text-sm focus:outline-none transition-all duration-300 placeholder:text-white/10
            ${value ? 'text-white border-white/20' : 'text-white/70 border-white/10'}
            ${error ? 'border-amber-500/40' : 'focus:border-aurum-gold/40'} ${isPasswordField ? 'pr-10' : ''}`}
        />
        {isPasswordField && (
          <button type="button" onClick={onToggleVisibility} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 hover:text-aurum-gold transition-colors">
            {isVisible ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

const SelectField = ({ label, name, value, onChange, error, options }) => (
  <div className={`space-y-2 ${error ? 'animate-shake' : ''}`}>
    <label className="text-[9px] uppercase tracking-[0.3em] ml-1 text-white/60 block mb-1">{label}</label>
    <div className="relative">
      <select
        name={name} value={value} onChange={onChange}
        className={`w-full bg-white/[0.02] border px-4 py-3 text-sm focus:outline-none transition-all duration-300 appearance-none tracking-wide
          ${!value ? 'text-white/20 border-white/10' : 'text-white border-white/20'}
          ${error ? 'border-amber-500/40' : 'focus:border-aurum-gold/40'}`}
      >
        <option value="" disabled className="bg-[#050505] text-white/20">Select category</option>
        {options.map(opt => <option key={opt} value={opt} className="bg-[#050505] text-white/80">{opt}</option>)}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
      </div>
    </div>
    {error && <ErrorMessage message={error} />}
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="flex items-center gap-1.5 ml-1 mt-1 animate-fade-in">
    <div className="w-1 h-1 rounded-full bg-amber-500/50" />
    <p className="text-[8px] text-amber-500/60 uppercase tracking-[0.2em] italic">{message}</p>
  </div>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 opacity-40"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 opacity-40"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65" /></svg>
);

export default Login;