import { useEffect, useRef } from 'react';

const SectionThree = () => {
  const innerRef = useRef(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
      }
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="h-screen w-full flex items-center justify-center relative z-20 overflow-hidden">
      <div 
        ref={innerRef}
        className="text-center translate-y-32 opacity-0 transition-all duration-1000 ease-out"
      >
        <h2 className="text-sm tracking-[0.5em] text-white/50 mb-4 uppercase">Discover</h2>
        <h3 className="font-podium text-[clamp(2rem,6vw,5rem)] text-white leading-none tracking-tighter">
          MY JOURNEY
        </h3>
      </div>
    </section>
  );
};

export default SectionThree;
