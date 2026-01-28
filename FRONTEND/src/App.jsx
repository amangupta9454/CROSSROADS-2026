import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegistrationForm from './Components/RegistrationForm.jsx'
import Home from './Pages/Home.jsx'
import Schedule from './Pages/Schedule.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Events from './Pages/Events.jsx'
import Navbar from './Pages/Navbar.jsx'
import Team from './Pages/Team.jsx'
import Footer from './Pages/Footer.jsx'
import AdminLogin from './Components/AdminLogin.jsx'
import AdminDashboard from './Components/AdminDashboard.jsx'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* add footer in every component */}
        <Route path="/" element={<><Home /><Footer /></>} />
        <Route path="/about" element={<><About /><Footer /></>} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />
        <Route path="/events" element={<><Events /><Footer /></>} />
        <Route path="/schedule" element={<><Schedule /><Footer /></>} />
        <Route path="/team" element={<><Team /><Footer /></>} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/event-registration" element={<><RegistrationForm /><Footer /></>} />
      </Routes>
    </Router>
  )
}

export default App