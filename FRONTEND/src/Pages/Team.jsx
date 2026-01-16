import React, { useState } from "react";

import chairman from "../Teams/chairman.jpg"
import director from "../Teams/director.jpeg";
import secratory from "../Teams/secratory.jpg";
import sana from "../Teams/decoration-student-head.jpg"
import ashif from "../Teams/ashif.JPG"
import sac from '../Teams/sac.jpg'
import aman from '../Teams/aman.jpg'
import himanshu from '../Teams/him.jpg'
import sahil from "../Teams/sahil-project-student.jpeg"
import shourya from "../Teams/shourya-cultural-student.jpg"
import abhishek from "../Teams/abhishek.jpg"
import w5 from "../assets/w5.jpg";
import w6 from "../assets/w6.jpg";
import w7 from "../assets/w7.jpg";
import w8 from "../assets/w8.jpg";
import w9 from "../assets/w9.jpg";
import w10 from "../assets/w10.jpg";
import w11 from "../assets/w11.jpg";
import w12 from "../assets/w12.jpg";
import w13 from "../assets/w13.jpg";
import w14 from "../assets/w14.jpg";
import swati from "../assets/swati.jpg";
import tanu from "../assets/tanu.jpg";
import sumit from "../assets/sumit.jpg";

import { FaWhatsapp, FaEnvelope, FaLinkedin, FaCrown, FaChevronDown, FaChevronUp } from "react-icons/fa";

const placeholderImages = [
  chairman, director, secratory, abhishek, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14,
];

const topAuthorities = [
  {
    name: "Mr. Anand Prakash",
    role: "Chairman",
    department: "Governing Body",
    image: placeholderImages[0],
  },
  {
    name: "Dr. Pankaj Kumar Mishra",
    role: "Director",
    department: "Administration",
    image: placeholderImages[1],
  },
  {
    name: "Ms. Renu Goel",
    role: "Secretary",
    department: "Administration",
    image: placeholderImages[2],
  },
  {
    name: "Dr. N. Sharma",
    role: "Academic Director",
    department: "Academics",
    image: placeholderImages[3],
  },
];

