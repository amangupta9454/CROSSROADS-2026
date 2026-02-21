// // AdminDashboard.jsx
// import { useState, useEffect, useMemo } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { Loader2, Download, LogOut, Search } from 'lucide-react';

// const AdminDashboard = () => {
//   const [analytics, setAnalytics] = useState({ total: 0, eventWise: [] });
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // Search & Filter States
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedEvent, setSelectedEvent] = useState('all');
//   const [dateFrom, setDateFrom] = useState('');
//   const [dateTo, setDateTo] = useState('');

//   useEffect(() => {
//     const fetchAnalytics = async () => {
//       const token = localStorage.getItem('adminToken');
//       if (!token) {
//         navigate('/admin/login');
//         return;
//       }

//       try {
//         const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/analytics`, {
//           headers: { 'x-auth-token': token }
//         });
//         setAnalytics(res.data);
//       } catch (err) {
//         if (err.response?.status === 401) {
//           localStorage.removeItem('adminToken');
//           navigate('/admin/login');
//           toast.error('Session expired. Please login again.');
//         } else {
//           toast.error('Failed to load analytics');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAnalytics();
//   }, [navigate]);

//   const handleExport = async () => {
//     const token = localStorage.getItem('adminToken');
//     if (!token) {
//       toast.error('Please login again');
//       navigate('/admin/login');
//       return;
//     }

//     try {
//       const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/export`, {
//         method: 'GET',
//         headers: { 'x-auth-token': token },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.msg || 'Export failed');
//       }

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `crossroads-teams-${new Date().toISOString().split('T')[0]}.xlsx`);
//       document.body.appendChild(link);
//       link.click();
//       link.parentNode.removeChild(link);
//       window.URL.revokeObjectURL(url);

//       toast.success('Excel file downloaded successfully');
//     } catch (err) {
//       toast.error(err.message || 'Failed to download Excel');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('adminToken');
//     toast.success('Logged out successfully');
//     navigate('/admin/login');
//   };

//   // All registrations flattened
//   const allRegistrations = useMemo(() => {
//     return analytics.eventWise.flatMap(event => event.details);
//   }, [analytics.eventWise]);

//   // Filtered registrations
//   const filteredRegistrations = useMemo(() => {
//     let result = [...allRegistrations];

//     if (searchTerm.trim()) {
//       const term = searchTerm.toLowerCase().trim();
//       result = result.filter(reg => {
//         return (
//           reg.teamId?.toLowerCase().includes(term) ||
//           reg.teamName?.toLowerCase().includes(term) ||
//           reg.leader?.name?.toLowerCase().includes(term) ||
//           reg.leader?.email?.toLowerCase().includes(term) ||
//           reg.college?.toLowerCase().includes(term) ||
//           reg.event?.toLowerCase().includes(term)
//         );
//       });
//     }

//     if (selectedEvent !== 'all') {
//       result = result.filter(reg => reg.event === selectedEvent);
//     }

//     if (dateFrom) {
//       const fromDate = new Date(dateFrom);
//       result = result.filter(reg => new Date(reg.appliedAt) >= fromDate);
//     }
//     if (dateTo) {
//       const toDate = new Date(dateTo);
//       toDate.setHours(23, 59, 59, 999);
//       result = result.filter(reg => new Date(reg.appliedAt) <= toDate);
//     }

//     return result;
//   }, [allRegistrations, searchTerm, selectedEvent, dateFrom, dateTo]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
//         <Loader2 className="animate-spin text-orange-500" size={48} />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="max-w-7xl mx-auto"
//       >
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
//           <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
//             Admin Dashboard – CROSSROADS 2026
//           </h1>

//           <div className="flex flex-wrap gap-4">
//             <motion.button
//               onClick={handleExport}
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold rounded-lg shadow-md"
//             >
//               <Download size={18} />
//               Export Excel
//             </motion.button>

//             <motion.button
//               onClick={handleLogout}
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-rose-700 text-white font-semibold rounded-lg shadow-md"
//             >
//               <LogOut size={18} />
//               Logout
//             </motion.button>
//           </div>
//         </div>

