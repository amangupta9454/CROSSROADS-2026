
// import { useState } from 'react';
// // eslint-disable-next-line no-unused-vars
// import { motion } from 'framer-motion';
// import Select from 'react-select';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import {
//   Loader2,
//   User,
//   Mail,
//   Phone,
//   Users,
//   BookOpen,
//   GraduationCap,
//   FileUp,
//   CheckCircle2,
//   ArrowRight,
//   Check,
//   X,
//   Edit,
// } from 'lucide-react';

// const events = [
//   { value: 'code-puzzle', label: 'Code Puzzle', icon: '💻', category: 'technical' },
//   { value: 'project-exhibition', label: 'Project Exhibition', icon: '🔬', category: 'technical' },
//   { value: 'robo-race', label: 'Robo Race', icon: '🤖', category: 'technical' },
//   { value: 'technical-poster', label: 'Technical Poster Presentation', icon: '📊', category: 'technical' },
//   { value: 'cultural-events', label: 'Cultural Events', icon: '🎭', category: 'cultural' },
//   { value: 'rangoli-competition', label: 'Rangoli Competition', icon: '🎨', category: 'cultural' },
//   { value: 'food-without-fire', label: 'Food Without Fire', icon: '🍳', category: 'cultural' },
//   // { value: 'nukkad-natak', label: 'Nukkad Natak', icon: '🎪', category: 'cultural' },
//   // { value: 'singing', label: 'Singing', icon: '🎤', category: 'cultural' },
//   { value: 'dance-competition', label: 'Dance Competition', icon: '💃', category: 'cultural' },
//   { value: 'rock-band', label: 'Rock Band', icon: '🎸', category: 'cultural' },
//   { value: 'short-film-maker', label: 'Reel Making', icon: '🎬', category: 'cultural' },
//   // { value: 'ad-mad-show', label: 'Ad Mad Show', icon: '📺', category: 'cultural' },
//   { value: 'treasure-hunt', label: 'Treasure Hunt', icon: '🗺️', category: 'fun' },
// ];

// const colleges = [
//   "ABES Engineering College, Ghaziabad",
//   "ABESIT Group of Institutions, Ghaziabad",
//   "Accurate Institute of Technology & Management, Greater Noida",
//   "Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad",
//   "Amity University, Noida",
//   "Babu Banarsi Das Institute of Technology (BBDIT), Ghaziabad",
//   "Bhagwati Institute of Technology, Ghaziabad",
//   "Bharti College, University of Delhi (DU)",
//   "Galgotias University, Greater Noida",
//   "Galgotias College of Engineering & Technology, Greater Noida",
//   "GL Bajaj Institute of Technology & Management, Greater Noida",
//   "GNIOT Group of Institutions, Greater Noida",
//   "H.R. Group of Institutions, Ghaziabad",
//   "HI-TECH Institute of Engineering & Technology, Ghaziabad",
//   "HIMT Group of Institutions, Greater Noida",
//   "Ideal Institute of Technology, Ghaziabad",
//   "Inderprastha Engineering College (IPEC), Ghaziabad",
//   "Institute of Information Technology & Management (IITM), Delhi",
//   "Institute of Management Studies (IMS), Ghaziabad",
//   "IMS Engineering College, Ghaziabad",
//   "INMANTEC Institutions, Ghaziabad",
//   "ITS Engineering College, Greater Noida",
//   "ITS Engineering College, Mohan Nagar",
//   "Jaypee Institute of Information Technology (JIIT), Noida",
//   "JIMS Rohini (Jagan Institute of Management Studies), Delhi",
//   "JSS Academy of Technical Education (JSSATE), Noida",
//   "JSM Institute of Technology, Ghaziabad",
//   "KIET Group of Institutions, Ghaziabad",
//   "Lajpat Rai College, Delhi",
//   "MMH College, Ghaziabad",
//   "Noida Institute of Engineering & Technology (NIET), Greater Noida",
//   "PGDAV College, University of Delhi (DU)",
//   "R.D. Engineering College (RDEC), Ghaziabad",
//   "RKGIT (Raj Kumar Goel Institute of Technology), Ghaziabad",
//   "Shaheed Rajguru College of Applied Sciences for Women, University of Delhi",
//   "Shambhu Dayal College (SD PG College), Ghaziabad",
//   "Sharda University, Greater Noida",
//   "Sunder Deep Engineering College, Ghaziabad",
//   "OTHER"
// ].map(inst => ({ value: inst, label: inst }));

// const schools = [
//   'Delhi Public School (DPS), Ghaziabad',
//   'Kendriya Vidyalaya, Ghaziabad',
//   'OTHER'
// ].map(inst => ({ value: inst, label: inst }));

// const courses = ['btech', 'bpharma', 'bca', 'bba', 'bcom', 'bsc', 'polytechnic', 'mtech', 'mpharma', 'mca', 'mba', 'mcom', 'msc', 'bed']
//   .map(c => ({ value: c, label: c.toUpperCase() }));

// const branches = ['cse & allied branches', 'it', 'ece', 'me', 'ee', 'civil', 'cse', 'Others']
//   .map(b => ({ value: b, label: b.toUpperCase() }));

// const years = [1, 2, 3, 4].map(y => {
//   const suffix = y === 1 ? "st" :
//                  y === 2 ? "nd" :
//                  y === 3 ? "rd" : "th";

//   return {
//     value: y,
//     label: `${y}${suffix} Year`
//   };
// });


// const classes = [9, 10, 11, 12].map(c => ({ value: c, label: `Class ${c}` }));

