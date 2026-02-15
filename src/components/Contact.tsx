"use client";
import { motion, Variants } from "framer-motion";

export default function Contact() {
  // --- TEXT FILL EFFECT ---
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

  // --- HERO STYLE BUTTON ---
  const btnStyle = "relative overflow-hidden transition-all duration-500 hover:text-white hover:scale-105 before:content-[''] before:absolute before:inset-0 before:bg-secondary before:-z-10 before:scale-y-0 before:origin-center before:transition-transform before:duration-500 hover:before:scale-y-100 border-2 border-primary text-primary shadow-sm font-black uppercase tracking-[0.2em] text-sm bg-transparent z-10";

  // --- INPUT FIELD STYLE (Themed) ---
  const inputStyle = "w-full p-4 bg-primary/5 border border-primary/10 rounded-xl outline-none transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.08] focus:border-secondary focus:ring-4 focus:ring-secondary/10 focus:-translate-y-1 text-primary placeholder:text-primary/40 shadow-sm";

  // --- ANIMATION LOGIC ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "down" ? -100 : 100, 
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    },
  };

  return (
    <section 
      id="contact" 
      className="pt-32 pb-16 px-6 bg-light transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-xl mx-auto">
        
        {/* Title Section */}
        <div className="flex flex-col items-center mb-16 group/title w-fit mx-auto cursor-default">
          <h2 
            style={textFillEffect}
            className="text-4xl font-bold text-primary uppercase tracking-widest transition-all duration-500 group-hover/title:!text-transparent group-hover/title:![background-size:100%_100%]"
          >
            Contact me
          </h2>
          <div className="w-16 h-1 bg-accent mt-2 rounded-full transition-all duration-500 group-hover/title:w-full"></div>
        </div>

        {/* Form Container */}
        <motion.form 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          // --- ENV Variable Integrated Here ---
          action={process.env.NEXT_PUBLIC_FORMSPREE_URL} 
          method="POST"
          className="w-full space-y-8"
        >
          {/* Name Field */}
          <motion.div custom="down" variants={itemVariants} className="flex flex-col group/input">
            <label className="text-primary/80 font-bold mb-2 ml-1 text-[10px] tracking-[0.3em] uppercase group-focus-within/input:text-secondary transition-colors">
              Name
            </label>
            <input 
              name="name"
              type="text" 
              required
              className={inputStyle}
              placeholder="ENTER YOUR NAME"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div custom="down" variants={itemVariants} className="flex flex-col group/input">
            <label className="text-primary/80 font-bold mb-2 ml-1 text-[10px] tracking-[0.3em] uppercase group-focus-within/input:text-secondary transition-colors">
              Email
            </label>
            <input 
              name="email"
              type="email" 
              required
              className={inputStyle}
              placeholder="EMAIL@EXAMPLE.COM"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div custom="down" variants={itemVariants} className="flex flex-col group/input">
            <label className="text-primary/80 font-bold mb-2 ml-1 text-[10px] tracking-[0.3em] uppercase group-focus-within/input:text-secondary transition-colors">
              Message
            </label>
            <textarea 
              name="message"
              rows={4} 
              required
              className={`${inputStyle} resize-none`}
              placeholder="HOW CAN I HELP YOU?"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div custom="up" variants={itemVariants} className="flex justify-center pt-2">
            <button
              type="submit"
              className={`${btnStyle} w-full md:w-auto px-20 py-5 rounded-2xl`}
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}