const eventLeadership = [
  {
    event: "Code Puzzle 💻",
    domain: "Technical",
    members: [
      {
        name: "Dr. Rajesh Kumar",
        role: "Main Head",
        department: "CSE",
        image: placeholderImages[4],
        email: "rajesh@college.edu",
        whatsapp: "919800000005",
        linkedin: "",
      },
      {
        name: "Prof. S. Verma",
        role: "Faculty Head",
        department: "CSE",
        image: placeholderImages[5],
        email: "verma@college.edu",
        whatsapp: "919800000006",
        linkedin: "",
      },
      {
        name: "Aman Gupta",
        role: "Student Leader",
        department: "CSE (3rd Year)",
        image: placeholderImages[6],
        email: "aman@gmail.com",
        whatsapp: "919800000007",
        linkedin: "https://linkedin.com/in/aman",
      },
    ],
  },
  {
    event: "Project Exhibition 🔬",
    domain: "Technical",
    members: [
      {
        name: "Dr. Neeraj Jain",
        role: "Main Head",
        department: "Engineering",
        image: placeholderImages[7],
        email: "neeraj@college.edu",
        whatsapp: "919800000008",
        linkedin: "",
      },
      {
        name: "Prof. A. Mishra",
        role: "Faculty Head",
        department: "Engineering",
        image: placeholderImages[8],
        email: "mishra@college.edu",
        whatsapp: "919800000009",
        linkedin: "",
      },
      {
        name: "Sahil Verma ",
        role: "Student Leader",
        department: "I.T. (4th year)",
        image: sahil,
        email: "sahilverma7523@gmail.com",
        whatsapp: "9999663998",
        linkedin: "",
      },
    ],
  },
  {
    event: "Robo Race 🤖",
    domain: "Technical",
    members: [
      {
        name: "Dr. Anil Saxena",
        role: "Main Head",
        department: "Mechanical",
        image: placeholderImages[10],
        email: "anil@college.edu",
        whatsapp: "919800000011",
        linkedin: "",
      },
      {
        name: "Prof. R. Singh",
        role: "Faculty Head",
        department: "Mechanical",
        image: placeholderImages[11],
        email: "rsingh@college.edu",
        whatsapp: "919800000012",
        linkedin: "",
      },
      {
        name: "Rohit Kumar",
        role: "Student Leader",
        department: "ME (3rd Year)",
        image: placeholderImages[12],
        email: "rohit@gmail.com",
        whatsapp: "919800000013",
        linkedin: "",
      },
    ],
  },
  {
    event: "Technical Poster 📊",
    domain: "Technical",
    members: [
      {
        name: "Dr. P. Gupta",
        role: "Main Head",
        department: "Applied Science",
        image: placeholderImages[13],
        email: "gupta@college.edu",
        whatsapp: "919800000014",
        linkedin: "",
      },
      {
        name: "Prof. N. Arora",
        role: "Faculty Head",
        department: "Applied Science",
        image: placeholderImages[0],
        email: "arora@college.edu",
        whatsapp: "919800000015",
        linkedin: "",
      },
      {
        name: "Pooja Verma",
        role: "Student Leader",
        department: "CSE (2nd Year)",
        image: placeholderImages[1],
        email: "pooja@gmail.com",
        whatsapp: "919800000016",
        linkedin: "",
      },
    ],
  },
  {
    event: "Cultural Events 🎭",
    domain: "Cultural",
    members: [
      {
        name: "Dr. Sunita Verma",
        role: "Main Head",
        department: "Humanities",
        image: placeholderImages[2],
        email: "sunita@college.edu",
        whatsapp: "919800000017",
        linkedin: "",
      },
      {
        name: "Ms. Pooja Jain",
        role: "Faculty Head",
        department: "Humanities",
        image: placeholderImages[3],
        email: "poojajain@college.edu",
        whatsapp: "919800000018",
        linkedin: "",
      },
      {
        name: "Shourya Singh ",
        role: "Student Leader",
        department: "CSE (1st Year)",
        image: shourya,
        email: "shourya110singh@gmail.com",
        whatsapp: "9897023947",
        linkedin: "",
      },
    ],
  },
  {
    event: "Rangoli Competition 🎨",
    domain: "Cultural",
    members: [
      {
        name: "Dr. R. Mehta",
        role: "Main Head",
        department: "Fine Arts",
        image: placeholderImages[5],
        email: "mehta@college.edu",
        whatsapp: "919800000020",
        linkedin: "",
      },
      {
        name: "Ms. Anjali Singh",
        role: "Faculty Head",
        department: "Fine Arts",
        image: placeholderImages[6],
        email: "anjali@college.edu",
        whatsapp: "919800000021",
        linkedin: "",
      },
      {
        name: "Riya Agarwal",
        role: "Student Leader",
        department: "MBA (1st Year)",
        image: placeholderImages[7],
        email: "riya@gmail.com",
        whatsapp: "919800000022",
        linkedin: "",
      },
    ],
  },
  {
    event: "Food Without Fire 🍳",
    domain: "Cultural",
    members: [
      {
        name: "Dr. K. Sharma",
        role: "Main Head",
        department: "Home Science",
        image: placeholderImages[8],
        email: "ksharma@college.edu",
        whatsapp: "919800000023",
        linkedin: "",
      },
      {
        name: "Ms. Ritu Jain",
        role: "Faculty Head",
        department: "Home Science",
        image: placeholderImages[9],
        email: "ritu@college.edu",
        whatsapp: "919800000024",
        linkedin: "",
      },
      {
        name: "Ankit Verma",
        role: "Student Leader",
        department: "BBA (2nd Year)",
        image: placeholderImages[10],
        email: "ankit@gmail.com",
        whatsapp: "919800000025",
        linkedin: "",
      },
    ],
  },
  {
    event: "Nukkad Natak 🎪",
    domain: "Cultural",
    members: [
      {
        name: "Dr. M. Khan",
        role: "Main Head",
        department: "Performing Arts",
        image: placeholderImages[11],
        email: "khan@college.edu",
        whatsapp: "919800000026",
        linkedin: "",
      },
      {
        name: "Prof. S. Ali",
        role: "Faculty Head",
        department: "Performing Arts",
        image: placeholderImages[12],
        email: "ali@college.edu",
        whatsapp: "919800000027",
        linkedin: "",
      },
      {
        name: "Sahil Khan",
        role: "Student Leader",
        department: "BA (3rd Year)",
        image: placeholderImages[13],
        email: "sahil@gmail.com",
        whatsapp: "919800000028",
        linkedin: "",
      },
    ],
  },
  {
    event: "Singing 🎤",
    domain: "Cultural",
    members: [
      {
        name: "Dr. R. Joshi",
        role: "Main Head",
        department: "Music",
        image: placeholderImages[0],
        email: "joshi@college.edu",
        whatsapp: "919800000029",
        linkedin: "",
      },
      {
        name: "Ms. Kavita Sharma",
        role: "Faculty Head",
        department: "Music",
        image: placeholderImages[1],
        email: "kavita@college.edu",
        whatsapp: "919800000030",
        linkedin: "",
      },
      {
        name: "Ayush Tiwari",
        role: "Student Leader",
        department: "CSE (2nd Year)",
        image: placeholderImages[2],
        email: "ayush@gmail.com",
        whatsapp: "919800000031",
        linkedin: "",
      },
    ],
  },
  {
    event: "Dance Competition 💃",
    domain: "Cultural",
    members: [
      {
        name: "Dr. L. Kapoor",
        role: "Main Head",
        department: "Dance",
        image: placeholderImages[3],
        email: "kapoor@college.edu",
        whatsapp: "919800000032",
        linkedin: "",
      },
      {
        name: "Ms. Radhika Jain",
        role: "Faculty Head",
        department: "Dance",
        image: placeholderImages[4],
        email: "radhika@college.edu",
        whatsapp: "919800000033",
        linkedin: "",
      },
      {
        name: "Muskan Gupta",
        role: "Student Leader",
        department: "BCA (3rd Year)",
        image: placeholderImages[5],
        email: "muskan@gmail.com",
        whatsapp: "919800000034",
        linkedin: "",
      },
    ],
  },
  {
    event: "Rock Band 🎸",
    domain: "Cultural",
    members: [
      {
        name: "Dr. S. Malhotra",
        role: "Main Head",
        department: "Music",
        image: placeholderImages[6],
        email: "malhotra@college.edu",
        whatsapp: "919800000035",
        linkedin: "",
      },
      {
        name: "Mr. V. Soni",
        role: "Faculty Head",
        department: "Music",
        image: placeholderImages[7],
        email: "soni@college.edu",
        whatsapp: "919800000036",
        linkedin: "",
      },
      {
        name: "Kunal Verma",
        role: "Student Leader",
        department: "B.Tech (4th Year)",
        image: placeholderImages[8],
        email: "kunal@gmail.com",
        whatsapp: "919800000037",
        linkedin: "",
      },
    ],
  },
  {
    event: "Short Film Maker 🎬",
    domain: "Cultural",
    members: [
      {
        name: "Dr. P. Arora",
        role: "Main Head",
        department: "Media Studies",
        image: placeholderImages[9],
        email: "arora@college.edu",
        whatsapp: "919800000038",
        linkedin: "",
      },
      {
        name: "Ms. Neetu Jain",
        role: "Faculty Head",
        department: "Media Studies",
        image: placeholderImages[10],
        email: "neetu@college.edu",
        whatsapp: "919800000039",
        linkedin: "",
      },
      {
        name: "Aditya Raj",
        role: "Student Leader",
        department: "BCA (3rd Year)",
        image: placeholderImages[11],
        email: "aditya@gmail.com",
        whatsapp: "919800000040",
        linkedin: "",
      },
    ],
  },
  {
    event: "Ad Mad Show 📺",
    domain: "Cultural",
    members: [
      {
        name: "Dr. R. Saxena",
        role: "Main Head",
        department: "Management",
        image: placeholderImages[12],
        email: "saxena@college.edu",
        whatsapp: "919800000041",
        linkedin: "",
      },
      {
        name: "Prof. P. Agarwal",
        role: "Faculty Head",
        department: "Management",
        image: placeholderImages[13],
        email: "agarwal@college.edu",
        whatsapp: "919800000042",
        linkedin: "",
      },
      {
        name: "Harsh Gupta",
        role: "Student Leader",
        department: "MBA (2nd Year)",
        image: placeholderImages[0],
        email: "harsh@gmail.com",
        whatsapp: "919800000043",
        linkedin: "",
      },
    ],
  },
  {
    event: "Treasure Hunt 🗺️",
    domain: "Fun",
    members: [
      {
        name: "Dr. A. Sharma",
        role: "Main Head",
        department: "General",
        image: placeholderImages[1],
        email: "asharma@college.edu",
        whatsapp: "919800000044",
        linkedin: "",
      },
      {
        name: "Mr. Vikas Gupta",
        role: "Faculty Head",
        department: "General",
        image: placeholderImages[2],
        email: "vikas@college.edu",
        whatsapp: "919800000045",
        linkedin: "",
      },
      {
        name: "Rahul Jain",
        role: "Student Leader",
        department: "CSE (2nd Year)",
        image: placeholderImages[3],
        email: "rahul@gmail.com",
        whatsapp: "919800000046",
        linkedin: "",
      },
    ],
  },
];

