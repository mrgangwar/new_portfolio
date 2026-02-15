"use client"; 
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = ["Skills", "About", "Projects", "Contact"];

  // --- Hero Section Styles ---
  const textFillEffect = {
    display: "inline-block",
    backgroundImage: "linear-gradient(to bottom, var(--color-secondary) 50%, var(--color-secondary) 50%)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100% 0%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "currentColor",
    transition: "background-size 0.5s ease-in-out, color 0.5s ease-in-out",
  };

  const hoverStyle = "hover:!text-transparent hover:![background-size:100%_100%]";

  // --- Entrance Variants ---
  const navVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1], staggerChildren: 0.1 } 
    }
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-light/80 backdrop-blur-md border-b border-muted transition-colors duration-500">
      <motion.div 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"
      >
        
        {/* Logo */}
        <motion.a 
          href="#"
          variants={linkVariants}
          className="text-primary font-bold text-2xl tracking-tighter cursor-pointer group"
        >
          <span style={textFillEffect} className={`${hoverStyle} text-secondary italic`}>Nirankar</span>
          <span style={textFillEffect} className={`${hoverStyle} text-primary`}>.dev</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <motion.a 
              key={item} 
              variants={linkVariants}
              href={`#${item.toLowerCase()}`}
              style={textFillEffect}
              className={`${hoverStyle} text-primary font-bold text-sm uppercase tracking-widest relative group cursor-pointer transition-all duration-500`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full"></span>
            </motion.a>
          ))}
          
          {/* Theme Toggle */}
          {mounted && (
            <motion.button
              variants={linkVariants}
              whileHover={{ rotate: 180, scale: 1.1 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-accent/20 text-primary hover:bg-accent/40 transition-all ml-2"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full bg-accent/20 text-primary">
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-1">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu with Hero Hover Effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-light/60 backdrop-blur-3xl fixed inset-0 top-[73px] z-40 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10 pb-32">
              {navLinks.map((item, idx) => (
                <motion.a 
                  key={item} 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  style={textFillEffect}
                  className={`${hoverStyle} text-primary font-black text-4xl uppercase tracking-[0.2em] transition-all duration-500`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}