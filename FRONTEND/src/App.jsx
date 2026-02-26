
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar.jsx';
import Footer from './Pages/Footer.jsx';

// Pages with navbar + footer
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Events from './Pages/Events.jsx';
import Schedule from './Pages/Schedule.jsx';
import Team from './Pages/Team.jsx';
// import EventRegistration from './Components/EventRegistration.jsx';

// Special pages without navbar/footer
import AdminLogin from './Components/AdminLogin.jsx';
import AdminDashboard from './Components/AdminDashboard.jsx';
import Attendance from './Pages/Attendence.jsx'; // ← typo fix: Attendance

// Reusable layout for normal pages
const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Pages with Navbar + Footer */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/events" element={<MainLayout><Events /></MainLayout>} />
        <Route path="/schedule" element={<MainLayout><Schedule /></MainLayout>} />
        <Route path="/team" element={<MainLayout><Team /></MainLayout>} />
        {/* <Route path="/event-registration" element={<MainLayout><EventRegistration /></MainLayout>} /> */}

        {/* Full-screen / special pages — NO navbar, NO footer */}
        <Route path="/admin/login" element={<MainLayout><AdminLogin /></MainLayout>} />
        <Route path="/admin/dashboard" element={<MainLayout><AdminDashboard /></MainLayout>} />
        <Route path="/attendence" element={<Attendance />} /> {/* or rename to /scanner, /attendance-scan etc. */}
      </Routes>
    </Router>
  );
};

export default App;