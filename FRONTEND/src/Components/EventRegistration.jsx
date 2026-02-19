// // EventRegistration.jsx
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {
//   Users, User, Mail, Phone, GraduationCap, Calendar, Trophy, Send, Loader2
// } from 'lucide-react';

// const EventRegistration = () => {
//   const [formData, setFormData] = useState({
//     teamName: '',
//     leaderName: '',
//     leaderEmail: '',
//     leaderMobile: '',
//     leaderWhatsapp: '',
//     college: '',
//     branch: '',
//     year: '',
//     event: '',
//     teamSize: '1',
//     members: [{ name: '', email: '' }], // index 0 reserved for leader → we ignore it
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   // Colleges list (from your message)
//   const colleges = [
//     "ABES Engineering College, Ghaziabad",
//     "ABESIT Group of Institutions, Ghaziabad",
//     "Accurate Institute of Technology & Management, Greater Noida",
//     "Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad",
//     "Amity University, Noida",
//     "Babu Banarsi Das Institute of Technology (BBDIT), Ghaziabad",
//     "Bhagwati Institute of Technology, Ghaziabad",
//     "Bharti College, University of Delhi (DU)",
//     "Galgotias University, Greater Noida",
//     "Galgotias College of Engineering & Technology, Greater Noida",
//     "GL Bajaj Institute of Technology & Management, Greater Noida",
//     "GNIOT Group of Institutions, Greater Noida",
//     "H.R. Group of Institutions, Ghaziabad",
//     "HI-TECH Institute of Engineering & Technology, Ghaziabad",
//     "HIMT Group of Institutions, Greater Noida",
//     "Ideal Institute of Technology, Ghaziabad",
//     "Inderprastha Engineering College (IPEC), Ghaziabad",
//     "Institute of Information Technology & Management (IITM), Delhi",
//     "Institute of Management Studies (IMS), Ghaziabad",
//     "IMS Engineering College, Ghaziabad",
//     "INMANTEC Institutions, Ghaziabad",
//     "ITS Engineering College, Greater Noida",
//     "ITS Engineering College, Mohan Nagar",
//     "Jaypee Institute of Information Technology (JIIT), Noida",
//     "JIMS Rohini (Jagan Institute of Management Studies), Delhi",
//     "JSS Academy of Technical Education (JSSATE), Noida",
//     "JSM Institute of Technology, Ghaziabad",
//     "KIET Group of Institutions, Ghaziabad",
//     "Lajpat Rai College, Delhi",
//     "MMH College, Ghaziabad",
//     "Noida Institute of Engineering & Technology (NIET), Greater Noida",
//     "PGDAV College, University of Delhi (DU)",
//     "R.D. Engineering College (RDEC), Ghaziabad",
//     "RKGIT (Raj Kumar Goel Institute of Technology), Ghaziabad",
//     "Shaheed Rajguru College of Applied Sciences for Women, University of Delhi",
//     "Shambhu Dayal College (SD PG College), Ghaziabad",
//     "Sharda University, Greater Noida",
//     "Sunder Deep Engineering College, Ghaziabad",
//     "OTHER"
//   ].sort();

//   const branches = ['CSE', 'ECE', 'IT', 'ME', 'EE', 'OTHER'];
//   const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

//   const events = [
//     { value: 'code-puzzle', label: 'Code Puzzle', icon: '💻', category: 'technical' },
//     { value: 'project-exhibition', label: 'Project Exhibition', icon: '🔬', category: 'technical' },
//     { value: 'robo-race', label: 'Robo Race', icon: '🤖', category: 'technical' },
//     { value: 'technical-poster', label: 'Technical Poster Presentation', icon: '📊', category: 'technical' },
//     { value: 'cultural-events', label: 'Cultural Events', icon: '🎭', category: 'cultural' },
//     { value: 'rangoli-competition', label: 'Rangoli Competition', icon: '🎨', category: 'cultural' },
//     { value: 'food-without-fire', label: 'Food Without Fire', icon: '🍳', category: 'cultural' },
//     { value: 'dance-competition', label: 'Dance Competition', icon: '💃', category: 'cultural' },
//     { value: 'rock-band', label: 'Rock Band', icon: '🎸', category: 'cultural' },
//     { value: 'short-film-maker', label: 'Reel Making', icon: '🎬', category: 'cultural' },
//     { value: 'treasure-hunt', label: 'Treasure Hunt', icon: '🗺️', category: 'fun' },
//   ];

//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 150);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleMemberChange = (index, field, value) => {
//     const newMembers = [...formData.members];
//     newMembers[index] = { ...newMembers[index], [field]: value };
//     setFormData(prev => ({ ...prev, members: newMembers }));
//   };

//   const updateTeamSize = (size) => {
//     const num = parseInt(size, 10);
//     let newMembers = [...formData.members];

//     // Keep leader slot empty / ignore index 0
//     if (num > newMembers.length) {
//       for (let i = newMembers.length; i < num; i++) {
//         newMembers.push({ name: '', email: '' });
//       }
//     } else if (num < newMembers.length) {
//       newMembers = newMembers.slice(0, num);
//     }

//     setFormData(prev => ({ ...prev, teamSize: size, members: newMembers }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!formData.teamName.trim()) return toast.error("Team name is required");
//     if (!formData.leaderName.trim()) return toast.error("Leader name is required");
//     if (!formData.leaderEmail.includes('@')) return toast.error("Valid leader email required");
//     if (!/^\d{10}$/.test(formData.leaderMobile)) return toast.error("Leader mobile must be 10 digits");
//     if (formData.teamSize === '1' && formData.members.some(m => m.name || m.email)) {
//       return toast.error("Solo team → no member details needed");
//     }

//     const payload = {
//       ...formData,
//       members: formData.members.filter(m => m.name.trim() && m.email.trim()), // clean empty
//     };

//     setSubmitting(true);

//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_BACKEND_URL}/api/event-register`,
//         payload
//       );

//       toast.success(`Registered! 🎉 Team ID: ${res.data.teamId}`);
      
//       // Reset form
//       setFormData({
//         teamName: '', leaderName: '', leaderEmail: '', leaderMobile: '', leaderWhatsapp: '',
//         college: '', branch: '', year: '', event: '', teamSize: '1',
//         members: [{ name: '', email: '' }],
//       });

//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Registration failed. Try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const teamSizeNum = parseInt(formData.teamSize, 10);

//   return (
//     <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-28">
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-teal-950/20 opacity-60"></div>

//       <div className={`max-w-5xl mx-auto relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 '}`}>
//         <div className="text-center mb-12">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
//             <span className="text-teal-400">Team</span> Event Registration
//           </h1>
//           <p className="text-gray-400 text-lg max-w-3xl mx-auto">
//             Join the thrill — register your team for tech, cultural & fun events!
//           </p>
//         </div>

//         <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12 border border-teal-900/50 hover:border-teal-800/70 transition-all">
//           <form onSubmit={handleSubmit} className="space-y-10">

//             {/* Team Basics */}
//             <div className="space-y-6">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-teal-900/40 rounded-xl border border-teal-800/60">
//                   <Users className="text-teal-400" size={28} />
//                 </div>
//                 <h2 className="text-3xl font-semibold text-white">Team Information</h2>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-teal-300 mb-2 font-medium">Team Name *</label>
//                   <input
//                     name="teamName"
//                     value={formData.teamName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-teal-700 rounded-xl text-white placeholder-gray-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30 transition"
//                     placeholder="e.g., Code Ninjas"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-teal-300 mb-2 font-medium">Team Size (1–4) *</label>
//                   <select
//                     name="teamSize"
//                     value={formData.teamSize}
//                     onChange={(e) => updateTeamSize(e.target.value)}
//                     required
//                     className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-teal-700 rounded-xl text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30 transition appearance-none cursor-pointer"
//                   >
//                     {[1,2,3,4].map(n => (
//                       <option key={n} value={n}>{n} Member{n > 1 ? 's' : ''}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Leader Details */}
//             <div className="space-y-6 pt-8 border-t border-teal-900/40">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-orange-900/30 rounded-xl border border-orange-800/50">
//                   <User className="text-orange-400" size={28} />
//                 </div>
//                 <h2 className="text-3xl font-semibold text-white">Team Leader Details</h2>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-orange-300 mb-2 font-medium">Full Name *</label>
//                   <input name="leaderName" value={formData.leaderName} onChange={handleChange} required className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-orange-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-600/30" placeholder="Leader Name" />
//                 </div>
//                 <div>
//                   <label className="block text-orange-300 mb-2 font-medium">Email *</label>
//                   <input name="leaderEmail" type="email" value={formData.leaderEmail} onChange={handleChange} required className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-orange-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-600/30" placeholder="leader@example.com" />
//                 </div>
//                 <div>
//                   <label className="block text-orange-300 mb-2 font-medium">Mobile *</label>
//                   <input name="leaderMobile" value={formData.leaderMobile} onChange={handleChange} required pattern="\d{10}" maxLength={10} className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-orange-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-600/30" placeholder="10-digit number" />
//                 </div>
//                 <div>
//                   <label className="block text-orange-300 mb-2 font-medium">WhatsApp *</label>
//                   <input name="leaderWhatsapp" value={formData.leaderWhatsapp} onChange={handleChange} required pattern="\d{10}" maxLength={10} className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-orange-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-600/30" placeholder="10-digit WhatsApp" />
//                 </div>
//               </div>
//             </div>

//             {/* College & Academic */}
//             <div className="space-y-6 pt-8 border-t border-teal-900/40">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-teal-900/40 rounded-xl border border-teal-800/60">
//                   <GraduationCap className="text-teal-400" size={28} />
//                 </div>
//                 <h2 className="text-3xl font-semibold text-white">Academic Details</h2>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="md:col-span-2">
//                   <label className="block text-teal-300 mb-2 font-medium">College *</label>
//                   <select name="college" value={formData.college} onChange={handleChange} required className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-teal-700 rounded-xl text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30 appearance-none cursor-pointer">
//                     <option value="">Select your college</option>
//                     {colleges.map(c => <option key={c} value={c}>{c}</option>)}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-teal-300 mb-2 font-medium">Branch *</label>
//                   <select name="branch" value={formData.branch} onChange={handleChange} required className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-teal-700 rounded-xl text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30 appearance-none cursor-pointer">
//                     <option value="">Select branch</option>
//                     {branches.map(b => <option key={b} value={b}>{b}</option>)}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-teal-300 mb-2 font-medium">Year *</label>
//                   <select name="year" value={formData.year} onChange={handleChange} required className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-teal-700 rounded-xl text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30 appearance-none cursor-pointer">
//                     <option value="">Select year</option>
//                     {years.map(y => <option key={y} value={y}>{y}</option>)}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Event */}
//             <div className="space-y-6 pt-8 border-t border-teal-900/40">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-orange-900/30 rounded-xl border border-orange-800/50">
//                   <Trophy className="text-orange-400" size={28} />
//                 </div>
//                 <h2 className="text-3xl font-semibold text-white">Choose Event *</h2>
//               </div>

//               <select name="event" value={formData.event} onChange={handleChange} required className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-orange-700 rounded-xl text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-600/30 appearance-none cursor-pointer">
//                 <option value="">Select event</option>
//                 {events.map(ev => (
//                   <option key={ev.value} value={ev.value}>
//                     {ev.icon} {ev.label} ({ev.category})
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Team Members (if >1) */}
//             {teamSizeNum > 1 && (
//               <div className="space-y-6 pt-8 border-t border-teal-900/40">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="p-3 bg-teal-900/40 rounded-xl border border-teal-800/60">
//                     <Users className="text-teal-400" size={28} />
//                   </div>
//                   <h2 className="text-3xl font-semibold text-white">Team Members ({teamSizeNum - 1})</h2>
//                 </div>

