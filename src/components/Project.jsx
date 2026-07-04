import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectDetails from "./ProjectDetails";

const Project = (props) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: props.index * 0.1, duration: 0.5 }}
        className="group relative flex flex-col justify-between w-full h-full glass-panel glass-panel-hover rounded-[2rem] overflow-hidden p-2 cursor-pointer"
        onClick={() => setIsHidden(false)}
      >
        <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-[1.5rem]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <img
            src={props.image || props.spotlight}
            alt={props.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-4 left-4 z-20 flex gap-2">
            {props.tags.map((tag, i) => (
              <div key={i} className="px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                {tag.name}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-[#00f2fe] transition-colors">{props.title}</h3>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#00f2fe] transition-colors -rotate-45 group-hover:rotate-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
          <p className="text-sm text-neutral-400 line-clamp-2 mt-2">
            {props.description}
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {!isHidden && (
          <ProjectDetails isHidden={isHidden} setIsHidden={setIsHidden} {...props} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
