/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Linkedin, 
  ExternalLink, 
  Send, 
  User, 
  Mail, 
  MapPin, 
  MessageSquare,
  Briefcase
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    message: ""
  });

  const links = [
    {
      title: "Profil LinkedIn",
      url: "https://www.linkedin.com/in/dhika-satya-788120377/",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      title: "Portofolio",
      url: "https://www.notion.so/Dhika-Satya-Portfolio-30364c41c3a880bfbe79e478780db051?source=copy_link",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Lynk.id",
      url: "https://lynk.id/o2.company",
      icon: <ExternalLink className="w-5 h-5" />
    },
    {
      title: "TeePublic",
      url: "https://tee.pub/lic/dspxo2",
      icon: <ExternalLink className="w-5 h-5" />
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    // Formspree handling is done via the form action, 
    // but we can add some client-side validation or feedback here if needed.
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md glass-card rounded-3xl p-6 md:p-10 flex flex-col items-center"
      >
        {/* Profile Section */}
        <header className="flex flex-col items-center text-center mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
            <img 
              src="/profile.jpg" 
              alt="Dhika Satya" 
              className="w-32 h-32 rounded-full border-4 border-white/60 object-cover shadow-2xl relative z-10"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
              }}
            />
          </motion.div>
          <h1 className="text-3xl font-bold text-slate-900 mt-6 tracking-tight">Dhika Satya</h1>
          <p className="text-slate-700 font-medium mt-1">Informasi Tentang Saya</p>
        </header>

        {/* Links Section */}
        <main className="w-full space-y-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="glass-button shine-effect flex items-center justify-between px-6 py-4 rounded-2xl text-slate-800 font-semibold group"
            >
              <span className="flex items-center gap-3">
                <span className="text-slate-600 group-hover:text-sky-600 transition-colors">
                  {link.icon}
                </span>
                {link.title}
              </span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}

          {/* Contact Form Section */}
          <div className="mt-12 pt-8 border-t border-white/20 w-full">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Send a Message</h2>
            
            <form 
              action="https://formspree.io/f/mjkajyov" 
              method="POST" 
              className="space-y-5"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-slate-800 ml-1">
                    <User className="w-4 h-4" /> Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Full name" 
                    required 
                    className="w-full glass-input"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="address" className="flex items-center gap-2 text-sm font-bold text-slate-800 ml-1">
                    <MapPin className="w-4 h-4" /> Address
                  </label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    placeholder="Address (optional)" 
                    className="w-full glass-input"
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-slate-800 ml-1">
                  <Mail className="w-4 h-4" /> Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="_replyto" 
                  placeholder="yourname@gmail.com" 
                  required 
                  pattern=".+@gmail\.com"
                  title="Please enter a valid Google email address (@gmail.com)."
                  className="w-full glass-input"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-slate-800 ml-1">
                  <MessageSquare className="w-4 h-4" /> Information
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  placeholder="Write your message here..." 
                  required 
                  className="w-full glass-input resize-none"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex justify-center pt-4">
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05, backgroundColor: "rgb(14, 165, 233)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-sky-500 text-white font-bold rounded-2xl shadow-xl shadow-sky-500/20 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </main>

        <footer className="mt-12 text-slate-700/60 text-xs font-medium">
          &copy; {new Date().getFullYear()} Dhika Satya. All rights reserved.
        </footer>
      </motion.div>
    </div>
  );
}
