// import React, { useState , useEffect} from 'react';
// import { Link } from 'react-router-dom';
// // eslint-disable-next-line no-unused-vars
// import { motion, AnimatePresence } from 'framer-motion';
// import { Calendar, MapPin, Trophy, Users, X, Sparkles, ChevronRight } from 'lucide-react';
// import event1 from '../assets/coding.jpg';
// import event2 from '../assets/project.jpg';
// import event3 from '../assets/robo.jpg';
// import event4 from '../assets/cultural.jpg';
// import event5 from '../assets/rangoli.jpeg';
// import event6 from '../assets/food.jpg';
// import event7 from '../assets/drama.jpg';
// import event8 from '../assets/song.jpg';
// import event9 from '../assets/poster.jpg';
// import event10 from '../assets/rock.jpg';
// import event11 from '../assets/dance.jpg';
// import w1 from '../assets/w1.jpg';
// import w2 from '../assets/w2.jpg';
// import w3 from '../assets/w3.jpg';
// import w4 from '../assets/w4.jpg';
// import w5 from '../assets/w5.jpg';
// import w6 from '../assets/w6.jpg';
// import w7 from '../assets/w7.jpg';
// import w8 from '../assets/w8.jpg';
// import w9 from '../assets/w9.jpg';
// import w10 from '../assets/w10.jpg';
// import w11 from '../assets/w11.jpg';
// import w12 from '../assets/w12.jpg';
// import w13 from '../assets/w13.jpg';
// import w14 from '../assets/w14.jpg';

