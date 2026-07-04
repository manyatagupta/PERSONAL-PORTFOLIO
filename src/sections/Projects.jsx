import { motion } from 'motion/react';
import { myProjects } from "../constants";

const Projects = () => {
  return (
    <section id="work" className="bg-transparent relative z-40 py-24 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Simple Header */}
        <div className="mb-20 md:mb-32">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#a586ff] text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight font-clash mb-6"
          >
            Featured Works
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-[#a586ff] rounded-full"
          ></motion.div>
        </div>

        {/* Alternating Overlapping Layout */}
        <div className="flex flex-col gap-24 md:gap-32">
          {myProjects.map((project, index) => {
            const isEven = index % 2 !== 0; // 0 is Odd layout, 1 is Even layout (conceptually)

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center relative"
              >
                {/* Content Container */}
                <div 
                  className={`flex flex-col relative z-20 ${
                    isEven 
                      ? 'md:col-start-7 md:col-end-13 md:items-end md:text-right' 
                      : 'md:col-start-1 md:col-end-7 md:items-start md:text-left'
                  } order-2 md:order-none md:row-start-1`}
                >
                  <p className="text-[#a586ff] font-semibold text-[10px] md:text-xs mb-2 font-inter tracking-[0.2em] uppercase">
                    Featured Project
                  </p>
                  <a href={project.href || "#"} target={project.href ? "_blank" : "_self"} rel="noreferrer" className="no-underline">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6 font-clash tracking-tight hover:text-[#a586ff] transition-colors cursor-pointer inline-block whitespace-pre-line">
                      {project.title}
                    </h3>
                  </a>
                  
                  {/* Glassmorphism Description Box (Dark Mode) */}
                  <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-gray-300 text-sm md:text-base leading-relaxed shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                    {project.description}
                  </div>
                  
                  {/* Tags */}
                  <div className={`flex flex-wrap gap-x-4 gap-y-2 mt-6 font-inter text-xs text-gray-400 font-medium ${isEven ? 'justify-end' : 'justify-start'}`}>
                    {project.tags.map(tag => (
                      <span key={tag.id} className="bg-white/5 px-3 py-1 rounded-full border border-white/5 text-gray-300">{tag.name}</span>
                    ))}
                  </div>

                  {/* Links / Icons */}
                  <div className={`flex items-center gap-4 mt-6 ${isEven ? 'justify-end' : 'justify-start'}`}>
                    {project.href && (
                      <a href={project.href} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                      </a>
                    )}
                    <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </div>
                </div>

                {/* Image Container */}
                <motion.a 
                  whileHover={{ scale: 1.02, rotateY: isEven ? -2 : 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  href={project.href || "#"} 
                  target={project.href ? "_blank" : "_self"} 
                  rel="noreferrer"
                  className={`relative block w-full aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden z-10 group shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10 ${
                    isEven 
                      ? 'md:col-start-1 md:col-end-8' 
                      : 'md:col-start-6 md:col-end-13'
                  } order-1 md:order-none md:row-start-1 cursor-pointer perspective-1000`}
                >
                  <div className="absolute inset-0 bg-[#845ec2]/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover:opacity-100 mix-blend-normal"
                  />
                </motion.a>
                
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