//                 {formData.members.map((member, idx) => (
//                   <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/50 p-6 rounded-2xl border border-teal-900/30">
//                     <div>
//                       <label className="block text-teal-300 mb-2 font-medium">Member {idx + 1} Name *</label>
//                       <input
//                         value={member.name}
//                         onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
//                         required
//                         className="w-full px-5 py-4 bg-slate-950 border border-slate-700 hover:border-teal-700 rounded-xl text-white placeholder-gray-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30"
//                         placeholder="Full name"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-teal-300 mb-2 font-medium">Member {idx + 1} Email *</label>
//                       <input
//                         type="email"
//                         value={member.email}
//                         onChange={(e) => handleMemberChange(idx, 'email', e.target.value)}
//                         required
//                         className="w-full px-5 py-4 bg-slate-950 border border-slate-700 hover:border-teal-700 rounded-xl text-white placeholder-gray-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30"
//                         placeholder="email@example.com"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={submitting}
//               className="w-full py-6 bg-gradient-to-r from-teal-600 to-orange-600 hover:from-teal-500 hover:to-orange-500 text-white text-xl font-bold rounded-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
//             >
//               {submitting ? (
//                 <>
//                   <Loader2 className="animate-spin" size={28} />
//                   Registering Team...
//                 </>
//               ) : (
//                 <>
//                   <Send size={28} />
//                   Submit Registration
//                 </>
//               )}
//             </button>
//           </form>
//         </div>

