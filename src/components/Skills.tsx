"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion"; 
import { 
  Code2, 
  Database, 
  Layers, 
  Globe, 
  Smartphone,
  Workflow
} from "lucide-react";

const skills = [
  { name: "Frontend Dev", tech: "React.js, Next.js", icon: <Globe className="text-secondary" />, level: "90%" },
  { name: "Languages", tech: "TypeScript, JavaScript, PHP", icon: <Code2 className="text-secondary" />, level: "85%" },
  { name: "Styling", tech: "Tailwind CSS, HTML5, CSS3", icon: <Layers className="text-secondary" />, level: "95%" },
  { name: "Backend & DB", tech: "SQL, MySQL, MongoDB", icon: <Database className="text-secondary" />, level: "80%" },
  { name: "Mobile Dev", tech: "React Native", icon: <Smartphone className="text-secondary" />, level: "75%" },
  { name: "Tools", tech: "Git, GitHub, REST APIs", icon: <Workflow className="text-secondary" />, level: "85%" },
];

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);

  // --- Scroll Logic for Directional Animation ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Up to Down: Slide from Left (-150 to 0)
  // Down to Up: Slide from Right (150 to 0)
  const xMovement = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [-150, 0, 0, 150]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
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

  const textHoverStyle = "group-hover:!text-transparent group-hover:![background-size:100%_100%]";

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="py-32 px-6 bg-light transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section */}
        <motion.div 
          style={{ opacity }}
          className="flex flex-col items-center mb-24 group/title w-fit mx-auto cursor-default"
        >
          <h2 
            style={textFillEffect}
            className="text-4xl font-bold text-primary uppercase tracking-widest transition-all duration-500 group-hover/title:!text-transparent group-hover/title:![background-size:100%_100%]"
          >
            Skills
          </h2>
          <div className="w-16 h-1 bg-accent mt-2 rounded-full transition-all duration-500 group-hover/title:w-full"></div>
        </motion.div>

        {/* Smooth Animated Grid */}
        <motion.div 
          style={{ x: smoothX, opacity }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }} 
              className="bg-primary/5 p-8 rounded-2xl border border-primary/10 group cursor-default transition-all duration-500 hover:shadow-2xl hover:bg-primary/[0.08]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/30 transition-colors duration-500">
                  {skill.icon}
                </div>
                <div>
                  <h3 
                    style={textFillEffect}
                    className={`${textHoverStyle} text-xl font-bold text-primary`}
                  >
                    {skill.name}
                  </h3>
                  <p 
                    style={textFillEffect}
                    className={`${textHoverStyle} block text-[10px] text-secondary font-black tracking-widest uppercase`}
                  >
                    {skill.tech}
                  </p>
                </div>
              </div>
              
              {/* Progress Bar Container */}
              <div className="relative pt-4">
                <div className="w-full bg-primary/10 h-1 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-accent relative"
                  >
                    {/* Glowing tip of progress bar */}
                    <div className="absolute right-0 top-0 h-full w-2 bg-accent shadow-[0_0_10px_#facc15]" />
                  </motion.div>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <span className="text-[10px] text-primary/40 font-bold uppercase tracking-widest">Efficiency</span>
                    <span className="text-[10px] text-primary/60 font-black uppercase tracking-widest">{skill.level}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}