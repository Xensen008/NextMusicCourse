'use client';
import { motion } from 'framer-motion';
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="absolute inset-0 w-full h-full wavy-background music-pattern music-notes">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/50"></div>
      </div>
      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-4 relative z-10 w-full text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Compose Your Future
            </span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="mt-4 text-2xl md:text-3xl text-neutral-200 font-light">
            Where Passion Meets Expertise
          </h2>
        </motion.div>
        <motion.p 
          className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Step into a world where music comes alive. Our expert-led courses, 
          cutting-edge technology, and vibrant community create the perfect harmony 
          for your musical journey.
        </motion.p>

        <motion.div 
          className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 group relative overflow-hidden"
            >
              <span className="relative z-10">Begin Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              borderRadius="1.75rem"
              className="bg-transparent text-white border-white border-2 hover:bg-white/10 transition-colors duration-300"
            >
              Explore Programs
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-neutral-400 text-sm"
        >
          Join over 10,000+ musicians who have transformed their craft with us
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;