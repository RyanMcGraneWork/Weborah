"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-16 lg:pt-12">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-electric-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-neon-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-r from-electric-500/5 to-neon-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: "20s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center hero-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 xl:space-y-10 hero-spacing"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300"
          >
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-electric-500" />
            <span className="font-medium">Modern Web Development Agency</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight px-2"
          >
            We Build{" "}
            <span className="gradient-text">
              Digital Experiences
            </span>
            <br />
            That Drive Results
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4"
          >
            From concept to deployment, we create stunning, scalable web applications 
            using cutting-edge technologies like Next.js, React, and TypeScript.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4 w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto"
          >
            <Button
              className="group w-full sm:w-auto h-10 md:h-12 px-6 md:px-8 lg:px-12 text-sm md:text-base bg-gradient-to-r from-electric-500 to-neon-500 text-white hover:from-electric-600 hover:to-neon-600 shadow-lg animate-gradient"
              asChild
            >
              <Link href="/contact">
                Book a Free Call
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              className="group w-full sm:w-auto h-10 md:h-12 px-6 md:px-8 lg:px-12 text-sm md:text-base border border-slate-700 hover:border-electric-500 bg-transparent text-white"
              asChild
            >
              <Link href="/projects">
                View Our Work
                <Code className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8 lg:pt-10"
          >
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating icons */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 hidden lg:block"
        >
          <div className="w-12 h-12 rounded-full bg-electric-500/20 flex items-center justify-center">
            <Zap className="h-6 w-6 text-electric-500" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 hidden lg:block"
        >
          <div className="w-12 h-12 rounded-full bg-neon-500/20 flex items-center justify-center">
            <Code className="h-6 w-6 text-neon-500" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pt-12"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-electric-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
