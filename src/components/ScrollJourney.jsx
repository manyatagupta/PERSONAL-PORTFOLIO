import { motion, useScroll, useSpring } from "motion/react";

const ScrollJourney = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress slightly so the drawing effect is fluid
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen hidden md:block">
      <svg 
        className="w-full h-full drop-shadow-[0_0_15px_rgba(0,242,254,0.8)]" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 100" 
        fill="none"
      >
        {/* The faint background track line */}
        <path
          d="M 15,0 C 15,30 85,30 85,50 C 85,70 15,70 15,100"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="0.2"
        />
        
        {/* The animated animated glowing line */}
        <motion.path
          d="M 15,0 C 15,30 85,30 85,50 C 85,70 15,70 15,100"
          stroke="url(#glow-gradient)"
          strokeWidth="0.4"
          style={{ pathLength }}
        />

        <defs>
          <linearGradient id="glow-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4facfe" />
            <stop offset="50%" stopColor="#00f2fe" />
            <stop offset="100%" stopColor="#4facfe" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ScrollJourney;
