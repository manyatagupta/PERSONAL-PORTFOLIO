import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroVeldara = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const fade = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.3));
      setOpacity(fade);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full flex flex-col z-20 pointer-events-none"
      style={{ opacity }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      <div className="relative z-10 flex-1 flex flex-col items-center justify-end text-center px-6 pb-24 pointer-events-auto">
        <p className="text-sm text-gray-400 mb-6 tracking-[0.3em] uppercase">Software Engineer & Builder</p>
        
        <h1 className="font-podium uppercase leading-[0.92] tracking-tight text-[clamp(2.8rem,8vw,7rem)] text-white flex flex-col mb-8">
          <span>MANYATA</span>
          <span>GUPTA.</span>
        </h1>
        
        <p className="font-inter text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mb-10">
          I build robust, scalable software that bridges the gap between human intent and artificial intelligence.
        </p>
        
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3.5">
            <span className="text-[#2C5C88] font-mono text-sm">&gt;</span>
            <code className="text-gray-200 font-mono text-sm">npx manyata-portfolio</code>
          </div>
          <a href="#work" className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 font-bold tracking-widest uppercase rounded-lg px-8 py-3.5 text-xs transition-colors">
            SEE MY WORK <span>&rarr;</span>
          </a>
        </div>
      </div>
      
      <div className="relative z-10 flex justify-center pb-8 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-500" />
      </div>
    </section>
  );
};

export default HeroVeldara;