// const teamSizes = Array.from({ length: 10 }, (_, i) => i + 1).map(s => ({
//   value: s,
//   label: `${s} ${s === 1 ? 'Solo' : 'Members'}`,
// }));

// const customSelectStyles = {
//   control: (base, state) => ({
//     ...base,
//     backgroundColor: 'rgba(15, 23, 42, 0.6)',
//     borderColor: state.isFocused ? 'rgba(249, 115, 22, 0.8)' : 'rgba(249, 115, 22, 0.2)',
//     borderWidth: '2px',
//     color: '#fff',
//     minHeight: '50px',
//     boxShadow: state.isFocused ? '0 0 20px rgba(249, 115, 22, 0.3)' : 'none',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '12px',
//   }),
//   option: (base, state) => ({
//     ...base,
//     backgroundColor: state.isSelected ? 'rgb(249, 115, 22)' : state.isFocused ? 'rgba(249, 115, 22, 0.15)' : 'rgba(15, 23, 42, 0.8)',
//     color: state.isSelected ? '#fff' : '#e5e7eb',
//     padding: '12px',
//     borderRadius: '8px',
//   }),
//   menu: (base) => ({
//     ...base,
//     backgroundColor: 'rgba(15, 23, 42, 0.95)',
//     border: '2px solid rgba(249, 115, 22, 0.2)',
//     backdropFilter: 'blur(20px)',
//     borderRadius: '12px',
//   }),
//   singleValue: (base) => ({ ...base, color: '#fff' }),
//   placeholder: (base) => ({ ...base, color: 'rgba(229, 231, 235, 0.4)' }),
// };

// const RegistrationForm = () => {
//   const [step, setStep] = useState('form'); // 'form' | 'review' | 'thankyou'
//   const [formData, setFormData] = useState({
//     teamName: '',
//     leaderName: '',
//     leaderMobile: '',
//     leaderWhatsapp: '',
//     leaderEmail: '',
//     leaderRollNo: '',
//     event: null,
//     teamSize: 1,
//     teamMembers: [],
//     institution: null,
//     studentType: 'college',
//     course: null,
//     branch: null,
//     year: null,
//     class: null,
//     idProof: null,
//     idProofPreview: null,
//     idProofSize: null,
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [progress, setProgress] = useState(0);

//   const validateField = (name, value) => {
//     let error = '';
//     if (name === 'teamName' && value.trim().length < 3) error = 'Team name must be at least 3 characters';
//     if (name === 'leaderName' && value.trim().length < 3) error = 'Name must be at least 3 characters';
//     if (name === 'leaderEmail' && !/\S+@\S+\.\S+/.test(value)) error = 'Invalid email';
//     if (['leaderMobile', 'leaderWhatsapp'].includes(name) && (!/^[6-9]\d{9}$/.test(value))) error = 'Invalid Indian mobile number';
//     if (name === 'leaderRollNo' && !value.trim()) error = 'Roll No / ID is required';
//     return error;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     const error = validateField(name, value);
//     setErrors(prev => ({ ...prev, [name]: error }));
//   };

//   const handleSelect = (name, selected) => {
//     setFormData(prev => ({ ...prev, [name]: selected }));
//     setErrors(prev => ({ ...prev, [name]: '' }));
//   };

//   const handleTeamSize = (selected) => {
//     const size = selected.value;
//     const members = Array.from({ length: size - 1 }, () => ({ name: '', email: '' }));
//     setFormData(prev => ({ ...prev, teamSize: size, teamMembers: members }));
//   };

//   const handleMemberChange = (index, field, value) => {
//     const members = [...formData.teamMembers];
//     members[index][field] = value;
//     setFormData(prev => ({ ...prev, teamMembers: members }));
//   };

//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (file.size > 3 * 1024 * 1024) {
//       toast.error('File size must be less than 3MB');
//       return;
//     }
//     if (!file.type.startsWith('image/')) {
//       toast.error('Please upload an image file');
//       return;
//     }

//     const previewUrl = URL.createObjectURL(file);
//     const sizeKB = (file.size / 1024).toFixed(2);

//     setFormData(prev => ({
//       ...prev,
//       idProof: file,
//       idProofPreview: previewUrl,
//       idProofSize: sizeKB,
//     }));
//     setErrors(prev => ({ ...prev, idProof: '' }));
//     toast.success('ID proof uploaded successfully');
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     // Required fields
//     if (formData.teamName.trim().length < 3) newErrors.teamName = 'Team name must be at least 3 characters';
//     if (formData.leaderName.trim().length < 3) newErrors.leaderName = 'Name must be at least 3 characters';
//     if (!/\S+@\S+\.\S+/.test(formData.leaderEmail)) newErrors.leaderEmail = 'Invalid email';
//     if (!/^[6-9]\d{9}$/.test(formData.leaderMobile)) newErrors.leaderMobile = 'Invalid mobile number';
//     if (!/^[6-9]\d{9}$/.test(formData.leaderWhatsapp)) newErrors.leaderWhatsapp = 'Invalid WhatsApp number';
//     if (!formData.leaderRollNo.trim()) newErrors.leaderRollNo = 'Roll No / ID is required';

//     if (!formData.event) newErrors.event = 'Please select an event';
//     if (!formData.institution) newErrors.institution = 'Please select institution';
//     if (!formData.idProof) newErrors.idProof = 'Please upload ID proof';