const operationalCommittees = [
  {
    name: "Management Team",
    leader: {
      name: "Asif khan",
      role: "Management Head",
      department: "B.C.A.",
      image: ashif,
      email: "asifkhan876776@gmail.com",
      whatsapp: "",
      linkedin: "",
    },
  },
  {
    name: "Help Desk",
    leader: {
      name: "Sachchidanand Yadav",
      role: "Helpdesk Head",
      department: "B.Tech",
      image: sac,
      email: "snsachidanand784@gmail.com",
      whatsapp: "",
      linkedin: "",
    },
  },
  {
    name: "Decoration Team",
    leader: {
      name: "Saniya Khan",
      role: "Decoration Lead",
      department: "B.C.A.",
      image: sana,
      email: "saifisaniya913@gmail.com",
      whatsapp: "",
      linkedin: "",
    },
  },
  {
    name: "Anchoring",
    leader: {
      name: "Abhishek Pandey ",
      role:"Anchoring Lead",
      department: "B.C.A",
      image: abhishek,
      email: "abhishekpandey17072006@gmail.com",
      whatsapp: "919800000050",
      linkedin: "",
    },
  },
];

const webTeam = [
  {
    name: "Aman Gupta",
    role: "Lead Web Developer",
    department: "MERN Stack Developer",
    image: aman,
    email: "ag0567688@gmail.com",
    whatsapp: "9560472926",
    linkedin: "https://www.linkedin.com/in/amangupta9454/",
  },
  {
    name: "Himanshu Gupta",
    role: "Backend Development",
    department: "MERN Stack Developer",
    image: himanshu,
    email: "himanshu561hi@gmail.com",
    whatsapp: "8090860670",
    linkedin: "https://www.linkedin.com/in/himanshu561hi/",
  },
  {
    name: "Sachchidanand Yadav",
    role: "Frontend Development",
    department: "Frontend Development",
    image: sac,
    email: "snsachidanand784@gmail.com",
    whatsapp: "7368878938",
    linkedin: "https://www.linkedin.com/in/784sachchidanandyadav/",
  },
];

