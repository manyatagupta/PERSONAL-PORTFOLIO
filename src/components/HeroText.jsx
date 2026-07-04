import { motion } from "motion/react";

const EchoText = ({ text }) => {
  const colors = ["#bfbfbf", "#c9c9c9", "#d1d1d1", "#d9d9d9"];
  
  return (
    <div className="relative inline-block font-clash font-bold tracking-[-0.05em] leading-[0.85] text-[14vw] md:text-[9vw] uppercase my-6">
      {/* Background Echo Layers */}
      {colors.map((color, index) => {
        const offset = -(index + 1) * 0.03;
        return (
          <span
            key={index}
            className="absolute top-0 left-0 whitespace-nowrap pointer-events-none"
            style={{
              color: color,
              transform: `translate(${offset}em, ${offset}em)`,
              zIndex: 0
            }}
          >
            {text}
          </span>
        );
      })}
      {/* Foreground Layer */}
      <span className="relative z-10 text-[#111111]">
        {text}
      </span>
    </div>
  );
};

const HeroText = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full mt-20 md:mt-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
        className="flex flex-col items-center w-full"
      >
        <p className="font-satoshi font-medium text-lg md:text-xl text-[#838282] uppercase tracking-[0.2em] mb-2 md:mb-4">
          Hello, I am
        </p>
        
        <div className="flex flex-col items-center">
          <EchoText text="MANYATA GUPTA" />
        </div>
        
        <p className="font-satoshi font-medium text-base md:text-lg text-[#111111] max-w-2xl mt-4 md:mt-8 px-6 leading-relaxed">
          A builder dedicated to crafting impactful tech. Bridging the gap between human intent and artificial intelligence with robust, scalable software.
        </p>
      </motion.div>
    </div>
  );
};

export default HeroText;