//     // Team members validation
//     formData.teamMembers.forEach((m, i) => {
//       if (m.name.trim().length < 3) newErrors[`memberName${i}`] = 'Name must be at least 3 characters';
//       if (!/\S+@\S+\.\S+/.test(m.email)) newErrors[`memberEmail${i}`] = 'Invalid email';
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setStep('review');
//     } else {
//       toast.error('Please fix the errors before proceeding');
//     }
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     setProgress(0);

//     const submitData = {
//       ...formData,
//       institution: formData.institution?.value,
//       course: formData.course?.value,
//       branch: formData.branch?.value,
//       year: formData.year?.value,
//       class: formData.class?.value,
//       event: formData.event ? {
//         value: formData.event.value,
//         label: formData.event.label,
//         category: formData.event.category
//       } : null,
//     };

//     const data = new FormData();
//     data.append('data', JSON.stringify(submitData));
//     if (formData.idProof) data.append('idProof', formData.idProof);

//     try {
//       await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/registrations`, data, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//         onUploadProgress: (prog) => {
//           const percent = Math.round((prog.loaded * 100) / prog.total);
//           setProgress(percent);
//         },
//       });

//       setStep('thankyou');
//       toast.success('Registration successful!');
//     } catch (err) {
//       console.error(err);
//       toast.error(err.response?.data?.message || 'Something went wrong');
//       // Still show thank you page in case partial success occurred
//       setStep('thankyou');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getInputClasses = (hasError) => `
//     w-full bg-white/5 border-2 rounded-xl px-4 py-3 text-white placeholder-gray-500 
//     focus:outline-none focus:ring-2 transition-all duration-300 backdrop-blur-sm
//     ${hasError
//       ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20 hover:border-red-500/40'
//       : 'border-orange-500/20 focus:border-orange-500/60 focus:ring-orange-500/20 hover:border-orange-500/40'}
//     focus:shadow-[0_0_15px_rgba(249,115,22,0.3)]
//   `;

//   const renderForm = () => (
//     <motion.form
//       onSubmit={handleNext}
//       className="bg-linear-to-br from-slate-900/40 via-blue-900/20 to-slate-900/40 backdrop-blur-2xl border border-orange-500/20 rounded-3xl shadow-2xl overflow-hidden"
//       style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 0 60px rgba(249, 115, 22, 0.1)' }}
//     >
//       <div className="h-1.5 bg-linear-to-r from-orange-500 via-purple-500 to-orange-500" />

//       <div className="p-6 sm:p-8 md:p-12 lg:p-16 space-y-12">
//         {/* Team Information */}
//         <div>
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-10 h-10 rounded-lg bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center">
//               <Users size={24} className="text-white" />
//             </div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-white">Team Information</h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {[
//               { name: 'teamName', label: 'Team Name *', placeholder: 'Enter your team name' },
//               { name: 'leaderName', label: 'Leader Name *', placeholder: 'Full name' },
//               { name: 'leaderMobile', label: 'Mobile Number *', placeholder: '10-digit number' },
//               { name: 'leaderWhatsapp', label: 'WhatsApp Number *', placeholder: '10-digit number' },
//               { name: 'leaderEmail', label: 'Email Address *', placeholder: 'your.email@example.com' },
//               { name: 'leaderRollNo', label: 'Roll No / ID *', placeholder: 'Student ID' },
//             ].map((field) => (
//               <div key={field.name} className="space-y-2 relative">
//                 <label className="block text-sm font-semibold text-gray-300">{field.label}</label>
//                 <div className="relative">
//                   <input
//                     name={field.name}
//                     placeholder={field.placeholder}
//                     value={formData[field.name]}
//                     onChange={handleChange}
//                     className={getInputClasses(errors[field.name])}
//                   />
//                   {errors[field.name] ? (
//                     <X className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" size={20} />
//                   ) : formData[field.name] && (
//                     <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={20} />
//                   )}
//                 </div>
//                 {errors[field.name] && (
//                   <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Event & Team Size */}
//         <div>
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500 to-purple-600 flex items-center justify-center text-xl">
//               🎯
//             </div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-white">Event Details</h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-gray-300">Select Event *</label>
//               <Select
//                 options={events}
//                 value={formData.event}
//                 onChange={(sel) => handleSelect('event', sel)}
//                 placeholder="Choose your event..."
//                 styles={customSelectStyles}
//                 isSearchable
//               />
//               {errors.event && <p className="text-red-400 text-xs mt-1">{errors.event}</p>}
//             </div>

//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-gray-300">Team Size</label>
//               <Select
//                 options={teamSizes}
//                 value={teamSizes.find(s => s.value === formData.teamSize)}
//                 onChange={handleTeamSize}
//                 placeholder="Select team size..."
//                 styles={customSelectStyles}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Team Members */}
//         {formData.teamMembers.length > 0 && (
//           <div className="p-6 bg-white/5 border border-purple-500/20 rounded-2xl">
//             <h3 className="text-lg font-bold text-purple-400 mb-6">Team Members</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {formData.teamMembers.map((member, index) => (
//                 <div key={index} className="space-y-4">
//                   <div className="relative">
//                     <input
//                       placeholder={`Member ${index + 2} Name`}
//                       value={member.name}
//                       onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
//                       className={getInputClasses(errors[`memberName${index}`])}
//                     />
//                     {errors[`memberName${index}`] ? (
//                       <X className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" size={20} />
//                     ) : member.name && (
//                       <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={20} />
//                     )}
//                   </div>
//                   {errors[`memberName${index}`] && (
//                     <p className="text-red-400 text-xs">{errors[`memberName${index}`]}</p>
//                   )}

