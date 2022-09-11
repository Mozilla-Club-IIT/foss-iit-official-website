import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MeetDevs from './pages/MeetDevs';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/devs' element={<MeetDevs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
