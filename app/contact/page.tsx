"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, Mail, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    projectType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create email content
      const emailContent = {
        to: 'ryan@weborah.com',
        subject: `New Contact Form Submission from ${formData.name}`,
        body: `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Project Type: ${formData.projectType || 'Not specified'}

Message:
${formData.message}
        `
      };

      // For now, we'll use mailto: which opens the user's email client
      // In production, you'd want to use a service like EmailJS, Resend, or a backend API
      const mailtoLink = `mailto:ryan@weborah.com?subject=${encodeURIComponent(emailContent.subject)}&body=${encodeURIComponent(emailContent.body)}`;
      
      // Open mailto link
      window.location.href = mailtoLink;
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          projectType: "",
        });
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      // You could add error handling here
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's Start Your <span className="gradient-text">Project</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Ready to transform your ideas into reality? Get in touch with us and 
                let's discuss how we can help your business grow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Get In <span className="gradient-text">Touch</span>
                  </h2>
                  <p className="text-slate-400 text-lg">
                    We'd love to hear about your project. Send us a message and 
                    we'll respond within 24 hours.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-electric-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-electric-500" />
                    </div>                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-slate-400">ryan@weborah.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-electric-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-electric-500" />
                    </div>                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-slate-400">+34 665 02 42 79</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-electric-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-electric-500" />
                    </div>                    <div>
                      <div className="text-white font-semibold">Location</div>
                      <div className="text-slate-400">Marbella, Malaga</div>
                    </div>
                  </div>
                </div>

                {/* Calendly Integration */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="h-6 w-6 text-electric-500" />
                    <h3 className="text-xl font-semibold text-white">
                      Book a Free Consultation
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-4">
                    Schedule a 30-minute call to discuss your project requirements 
                    and get a custom quote.
                  </p>                  <Button
                    className="w-full bg-gradient-to-r from-electric-500 to-electric-600 text-white hover:from-electric-600 hover:to-electric-700 shadow-lg hover:shadow-electric-500/25"                    onClick={() => {
                      // In a real app, this would open Calendly
                      window.open('https://calendly.com/weborah/consultation', '_blank');
                    }}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Call
                  </Button>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send us a message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-slate-400">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-slate-300">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-electric-500"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-slate-300">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-electric-500"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-slate-300">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-electric-500"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="projectType" className="text-slate-300">
                        Project Type
                      </Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="mt-1 w-full h-10 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white focus:border-electric-500 focus:outline-none"
                      >
                        <option value="">Select project type</option>
                        <option value="website">Website Development</option>
                        <option value="webapp">Web Application</option>
                        <option value="ecommerce">E-commerce Platform</option>
                        <option value="mobile">Mobile App</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-slate-300">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-electric-500"
                        placeholder="Tell us about your project..."
                      />
                    </div>                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 px-8 bg-gradient-to-r from-electric-500 to-neon-500 text-white hover:from-electric-600 hover:to-neon-600 shadow-lg animate-gradient"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
