import ScrollVideoBackground from '../components/ScrollVideoBackground';
import ParticlesBackground from '../components/ParticlesBackground';
import HeroVeldara from '../components/HeroVeldara';
import FixedCards from '../components/FixedCards';
import SectionThree from '../components/SectionThree';

const Hero = () => {
  return (
    <div className="relative w-full text-white bg-transparent">
      {/* Fixed Backgrounds */}
      <ScrollVideoBackground />
      <ParticlesBackground />
      <FixedCards />

      {/* Scrollable Content Layers */}
      <div className="relative z-10">
        <HeroVeldara />
        
        {/* Spacer for Video Scrubbing */}
        <div style={{ height: '150vh' }}></div>
        
        {/* Trigger Zone for Fixed Cards Reveal */}
        <div id="cards-trigger" style={{ height: '200vh' }}></div>
        
        {/* Spacer after Cards */}
        <div style={{ height: '100vh' }}></div>
        
        <SectionThree />
      </div>
    </div>
  );
};

export default Hero;