//                   <div className="relative">
//                     <input
//                       placeholder={`Member ${index + 2} Email`}
//                       value={member.email}
//                       onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
//                       className={getInputClasses(errors[`memberEmail${index}`])}
//                     />
//                     {errors[`memberEmail${index}`] ? (
//                       <X className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" size={20} />
//                     ) : member.email && (
//                       <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={20} />
//                     )}
//                   </div>
//                   {errors[`memberEmail${index}`] && (
//                     <p className="text-red-400 text-xs">{errors[`memberEmail${index}`]}</p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Academic Information */}
//         <div>
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center">
//               <GraduationCap size={24} className="text-white" />
//             </div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-white">Academic Information</h2>
//           </div>

//           <div className="space-y-6">
//             <div className="space-y-3">
//               <label className="block text-sm font-semibold text-gray-300">Student Type</label>
//               <div className="flex gap-6">
//                 {['college', 'school'].map(type => (
//                   <label key={type} className="flex items-center gap-2 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="studentType"
//                       value={type}
//                       checked={formData.studentType === type}
//                       onChange={handleChange}
//                       className="w-5 h-5 accent-orange-500"
//                     />
//                     <span className="text-gray-300 capitalize">{type}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-gray-300">Institution *</label>
//               <Select
//                 options={formData.studentType === 'college' ? colleges : schools}
//                 value={formData.institution}
//                 onChange={(sel) => handleSelect('institution', sel)}
//                 placeholder="Select your institution..."
//                 styles={customSelectStyles}
//                 isSearchable
//               />
//               {errors.institution && <p className="text-red-400 text-xs mt-1">{errors.institution}</p>}
//             </div>

//             {formData.studentType === 'college' ? (
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-gray-300">Course</label>
//                   <Select options={courses} value={formData.course} onChange={(sel) => handleSelect('course', sel)} styles={customSelectStyles} />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-gray-300">Branch</label>
//                   <Select options={branches} value={formData.branch} onChange={(sel) => handleSelect('branch', sel)} styles={customSelectStyles} />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-gray-300">Year</label>
//                   <Select options={years} value={formData.year} onChange={(sel) => handleSelect('year', sel)} styles={customSelectStyles} />
//                 </div>
//               </div>
//             ) : (
//               <div className="space-y-2">
//                 <label className="text-sm font-semibold text-gray-300">Class</label>
//                 <Select options={classes} value={formData.class} onChange={(sel) => handleSelect('class', sel)} styles={customSelectStyles} />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ID Proof */}
//         <div>
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-500 to-green-600 flex items-center justify-center">
//               <FileUp size={24} className="text-white" />
//             </div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-white">ID Proof</h2>
//           </div>

//           <label
//             htmlFor="idProof"
//             className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-dashed border-orange-500/40 rounded-2xl cursor-pointer hover:border-orange-500/60 transition-colors bg-white/5 backdrop-blur-sm"
//           >
//             <FileUp size={48} className="text-orange-500" />
//             <div className="text-center">
//               <p className="text-gray-300 font-medium">
//                 {formData.idProof ? formData.idProof.name : 'Click to upload ID Proof'}
//               </p>
//               <p className="text-gray-500 text-sm mt-1">PNG, JPG • Max 3MB</p>
//             </div>
//           </label>
//           <input
//             id="idProof"
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleFile}
//           />

//           {errors.idProof && <p className="text-red-400 text-xs mt-2">{errors.idProof}</p>}

//           {formData.idProof && (
//             <div className="mt-4 flex items-center gap-3 text-green-400 text-sm">
//               <CheckCircle2 size={18} />
//               <span>{formData.idProof.name} ({formData.idProofSize} KB)</span>
//             </div>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-4 px-6 bg-linear-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-60"
//         >
//           {loading ? (
//             <>
//               <Loader2 className="animate-spin" size={22} />
//               <span>Processing...</span>
//             </>
//           ) : (
//             <>
//               <CheckCircle2 size={22} />
//               <span>Review & Submit</span>
//               <ArrowRight size={22} />
//             </>
//           )}
//         </button>
//       </div>
//     </motion.form>
//   );

//   const renderReview = () => (
//     <motion.div
//       initial={{ opacity: 0, x: 30 }}
//       animate={{ opacity: 1, x: 0 }}
//       className="bg-linear-to-br from-slate-900/40 via-blue-900/20 to-slate-900/40 backdrop-blur-2xl border border-orange-500/20 rounded-3xl p-8 shadow-2xl"
//     >
//       <h2 className="text-3xl font-bold text-white text-center mb-10">Review Your Registration</h2>

//       <div className="space-y-8">
//         <div className="flex justify-between items-start">
//           <div>
//             <p className="text-gray-400 text-sm">Team Name</p>
//             <p className="text-white text-lg font-medium">{formData.teamName}</p>
//           </div>
//           <button onClick={() => setStep('form')} className="text-orange-400 hover:text-orange-300 flex items-center gap-1 text-sm">
//             <Edit size={16} /> Edit
//           </button>
//         </div>

//         <div className="flex justify-between items-start">
//           <div>
//             <p className="text-gray-400 text-sm">Event</p>
//             <p className="text-white text-lg font-medium">{formData.event?.label}</p>
//           </div>
//           <button onClick={() => setStep('form')} className="text-orange-400 hover:text-orange-300 flex items-center gap-1 text-sm">
//             <Edit size={16} /> Edit
//           </button>
//         </div>

