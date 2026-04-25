import NavBar from './Component/NavBar'
import './App.css'
import News from './Component/News';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route exact path="/home" element={<News pageSize={10} category='general' />} />
        <Route exact path="/general" element={<News pageSize={10} category='general' />} />
        <Route exact path="/business" element={<News pageSize={10} category='business' />} />
        <Route exact path="/entertainment" element={<News pageSize={10} category='health' />} />
        <Route exact path="/science" element={<News pageSize={10} category='science' />} />
        <Route exact path="/sports" element={<News pageSize={10} category='sports' />} />
        <Route exact path="/technologyl" element={<News pageSize={10} category='technology' />} />
      </Routes>
    </>
  );
}

export default App
