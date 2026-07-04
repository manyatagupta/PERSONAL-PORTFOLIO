import { motion } from "motion/react";

const ProjectDetails = ({ setIsHidden, title, description, subDescription, logo, image, spotlight, tags }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsHidden(true)}
    >
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-[2rem] border border-white/20 shadow-2xl"
        initial={{ y: 50, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 20, scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsHidden(true)}
          className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
        >
          ✕
        </button>
        
        <div className="relative w-full h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent z-10" />
          <img
            src={image || spotlight || logo}
            alt={title}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">{title}</h2>
          </div>
        </div>

        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border-white/5">
              <h3 className="text-xl font-bold text-[#00f2fe] mb-4">Overview</h3>
              <p className="text-neutral-300 leading-relaxed">
                {description}
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl border-white/5">
              <h3 className="text-xl font-bold text-[#4facfe] mb-4">Key Features</h3>
              <p className="text-neutral-400 leading-relaxed">
                {subDescription}
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-2xl border-white/5">
              <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <div key={i} className="px-4 py-2 text-xs font-bold text-white bg-white/5 rounded-full border border-white/10">
                    {tag.name}
                  </div>
                ))}
              </div>
            </div>
            
            <a href="#" className="w-full py-4 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-xl text-black font-bold text-center hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-shadow flex items-center justify-center gap-2">
              View Source
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
