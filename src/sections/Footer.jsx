import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Summary */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-podium font-bold text-3xl text-white tracking-widest uppercase mb-6">
              MG
            </h2>
            <p className="font-satoshi text-base font-medium text-gray-400 leading-relaxed max-w-xs">
              A builder dedicated to crafting impactful tech. Bridging the gap between human intent and artificial intelligence.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="font-clash font-bold text-lg text-white mb-6">Explore</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#home" className="font-satoshi font-medium text-gray-400 hover:text-[#a586ff] transition-colors">Home</a></li>
              <li><a href="#about" className="font-satoshi font-medium text-gray-400 hover:text-[#a586ff] transition-colors">Philosophy</a></li>
              <li><a href="#work" className="font-satoshi font-medium text-gray-400 hover:text-[#a586ff] transition-colors">Selected Work</a></li>
              <li><a href="#experience" className="font-satoshi font-medium text-gray-400 hover:text-[#a586ff] transition-colors">Credentials</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-span-1">
            <h3 className="font-clash font-bold text-lg text-white mb-6">Connect</h3>
            <ul className="flex flex-col gap-4">
              {mySocials.map((social) => (
                <li key={social.name}>
                  <a href={social.href} target="_blank" rel="noreferrer" className="font-satoshi font-medium text-gray-400 hover:text-[#a586ff] transition-colors flex items-center gap-2 group">
                    <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#a586ff] transition-colors"></span>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1">
            <h3 className="font-clash font-bold text-lg text-white mb-6">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className="text-gray-400 mt-1 group-hover:text-[#a586ff] transition-colors">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:manyatagupta21@gmail.com" className="font-satoshi font-medium text-gray-400 hover:text-[#a586ff] transition-colors break-all">
                  manyatagupta21@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className="text-gray-400 mt-1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="font-satoshi font-medium text-gray-400">
                  Available for Remote Work<br />Worldwide
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-satoshi text-sm text-gray-500">
            © 2026 Manyata Gupta. All rights reserved.
          </p>
          <div className="font-clash font-bold text-white/10 text-4xl">
            MG.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