// const events = [
//   {
//     id: 1,
//     imageSrc: event1,
//     name: 'Code Puzzle',
//     category: 'Technical',
//     details: {
//       description: 'A coding quiz to challenge logical and programming skills.',
//       timing: 'Feb 27 2026, 9:00 AM - 12:00 PM',
//       location: 'Block 1 Lab F',
//       judgingCriteria: 'Innovation, Functionality, Design, Presentation',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
//   {
//     id: 2,
//     imageSrc: event2,
//     name: 'Project Exhibition',
//     category: 'Technical',
//     details: {
//       description: 'Display and present innovative student projects across domains.',
//       timing: 'Feb 27, 2026, 10:00 AM  February 28, 2026, 4:00 PM',
//       location: 'Amphitheatre Hall',
//       judgingCriteria: 'Originality, Impact, Technical Execution',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
//   {
//     id: 3,
//     imageSrc: event3,
//     name: 'Robo Race',
//     category: 'Technical',
//     details: {
//       description: 'Compete with your robots in high-speed challenges.',
//       timing: 'Feb 27, 2026, 1:00 PM - 5:00 PM',
//       location: 'Hi Tech Ground',
//       judgingCriteria: 'Speed, Control, Design, Navigation',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
//   {
//     id: 4,
//     imageSrc: event4,
//     name: 'Cultural Events',
//     category: 'Cultural',
//     details: {
//       description: 'Showcase of traditional and contemporary performances.',
//       timing: 'Feb 27, 2026, 9:00 AM  February 28, 2026, 6:00 PM',
//       location: 'Amphitheatre Stage',
//       judgingCriteria: 'Creativity, Presentation, Crowd Engagement',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
//   {
//     id: 5,
//     imageSrc: event5,
//     name: 'Rangoli Competition',
//     category: 'Cultural',
//     details: {
//       description: 'Create beautiful rangoli designs using vibrant colors.',
//       timing: 'Feb 27, 2026, 10:00 AM - 4:00 PM',
//       location: 'Block 2 Courtyard',
//       judgingCriteria: 'Creativity, Neatness, Color Usage, Theme Representation',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
//   {
//     id: 6,
//     imageSrc: event6,
//     name: 'Food Without Fire',
//     category: 'Cultural',
//     details: {
//       description: 'Prepare delicious dishes without using fire or heat.',
//       timing: 'Feb 27, 2026, 9:00 AM - 5:00 PM',
//       location: 'Block 3 Cafeteria',
//       judgingCriteria: 'Taste, Presentation, Innovation, Hygiene',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
//   {
//     id: 7,
//     imageSrc: event7,
//     name: 'Nukkad Natak',
//     category: 'Cultural',
//     details: {
//       description: 'Perform impactful street plays on social issues.',
//       timing: 'Feb 27-28, 2026, 10:00 AM',
//       location: ' Amphitheatre Lawn',
//       judgingCriteria: 'Message Clarity, Acting, Engagement, Theme Relevance',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
//   {
//     id: 8,
//     imageSrc: event8,
//     name: 'Singing',
//     category: 'Cultural',
//     details: {
//       description: 'Showcase your vocal talent across genres and languages.',
//       timing: 'Feb 27-28, 2026, 11:00 AM - 3:00 PM',
//       location: 'Amphitheatre Stage',
//       judgingCriteria: 'Vocal Quality, Pitch, Expression, Stage Presence',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
//   {
//     id: 9,
//     imageSrc: event9,
//     name: 'Technical Poster',
//     category: 'Technical',
//     details: {
//       description: 'Present technical concepts and innovations through posters.',
//       timing: 'Feb 27, 2026, 9:00 AM - 1:00 PM',
//       location: 'Block 1 Corridor',
//       judgingCriteria: 'Content Clarity, Design, Innovation, Presentation',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
//   {
//     id: 10,
//     imageSrc: event11,
//     name: 'Inter College Dance Competition',
//     category: 'Cultural',
//     details: {
//       description: 'Dance teams from various colleges compete with style and energy.',
//       timing: 'Feb 27-28, 2026, 2:00 PM - 6:00 PM',
//       location: 'Amphitheatre Stage',
//       judgingCriteria: 'Choreography, Synchronization, Expression, Costume',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
//   {
//     id: 11,
//     imageSrc: event10,
//     name: 'Rock Band',
//     category: 'Cultural',
//     details: {
//       description: 'Bands compete by performing electrifying live music sets.',
//       timing: 'Feb 28, 2026, 6:30 PM - 9:30 PM',
//       location: 'Amphitheatre Stage',
//       judgingCriteria: 'Music Quality, Stage Presence, Originality, Coordination',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
//   {
//     id: 12,
//     imageSrc: event11,
//     name: 'Short Film Making',
//     category: 'Technical',
//     details: {
//       description: 'Create a short film showcasing storytelling, direction, and editing skills.',
//       timing: 'Feb 27, 2026, 10:00 AM - 4:00 PM',
//       location: 'Block 3 Corridor',
//       judgingCriteria: 'Storytelling, Creativity, Technical Execution, Impact',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
//   {
//     id: 13,
//     imageSrc: event11,
//     name: 'Ad Mad Show',
//     category: 'Cultural',
//     details: {
//       description: 'Create fun and creative advertisements for fictional products.',
//       timing: 'Feb 27, 2026, 11:00 AM - 3:00 PM',
//       location: 'Seminar Hall',
//       judgingCriteria: 'Creativity, Humor, Messaging, Presentation',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
//   {
//     id: 14,
//     imageSrc: event11,
//     name: 'Treasure Hunt',
//     category: 'Technical',
//     details: {
//       description: 'Solve clues and find hidden items in a campus-wide adventure.',
//       timing: 'Feb 27, 2026, 9:00 AM - 1:00 PM',
//       location: 'College Grounds',
//       judgingCriteria: 'Teamwork, Time Management, Problem-Solving',
//       organizer: 'HIET Ghaziabad',
//     },
//   },
// ];

// const winners = [
//   { id: 1, imageSrc: w1, name: 'Winner 1' },
//   { id: 2, imageSrc: w2, name: 'Winner 2' },
//   { id: 3, imageSrc: w3, name: 'Winner 3' },
//   { id: 4, imageSrc: w4, name: 'Winner 4' },
//   { id: 5, imageSrc: w5, name: 'Winner 5' },
//   { id: 6, imageSrc: w6, name: 'Winner 6' },
//   { id: 7, imageSrc: w7, name: 'Winner 7' },
//   { id: 8, imageSrc: w8, name: 'Winner 8' },
//   { id: 9, imageSrc: w9, name: 'Winner 9' },
//   { id: 10, imageSrc: w10, name: 'Winner 10' },
//   { id: 11, imageSrc: w11, name: 'Winner 11' },
//   { id: 12, imageSrc: w12, name: 'Winner 12' },
//   { id: 13, imageSrc: w13, name: 'Winner 13' },
//   { id: 14, imageSrc: w14, name: 'Winner 14' },
// ];
// const EventCard = ({ event, onClick, index }) => {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ duration: 0.7, delay: index * 0.08 }}
//       whileHover={{ y: -12, scale: 1.02 }}
//       className="group relative bg-linear-to-br from-zinc-900/90 to-zinc-800/70 backdrop-blur-sm 
//                  rounded-2xl overflow-hidden border border-zinc-700/40 hover:border-orange-500/40 
//                  transition-all duration-500 cursor-pointer shadow-xl shadow-black/20"
//       onClick={onClick}
//     >
//       <div className="absolute inset-0 bg-linear-to-br from-orange-600/10 via-purple-600/10 to-transparent 
//                       opacity-0 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

