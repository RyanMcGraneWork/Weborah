"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-electric-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-neon-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-slate-300"
          >
            <MessageCircle className="h-3 w-3 md:h-4 md:w-4 text-electric-500" />
            <span>Ready to Start Your Project?</span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Let's Build Something{" "}
            <span className="gradient-text">
              Amazing Together
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Ready to transform your ideas into a powerful digital solution? 
            Book a free consultation call and let's discuss how we can help 
            your business grow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4 w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto"
          >
            <Button
              className="group w-full sm:w-auto min-w-[180px] md:min-w-[200px] h-10 md:h-12 px-6 md:px-8 lg:px-12 text-sm md:text-base bg-gradient-to-r from-electric-500 to-neon-500 text-white hover:from-electric-600 hover:to-neon-600 shadow-lg animate-gradient"
              asChild
            >
              <Link href="/contact">
                <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Book Free Call
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              className="border-slate-700 hover:border-electric-500 min-w-[200px] h-12 px-12 text-base border bg-transparent text-white"
              asChild
            >
              <Link href="/projects">
                View Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12"
          >
            {[
              {
                title: "Free Consultation",
                description: "30-minute strategy call to discuss your project",
              },
              {
                title: "Custom Quote",
                description: "Tailored pricing based on your specific needs",
              },
              {
                title: "Quick Turnaround",
                description: "Fast delivery without compromising quality",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