//         {/* Filters */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="bg-slate-900/50 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 mb-10"
//         >
//           <div className="flex flex-col lg:flex-row gap-5 items-end">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search by Team ID, name, leader, email, college..."
//                 value={searchTerm}
//                 onChange={e => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/70 transition"
//               />
//             </div>

//             <div className="min-w-52">
//               <label className="block text-xs text-gray-400 mb-1">Event</label>
//               <select
//                 value={selectedEvent}
//                 onChange={e => setSelectedEvent(e.target.value)}
//                 className="w-full px-3 py-2.5 bg-slate-800/60 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-orange-500/70"
//               >
//                 <option value="all">All Events</option>
//                 {analytics.eventWise.map(ev => (
//                   <option key={ev._id} value={ev._id}>
//                     {ev._id.replace(/-/g, ' ').toUpperCase()} ({ev.count})
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="min-w-40">
//               <label className="block text-xs text-gray-400 mb-1">From Date</label>
//               <input
//                 type="date"
//                 value={dateFrom}
//                 onChange={e => setDateFrom(e.target.value)}
//                 className="w-full px-3 py-2.5 bg-slate-800/60 border border-slate-600 rounded-lg text-white"
//               />
//             </div>

//             <div className="min-w-40">
//               <label className="block text-xs text-gray-400 mb-1">To Date</label>
//               <input
//                 type="date"
//                 value={dateTo}
//                 onChange={e => setDateTo(e.target.value)}
//                 className="w-full px-3 py-2.5 bg-slate-800/60 border border-slate-600 rounded-lg text-white"
//               />
//             </div>
//           </div>

//           {(searchTerm || selectedEvent !== 'all' || dateFrom || dateTo) && (
//             <button
//               onClick={() => {
//                 setSearchTerm('');
//                 setSelectedEvent('all');
//                 setDateFrom('');
//                 setDateTo('');
//               }}
//               className="mt-4 text-sm text-orange-400 hover:text-orange-300 transition"
//             >
//               Clear filters
//             </button>
//           )}
//         </motion.div>

//         {/* Table */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="bg-slate-900/40 backdrop-blur-md border border-orange-500/20 rounded-2xl p-6 md:p-8"
//         >
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center gap-3">
//               <div className="text-orange-500 text-2xl">📋</div>
//               <h2 className="text-2xl font-bold text-white">All Team Registrations</h2>
//             </div>
//             <span className="text-sm text-gray-400">
//               Showing {filteredRegistrations.length} of {allRegistrations.length} teams
//             </span>
//           </div>

//           {filteredRegistrations.length === 0 ? (
//             <div className="text-center py-16 text-gray-400">
//               No matching teams found.
//               {searchTerm && <p className="mt-2">Try adjusting your search or filters.</p>}
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm text-left text-gray-300 min-w-[1100px]">
//                 <thead className="text-xs uppercase bg-slate-800/70">
//                   <tr>
//                     <th className="px-5 py-4">Team ID</th>
//                     <th className="px-5 py-4">Team Name</th>
//                     <th className="px-5 py-4">Leader Name</th>
//                     <th className="px-5 py-4">Leader Email</th>
//                     <th className="px-5 py-4">Mobile</th>
//                     <th className="px-5 py-4">Event</th>
//                     <th className="px-5 py-4">Team Size</th>
//                     <th className="px-5 py-4">College</th>
//                     <th className="px-5 py-4">Branch / Year</th>
//                     <th className="px-5 py-4">Members</th>
//                     <th className="px-5 py-4">Applied At</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredRegistrations.map((reg) => (
//                     <tr
//                       key={reg._id}
//                       className="border-b border-gray-700 hover:bg-slate-800/50 transition-colors"
//                     >
//                       <td className="px-5 py-4 font-mono text-blue-300">{reg.teamId || '—'}</td>
//                       <td className="px-5 py-4 max-w-xs truncate">{reg.teamName || '—'}</td>
//                       <td className="px-5 py-4">{reg.leader?.name || '—'}</td>
//                       <td className="px-5 py-4 truncate max-w-xs">{reg.leader?.email || '—'}</td>
//                       <td className="px-5 py-4">{reg.leader?.mobile || '—'}</td>
//                       <td className="px-5 py-4 font-medium">
//                         {reg.event?.replace(/-/g, ' ').toUpperCase() || '—'}
//                       </td>
//                       <td className="px-5 py-4 text-center">{reg.teamSize || '—'}</td>
//                       <td className="px-5 py-4 truncate max-w-xs">{reg.college || '—'}</td>
//                       <td className="px-5 py-4">{reg.branch} • {reg.year}</td>
//                       <td className="px-5 py-4 text-center">
//                         {reg.members?.length > 0
//                           ? `${reg.members.length} additional`
//                           : 'Solo'}
//                       </td>
//                       <td className="px-5 py-4">
//                         {new Date(reg.appliedAt).toLocaleDateString('en-IN', {
//                           day: '2-digit',
//                           month: 'short',
//                           year: 'numeric'
//                         })}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default AdminDashboard;
// AdminDashboard.jsx
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Loader2, Download, LogOut, Search, Users, Calendar } from 'lucide-react';