const sponsors = [
  {
    name: "TechNova Solutions",
    role: "Title Sponsor",
    image: tanu,
    website: "https://technova.com",
  },
  {
    name: "CodeCraft Pvt Ltd",
    role: "Associate Sponsor",
    image: swati,
    website: "https://codecraft.com",
  },
  {
    name: "Mr. Anuj Agarwal",
    role: "Individual Sponsor",
    image: sumit,
    website: "",
  },
];

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-12 lg:mb-16 px-4 animate-fadeIn">
    <div className="inline-block">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-linear-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-3 lg:mb-4">
        {title}
      </h2>
      <div className="h-1 w-full bg-linear-to-r from-cyan-400 via-blue-500 to-pink-500 rounded-full"></div>
    </div>
    <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mt-4 lg:mt-6 leading-relaxed">
      {subtitle}
    </p>
  </div>
);

const ContactButtons = ({ whatsapp, email, linkedin }) => (
  <div className="flex justify-center gap-3 sm:gap-4 mt-4 lg:mt-6">
    {whatsapp && (
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="group relative p-2 sm:p-2.5 bg-green-500/20 rounded-full hover:bg-green-500/30 transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-green-400 group-hover:text-green-300 transition-colors" size={18} />
      </a>
    )}
    {email && (
      <a
        href={`mailto:${email}`}
        className="group relative p-2 sm:p-2.5 bg-red-500/20 rounded-full hover:bg-red-500/30 transition-all duration-300 hover:scale-110"
        aria-label="Email"
      >
        <FaEnvelope className="text-red-400 group-hover:text-red-300 transition-colors" size={18} />
      </a>
    )}
    {linkedin && (
      <a
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        className="group relative p-2 sm:p-2.5 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-all duration-300 hover:scale-110"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-blue-400 group-hover:text-blue-300 transition-colors" size={18} />
      </a>
    )}
  </div>
);

