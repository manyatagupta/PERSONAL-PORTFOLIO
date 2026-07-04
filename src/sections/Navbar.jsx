import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#work" },
  { name: "Experience", href: "#experience" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The new LiquidGlassHero is 100vh long.
      // Keep navbar transparent until scrolled completely past it.
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7 transition-all duration-300 ${
          scrolled ? "bg-black/50 backdrop-blur-[12px] border-b border-white/5 py-4 lg:py-5" : "bg-transparent"
        }`}
      >
        {/* Left: Brand */}
        <a 
          href="/" 
          className={`font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider select-none transition-colors duration-300 ${
            scrolled ? "text-white" : "text-white"
          }`}
        >
          MG
        </a>
        {/* Center: Desktop Links (Absolutely Centered) */}
        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-inter text-sm tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? "text-white/70 hover:text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Desktop CTA & Mobile Hamburger */}
        <div className="flex items-center gap-6">
          {/* Desktop CTA */}
          <a 
            href="#contact" 
            className={`hidden lg:flex items-center gap-2 border px-6 py-3 font-inter text-xs tracking-widest uppercase transition-all duration-300 ${
              scrolled 
                ? "border-white/20 hover:border-white/50 text-white hover:bg-white/5" 
                : "border-white/30 hover:border-white/60 text-white hover:bg-white/10"
            }`}
          >
            GET IN TOUCH
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden flex flex-col items-end justify-center space-y-1.5 p-2 focus:outline-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <div className={`w-6 h-0.5 transition-colors duration-300 ${scrolled ? "bg-white" : "bg-white"}`}></div>
            <div className={`w-6 h-0.5 transition-colors duration-300 ${scrolled ? "bg-white" : "bg-white"}`}></div>
            <div className={`w-4 h-0.5 transition-colors duration-300 ${scrolled ? "bg-white" : "bg-white"}`}></div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay Header */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-5">
          <div className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
            MG
          </div>
          <button 
            className="p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Overlay Links */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-podium text-4xl sm:text-5xl text-white uppercase tracking-wider hover:text-white/70 transition-colors"
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
                transitionProperty: "transform, opacity, color",
                transitionDuration: "500ms, 500ms, 200ms"
              }}
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href="#contact" 
            onClick={() => setMenuOpen(false)}
            className="mt-8 flex items-center gap-2 border border-white/30 hover:border-white/60 px-8 py-4 font-inter text-sm tracking-widest uppercase hover:bg-white/10 text-white transition-all duration-300"
            style={{
              transitionDelay: `${navLinks.length * 80 + 100}ms`,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transitionProperty: "transform, opacity, background-color, border-color",
              transitionDuration: "500ms, 500ms, 300ms, 300ms"
            }}
          >
            GET IN TOUCH
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