//         <div>
//           <p className="text-gray-400 text-sm mb-2">Team Members</p>
//           <div className="bg-white/5 rounded-lg p-4">
//             <p className="text-white">Leader: {formData.leaderName} ({formData.leaderEmail})</p>
//             {formData.teamMembers.map((m, i) => (
//               <p key={i} className="text-white mt-1">
//                 Member {i + 2}: {m.name} ({m.email})
//               </p>
//             ))}
//           </div>
//           <button onClick={() => setStep('form')} className="text-orange-400 hover:text-orange-300 flex items-center gap-1 text-sm mt-2">
//             <Edit size={16} /> Edit
//           </button>
//         </div>

//         <div>
//           <p className="text-gray-400 text-sm mb-2">ID Proof</p>
//           {formData.idProofPreview ? (
//             <img
//               src={formData.idProofPreview}
//               alt="ID Proof Preview"
//               className="max-h-64 object-contain rounded-lg border border-orange-500/30 mx-auto"
//             />
//           ) : (
//             <p className="text-gray-300">No ID proof uploaded</p>
//           )}
//           <button onClick={() => setStep('form')} className="text-orange-400 hover:text-orange-300 flex items-center gap-1 text-sm mt-2">
//             <Edit size={16} /> Edit
//           </button>
//         </div>
//       </div>

//       <div className="flex gap-4 mt-12">
//         <button
//           onClick={() => setStep('form')}
//           className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-colors"
//         >
//           Back
//         </button>

//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className="flex-1 py-3 bg-linear-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60"
//         >
//           {loading ? (
//             <>
//               <Loader2 className="animate-spin" size={20} />
//               <span>Submitting...</span>
//             </>
//           ) : (
//             'Confirm & Submit'
//           )}
//         </button>
//       </div>
//     </motion.div>
//   );

//   const renderThankYou = () => (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       className="bg-linear-to-br from-slate-900/40 via-blue-900/20 to-slate-900/40 backdrop-blur-2xl border border-orange-500/20 rounded-3xl p-10 text-center shadow-2xl"
//     >
//       <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto mb-6" />
//       <h2 className="text-4xl font-bold text-white mb-4">Thank You!</h2>
//       <p className="text-xl text-gray-300 mb-6">
//         Your registration for <span className="text-purple-400 font-semibold">{formData.event?.label}</span> has been successfully submitted.
//       </p>
//       <p className="text-gray-400 mb-8">
//         A confirmation email has been sent to <span className="text-orange-400">{formData.leaderEmail}</span>.<br />
//         Check your inbox (and spam folder) for details.
//       </p>
//       <button
//         onClick={() => window.location.reload()}
//         className="py-3 px-8 bg-linear-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all"
//       >
//         Register Another Team
//       </button>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-8">
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-orange-400 via-orange-500 to-purple-500 bg-clip-text text-transparent mb-4">
//             CROSSROADS 2026
//           </h1>
//           <p className="text-gray-400 text-xl">Join the ultimate fest of innovation & creativity</p>
//         </div>

//         {step === 'form' && renderForm()}
//         {step === 'review' && renderReview()}
//         {step === 'thankyou' && renderThankYou()}
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Select from 'react-select';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
  Loader2,
  Users,
  GraduationCap,
  FileUp,
  CheckCircle2,
  ArrowRight,
  Check,
  X,
  Edit,
} from 'lucide-react';

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
].map(inst => ({ value: inst, label: inst }));

const schools = [
  'Delhi Public School (DPS), Ghaziabad',
  'Kendriya Vidyalaya, Ghaziabad',
  'OTHER'
].map(inst => ({ value: inst, label: inst }));

const courses = ['btech', 'bpharma', 'bca', 'bba', 'bcom', 'bsc', 'polytechnic', 'mtech', 'mpharma', 'mca', 'mba', 'mcom', 'msc', 'bed']
  .map(c => ({ value: c, label: c.toUpperCase() }));

const branches = ['cse & allied branches', 'it', 'ece', 'me', 'ee', 'civil', 'cse', 'Others']
  .map(b => ({ value: b, label: b.toUpperCase() }));

const years = [1, 2, 3, 4].map(y => {
  const suffix = y === 1 ? "st" :
                 y === 2 ? "nd" :
                 y === 3 ? "rd" : "th";
  return { value: y, label: `${y}${suffix} Year` };
});

const classes = [9, 10, 11, 12].map(c => ({ value: c, label: `Class ${c}` }));

const baseTeamSizes = Array.from({ length: 10 }, (_, i) => i + 1).map(s => ({
  value: s,
  label: `${s} ${s === 1 ? 'Solo' : 'Members'}`,
}));

const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    borderColor: state.isFocused ? 'rgba(249, 115, 22, 0.8)' : 'rgba(249, 115, 22, 0.2)',
    borderWidth: '2px',
    color: '#fff',
    minHeight: '50px',
    boxShadow: state.isFocused ? '0 0 20px rgba(249, 115, 22, 0.3)' : 'none',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? 'rgb(249, 115, 22)' : state.isFocused ? 'rgba(249, 115, 22, 0.15)' : 'rgba(15, 23, 42, 0.8)',
    color: state.isSelected ? '#fff' : '#e5e7eb',
    padding: '12px',
    borderRadius: '8px',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    border: '2px solid rgba(249, 115, 22, 0.2)',
    backdropFilter: 'blur(20px)',
    borderRadius: '12px',
  }),
  singleValue: (base) => ({ ...base, color: '#fff' }),
  placeholder: (base) => ({ ...base, color: 'rgba(229, 231, 235, 0.4)' }),
};

