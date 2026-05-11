import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/Notes/NoteState';


function App() {

  return (
    <>
      <NoteState>
        <Navbar />
        <div className="container my-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