//       <div className="relative h-64 overflow-hidden">
//         {!loaded && <div className="absolute inset-0 bg-zinc-800 animate-pulse" />}
//         <motion.img
//           className={`w-full h-full object-cover transition-all duration-700 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
//           src={event.imageSrc}
//           alt={event.name}
//           onLoad={() => setLoaded(true)}
//           whileHover={{ scale: 1.15 }}
//           transition={{ duration: 0.9 }}
//         />
//         <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

//         <div className="absolute top-4 right-4">
//           <span className={`px-4 py-1.5 text-xs font-bold rounded-full tracking-wide shadow-md
//             ${event.category === 'Technical' 
//               ? 'bg-linear-to-r from-orange-600 to-amber-600 text-white' 
//               : 'bg-linear-to-r from-purple-600 to-indigo-600 text-white'}`}>
//             {event.category}
//           </span>
//         </div>
//       </div>

//       <div className="p-6">
//         <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
//           {event.name}
//         </h3>

//         <p className="text-sm text-zinc-400 mb-5 line-clamp-2 leading-relaxed">
//           {event.details.description}
//         </p>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2 text-sm text-zinc-500">
//             <Calendar className="w-4 h-4" />
//             <span>Feb 2026</span>
//           </div>

//           <motion.div
//             className="flex items-center gap-2 text-orange-400 text-sm font-semibold"
//             whileHover={{ x: 6 }}
//           >
//             <span>View Details</span>
//             <ChevronRight className="w-5 h-5" />
//           </motion.div>
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-orange-500 via-purple-500 to-orange-500 
//                       transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
//     </motion.div>
//   );
// };

// const WinnerCard = ({ winner, index }) => {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.88 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.06 }}
//       whileHover={{ scale: 1.08, rotate: 1.5 }}
//       className="group relative rounded-2xl overflow-hidden border border-zinc-700/40 
//                  bg-linear-to-br from-zinc-900 to-zinc-800 shadow-xl shadow-black/25"
//     >
//       <div className="relative h-80 overflow-hidden">
//         {!loaded && <div className="absolute inset-0 bg-zinc-800 animate-pulse" />}
//         <img
//           className={`w-full h-full object-cover transition-all duration-700 ${loaded ? 'scale-100' : 'scale-110 opacity-0'}`}
//           src={winner.imageSrc}
//           alt={winner.name}
//           onLoad={() => setLoaded(true)}
//         />
//         <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent/30" />

//         <div className="absolute top-4 right-4">
//           <motion.div
//             animate={{ rotate: [0, 12, -12, 0] }}
//             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             className="bg-linear-to-br from-yellow-400 via-amber-500 to-orange-600 p-3 rounded-full shadow-lg shadow-amber-600/40"
//           >
//             <Trophy className="w-6 h-6 text-white" />
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Events = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [filter, setFilter] = useState('All');

//   // Countdown Timer Logic
//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const targetDate = new Date('2026-02-27T00:00:00+05:30').getTime(); // IST timezone

//     const updateTimer = () => {
//       const now = new Date().getTime();
//       const difference = targetDate - now;

//       if (difference <= 0) {
//         setTimeLeft({ expired: true });
//         return;
//       }

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//       setTimeLeft({ days, hours, minutes, seconds });
//     };

//     updateTimer();
//     const timerId = setInterval(updateTimer, 1000);

//     return () => clearInterval(timerId);
//   }, []);

//   const filteredEvents = filter === 'All' 
//     ? events 
//     : events.filter(e => e.category === filter);

//   return (
//     <div className="relative min-h-screen bg-zinc-950 overflow-hidden pb-20">
//       {/* Background gradients */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#ff6b1a20_0%,transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#a855f720_0%,transparent_50%)]" />
//       </div>

//       <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//             className="text-center mb-12"
//           >
//             <Sparkles className="w-16 h-16 text-orange-500 mx-auto mb-6 animate-pulse" />
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
//               <span className="text-orange-500">CROSS</span>
//               <span className="bg-linear-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
//                 ROADS
//               </span>
//             </h1>
//             <p className="mt-5 text-xl md:text-2xl text-zinc-400 font-light">
//               Tech + Cultural Fest • February 2026
//             </p>
//           </motion.div>

