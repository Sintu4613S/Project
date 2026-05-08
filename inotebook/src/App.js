import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
// eslint-disable-next-line




function App() {
  return (
    <>


      <Routes>
        <Navbar />
        <Route path="/home" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
      </Routes>



    </>
  );
}

export default App;
