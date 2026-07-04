import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

const LiquidGlassHero = () => {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    
    const video = wrapper.querySelector('video');
    if (!video) return;

    const handleLoadedData = () => {
      setIsVisible(true);
    };

    const handleTimeUpdate = () => {
      if (video.duration > 0) {
        const timeLeft = video.duration - video.currentTime;
        if (timeLeft <= 0.6) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    if (video.readyState >= 2) {
      handleLoadedData();
    }

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div id="home" className="min-h-screen bg-black overflow-hidden relative flex flex-col font-sans">

      {/* Background Video - Rendered raw to bypass React's Safari muted bug */}
      <div 
        ref={wrapperRef}
        className={`absolute inset-0 w-full h-full object-cover translate-y-[17%] pointer-events-none transition-opacity duration-[800ms] ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        dangerouslySetInnerHTML={{
          __html: `
            <video 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
              class="w-full h-full object-cover pointer-events-none"
              muted 
              playsinline 
              autoplay 
              loop
            ></video>
          `
        }}
      />

      {/* Ambient Gradient Orbs */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#a586ff]/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] right-[15%] w-[250px] h-[250px] bg-[#6366f1]/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-[6] pointer-events-none"></div>

      {/* Spacer to account for the global fixed Navbar */}
      <div className="h-24 w-full flex-none z-10 relative"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[25%]">
        
        {/* Small Role Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="text-[#a586ff] text-xs md:text-sm font-medium tracking-[0.3em] uppercase">
            Software Engineer & Creative Technologist
          </span>
        </motion.div>

        {/* Name - Smaller & with glow */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight whitespace-nowrap font-serif italic"
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontWeight: 400,
            textShadow: '0 0 40px rgba(165, 134, 255, 0.25)'
          }}
        >
          Manyata Gupta
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-lg w-full space-y-5 flex flex-col items-center"
        >
          <p className="text-white/60 text-sm md:text-base leading-relaxed px-4">
            My passion lies in crafting elegant, intelligent applications that bridge the gap between human creativity and artificial intelligence.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <a href="#work" className="relative overflow-hidden group bg-[#a586ff] hover:bg-[#b89aff] rounded-full px-7 py-3 text-black text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2 no-underline shadow-[0_0_25px_rgba(165,134,255,0.4)] hover:shadow-[0_0_35px_rgba(165,134,255,0.6)] hover:-translate-y-0.5">
              Explore Projects
              <motion.div
                 animate={{ y: [0, 3, 0] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={16} />
              </motion.div>
            </a>
            <a href="#contact" className="relative overflow-hidden group liquid-glass rounded-full px-7 py-3 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2 no-underline border border-white/20 hover:-translate-y-0.5">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Social Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 flex justify-center gap-4 pb-12"
      >
        <a href="https://github.com/manyatagupta" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/10 transition-all border border-white/10 shadow-lg hover:shadow-[0_0_15px_rgba(132,94,194,0.5)] hover:-translate-y-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://www.linkedin.com/in/manyata-gupta-06476633a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/10 transition-all border border-white/10 shadow-lg hover:shadow-[0_0_15px_rgba(132,94,194,0.5)] hover:-translate-y-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </motion.footer>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-[#a586ff] rounded-full"
          />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default LiquidGlassHero;
