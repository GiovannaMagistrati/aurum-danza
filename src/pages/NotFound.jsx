import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <section className="min-h-screen bg-aurum-deep flex flex-col items-center justify-center p-6 text-center">
      <div className="relative">
        <h1 className="font-cinzel text-[120px] md:text-[180px] text-white/5 tracking-tighter leading-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="font-cinzel text-xl md:text-2xl text-aurum-gold tracking-[0.4em] uppercase mb-2">
            Lost in Motion
          </h2>
          <p className="font-inter text-[9px] md:text-[10px] text-white/40 tracking-[0.2em] uppercase max-w-[280px]">
            The page you are looking for has moved or does not exist in our current collection.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Button to="/" variant="outline" className="px-10">
          Back to Home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;