//           {/* Countdown Timer */}
//           <div className="mb-16">
//             <div className="text-center mb-6">
//               <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
//                 {timeLeft.expired ? "CROSSROADS Has Begun!" : "Event Starts In"}
//               </h2>
//             </div>

//             {!timeLeft.expired ? (
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
//                 {[
//                   { value: timeLeft.days ?? 0, label: "Days" },
//                   { value: timeLeft.hours ?? 0, label: "Hours" },
//                   { value: timeLeft.minutes ?? 0, label: "Minutes" },
//                   { value: timeLeft.seconds ?? 0, label: "Seconds" },
//                 ].map((item, i) => (
//                   <motion.div
//                     key={item.label}
//                     initial={{ scale: 0.9, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ delay: i * 0.1 }}
//                     className="bg-zinc-900/70 backdrop-blur-md rounded-2xl p-5 md:p-7 border border-zinc-700/50 shadow-xl shadow-black/30"
//                   >
//                     <div className="text-4xl md:text-5xl font-black text-orange-400 tracking-tight text-center">
//                       {String(item.value).padStart(2, '0')}
//                     </div>
//                     <div className="text-sm md:text-base text-zinc-400 mt-2 font-medium uppercase tracking-wider text-center">
//                       {item.label}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             ) : (
//               <motion.div
//                 initial={{ scale: 0.9 }}
//                 animate={{ scale: 1 }}
//                 className="text-center text-3xl md:text-5xl font-bold text-orange-500 tracking-wide"
//               >
//                 LET'S GOOO 🚀
//               </motion.div>
//             )}
//           </div>

//           {/* Filter Buttons */}
//           <div className="flex justify-center gap-4 md:gap-6 mb-16 flex-wrap">
//             {['All', 'Technical', 'Cultural'].map((cat) => (
//               <motion.button
//                 key={cat}
//                 whileHover={{ scale: 1.08 }}
//                 whileTap={{ scale: 0.96 }}
//                 onClick={() => setFilter(cat)}
//                 className={`px-8 py-3 rounded-full font-medium text-base transition-all duration-300 shadow-lg
//                   ${filter === cat
//                     ? 'bg-linear-to-r from-orange-600 to-purple-700 text-white shadow-orange-500/30'
//                     : 'bg-zinc-800/80 backdrop-blur-sm text-zinc-300 hover:bg-zinc-700/80 border border-zinc-700'}`}
//               >
//                 {cat}
//               </motion.button>
//             ))}
//           </div>

//           {/* Events Grid */}
//           <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mb-32">
//             <AnimatePresence mode="wait">
//               {filteredEvents.map((event, i) => (
//                 <EventCard
//                   key={event.id}
//                   event={event}
//                   onClick={() => setSelectedEvent(event)}
//                   index={i}
//                 />
//               ))}
//             </AnimatePresence>
//           </motion.div>

//           {/* Hall of Fame */}
//           <motion.section
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             className="mt-32"
//           >
//             <div className="text-center mb-16">
//               <Trophy className="w-16 h-16 text-purple-500 mx-auto mb-6" />
//               <h2 className="text-5xl md:text-6xl font-black bg-linear-to-r from-orange-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
//                 Hall of Fame
//               </h2>
//               <p className="mt-4 text-xl text-zinc-400">Proud Winners • Tech Fest 2024</p>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//               {winners.map((winner, i) => (
//                 <WinnerCard key={winner.id} winner={winner} index={i} />
//               ))}
//             </div>
//           </motion.section>
//         </div>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {selectedEvent && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6"
//             onClick={() => setSelectedEvent(null)}
//           >
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="absolute inset-0 bg-black/75 backdrop-blur-xl"
//             />

//             <motion.div
//               initial={{ scale: 0.8, opacity: 0, y: 60 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.8, opacity: 0, y: 40 }}
//               transition={{ type: "spring", damping: 22, stiffness: 280 }}
//               className="relative bg-linear-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl 
//                          rounded-3xl p-6 sm:p-10 md:p-12 max-w-3xl w-full max-h-[92vh] overflow-y-auto 
//                          border border-zinc-700/60 shadow-2xl shadow-black/60"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedEvent(null)}
//                 className="absolute top-5 right-5 md:top-6 md:right-6 p-3 rounded-full 
//                            bg-zinc-800/80 hover:bg-red-600/80 text-zinc-400 hover:text-white 
//                            transition-all duration-300 z-10 backdrop-blur-sm border border-zinc-700/50"
//               >
//                 <X className="w-6 h-6" />
//               </button>

