"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-light transition-colors duration-500">
      
      {/* Background Accent Wave (Yellow Shape) */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[250px] md:h-[350px] bg-accent -z-10" 
        style={{ 
          clipPath: "polygon(0 70%, 20% 60%, 40% 70%, 65% 55%, 85% 65%, 100% 50%, 100% 100%, 0% 100%)" 
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* --- Stylish Divider Line --- */}
        <div className="w-full max-w-lg h-[1.5px] bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-16"></div>

        {/* Bottom Credits Only */}
        <div className="flex flex-col items-center gap-4 text-center">
          
          {/* Copyright Text */}
          <p className="text-primary font-black text-xs md:text-sm tracking-[0.4em] uppercase">
            © {currentYear} Mr. Gangwar. All Rights Reserved.
          </p>
          
          {/* Made with Love Credit */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-primary/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]"
          >
            Made with 
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-red-500"
            >
              <Heart size={14} fill="currentColor" />
            </motion.span> 
            by Nirankar Gangwar
          </motion.div>
          
        </div>
      </div>
    </footer>
  );
}