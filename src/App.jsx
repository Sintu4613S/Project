import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import Contact from "./Components/Contact";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      {/* It is used to display the navigation bar by using the propsas an
      argument */
      /* PropTypes is used in this case when we pass any props */}

      <Navbar
        title="TextUtills"
        homeText="Home"
        aboutText="About"
        contactText="ContactUs"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* default PropTypes is used in this case when we not pass any props */}
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/home" element={<Textform heading="Word Counter- count word,Lower To Upper,Reverse Text" mode={mode} />} />
        <Route exact path="/contact" element={<Contact mode={mode} />} />
        <Route exact path="*" element={<h1 className="pg" style={{ textAlign: 'center', backgroundColor: 'red' }}>404- Page Not Found</h1>} />
      </Routes>
      {/* <Contact /> */}
      {/* <About /> */}
      {/* <Textform heading="Enter the text to analyze" mode={mode} /> */}


    </>
  );
}

export default App;