const ProfileCard = ({ person, highlight = false }) => (
  <div
    className={`group relative bg-linear-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 sm:p-6 lg:p-8 text-center
    hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500
    ${highlight ? "ring-2 ring-yellow-400/50 shadow-lg shadow-yellow-400/20" : ""}`}
  >
    {highlight && (
      <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-yellow-400 to-orange-500 text-white px-4 sm:px-6 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg">
        <FaCrown className="animate-pulse" />
        <span>Leadership</span>
      </div>
    )}

    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:to-pink-500/5 rounded-3xl transition-all duration-500"></div>

    <div className="relative z-10">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 lg:mb-6">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-400 to-pink-500 rounded-full animate-pulse opacity-50 blur-md"></div>
        <img
          src={person.image}
          alt={person.name}
          className="relative w-full h-full rounded-full object-cover border-4 border-cyan-400/50 group-hover:border-pink-500/50 transition-all duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
        {person.name}
      </h3>
      <p className="text-cyan-400 font-semibold text-sm sm:text-base mb-1">{person.role}</p>
      <p className="text-gray-300 text-xs sm:text-sm opacity-80">{person.department}</p>

      {(person.whatsapp || person.email || person.linkedin) && (
        <ContactButtons {...person} />
      )}
    </div>
  </div>
);

const EventSection = ({ event, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const domainColors = {
    Technical: "from-blue-500 to-cyan-500",
    Cultural: "from-pink-500 to-orange-500",
    Fun: "from-green-500 to-teal-500",
  };

  return (
    <div className="mb-12 lg:mb-20">
      <div 
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 lg:mb-10 cursor-pointer group px-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors">
            {event.event}
          </h3>
          <span className={`inline-block px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold bg-linear-to-r ${domainColors[event.domain]} rounded-full text-white shadow-lg`}>
            {event.domain}
          </span>
        </div>
        <button 
          className="sm:ml-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 self-start sm:self-center"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? <FaChevronUp size={20} className="text-cyan-400" /> : <FaChevronDown size={20} className="text-cyan-400" />}
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-500 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 px-4">
          {event.members.map((member, idx) => (
            <ProfileCard key={idx} person={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="relative bg-linear-to-br from-[#0a0a1a] via-[#0f0f2e] to-[#1a1a3e] min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0yLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0yIDJ2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0wIDJ2Mmgydi0yaC0yem0tNC02djJoMnYtMmgtMnptMi0ydjJoMnYtMmgtMnptMi0ydjJoMnYtMmgtMnptLTItMnYyaDJ2LTJoLTJ6bTAtMnYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36">
        <div className="max-w-7xl mx-auto">
          

          <SectionTitle
            title="College Leadership"
            subtitle="The guiding pillars behind our institution and technical fest"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mb-20 lg:mb-32 px-4">
            {topAuthorities.map((person, i) => (
              <ProfileCard key={i} person={person} highlight />
            ))}
          </div>

          <SectionTitle
            title="Event Leadership"
            subtitle="Each event is led by a structured hierarchy of faculty and student leaders"
          />

          <div className="mb-20 lg:mb-32">
            {eventLeadership.map((event, i) => (
              <EventSection key={i} event={event} index={i} />
            ))}
          </div>

          <SectionTitle
            title="Operational Committees"
            subtitle="Teams working behind the scenes to ensure smooth execution"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20 lg:mb-32 px-4">
            {operationalCommittees.map((committee, i) => (
              <div key={i} className="bg-linear-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 lg:p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 mb-6 lg:mb-8 text-center">
                  {committee.name}
                </h3>
                <ProfileCard person={committee.leader} />
              </div>
            ))}
          </div>

          <SectionTitle
            title="Website Development Team"
            subtitle="The tech minds who built and power this platform"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-20 lg:mb-32 px-4">
            {webTeam.map((dev, i) => (
              <ProfileCard key={i} person={dev} />
            ))}
          </div>

          <SectionTitle
            title="Our Sponsors"
            subtitle="We thank our sponsors for their valuable support"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 px-4">
            {sponsors.map((sponsor, i) => (
              <a
                key={i}
                href={sponsor.website || "#"}
                target="_blank"
                rel="noreferrer"
                className="group bg-linear-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-400 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="relative w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors text-center">
                  {sponsor.name}
                </h3>
                <p className="text-pink-400 font-semibold text-sm sm:text-base text-center">{sponsor.role}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;