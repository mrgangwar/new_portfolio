"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // --- Directional Animation Logic ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  
  const xMovement = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 150] 
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const smoothX = useSpring(xMovement, { stiffness: 80, damping: 20 });

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
  
  const btnFillStyle = "relative overflow-hidden transition-all duration-500 hover:text-white hover:scale-105 before:content-[''] before:absolute before:inset-0 before:bg-secondary before:-z-10 before:scale-y-0 before:origin-center before:transition-transform before:duration-500 hover:before:scale-y-100";

  // Initial Entrance (Entrance is always Left to Right for Hero)
  const entranceVariants: Variants = {
    hidden: { opacity: 0, x: -150 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: [0.25, 1, 0.5, 1], staggerChildren: 0.1 } 
    }
  };

  const imgVariants: Variants = {
    hidden: { opacity: 0, x: 150 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center px-4 md:px-6 pt-24 md:pt-20 overflow-hidden bg-light transition-colors duration-500"
    >
      
      
      <div 
        className="absolute top-[-5%] right-[-10%] w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-accent -z-10"
        style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", borderBottomLeftRadius: "100%" }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-center w-full relative z-10">
        
        {/* Left Content (Dynamic Scroll Sync) */}
        <motion.div 
          style={{ x: smoothX, opacity }}
          variants={entranceVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.div variants={entranceVariants} className="mb-4">
            <span 
              style={textFillEffect}
              className={`${hoverStyle} font-bold tracking-[0.2em] uppercase text-xs md:text-sm text-secondary cursor-default !duration-300`}
            >
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1 variants={entranceVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary leading-tight mb-6 cursor-default">
            <span className="block mb-2">Hello, my name</span>
            <span 
              style={textFillEffect}
              className={hoverStyle}
            >
              is Nirankar Gangwar
            </span>
          </motion.h1>

          <motion.div variants={entranceVariants} className="mb-8 max-w-md mx-auto md:mx-0">
            <p 
              style={textFillEffect}
              className={`${hoverStyle} text-base md:text-lg leading-relaxed font-medium text-primary/70`}
            >
              I specialize in building robust web and mobile applications using Next.js, React, TypeScript, and React Native. Expert in MERN stack and Tailwind CSS for seamless development.
            </p>
          </motion.div>
          
          <motion.div variants={entranceVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#projects"
              className={`${btnFillStyle} z-10 bg-accent text-primary px-10 py-3 rounded-lg font-bold border-2 border-accent shadow-md active:scale-95 text-center`}
            >
              Projects
            </a>
            <a 
              href="/resume.pdf" 
              download="Nirankar_Resume.pdf"
              className={`${btnFillStyle} z-10 border-2 border-primary text-primary px-10 py-3 rounded-lg font-bold active:scale-95 text-center`}
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image (Dynamic Scroll Sync) */}
        <motion.div 
          style={{ x: smoothX, opacity }}
          variants={imgVariants}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center order-1 md:order-2"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 h-72 md:w-[400px] md:h-[500px] overflow-hidden shadow-2xl cursor-pointer transition-transform duration-500 hover:scale-105"
            style={{ borderRadius: "40% 60% 40% 60% / 30% 30% 70% 70%" }}
          >
            <img 
              src="/my-image.jpeg" 
              alt="Nirankar Gangwar" 
              className="w-full h-full object-cover transition-all duration-700 grayscale-0 md:grayscale md:hover:grayscale-0"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}