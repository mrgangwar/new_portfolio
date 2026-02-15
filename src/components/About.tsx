"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Heart,
  Linkedin,
  Github,
  Instagram,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  
  const xMovement = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [-150, 0, 0, 150]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
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

  const socials = [
    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/nirankargangwar", color: "hover:bg-[#0077b5]" },
    { icon: <Github size={20} />, link: "https://github.com/mrgangwar", color: "hover:bg-[#333]" },
    { icon: <Instagram size={20} />, link: "https://www.instagram.com/mr_gangwar_3", color: "hover:bg-[#e4405f]" },
    { icon: <Mail size={20} />, link: "mailto:balramgangwar72500@gmail.com", color: "hover:bg-[#ea4335]" },
    { icon: <MessageCircle size={20} />, link: "https://wa.me/916398120952", color: "hover:bg-[#25d366]" },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 px-6 bg-light transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div 
          style={{ opacity }}
          className="flex flex-col items-center mb-20 group/title w-fit mx-auto cursor-default"
        >
          <h2
            style={textFillEffect}
            className="text-4xl font-bold text-primary uppercase tracking-widest transition-all duration-500 group-hover/title:!text-transparent group-hover/title:![background-size:100%_100%]"
          >
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent mt-2 rounded-full transition-all duration-500 group-hover/title:w-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          
          <motion.div
            style={{ x: smoothX, opacity }}
            className="space-y-6"
          >
            {[
              { icon: <GraduationCap />, title: "Education", desc: "BCA (2022-25) @ MJPRU", sub: "MCA (2025-27) @ AKTU" },
              { icon: <MapPin />, title: "Current Location", desc: "Bareilly, Uttar Pradesh, India", sub: "" },
              { icon: <Heart />, title: "Core Focus", desc: "Full Stack Development", sub: "Real-time Web Applications" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="flex gap-4 p-6 bg-primary/5 rounded-2xl border border-primary/10 group cursor-default transition-all duration-500 hover:shadow-2xl"
              >
                <div className="p-3 bg-accent/20 rounded-lg h-fit text-secondary group-hover:bg-accent/30 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 style={textFillEffect} className={`${textHoverStyle} font-bold text-lg text-primary`}>
                    {item.title}
                  </h3>
                  <p className="text-primary/70 text-sm">{item.desc}</p>
                  {item.sub && <p className="text-primary/40 text-[10px] uppercase font-bold tracking-wider mt-1">{item.sub}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>

          
          <motion.div 
            style={{ x: smoothX, opacity }}
            className="flex flex-col justify-start"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              I'm Nirankar Gangwar
            </h3>
            <p className="text-primary/70 leading-relaxed mb-10 text-lg">
              I am a passionate Web Developer based in Bareilly. I specialize in building
              modern, responsive web applications using <strong>React.js, Next.js, and JavaScript</strong>. 
              Currently pursuing MCA, I focus on clean code and creating impactful digital solutions that solve real-world problems.
            </p>

            {/* Social Media Links */}
            <div className="flex flex-wrap gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-primary/5 text-primary border border-primary/10 rounded-full transition-all duration-300 shadow-sm hover:text-white ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}