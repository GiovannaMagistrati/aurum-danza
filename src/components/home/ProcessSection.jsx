import React from 'react';

const ProcessSection = () => {
  const talentSteps = [
    { icon: 'Ⅰ', title: 'Create your Profile', desc: 'Upload your best work and technical details.' },
    { icon: 'Ⅱ', title: 'Get Discovered', desc: 'Your portfolio is showcased to top-tier agencies.' },
    { icon: 'Ⅲ', title: 'Perform', desc: 'Connect directly and secure your next professional role.' },
  ];

  const recruiterSteps = [
    { icon: 'Ⅰ', title: 'Access the Elite', desc: 'Browse a hand-picked selection of world-class dancers.' },
    { icon: 'Ⅱ', title: 'Filter by Vision', desc: 'Search by specialty, location and technical skills.' },
    { icon: 'Ⅲ', title: 'Book Directly', desc: 'Contact with the talent that fits your production\'s soul.' },
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-24 flex flex-col items-center border-t border-white/5">
      <div className="container-custom flex flex-col items-center">
        {/* Encabezado */}
        <p className="font-inter text-[9px] uppercase tracking-[0.5em] text-aurum-gold/80 mb-3">THE PROCESS</p>
        <h2 className="font-cinzel text-3xl md:text-4xl text-white tracking-[0.15em] mb-3 text-center">
          ELEVATING THE STANDARD OF CONNECTIONS
        </h2>
        <p className="font-inter font-light text-white/60 tracking-wider text-sm mb-16">Two paths. One Standard.</p>

        {/* Las Dos Cards Principales (Grid 1 o 2 columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl">
          
          {/* FOR TALENT */}
          <div className="glass-effect rounded-sm p-12 flex flex-col items-center">
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

            <button className="btn-aurum hover:bg-white hover:text-aurum-deep transition-all duration-300">
              JOIN AS TALENT
            </button>
          </div>

          {/* FOR RECRUITERS */}
          <div className="glass-effect rounded-sm p-12 flex flex-col items-center">
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

            <button className="btn-aurum border-white text-white hover:bg-white hover:text-aurum-deep transition-all duration-300">
              RECRUIT EXCELLENCE
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;