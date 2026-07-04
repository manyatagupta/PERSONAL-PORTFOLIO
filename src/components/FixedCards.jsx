import { useEffect, useRef } from 'react';

const FixedCards = () => {
  const cardsRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const fixedCards = cardsRef.current;
    const cardsGrid = gridRef.current;
    let requestRef;

    const tickCards = () => {
      const trigger = document.getElementById('cards-trigger');
      if (!trigger) return;

      const rect = trigger.getBoundingClientRect();
      const triggerTop = rect.top + window.scrollY;
      const triggerHeight = rect.height;
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      const start = triggerTop - vh * 0.5;
      const end = triggerTop + triggerHeight - vh * 0.3;
      const range = end - start;

      let progress = range > 0 ? (scrollY - start) / range : 0;
      progress = Math.max(0, Math.min(1, progress));

      const isActive = scrollY >= start - vh * 0.2 && scrollY <= end + vh * 0.3;
      const fadeIn = Math.min(1, Math.max(0, (scrollY - (start - vh * 0.2)) / (vh * 0.2)));
      const fadeOut = Math.min(1, Math.max(0, (end + vh * 0.3 - scrollY) / (vh * 0.3)));
      const containerOpacity = isActive ? Math.min(fadeIn, fadeOut) : 0;

      fixedCards.style.opacity = containerOpacity;
      fixedCards.style.pointerEvents = containerOpacity > 0.1 ? 'auto' : 'none';

      const isMobile = window.innerWidth < 768;
      const revealPct = progress * 130;
      if (isMobile) {
        cardsGrid.style.maskImage = `linear-gradient(to bottom, black ${revealPct}%, transparent ${revealPct + 20}%)`;
        cardsGrid.style.webkitMaskImage = `linear-gradient(to bottom, black ${revealPct}%, transparent ${revealPct + 20}%)`;
      } else {
        cardsGrid.style.maskImage = `linear-gradient(to right, black ${revealPct}%, transparent ${revealPct + 15}%)`;
        cardsGrid.style.webkitMaskImage = `linear-gradient(to right, black ${revealPct}%, transparent ${revealPct + 15}%)`;
      }

      requestRef = requestAnimationFrame(tickCards);
    };

    requestRef = requestAnimationFrame(tickCards);

    return () => cancelAnimationFrame(requestRef);
  }, []);

  return (
    <div 
      ref={cardsRef}
      className="fixed bottom-0 left-0 right-0 z-40 px-4 md:px-10 py-6 md:py-8 opacity-0 pointer-events-none transition-opacity"
    >
      <div ref={gridRef} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Explore My Work</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            I merge the elegance of modern front-end frameworks with the depth of robust backend systems. Crafted to be resilient and adaptable while remaining highly intuitive.
          </p>
        </div>
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Unlock Scale</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            The web is growing increasingly dimensional. At its heart, my approach offers a composable architecture for building performant digital experiences.
          </p>
        </div>
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Connect Everything</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            From database modeling to seamless API integrations, I ship with the tooling necessary to make building compelling applications effortless.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FixedCards;
