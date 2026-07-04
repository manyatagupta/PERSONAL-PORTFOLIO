"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space py-24 md:py-32" ref={containerRef} id="experience">
      <div className="flex flex-col items-start mb-16 max-w-7xl mx-auto">
        <h2 className="font-clash font-bold text-5xl md:text-7xl text-white uppercase tracking-[-0.03em] leading-none mb-4">
          Experience
        </h2>
        <p className="font-satoshi font-medium text-lg text-gray-400 max-w-xl">
          My journey through tech, education, and impactful volunteering.
        </p>
      </div>

      <div ref={ref} className="relative pb-20 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-start self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-[11px] md:-left-[15px] bg-[#050505] border-2 border-[#a586ff]">
                <div className="w-2 h-2 rounded-full bg-[#a586ff]" />
              </div>
              <div className="flex-col hidden gap-2 md:flex md:pl-20">
                <h3 className="font-clash font-bold text-4xl text-white uppercase tracking-[-0.02em] leading-tight">{item.date}</h3>
                <h3 className="font-satoshi font-bold text-lg text-gray-400 uppercase tracking-widest">{item.title}</h3>
                <h3 className="font-satoshi font-medium text-sm text-[#a586ff] uppercase tracking-wider">{item.job}</h3>
              </div>
            </div>

            <div className="relative w-full pl-14 md:pl-4">
              <div className="block mb-6 md:hidden">
                <h3 className="font-clash font-bold text-3xl text-white uppercase tracking-[-0.02em] mb-2">{item.date}</h3>
                <h3 className="font-satoshi font-bold text-base text-gray-400 uppercase tracking-widest mb-1">{item.title}</h3>
                <h3 className="font-satoshi font-medium text-xs text-[#a586ff] uppercase tracking-wider">{item.job}</h3>
              </div>
              {item.contents.map((content, idx) => (
                <div key={idx} className="mb-8">
                  <div className="flex gap-4 items-start font-satoshi font-medium text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
                    <span className="text-gray-500 mt-1">—</span> {content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-[1px] left-3 top-0 overflow-hidden w-[2px] bg-white/10"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-[#a586ff]"
          />
        </div>
      </div>
    </div>
  );
};
