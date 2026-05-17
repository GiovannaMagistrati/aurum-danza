import Button from '../ui/Button';
import ProtectedAction from '../ui/ProtectedAction';

const ProcessSection = ({ isLoggedIn }) => {
  const talentSteps = [
    { icon: 'Ⅰ', title: 'CREATE YOUR PROFILE', desc: 'Upload your best work and technical details.' },
    { icon: 'Ⅱ', title: 'GET DISCOVERED', desc: 'Your portfolio is showcased to top-tier agencies.' },
    { icon: 'Ⅲ', title: 'PERFORM', desc: 'Connect directly and secure your next professional role.' },
  ];

  const recruiterSteps = [
    { icon: 'Ⅰ', title: 'ACCESS THE ELITE', desc: 'Browse a hand-picked selection of world-class dancers.' },
    { icon: 'Ⅱ', title: 'FILTER BY VISION', desc: 'Search by specialty, location and technical skills.' },
    { icon: 'Ⅲ', title: 'BOOK DIRECTLY', desc: 'Contact with the talent that fits your production\'s soul.' },
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-24 flex flex-col items-center border-t border-white/5">
      <div className="container-custom flex flex-col items-center">
        {/* Title */}
        <p className="font-inter text-[9px] uppercase tracking-[0.5em] text-aurum-gold/80 mb-3">THE PROCESS</p>
        <h2 className="font-cinzel text-3xl md:text-4xl text-white tracking-[0.15em] mb-3 text-center">
          ELEVATING THE STANDARD OF CONNECTIONS
        </h2>
        <p className="font-inter font-light text-white/60 tracking-wider text-sm mb-16">Two paths. One Standard.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl">
          
          {/* FOR TALENT */}
          <div className="glass-effect rounded-sm p-12 flex flex-col items-center border border-white/5">
            <h3 className="font-cinzel text-xl text-aurum-gold tracking-[0.2em] mb-2">FOR TALENT</h3>
            <p className="font-inter text-[10px] uppercase tracking-[0.3em] font-light text-white/50 mb-12">THE PATH TO GOLD</p>
            
            <div className="w-full flex flex-col gap-10 mb-14">
              {talentSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="font-cinzel text-3xl text-aurum-gold w-10 text-center flex-shrink-0">{step.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-cinzel text-sm text-white tracking-[0.1em] mb-1.5">{step.title}</h4>
                    <p className="font-inter text-xs text-white/60 font-light leading-relaxed tracking-wide">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* PROTECTED ACTION */}
            <ProtectedAction isLoggedIn={isLoggedIn} className="w-full flex justify-center">
              <Button variant="solid" to="/join" className="w-full sm:w-auto">
                JOIN AS TALENT
              </Button>
            </ProtectedAction>
          </div>

          {/* FOR RECRUITERS  */}
          <div className="glass-effect rounded-sm p-12 flex flex-col items-center border border-white/5">
            <h3 className="font-cinzel text-xl text-aurum-gold tracking-[0.2em] mb-2">FOR RECRUITERS</h3>
            <p className="font-inter text-[10px] uppercase tracking-[0.3em] font-light text-white/50 mb-12">THE SEARCH FOR EXCELLENCE</p>
            
            <div className="w-full flex flex-col gap-10 mb-14">
              {recruiterSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="font-cinzel text-3xl text-aurum-gold w-10 text-center flex-shrink-0">{step.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-cinzel text-sm text-white tracking-[0.1em] mb-1.5">{step.title}</h4>
                    <p className="font-inter text-xs text-white/60 font-light leading-relaxed tracking-wide">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* PROTECTED ACTION */}
            <ProtectedAction isLoggedIn={isLoggedIn} className="w-full flex justify-center">
              <Button variant="outline" to="/recruit" className="w-full sm:w-auto">
                RECRUIT EXCELLENCE
              </Button>
            </ProtectedAction>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;