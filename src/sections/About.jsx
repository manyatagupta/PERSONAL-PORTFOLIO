import { motion } from 'motion/react';
import { Code2, Heart, Sparkles, Zap } from 'lucide-react';

const stats = [
  { number: "11+", label: "Certifications" },
  { number: "4+", label: "Projects Built" },
  { number: "2+", label: "Years NSS Volunteer" },
  { number: "7th", label: "Sem, B.Tech CSE (AI)" },
];

const values = [
  {
    icon: <Code2 size={24} />,
    title: "Precision",
    desc: "Every line of code serves a purpose. I focus on creating scalable, robust architectures that perform flawlessly under pressure.",
    gradient: "from-[#a586ff]/20 to-transparent"
  },
  {
    icon: <Heart size={24} />,
    title: "Empathy",
    desc: "Technology should empower, not frustrate. My user-centric approach ensures interfaces are intuitive and universally accessible.",
    gradient: "from-[#ff6b9d]/20 to-transparent"
  },
  {
    icon: <Sparkles size={24} />,
    title: "Innovation",
    desc: "Pushing boundaries with modern AI frameworks. I thrive on translating cutting-edge research into tangible, impactful applications.",
    gradient: "from-[#4ecdc4]/20 to-transparent"
  },
];

const About = () => {
  return (
    <section className="bg-transparent pb-32 pt-16 relative" id="about">
      {/* Vertical hairline divider */}
      <div className="hairline-divider mb-16"></div>

      <div className="c-space flex flex-col items-center max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="text-[#a586ff] text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4 block">About Me</span>
          <h2 className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.03em] max-w-4xl">
            I build systems that bridge the gap between human intent and <span className="font-serif italic font-normal text-[#a586ff]">artificial</span> intelligence.
          </h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-center p-6 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl hover:border-[#a586ff]/30 transition-all duration-500 group"
            >
              <div className="text-3xl md:text-4xl font-clash font-bold text-white mb-1 group-hover:text-[#a586ff] transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-white/40 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 w-full">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group relative flex flex-col gap-5 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] p-8 rounded-2xl hover:border-[#a586ff]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#a586ff]/10 text-[#a586ff] mb-2 group-hover:bg-[#a586ff]/20 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="relative z-10 font-clash font-bold text-xl text-white tracking-[-0.02em]">{item.title}</h3>
              <p className="relative z-10 font-satoshi text-base font-medium text-white/50 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 w-full overflow-hidden"
        >
          <p className="text-center text-white/20 text-xs tracking-[0.3em] uppercase mb-6">Technologies I Work With</p>
          <div className="flex gap-8 justify-center flex-wrap">
            {["React.js", "Python", "Django", "TailwindCSS", "Three.js", "ESP32", "NLP", "AI/ML", "Framer Motion", "Git"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="text-white/30 text-sm font-medium px-4 py-2 border border-white/[0.06] rounded-full hover:text-[#a586ff] hover:border-[#a586ff]/30 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
