import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
      </Routes>

    </>
  );
}

export default App;