//               <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
//                 <img
//                   src={selectedEvent.imageSrc}
//                   alt={selectedEvent.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

//                 <div className="absolute bottom-5 left-5">
//                   <span className={`px-4 py-2 text-sm font-bold rounded-full shadow-lg
//                     ${selectedEvent.category === 'Technical' 
//                       ? 'bg-linear-to-r from-orange-600 to-amber-600' 
//                       : 'bg-linear-to-r from-purple-600 to-indigo-600'} text-white`}>
//                     {selectedEvent.category}
//                   </span>
//                 </div>
//               </div>

//               <h3 className="text-3xl md:text-4xl font-extrabold mb-5 bg-linear-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
//                 {selectedEvent.name}
//               </h3>

//               <p className="text-zinc-300 leading-relaxed mb-8 text-lg">
//                 {selectedEvent.details.description}
//               </p>

//               <div className="grid sm:grid-cols-2 gap-5 mb-10">
//                 <div className="flex items-start gap-4 p-5 bg-zinc-800/50 rounded-2xl border border-zinc-700/60">
//                   <Calendar className="w-6 h-6 text-orange-500 mt-1 shrink-0" />
//                   <div>
//                     <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Timing</div>
//                     <div className="text-zinc-200">{selectedEvent.details.timing}</div>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4 p-5 bg-zinc-800/50 rounded-2xl border border-zinc-700/60">
//                   <MapPin className="w-6 h-6 text-purple-500 mt-1 shrink-0" />
//                   <div>
//                     <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Location</div>
//                     <div className="text-zinc-200">{selectedEvent.details.location}</div>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4 p-5 bg-zinc-800/50 rounded-2xl border border-zinc-700/60">
//                   <Trophy className="w-6 h-6 text-orange-500 mt-1 shrink-0" />
//                   <div>
//                     <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Judging</div>
//                     <div className="text-zinc-200">{selectedEvent.details.judgingCriteria}</div>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4 p-5 bg-zinc-800/50 rounded-2xl border border-zinc-700/60">
//                   <Users className="w-6 h-6 text-purple-500 mt-1 shrink-0" />
//                   <div>
//                     <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Organizer</div>
//                     <div className="text-zinc-200">{selectedEvent.details.organizer}</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   onClick={() => setSelectedEvent(null)}
//                   className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold 
//                            rounded-2xl transition-all border border-zinc-700 shadow-lg"
//                 >
//                   Close
//                 </motion.button>

//                 <Link to="/event-registration" className="flex-1">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.97 }}
//                     className="w-full py-4 bg-linear-to-r from-orange-600 to-purple-700 hover:from-orange-700 
//                              hover:to-purple-800 text-white font-bold rounded-2xl transition-all 
//                              shadow-xl shadow-orange-600/30"
//                   >
//                     Register Now →
//                   </motion.button>
//                 </Link>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Events;
import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users, X, Sparkles, ChevronRight } from 'lucide-react';
import event1 from '../assets/coding.jpg';
import event2 from '../assets/project.jpg';
import event3 from '../assets/robo.jpg';
import event4 from '../assets/cultural.jpg';
import event5 from '../assets/rangoli.jpeg';
import event6 from '../assets/food.jpg';
import event9 from '../assets/poster.jpg';
import event10 from '../assets/rock.jpg';
import event11 from '../assets/dance.jpg';
import event12 from '../assets/tresure.jpeg';
import event13 from '../assets/film.jpeg'
import w1 from '../assets/w1.jpg';
import w2 from '../assets/w2.jpg';
import w3 from '../assets/w3.jpg';
import w4 from '../assets/w4.jpg';
import w5 from '../assets/w5.jpg';
import w6 from '../assets/w6.jpg';
import w7 from '../assets/w7.jpg';
import w8 from '../assets/w8.jpg';
import w9 from '../assets/w9.jpg';
import w10 from '../assets/w10.jpg';
import w11 from '../assets/w11.jpg';
import w12 from '../assets/w12.jpg';
import w13 from '../assets/w13.jpg';
import w14 from '../assets/w14.jpg';

