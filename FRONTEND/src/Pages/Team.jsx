import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import chairman from "../Teams/chairman.jpg";
import director from "../Teams/director.jpeg";
import secratory from "../Teams/secratory.jpg";
import hodcs from "../Teams/hodcs.png";
import sunstone from "../Teams/sunstone.png";
import hodmca from "../Teams/hodmca.png";
import hodee from "../Teams/hodee.png";
import sac from '../Teams/sac.jpg';

const teamMembers = [
  {
    name: "Mr. Anand Prakash",
    role: "Chairman",
    dept: "Governing Body",
    image: chairman,
    featured: true,
  },
  {
    name: "Dr. Pankaj Kumar Mishra",
    role: "Director",
    dept: "Governing Body",
    image: director,
    featured: true,
  },
  {
    name: "Ms. Renu Goel",
    role: "Secretary",
    dept: "Administration",
    image: secratory,
    featured: true,
  },
  {
    name: "Mr. Manikantan",
    role: "Governing Body",
    dept: "Administration",

    image: sunstone,
    featured: true,
  },
  {
    name: "Dr. Tripti Choudhary",
    role: "HOD - CSE",
    dept: "Computer Science",
    image: hodcs,
  },
  {
    name: "Mr. Bhaskar Sharma",
    role: "HOD - MCA",
    dept: "Master of Computer Applications",
    image: hodmca,
  },
  {
    name: "Mr. Aman Srivastava",
    role: "HOD - EE",
    dept: "Electrical Engineering",
    image: hodee,
  },
  {
    name: "Sachchidanand Yadav",
    role: "Website Developer",
    dept: "CSE",
    image: sac,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Team = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f] text-slate-100 min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2"></div>
        <div className="absolute right-0 top-2/3 w-[400px] h-[400px] bg-purple-900/15 rounded-full blur-[100px] translate-x-1/3"></div>
        <div className="absolute left-1/2 bottom-0 w-[350px] h-[350px] bg-indigo-900/20 rounded-full blur-[110px] translate-y-1/2"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/30 border border-blue-800/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Leadership Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight leading-tight"
          >
            Meet Our Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Visionary leaders driving innovation, excellence, and academic distinction
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-black/90 border border-slate-800/50 hover:border-blue-500/40 transition-all duration-500 shadow-xl shadow-black/60 hover:shadow-2xl hover:shadow-blue-950/40 backdrop-blur-md"
            >
              {member.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/90 to-yellow-500/90 backdrop-blur-sm shadow-lg">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Leadership
                  </span>
                </div>
              )}

              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              <div className="relative p-5 sm:p-6 text-center bg-gradient-to-b from-slate-900/50 to-slate-950/80">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/0 via-blue-950/0 to-blue-950/0 group-hover:from-blue-950/10 group-hover:via-blue-950/5 transition-all duration-500"></div>

                <div className="relative">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300 leading-snug">
                    {member.name}
                  </h3>

                  <div className="inline-block px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/30 mb-2">
                    <p className="text-blue-300 font-semibold text-sm">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {member.dept}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-700 pointer-events-none"></div>

              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-blue-500/20 -z-10 blur-sm transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16 sm:mt-20 md:mt-24"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
            <p className="text-slate-300 text-sm sm:text-base">
              Together, shaping the future of education
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