const RegistrationForm = () => {
  const [step, setStep] = useState('form');
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderMobile: '',
    leaderWhatsapp: '',
    leaderEmail: '',
    leaderRollNo: '',
    event: null,
    teamSize: 1,
    teamMembers: [],
    institution: null,
    studentType: 'college',
    course: null,
    branch: null,
    year: null,
    class: null,
    idProof: null,
    idProofPreview: null,
    idProofSize: null,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // ──────────────────────────────────────────────
  //  Team size rules – ONLY Code Puzzle is fixed to 1
  //  All other events including Treasure Hunt → 1 to 4
  // ──────────────────────────────────────────────
  const getAllowedTeamSizes = (eventValue) => {
    if (!eventValue) return baseTeamSizes.slice(0, 4); // 1–4 before event selected

    if (eventValue === 'code-puzzle') {
      return [{ value: 1, label: '1 (Solo – Leader only)' }];
    }

    // Every other event (including treasure-hunt) → 1 to 4
    return baseTeamSizes.slice(0, 4);
  };

  const validateField = (name, value) => {
    let error = '';
    if (name === 'teamName' && value.trim().length < 3) error = 'Team name must be at least 3 characters';
    if (name === 'leaderName' && value.trim().length < 3) error = 'Name must be at least 3 characters';
    if (name === 'leaderEmail' && !/\S+@\S+\.\S+/.test(value)) error = 'Invalid email';
    if (['leaderMobile', 'leaderWhatsapp'].includes(name) && (!/^[6-9]\d{9}$/.test(value))) error = 'Invalid Indian mobile number';
    if (name === 'leaderRollNo' && !value.trim()) error = 'Roll No / ID is required';
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSelect = (name, selected) => {
    setFormData(prev => {
      let updated = { ...prev, [name]: selected };

      if (name === 'event' && selected) {
        const allowed = getAllowedTeamSizes(selected.value);
        const defaultSize = allowed[0]?.value || 1;
        const newMembers = Array.from({ length: defaultSize - 1 }, () => ({ name: '', email: '' }));

        updated = {
          ...updated,
          teamSize: defaultSize,
          teamMembers: newMembers,
        };
      }

      return updated;
    });
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleTeamSize = (selected) => {
    if (!selected) return;
    const size = selected.value;
    const members = Array.from({ length: size - 1 }, () => ({ name: '', email: '' }));
    setFormData(prev => ({ ...prev, teamSize: size, teamMembers: members }));
    setErrors(prev => ({ ...prev, teamSize: '' }));
  };

  const handleMemberChange = (index, field, value) => {
    const members = [...formData.teamMembers];
    members[index][field] = value;
    setFormData(prev => ({ ...prev, teamMembers: members }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      toast.error('File size must be less than 3MB');
      return;
    }
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }
    const previewUrl = URL.createObjectURL(file);
    const sizeKB = (file.size / 1024).toFixed(2);
    setFormData(prev => ({
      ...prev,
      idProof: file,
      idProofPreview: previewUrl,
      idProofSize: sizeKB,
    }));
    setErrors(prev => ({ ...prev, idProof: '' }));
    toast.success('ID proof uploaded successfully');
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.teamName.trim().length < 3) newErrors.teamName = 'Team name must be at least 3 characters';
    if (formData.leaderName.trim().length < 3) newErrors.leaderName = 'Name must be at least 3 characters';
    if (!/\S+@\S+\.\S+/.test(formData.leaderEmail)) newErrors.leaderEmail = 'Invalid email';
    if (!/^[6-9]\d{9}$/.test(formData.leaderMobile)) newErrors.leaderMobile = 'Invalid mobile number';
    if (!/^[6-9]\d{9}$/.test(formData.leaderWhatsapp)) newErrors.leaderWhatsapp = 'Invalid WhatsApp number';
    if (!formData.leaderRollNo.trim()) newErrors.leaderRollNo = 'Roll No / ID is required';
    if (!formData.event) newErrors.event = 'Please select an event';
    if (!formData.institution) newErrors.institution = 'Please select institution';
    if (!formData.idProof) newErrors.idProof = 'Please upload ID proof';

    // Team size validation
    if (formData.event) {
      const allowed = getAllowedTeamSizes(formData.event.value).map(opt => opt.value);
      if (!allowed.includes(formData.teamSize)) {
        newErrors.teamSize = `Team size must be ${allowed.length === 1 ? allowed[0] : allowed.join(' or ')} for this event`;
      }
    }

    formData.teamMembers.forEach((m, i) => {
      if (m.name.trim().length < 3) newErrors[`memberName${i}`] = 'Name must be at least 3 characters';
      if (!/\S+@\S+\.\S+/.test(m.email)) newErrors[`memberEmail${i}`] = 'Invalid email';
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setStep('review');
    } else {
      toast.error('Please fix the errors before proceeding');
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setProgress(0);

    const submitData = {
      ...formData,
      institution: formData.institution?.value,
      course: formData.course?.value,
      branch: formData.branch?.value,
      year: formData.year?.value,
      class: formData.class?.value,
      event: formData.event ? {
        value: formData.event.value,
        label: formData.event.label,
        category: formData.event.category
      } : null,
    };

    const data = new FormData();
    data.append('data', JSON.stringify(submitData));
    if (formData.idProof) data.append('idProof', formData.idProof);

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/registrations`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (prog) => {
          const percent = Math.round((prog.loaded * 100) / prog.total);
          setProgress(percent);
        },
      });
      setStep('thankyou');
      toast.success('Registration successful!');
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'Something went wrong');
      setStep('thankyou');
    } finally {
      setLoading(false);
    }
  };

  const getInputClasses = (hasError) => `
    w-full bg-white/5 border-2 rounded-xl px-4 py-3 text-white placeholder-gray-500
    focus:outline-none focus:ring-2 transition-all duration-300 backdrop-blur-sm
    ${hasError
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20 hover:border-red-500/40'
      : 'border-orange-500/20 focus:border-orange-500/60 focus:ring-orange-500/20 hover:border-orange-500/40'}
    focus:shadow-[0_0_15px_rgba(249,115,22,0.3)]
  `;

  const renderForm = () => (
    <motion.form
      onSubmit={handleNext}
      className="bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-slate-900/40 backdrop-blur-2xl border border-orange-500/20 rounded-3xl shadow-2xl overflow-hidden"
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 0 60px rgba(249, 115, 22, 0.1)' }}
    >
      <div className="h-1.5 bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500" />

      <div className="p-6 sm:p-8 md:p-12 lg:p-16 space-y-12">
        {/* Team Information */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Team Information</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: 'teamName', label: 'Team Name *', placeholder: 'Enter your team name' },
              { name: 'leaderName', label: 'Leader Name *', placeholder: 'Full name' },
              { name: 'leaderMobile', label: 'Mobile Number *', placeholder: '10-digit number' },
              { name: 'leaderWhatsapp', label: 'WhatsApp Number *', placeholder: '10-digit number' },
              { name: 'leaderEmail', label: 'Email Address *', placeholder: 'your.email@example.com' },
              { name: 'leaderRollNo', label: 'Roll No / ID *', placeholder: 'Student ID' },
            ].map((field) => (
              <div key={field.name} className="space-y-2 relative">
                <label className="block text-sm font-semibold text-gray-300">{field.label}</label>
                <div className="relative">
                  <input
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={getInputClasses(errors[field.name])}
                  />
                  {errors[field.name] ? (
                    <X className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" size={20} />
                  ) : formData[field.name] && (
                    <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={20} />
                  )}
                </div>
                {errors[field.name] && (
                  <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Event & Team Size */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-xl">
              🎯
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Event Details</h2>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300">Select Event *</label>
              <Select
                options={events}
                value={formData.event}
                onChange={(sel) => handleSelect('event', sel)}
                placeholder="Choose your event..."
                styles={customSelectStyles}
                isSearchable
              />
              {errors.event && <p className="text-red-400 text-xs mt-1">{errors.event}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300">
                Team Size {formData.event ? '(rules apply)' : ''}
              </label>
              <Select
                options={getAllowedTeamSizes(formData.event?.value)}
                value={baseTeamSizes.find(s => s.value === formData.teamSize) || null}
                onChange={handleTeamSize}
                placeholder="Select team size..."
                styles={customSelectStyles}
                isSearchable={false}
                isDisabled={!formData.event}
              />
              {formData.event && (
                <p className="text-xs text-gray-400 mt-1">
                  {formData.event.value === 'code-puzzle'
                    ? 'Solo event – only leader'
                    : 'You can choose 1 to 4 members (including leader)'}
                </p>
              )}
              {errors.teamSize && <p className="text-red-400 text-xs mt-1">{errors.teamSize}</p>}
            </div>
          </div>
        </div>

        {/* Team Members */}
        {formData.teamMembers.length > 0 && (
          <div className="p-6 bg-white/5 border border-purple-500/20 rounded-2xl">
            <h3 className="text-lg font-bold text-purple-400 mb-6">Team Members (excluding leader)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {formData.teamMembers.map((member, index) => (
                <div key={index} className="space-y-4">
                  <div className="relative">
                    <input
                      placeholder={`Member ${index + 2} Name`}
                      value={member.name}
                      onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                      className={getInputClasses(errors[`memberName${index}`])}
                    />
                    {errors[`memberName${index}`] ? (
                      <X className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" size={20} />
                    ) : member.name && (
                      <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={20} />
                    )}
                  </div>
                  {errors[`memberName${index}`] && (
                    <p className="text-red-400 text-xs">{errors[`memberName${index}`]}</p>
                  )}
                  <div className="relative">
                    <input
                      placeholder={`Member ${index + 2} Email`}
                      value={member.email}
                      onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                      className={getInputClasses(errors[`memberEmail${index}`])}
                    />
                    {errors[`memberEmail${index}`] ? (
                      <X className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" size={20} />
                    ) : member.email && (
                      <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={20} />
                    )}
                  </div>
                  {errors[`memberEmail${index}`] && (
                    <p className="text-red-400 text-xs">{errors[`memberEmail${index}`]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Academic Information */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <GraduationCap size={24} className="text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Academic Information</h2>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-300">Student Type</label>
              <div className="flex gap-6">
                {['college', 'school'].map(type => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="studentType"
                      value={type}
                      checked={formData.studentType === type}
                      onChange={handleChange}
                      className="w-5 h-5 accent-orange-500"
                    />
                    <span className="text-gray-300 capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300">Institution *</label>
              <Select
                options={formData.studentType === 'college' ? colleges : schools}
                value={formData.institution}
                onChange={(sel) => handleSelect('institution', sel)}
                placeholder="Select your institution..."
                styles={customSelectStyles}
                isSearchable
              />
              {errors.institution && <p className="text-red-400 text-xs mt-1">{errors.institution}</p>}
            </div>
            {formData.studentType === 'college' ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">Course</label>
                  <Select options={courses} value={formData.course} onChange={(sel) => handleSelect('course', sel)} styles={customSelectStyles} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">Branch</label>
                  <Select options={branches} value={formData.branch} onChange={(sel) => handleSelect('branch', sel)} styles={customSelectStyles} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300">Year</label>
                  <Select options={years} value={formData.year} onChange={(sel) => handleSelect('year', sel)} styles={customSelectStyles} />
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Class</label>
                <Select options={classes} value={formData.class} onChange={(sel) => handleSelect('class', sel)} styles={customSelectStyles} />
              </div>
            )}
          </div>
        </div>

        {/* ID Proof */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <FileUp size={24} className="text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">ID Proof</h2>
          </div>
          <label
            htmlFor="idProof"
            className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-dashed border-orange-500/40 rounded-2xl cursor-pointer hover:border-orange-500/60 transition-colors bg-white/5 backdrop-blur-sm"
          >
            <FileUp size={48} className="text-orange-500" />
            <div className="text-center">
              <p className="text-gray-300 font-medium">
                {formData.idProof ? formData.idProof.name : 'Click to upload ID Proof'}
              </p>
              <p className="text-gray-500 text-sm mt-1">PNG, JPG • Max 3MB</p>
            </div>
          </label>
          <input
            id="idProof"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFile}
          />
          {errors.idProof && <p className="text-red-400 text-xs mt-2">{errors.idProof}</p>}
          {formData.idProof && (
            <div className="mt-4 flex items-center gap-3 text-green-400 text-sm">
              <CheckCircle2 size={18} />
              <span>{formData.idProof.name} ({formData.idProofSize} KB)</span>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={22} />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <CheckCircle2 size={22} />
              <span>Review & Submit</span>
              <ArrowRight size={22} />
            </>
          )}
        </button>
      </div>
    </motion.form>
  );

  const renderReview = () => (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-slate-900/40 backdrop-blur-2xl border border-orange-500/20 rounded-3xl p-8 shadow-2xl"
    >
      <h2 className="text-3xl font-bold text-white text-center mb-10">Review Your Registration</h2>
      <div className="space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-400 text-sm">Team Name</p>
            <p className="text-white text-lg font-medium">{formData.teamName}</p>
          </div>
          <button onClick={() => setStep('form')} className="text-orange-400 hover:text-orange-300 flex items-center gap-1 text-sm">
            <Edit size={16} /> Edit
          </button>
        </div>

        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-400 text-sm">Event</p>
            <p className="text-white text-lg font-medium">{formData.event?.label}</p>
          </div>
          <button onClick={() => setStep('form')} className="text-orange-400 hover:text-orange-300 flex items-center gap-1 text-sm">
            <Edit size={16} /> Edit
          </button>
        </div>

        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-400 text-sm">Team Size</p>
            <p className="text-white text-lg font-medium">
              {formData.teamSize} {formData.teamSize === 1 ? 'member' : 'members'}
            </p>
          </div>
          <button onClick={() => setStep('form')} className="text-orange-400 hover:text-orange-300 flex items-center gap-1 text-sm">
            <Edit size={16} /> Edit
          </button>
        </div>

        <div>
          <p className="text-gray-400 text-sm mb-2">Team Members</p>
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-white">Leader: {formData.leaderName} ({formData.leaderEmail})</p>
            {formData.teamMembers.map((m, i) => (
              <p key={i} className="text-white mt-1">
                Member {i + 2}: {m.name} ({m.email})
              </p>
            ))}
          </div>
          <button onClick={() => setStep('form')} className="text-orange-400 hover:text-orange-300 flex items-center gap-1 text-sm mt-2">
            <Edit size={16} /> Edit
          </button>
        </div>

        <div>
          <p className="text-gray-400 text-sm mb-2">ID Proof</p>
          {formData.idProofPreview ? (
            <img
              src={formData.idProofPreview}
              alt="ID Proof Preview"
              className="max-h-64 object-contain rounded-lg border border-orange-500/30 mx-auto"
            />
          ) : (
            <p className="text-gray-300">No ID proof uploaded</p>
          )}
          <button onClick={() => setStep('form')} className="text-orange-400 hover:text-orange-300 flex items-center gap-1 text-sm mt-2">
            <Edit size={16} /> Edit
          </button>
        </div>
      </div>

      <div className="flex gap-4 mt-12">
        <button
          onClick={() => setStep('form')}
          className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Submitting...</span>
            </>
          ) : (
            'Confirm & Submit'
          )}
        </button>
      </div>
    </motion.div>
  );

  const renderThankYou = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-slate-900/40 backdrop-blur-2xl border border-orange-500/20 rounded-3xl p-10 text-center shadow-2xl"
    >
      <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto mb-6" />
      <h2 className="text-4xl font-bold text-white mb-4">Thank You!</h2>
      <p className="text-xl text-gray-300 mb-6">
        Your registration for <span className="text-purple-400 font-semibold">{formData.event?.label}</span> has been successfully submitted.
      </p>
      <p className="text-gray-400 mb-8">
        A confirmation email has been sent to <span className="text-orange-400">{formData.leaderEmail}</span>.<br />
        Check your inbox (and spam folder) for details.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="py-3 px-8 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all"
      >
        Register Another Team
      </button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-orange-500 to-purple-500 bg-clip-text text-transparent mb-4">
            CROSSROADS 2026
          </h1>
          <p className="text-gray-400 text-xl">Join the ultimate fest of innovation & creativity</p>
        </div>

        {step === 'form' && renderForm()}
        {step === 'review' && renderReview()}
        {step === 'thankyou' && renderThankYou()}
      </div>
    </div>
  );
};

export default RegistrationForm;
