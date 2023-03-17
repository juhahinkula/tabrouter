import React, { useState } from 'react';
import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const [value, setValue] = useState('/');

  const handleChange = (event, newValue)=> {
    setValue(newValue);
  };

  return (
    <>
      <BrowserRouter>
        <Tabs value={value} onChange={handleChange}>
          <Tab value="/" label="Home" component={Link} to="/" />
          <Tab value="/contact" label="Contact" component={Link} to="/contact" />
          <Tab value="/about" label="About" component={Link} to="/about" />
        </Tabs>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
