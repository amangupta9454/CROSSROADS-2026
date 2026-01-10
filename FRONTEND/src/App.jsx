import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegistrationForm from './Components/RegistrationForm.jsx'
import Home from './Pages/Home.jsx'
import Schedule from './Pages/Schedule.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Events from './Pages/Events.jsx'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  )
}

export default App