const events = [
  {
    id: 1,
    imageSrc: event1,
    name: 'Code Puzzle',
    category: 'Technical',
    details: {
      description: 'A coding quiz to challenge logical and programming skills.',
      timing: 'Feb 27 2026, 9:00 AM - 12:00 PM',
      location: 'Block 1 Lab F',
      judgingCriteria: 'Innovation, Functionality, Design, Presentation',
      organizer: 'HIET Ghaziabad',
    },
  },
  {
    id: 2,
    imageSrc: event2,
    name: 'Project Exhibition',
    category: 'Technical',
    details: {
      description: 'Display and present innovative student projects across domains.',
      timing: 'Feb 27, 2026, 10:00 AM  February 28, 2026, 4:00 PM',
      location: 'Amphitheatre Hall',
      judgingCriteria: 'Originality, Impact, Technical Execution',
      organizer: 'HIET Ghaziabad',
    },
  },
  {
    id: 3,
    imageSrc: event3,
    name: 'Robo Race',
    category: 'Technical',
    details: {
      description: 'Compete with your robots in high-speed challenges.',
      timing: 'Feb 27, 2026, 1:00 PM - 5:00 PM',
      location: 'Hi Tech Ground',
      judgingCriteria: 'Speed, Control, Design, Navigation',
      organizer: 'HIET Ghaziabad',
    },
  },
  {
    id: 4,
    imageSrc: event4,
    name: 'Cultural Events',
    category: 'Cultural',
    details: {
      description: 'Showcase of traditional and contemporary performances.',
      timing: 'Feb 27, 2026, 9:00 AM  February 28, 2026, 6:00 PM',
      location: 'Amphitheatre Stage',
      judgingCriteria: 'Creativity, Presentation, Crowd Engagement',
      organizer: 'HIET Ghaziabad',
    },
  },
  {
    id: 5,
    imageSrc: event5,
    name: 'Rangoli Competition',
    category: 'Cultural',
    details: {
      description: 'Create beautiful rangoli designs using vibrant colors.',
      timing: 'Feb 27, 2026, 10:00 AM - 4:00 PM',
      location: 'Block 2 Courtyard',
      judgingCriteria: 'Creativity, Neatness, Color Usage, Theme Representation',
      organizer: 'HIET Ghaziabad',
    },
  },
  {
    id: 6,
    imageSrc: event6,
    name: 'Food Without Fire',
    category: 'Cultural',
    details: {
      description: 'Prepare delicious dishes without using fire or heat.',
      timing: 'Feb 27, 2026, 9:00 AM - 5:00 PM',
      location: 'Block 3 Cafeteria',
      judgingCriteria: 'Taste, Presentation, Innovation, Hygiene',
      organizer: 'HIET Ghaziabad',
    },
  },
  
 
  {
    id: 9,
    imageSrc: event9,
    name: 'Technical Poster',
    category: 'Technical',
    details: {
      description: 'Present technical concepts and innovations through posters.',
      timing: 'Feb 27, 2026, 9:00 AM - 1:00 PM',
      location: 'Block 1 Corridor',
      judgingCriteria: 'Content Clarity, Design, Innovation, Presentation',
      organizer: 'HIET Ghaziabad',
    },
  },
  {
    id: 10,
    imageSrc: event11,
    name: 'Inter College Dance Competition',
    category: 'Cultural',
    details: {
      description: 'Dance teams from various colleges compete with style and energy.',
      timing: 'Feb 27-28, 2026, 2:00 PM - 6:00 PM',
      location: 'Amphitheatre Stage',
      judgingCriteria: 'Choreography, Synchronization, Expression, Costume',
      organizer: 'HIET Ghaziabad',
    },
  },
  {
    id: 11,
    imageSrc: event10,
    name: 'Rock Band',
    category: 'Cultural',
    details: {
      description: 'Bands compete by performing electrifying live music sets.',
      timing: 'Feb 28, 2026, 6:30 PM - 9:30 PM',
      location: 'Amphitheatre Stage',
      judgingCriteria: 'Music Quality, Stage Presence, Originality, Coordination',
      organizer: 'HIET Ghaziabad',
    },
  },
  {
    id: 12,
    imageSrc: event13,
    name: 'Short Film Making',
    category: 'Technical',
    details: {
      description: 'Create a short film showcasing storytelling, direction, and editing skills.',
      timing: 'Feb 27, 2026, 10:00 AM - 4:00 PM',
      location: 'Block 3 Corridor',
      judgingCriteria: 'Storytelling, Creativity, Technical Execution, Impact',
      organizer: 'HIET Ghaziabad',
    },
  },
 
  {
    id: 13,
    imageSrc: event12,
    name: 'Treasure Hunt',
    category: 'Technical',
    details: {
      description: 'Solve clues and find hidden items in a campus-wide adventure.',
      timing: 'Feb 27, 2026, 9:00 AM - 1:00 PM',
      location: 'College Grounds',
      judgingCriteria: 'Teamwork, Time Management, Problem-Solving',
      organizer: 'HIET Ghaziabad',
    },
  },
];

