import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegistrationForm from './Components/RegistrationForm.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to CROSSROADS@2026</h1>} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  )
}

export default App