//         <p className="text-center text-gray-600 mt-10 text-sm">
//           * All fields marked are required • Confirmation sent to leader email
//         </p>
//       </div>

//       <ToastContainer position="top-center" theme="dark" autoClose={6000} />
//     </div>
//   );
// };

// export default EventRegistration;
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Users, User, Mail, Phone, GraduationCap, Calendar, Trophy, Send, Loader2
} from 'lucide-react';

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    leaderMobile: '',
    leaderWhatsapp: '',
    college: '',
    branch: '',
    year: '',
    event: '',
    teamSize: '1',
    members: [], // only additional members (excluding leader)
  });

  const [submitting, setSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const colleges = [
    "ABES Engineering College, Ghaziabad",
    "ABESIT Group of Institutions, Ghaziabad",
    "Accurate Institute of Technology & Management, Greater Noida",
    "Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad",
    "Amity University, Noida",
    "Babu Banarsi Das Institute of Technology (BBDIT), Ghaziabad",
    "Bhagwati Institute of Technology, Ghaziabad",
    "Bharti College, University of Delhi (DU)",
    "Galgotias University, Greater Noida",
    "Galgotias College of Engineering & Technology, Greater Noida",
    "GL Bajaj Institute of Technology & Management, Greater Noida",
    "GNIOT Group of Institutions, Greater Noida",
    "H.R. Group of Institutions, Ghaziabad",
    "HI-TECH Institute of Engineering & Technology, Ghaziabad",
    "HIMT Group of Institutions, Greater Noida",
    "Ideal Institute of Technology, Ghaziabad",
    "Inderprastha Engineering College (IPEC), Ghaziabad",
    "Institute of Information Technology & Management (IITM), Delhi",
    "Institute of Management Studies (IMS), Ghaziabad",
    "IMS Engineering College, Ghaziabad",
    "INMANTEC Institutions, Ghaziabad",
    "ITS Engineering College, Greater Noida",
    "ITS Engineering College, Mohan Nagar",
    "Jaypee Institute of Information Technology (JIIT), Noida",
    "JIMS Rohini (Jagan Institute of Management Studies), Delhi",
    "JSS Academy of Technical Education (JSSATE), Noida",
    "JSM Institute of Technology, Ghaziabad",
    "KIET Group of Institutions, Ghaziabad",
    "Lajpat Rai College, Delhi",
    "MMH College, Ghaziabad",
    "Noida Institute of Engineering & Technology (NIET), Greater Noida",
    "PGDAV College, University of Delhi (DU)",
    "R.D. Engineering College (RDEC), Ghaziabad",
    "RKGIT (Raj Kumar Goel Institute of Technology), Ghaziabad",
    "Shaheed Rajguru College of Applied Sciences for Women, University of Delhi",
    "Shambhu Dayal College (SD PG College), Ghaziabad",
    "Sharda University, Greater Noida",
    "Sunder Deep Engineering College, Ghaziabad",
    "OTHER"
  ].sort();

  const branches = ['CSE', 'ECE', 'IT', 'ME', 'EE', 'OTHER'];
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

  const events = [
    { value: 'code-puzzle', label: 'Code Puzzle', icon: '💻', category: 'technical' },
    { value: 'project-exhibition', label: 'Project Exhibition', icon: '🔬', category: 'technical' },
    { value: 'robo-race', label: 'Robo Race', icon: '🤖', category: 'technical' },
    { value: 'technical-poster', label: 'Technical Poster Presentation', icon: '📊', category: 'technical' },
    { value: 'cultural-events', label: 'Cultural Events', icon: '🎭', category: 'cultural' },
    { value: 'rangoli-competition', label: 'Rangoli Competition', icon: '🎨', category: 'cultural' },
    { value: 'food-without-fire', label: 'Food Without Fire', icon: '🍳', category: 'cultural' },
    { value: 'dance-competition', label: 'Dance Competition', icon: '💃', category: 'cultural' },
    { value: 'rock-band', label: 'Rock Band', icon: '🎸', category: 'cultural' },
    { value: 'short-film-maker', label: 'Reel Making', icon: '🎬', category: 'cultural' },
    { value: 'treasure-hunt', label: 'Treasure Hunt', icon: '🗺️', category: 'fun' },
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 150);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...formData.members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setFormData(prev => ({ ...prev, members: newMembers }));
  };

  const updateTeamSize = (sizeStr) => {
    const size = parseInt(sizeStr, 10);
    const requiredAdditional = Math.max(0, size - 1);

    let newMembers = [...formData.members];

    // Add empty slots if needed
    while (newMembers.length < requiredAdditional) {
      newMembers.push({ name: '', email: '' });
    }

    // Remove excess slots if decreasing
    if (newMembers.length > requiredAdditional) {
      newMembers = newMembers.slice(0, requiredAdditional);
    }

    setFormData(prev => ({
      ...prev,
      teamSize: sizeStr,
      members: newMembers,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.teamName.trim()) return toast.error("Team name is required");
    if (!formData.leaderName.trim()) return toast.error("Leader name is required");
    if (!formData.leaderEmail.includes('@')) return toast.error("Valid leader email required");
    if (!/^\d{10}$/.test(formData.leaderMobile)) return toast.error("Leader mobile must be 10 digits");

    const teamSizeNum = parseInt(formData.teamSize, 10);
    if (teamSizeNum > 1 && formData.members.length !== teamSizeNum - 1) {
      return toast.error(`Please fill details for all ${teamSizeNum - 1} team member(s)`);
    }

    setSubmitting(true);

    try {
      const payload = {
        ...formData,
        // members already contains only additional members
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/event-register`,
        payload
      );

      toast.success(`Registered! 🎉 Team ID: ${res.data.teamId}`);

      // Reset form
      setFormData({
        teamName: '',
        leaderName: '',
        leaderEmail: '',
        leaderMobile: '',
        leaderWhatsapp: '',
        college: '',
        branch: '',
        year: '',
        event: '',
        teamSize: '1',
        members: [],
      });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const teamSizeNum = parseInt(formData.teamSize, 10);
  const showMembersSection = teamSizeNum > 1;

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-teal-950/20 opacity-60"></div>

      <div className={`max-w-5xl mx-auto relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="text-teal-400">Team</span> Event Registration
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Join the thrill — register your team for tech, cultural & fun events!
          </p>
        </div>

        <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12 border border-teal-900/50 hover:border-teal-800/70 transition-all">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* ── Team Information ── */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-teal-900/40 rounded-xl border border-teal-800/60">
                  <Users className="text-teal-400" size={28} />
                </div>
                <h2 className="text-3xl font-semibold text-white">Team Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-teal-300 mb-2 font-medium">Team Name *</label>
                  <input
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-teal-700 rounded-xl text-white placeholder-gray-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30 transition"
                    placeholder="e.g., Code Ninjas"
                  />
                </div>

                <div>
                  <label className="block text-teal-300 mb-2 font-medium">Team Size (including leader) *</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => updateTeamSize(e.target.value)}
                    required
                    className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-teal-700 rounded-xl text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30 transition appearance-none cursor-pointer"
                  >
                    <option value="1">1 member (Solo)</option>
                    <option value="2">2 members</option>
                    <option value="3">3 members</option>
                    <option value="4">4 members</option>
                  </select>
                </div>
              </div>
            </div>

            {/* ── Leader Details ── */}
            <div className="space-y-6 pt-8 border-t border-teal-900/40">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-900/30 rounded-xl border border-orange-800/50">
                  <User className="text-orange-400" size={28} />
                </div>
                <h2 className="text-3xl font-semibold text-white">Team Leader Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-orange-300 mb-2 font-medium">Full Name *</label>
                  <input
                    name="leaderName"
                    value={formData.leaderName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-orange-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-600/30"
                    placeholder="Leader Name"
                  />
                </div>
                <div>
                  <label className="block text-orange-300 mb-2 font-medium">Email *</label>
                  <input
                    name="leaderEmail"
                    type="email"
                    value={formData.leaderEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-orange-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-600/30"
                    placeholder="leader@example.com"
                  />
                </div>
                <div>
                  <label className="block text-orange-300 mb-2 font-medium">Mobile *</label>
                  <input
                    name="leaderMobile"
                    value={formData.leaderMobile}
                    onChange={handleChange}
                    required
                    pattern="\d{10}"
                    maxLength={10}
                    className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-orange-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-600/30"
                    placeholder="10-digit number"
                  />
                </div>
                <div>
                  <label className="block text-orange-300 mb-2 font-medium">WhatsApp *</label>
                  <input
                    name="leaderWhatsapp"
                    value={formData.leaderWhatsapp}
                    onChange={handleChange}
                    required
                    pattern="\d{10}"
                    maxLength={10}
                    className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-orange-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-600/30"
                    placeholder="10-digit WhatsApp"
                  />
                </div>
              </div>
            </div>

            {/* ── Academic Details ── */}
            <div className="space-y-6 pt-8 border-t border-teal-900/40">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-teal-900/40 rounded-xl border border-teal-800/60">
                  <GraduationCap className="text-teal-400" size={28} />
                </div>
                <h2 className="text-3xl font-semibold text-white">Academic Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-teal-300 mb-2 font-medium">College *</label>
                  <select
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-teal-700 rounded-xl text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30 appearance-none cursor-pointer"
                  >
                    <option value="">Select your college</option>
                    {colleges.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-teal-300 mb-2 font-medium">Branch *</label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-teal-700 rounded-xl text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30 appearance-none cursor-pointer"
                  >
                    <option value="">Select branch</option>
                    {branches.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-teal-300 mb-2 font-medium">Year *</label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-teal-700 rounded-xl text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30 appearance-none cursor-pointer"
                  >
                    <option value="">Select year</option>
                    {years.map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* ── Event Selection ── */}
            <div className="space-y-6 pt-8 border-t border-teal-900/40">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-900/30 rounded-xl border border-orange-800/50">
                  <Trophy className="text-orange-400" size={28} />
                </div>
                <h2 className="text-3xl font-semibold text-white">Choose Event *</h2>
              </div>

              <select
                name="event"
                value={formData.event}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-slate-900 border border-slate-700 hover:border-orange-700 rounded-xl text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-600/30 appearance-none cursor-pointer"
              >
                <option value="">Select event</option>
                {events.map(ev => (
                  <option key={ev.value} value={ev.value}>
                    {ev.icon} {ev.label} ({ev.category})
                  </option>
                ))}
              </select>
            </div>

            {/* ── Additional Team Members ── */}
            {showMembersSection && (
              <div className="space-y-6 pt-8 border-t border-teal-900/40">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-teal-900/40 rounded-xl border border-teal-800/60">
                    <Users className="text-teal-400" size={28} />
                  </div>
                  <h2 className="text-3xl font-semibold text-white">
                    Additional Team Members ({teamSizeNum - 1})
                  </h2>
                </div>

                {formData.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/50 p-6 rounded-2xl border border-teal-900/30"
                  >
                    <div>
                      <label className="block text-teal-300 mb-2 font-medium">
                        Member {idx + 1} Name *
                      </label>
                      <input
                        value={member.name}
                        onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
                        required
                        className="w-full px-5 py-4 bg-slate-950 border border-slate-700 hover:border-teal-700 rounded-xl text-white placeholder-gray-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block text-teal-300 mb-2 font-medium">
                        Member {idx + 1} Email *
                      </label>
                      <input
                        type="email"
                        value={member.email}
                        onChange={(e) => handleMemberChange(idx, 'email', e.target.value)}
                        required
                        className="w-full px-5 py-4 bg-slate-950 border border-slate-700 hover:border-teal-700 rounded-xl text-white placeholder-gray-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-600/30"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-6 bg-gradient-to-r from-teal-600 to-orange-600 hover:from-teal-500 hover:to-orange-500 text-white text-xl font-bold rounded-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {submitting ? (
                <>
                  <Loader2 className="animate-spin" size={28} />
                  Registering Team...
                </>
              ) : (
                <>
                  <Send size={28} />
                  Submit Registration
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-600 mt-10 text-sm">
          * All fields marked are required • Confirmation sent to leader email
        </p>
      </div>

      <ToastContainer position="top-center" theme="dark" autoClose={6000} />
    </div>
  );
};

export default EventRegistration;