const winners = [
  { id: 1, imageSrc: w1, name: 'Winner 1' },
  { id: 2, imageSrc: w2, name: 'Winner 2' },
  { id: 3, imageSrc: w3, name: 'Winner 3' },
  { id: 4, imageSrc: w4, name: 'Winner 4' },
  { id: 5, imageSrc: w5, name: 'Winner 5' },
  { id: 6, imageSrc: w6, name: 'Winner 6' },
  { id: 7, imageSrc: w7, name: 'Winner 7' },
  { id: 8, imageSrc: w8, name: 'Winner 8' },
  { id: 9, imageSrc: w9, name: 'Winner 9' },
  { id: 10, imageSrc: w10, name: 'Winner 10' },
  { id: 11, imageSrc: w11, name: 'Winner 11' },
  { id: 12, imageSrc: w12, name: 'Winner 12' },
  { id: 13, imageSrc: w13, name: 'Winner 13' },
  { id: 14, imageSrc: w14, name: 'Winner 14' },
];

const EventCard = ({ event, onClick, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/70 backdrop-blur-sm
                 rounded-2xl overflow-hidden border border-gray-700/40 hover:border-blue-500/40
                 transition-all duration-500 cursor-pointer shadow-xl shadow-black/20"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-sky-600/10 to-transparent
                      opacity-0 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

      <div className="relative h-64 overflow-hidden">
        {!loaded && <div className="absolute inset-0 bg-gray-800 animate-pulse" />}
        <motion.img
          className={`w-full h-full object-cover transition-all duration-700 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          src={event.imageSrc}
          alt={event.name}
          onLoad={() => setLoaded(true)}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.9 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute top-4 right-4">
          <span className={`px-4 py-1.5 text-xs font-bold rounded-full tracking-wide shadow-md
            ${event.category === 'Technical'
              ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white'
              : 'bg-gradient-to-r from-sky-600 to-cyan-500 text-white'}`}>
            {event.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {event.name}
        </h3>

        <p className="text-sm text-gray-400 mb-5 line-clamp-2 leading-relaxed">
          {event.details.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>Feb 2026</span>
          </div>

          <motion.div
            className="flex items-center gap-2 text-blue-400 text-sm font-semibold"
            whileHover={{ x: 6 }}
          >
            <span>View Details</span>
            <ChevronRight className="w-5 h-5" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500
                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </motion.div>
  );
};

const WinnerCard = ({ winner, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      whileHover={{ scale: 1.08, rotate: 1.5 }}
      className="group relative rounded-2xl overflow-hidden border border-gray-700/40
                 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl shadow-black/25"
    >
      <div className="relative h-80 overflow-hidden">
        {!loaded && <div className="absolute inset-0 bg-gray-800 animate-pulse" />}
        <img
          className={`w-full h-full object-cover transition-all duration-700 ${loaded ? 'scale-100' : 'scale-110 opacity-0'}`}
          src={winner.imageSrc}
          alt={winner.name}
          onLoad={() => setLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent/30" />

        <div className="absolute top-4 right-4">
          <motion.div
            animate={{ rotate: [0, 12, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-br from-blue-400 via-blue-500 to-sky-600 p-3 rounded-full shadow-lg shadow-blue-600/40"
          >
            <Trophy className="w-6 h-6 text-white" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState('All');

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date('2026-02-27T00:00:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ expired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  const filteredEvents = filter === 'All'
    ? events
    : events.filter(e => e.category === filter);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden pb-20">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#3b82f620_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#0ea5e920_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center mb-12"
          >
            <Sparkles className="w-16 h-16 text-blue-500 mx-auto mb-6 animate-pulse" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="text-blue-500">CROSS</span>
              <span className="bg-gradient-to-r from-sky-400 via-white to-blue-400 bg-clip-text text-transparent">
                ROADS
              </span>
            </h1>
            <p className="mt-5 text-xl md:text-2xl text-gray-400 font-light">
              Tech + Cultural Fest • February 2026
            </p>
          </motion.div>

          <div className="mb-16">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-sky-500 bg-clip-text text-transparent">
                {timeLeft.expired ? "CROSSROADS Has Begun!" : "Event Starts In"}
              </h2>
            </div>

            {!timeLeft.expired ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
                {[
                  { value: timeLeft.days ?? 0, label: "Days" },
                  { value: timeLeft.hours ?? 0, label: "Hours" },
                  { value: timeLeft.minutes ?? 0, label: "Minutes" },
                  { value: timeLeft.seconds ?? 0, label: "Seconds" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-5 md:p-7 border border-gray-700/50 shadow-xl shadow-black/30"
                  >
                    <div className="text-4xl md:text-5xl font-black text-blue-400 tracking-tight text-center">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-sm md:text-base text-gray-400 mt-2 font-medium uppercase tracking-wider text-center">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-center text-3xl md:text-5xl font-bold text-blue-500 tracking-wide"
              >
                LET'S GOOO
              </motion.div>
            )}
          </div>

          <div className="flex justify-center gap-4 md:gap-6 mb-16 flex-wrap">
            {['All', 'Technical', 'Cultural'].map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-medium text-base transition-all duration-300 shadow-lg
                  ${filter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-sky-700 text-white shadow-blue-500/30'
                    : 'bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-700/80 border border-gray-700'}`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mb-32">
            <AnimatePresence mode="wait">
              {filteredEvents.map((event, i) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                  index={i}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <Trophy className="w-16 h-16 text-sky-500 mx-auto mb-6" />
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Hall of Fame
              </h2>
              <p className="mt-4 text-xl text-gray-400">Proud Winners • Tech Fest 2024</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {winners.map((winner, i) => (
                <WinnerCard key={winner.id} winner={winner} index={i} />
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/75 backdrop-blur-xl"
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl
                         rounded-3xl p-6 sm:p-10 md:p-12 max-w-3xl w-full max-h-[92vh] overflow-y-auto
                         border border-gray-700/60 shadow-2xl shadow-black/60"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-5 right-5 md:top-6 md:right-6 p-3 rounded-full
                           bg-gray-800/80 hover:bg-red-600/80 text-gray-400 hover:text-white
                           transition-all duration-300 z-10 backdrop-blur-sm border border-gray-700/50"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
                <img
                  src={selectedEvent.imageSrc}
                  alt={selectedEvent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className={`px-4 py-2 text-sm font-bold rounded-full shadow-lg
                    ${selectedEvent.category === 'Technical'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500'
                      : 'bg-gradient-to-r from-sky-600 to-cyan-500'} text-white`}>
                    {selectedEvent.category}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold mb-5 bg-gradient-to-r from-blue-400 to-sky-500 bg-clip-text text-transparent">
                {selectedEvent.name}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                {selectedEvent.details.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                <div className="flex items-start gap-4 p-5 bg-gray-800/50 rounded-2xl border border-gray-700/60">
                  <Calendar className="w-6 h-6 text-blue-500 mt-1 shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Timing</div>
                    <div className="text-gray-200">{selectedEvent.details.timing}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-800/50 rounded-2xl border border-gray-700/60">
                  <MapPin className="w-6 h-6 text-sky-500 mt-1 shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Location</div>
                    <div className="text-gray-200">{selectedEvent.details.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-800/50 rounded-2xl border border-gray-700/60">
                  <Trophy className="w-6 h-6 text-blue-500 mt-1 shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Judging</div>
                    <div className="text-gray-200">{selectedEvent.details.judgingCriteria}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-800/50 rounded-2xl border border-gray-700/60">
                  <Users className="w-6 h-6 text-sky-500 mt-1 shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Organizer</div>
                    <div className="text-gray-200">{selectedEvent.details.organizer}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedEvent(null)}
                  className="flex-1 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold
                           rounded-2xl transition-all border border-gray-700 shadow-lg"
                >
                  Close
                </motion.button>

                <Link to="/event-registration" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-sky-700 hover:from-blue-700
                             hover:to-sky-800 text-white font-bold rounded-2xl transition-all
                             shadow-xl shadow-blue-600/30"
                  >
                    Register Now →
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
