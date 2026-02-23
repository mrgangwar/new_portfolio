"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// --- Project Data ---
const projects = [
  {
    title: "KickStreet - E-commerce",
    desc: "Developed a scalable storefront using Next.js and TypeScript, reducing page load time by 25%. Built a modular architecture for high maintainability and SEO optimization.",
    img: "/KickStreet.png",
    link: "https://kickstreet-theta.vercel.app/",
    tech: "NEXT.JS, TYPESCRIPT, TAILWIND CSS"
  },

 {
    
  title: "VidyaSetu - Tuition Management App",
  desc: "Developed a full-stack SaaS-based tuition management system with role-based access for Admins, Teachers, and Students, enabling streamlined student management, attendance tracking, and fee collection.",
  img: "/VidyaSetu.jpeg",
  link: "https://github.com/mrgangwar", 
  tech: "REACT NATIVE, EXPO, NODE.JS, EXPRESS, MONGODB"

  },

  {
    title: "My Portfolio",
    desc: "A high-performance, responsive 3D developer portfolio built with Next.js 15 and Framer Motion, featuring smooth scroll animations, a secure serverless contact system, and a theme-adaptive UI.",
    img: "/Portfolio2.png",
    link: "https://nirankar-gangwar.vercel.app/",
    tech: "NEXT.JS, TYPESCRIPT, TAILWIND CSS"
  },
  {
    title: "CallOne - Video Calling",
    desc: "Built a real-time Audio & Video Calling Web App using React and ZegoCloud SDK, supporting secure one-to-one voice and video calls with status handling.",
    img: "/CallOne.png", 
    link: "https://github.com/mrgangwar/CallOne",
    tech: "REACT, ZEGOCLOUD, ZIM SDK"
  },
  {
    title: "Profile Card Generator",
    desc: "A premium, fully responsive Next.js-based Profile Card Generator is a tool that allows users to design their professional identity (profile) cards with a live preview.",
    img: "/CardGenerator.png", 
    link: "https://github.com/mrgangwar/profile-card-generator",
    tech: "TyprScript, Next.js, Tailwind"
  },
  {
    title: "Library Management",
    desc: "A production-ready, testable Library Management System built using Next.js and TypeScript, featuring user borrowing limits (maximum 2 books), inventory tracking, and return functionality, implemented following KISS and DRY principles",
    img: "/Library.png", 
    link: "https://github.com/mrgangwar/library-management-system",
    tech: "NEXT.JS, TAILWIND"
  },
  
  
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);

  // Logic to show either first 3 or all projects
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

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

  const textHoverStyle = "group-hover:!text-transparent group-hover:![background-size:100%_100%]";

  const btnAnimationLogic = "relative overflow-hidden transition-all duration-500 hover:text-white hover:scale-105 before:content-[''] before:absolute before:inset-0 before:bg-secondary before:-z-10 before:scale-y-0 before:origin-center before:transition-transform before:duration-500 hover:before:scale-y-100";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -100 }, 
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.3 } }
  };

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="py-32 px-6 bg-light transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section */}
        <div className="flex flex-col items-center mb-24 group/title w-fit mx-auto cursor-default">
          <h2 
            style={textFillEffect}
            className="text-4xl font-bold text-primary uppercase tracking-widest transition-all duration-500 group-hover/title:!text-transparent group-hover/title:![background-size:100%_100%]"
          >
            My Projects
          </h2>
          <div className="w-16 h-1 bg-accent mt-2 rounded-full transition-all duration-500 group-hover/title:w-full"></div>
        </div>

        {/* Projects List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-32"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((p, i) => (
              <motion.div 
                key={p.title} // Unique key ensures smooth transition
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-20 group`}
              >
                {/* Project Info */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <p className="text-secondary font-black text-[10px] tracking-[0.3em] uppercase">
                      {p.tech}
                    </p>
                    <h3 
                      style={textFillEffect}
                      className={`${textHoverStyle} text-3xl md:text-5xl font-bold text-primary transition-all duration-500 leading-tight`}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-primary/70 text-lg leading-relaxed">
                    {p.desc}
                  </p>
                  
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${btnAnimationLogic} inline-block border-2 border-primary px-10 py-3 rounded-full font-black uppercase tracking-widest text-xs text-primary shadow-sm bg-transparent z-10`}
                  >
                    View Project
                  </a>
                </div>

                {/* Project Image */}
                <div className="flex-1 w-full group/img relative">
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <div className="overflow-hidden rounded-3xl shadow-2xl border border-primary/5 bg-white aspect-video md:aspect-auto md:h-[400px]">
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                        src={p.img} 
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- View All / Less Button --- */}
        {projects.length > 3 && (
          <div className="mt-24 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`${btnAnimationLogic} flex items-center gap-3 px-12 py-5 rounded-2xl border-2 border-primary text-primary font-black uppercase tracking-[0.2em] text-xs bg-transparent z-10`}
            >
              <span>{showAll ? "View Less" : "View All Projects"}</span>
              <motion.div
                animate={{ y: showAll ? 0 : [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </motion.div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}