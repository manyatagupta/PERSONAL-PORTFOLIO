import { reviews } from "../constants";
import { Star, Award, BookOpen, Target, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonial() {
  const courseraCount = reviews.filter(r => r.name === "Coursera").length;
  const greatLearningCount = reviews.filter(r => r.name === "Great Learning").length;
  const forageCount = reviews.filter(r => r.name === "Forage").length;
  const totalCerts = reviews.length;

  return (
    <section className="bg-transparent py-24 md:py-40 relative overflow-hidden" id="certificates">
      <div className="c-space mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="font-clash font-bold text-5xl md:text-7xl text-white tracking-[-0.02em] leading-none mb-6">
            My <span className="text-[#a586ff]">Certifications</span>
          </h2>
          <p className="font-satoshi font-medium text-base md:text-lg text-gray-400 max-w-2xl">
            A collection of verified credentials from top learning platforms
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20"
        >
          <div className="flex items-center gap-4 bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-sm">
            <Award className="text-[#a586ff]" size={28} />
            <div>
              <div className="text-white font-bold text-2xl leading-none">{totalCerts}</div>
              <div className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mt-1">Total Certs</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold">C</div>
            <div>
              <div className="text-white font-bold text-2xl leading-none">{courseraCount}</div>
              <div className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mt-1">Coursera</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-sm">
            <BookOpen className="text-green-400" size={28} />
            <div>
              <div className="text-white font-bold text-2xl leading-none">{greatLearningCount}</div>
              <div className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mt-1">Great Learning</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-sm">
            <Target className="text-purple-400" size={28} />
            <div>
              <div className="text-white font-bold text-2xl leading-none">{forageCount}</div>
              <div className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mt-1">Forage</div>
            </div>
          </div>
        </motion.div>

        {/* Featured Certificate */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-5xl mx-auto mb-24 group"
        >
          <div className="relative bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-10 md:gap-16 items-center overflow-hidden transition-all duration-500 hover:shadow-[0_20px_80px_rgba(165,134,255,0.15)] hover:border-[#a586ff]/30">
            
            {/* Left Image */}
            <div className="w-full md:w-[45%] flex-shrink-0 relative rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://i.ibb.co/r20GfqHX/Tech-Expo.png" 
                alt="Featured Certificate" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop";
                }}
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[55%] flex flex-col items-start">
              <div className="inline-flex items-center gap-2 border border-[#a586ff]/30 bg-[#a586ff]/10 text-[#a586ff] px-3 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider mb-6">
                <Star size={14} className="fill-[#a586ff]" />
                Featured Achievement
              </div>
              
              <h3 className="font-clash font-bold text-3xl md:text-4xl text-white leading-tight mb-3">
                Tech Expo'26 — Certificate of Appreciation
              </h3>
              
              <p className="font-satoshi font-bold text-[#a586ff] text-lg mb-6">
                BBD University, Lucknow
              </p>
              
              <p className="font-satoshi text-gray-400 leading-relaxed mb-8">
                Recognized for participating in Tech Expo'26 with the Smart Women's Safety Device — demonstrating hardware innovation for real-world social impact at a university-level technology exhibition.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Event Participation", "Hardware Innovation", "Social Impact"].map((tag, idx) => (
                  <span key={idx} className="border border-[#a586ff]/20 text-[#a586ff] px-4 py-1.5 rounded-full text-xs font-medium bg-[#a586ff]/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              href={review.link}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between p-8 min-h-[280px] bg-[#111111]/80 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-[#a586ff]/50 hover:shadow-[0_20px_40px_rgba(165,134,255,0.1)] transition-all duration-500 cursor-pointer no-underline overflow-hidden relative"
            >
              <div className="flex justify-between items-start w-full relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-[#a586ff] group-hover:border-[#a586ff] transition-all duration-500">
                  <CheckCircle2 size={20} className="text-white group-hover:text-black transition-colors duration-500" />
                </div>
                <span className="font-satoshi font-bold text-[10px] tracking-[0.2em] uppercase text-gray-400 group-hover:text-[#a586ff] transition-colors duration-500">
                  {review.name}
                </span>
              </div>
              
              <div className="mt-12 flex flex-col gap-4 relative z-10">
                <h3 className="font-clash font-semibold text-xl text-white leading-tight group-hover:text-[#a586ff] transition-colors duration-500">
                  {review.body}
                </h3>
                <div className="flex items-center gap-2 font-inter font-semibold tracking-widest uppercase text-[10px] text-gray-400 group-hover:text-white transition-colors duration-500">
                  <span>View Credential</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