const AdminDashboard = () => {
  const [analytics, setAnalytics] = useState({ total: 0, today: 0, eventWise: [] });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Search & Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  useEffect(() => {
    const fetchAnalytics = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin/login');
        return;
      }

      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/analytics`, {
          headers: { 'x-auth-token': token }
        });
        setAnalytics(res.data);
      } catch (err) {
        if (err.response?.status === 401) {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
          toast.error('Session expired. Please login again.');
        } else {
          toast.error('Failed to load analytics');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [navigate]);

  const handleExport = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      toast.error('Please login again');
      navigate('/admin/login');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/export`, {
        method: 'GET',
        headers: { 'x-auth-token': token },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Export failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `crossroads-teams-${new Date().toISOString().split('T')[0]}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success('Excel file downloaded successfully');
    } catch (err) {
      toast.error(err.message || 'Failed to download Excel');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const allRegistrations = useMemo(() => {
    return analytics.eventWise.flatMap(event => event.details);
  }, [analytics.eventWise]);

  const filteredRegistrations = useMemo(() => {
    let result = [...allRegistrations];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(reg => {
        return (
          reg.teamId?.toLowerCase().includes(term) ||
          reg.teamName?.toLowerCase().includes(term) ||
          reg.leader?.name?.toLowerCase().includes(term) ||
          reg.leader?.email?.toLowerCase().includes(term) ||
          reg.college?.toLowerCase().includes(term) ||
          reg.event?.toLowerCase().includes(term)
        );
      });
    }

    if (selectedEvent !== 'all') {
      result = result.filter(reg => reg.event === selectedEvent);
    }

    if (dateFrom) {
      const fromDate = new Date(dateFrom);
      result = result.filter(reg => new Date(reg.appliedAt) >= fromDate);
    }
    if (dateTo) {
      const toDate = new Date(dateTo);
      toDate.setHours(23, 59, 59, 999);
      result = result.filter(reg => new Date(reg.appliedAt) <= toDate);
    }

    return result;
  }, [allRegistrations, searchTerm, selectedEvent, dateFrom, dateTo]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <Loader2 className="animate-spin text-orange-500" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
            Admin Dashboard – CROSSROADS 2026
          </h1>

          <div className="flex flex-wrap gap-4">
            <motion.button
              onClick={handleExport}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold rounded-lg shadow-md"
            >
              <Download size={18} />
              Export Excel
            </motion.button>

            <motion.button
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-rose-700 text-white font-semibold rounded-lg shadow-md"
            >
              <LogOut size={18} />
              Logout
            </motion.button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Total Registrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 shadow-xl flex items-center gap-5"
          >
            <div className="p-4 bg-purple-600/30 rounded-xl">
              <Users size={40} className="text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium">Total Registrations</p>
              <p className="text-4xl font-bold text-white">{analytics.total}</p>
            </div>
          </motion.div>

          {/* Today's Registrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-6 shadow-xl flex items-center gap-5"
          >
            <div className="p-4 bg-emerald-600/30 rounded-xl">
              <Calendar size={40} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium">Today's Registrations</p>
              <p className="text-4xl font-bold text-white">{analytics.today}</p>
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/50 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 mb-10"
        >
          <div className="flex flex-col lg:flex-row gap-5 items-end">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by Team ID, name, leader, email, college..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/70 transition"
              />
            </div>

            <div className="min-w-52">
              <label className="block text-xs text-gray-400 mb-1">Event</label>
              <select
                value={selectedEvent}
                onChange={e => setSelectedEvent(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-800/60 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-orange-500/70"
              >
                <option value="all">All Events</option>
                {analytics.eventWise.map(ev => (
                  <option key={ev._id} value={ev._id}>
                    {ev._id.replace(/-/g, ' ').toUpperCase()} ({ev.count})
                  </option>
                ))}
              </select>
            </div>

            <div className="min-w-40">
              <label className="block text-xs text-gray-400 mb-1">From Date</label>
              <input
                type="date"
                value={dateFrom}
                onChange={e => setDateFrom(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-800/60 border border-slate-600 rounded-lg text-white"
              />
            </div>

            <div className="min-w-40">
              <label className="block text-xs text-gray-400 mb-1">To Date</label>
              <input
                type="date"
                value={dateTo}
                onChange={e => setDateTo(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-800/60 border border-slate-600 rounded-lg text-white"
              />
            </div>
          </div>

          {(searchTerm || selectedEvent !== 'all' || dateFrom || dateTo) && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedEvent('all');
                setDateFrom('');
                setDateTo('');
              }}
              className="mt-4 text-sm text-orange-400 hover:text-orange-300 transition"
            >
              Clear filters
            </button>
          )}
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-900/40 backdrop-blur-md border border-orange-500/20 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="text-orange-500 text-2xl">📋</div>
              <h2 className="text-2xl font-bold text-white">All Team Registrations</h2>
            </div>
            <span className="text-sm text-gray-400">
              Showing {filteredRegistrations.length} of {allRegistrations.length} teams
            </span>
          </div>

          {filteredRegistrations.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              No matching teams found.
              {searchTerm && <p className="mt-2">Try adjusting your search or filters.</p>}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-300 min-w-[1100px]">
                <thead className="text-xs uppercase bg-slate-800/70">
                  <tr>
                    <th className="px-5 py-4">Team ID</th>
                    <th className="px-5 py-4">Team Name</th>
                    <th className="px-5 py-4">Leader Name</th>
                    <th className="px-5 py-4">Leader Email</th>
                    <th className="px-5 py-4">Mobile</th>
                    <th className="px-5 py-4">Event</th>
                    <th className="px-5 py-4">Team Size</th>
                    <th className="px-5 py-4">College</th>
                    <th className="px-5 py-4">Branch / Year</th>
                    <th className="px-5 py-4">Members</th>
                    <th className="px-5 py-4">Applied At</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRegistrations.map((reg) => (
                    <tr
                      key={reg._id}
                      className="border-b border-gray-700 hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="px-5 py-4 font-mono text-blue-300">{reg.teamId || '—'}</td>
                      <td className="px-5 py-4 max-w-xs truncate">{reg.teamName || '—'}</td>
                      <td className="px-5 py-4">{reg.leader?.name || '—'}</td>
                      <td className="px-5 py-4 truncate max-w-xs">{reg.leader?.email || '—'}</td>
                      <td className="px-5 py-4">{reg.leader?.mobile || '—'}</td>
                      <td className="px-5 py-4 font-medium">
                        {reg.event?.replace(/-/g, ' ').toUpperCase() || '—'}
                      </td>
                      <td className="px-5 py-4 text-center">{reg.teamSize || '—'}</td>
                      <td className="px-5 py-4 truncate max-w-xs">{reg.college || '—'}</td>
                      <td className="px-5 py-4">{reg.branch} • {reg.year}</td>
                      <td className="px-5 py-4 text-center">
                        {reg.members?.length > 0
                          ? `${reg.members.length} additional`
                          : 'Solo'}
                      </td>
                      <td className="px-5 py-4">
                        {new Date(reg.appliedAt).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;