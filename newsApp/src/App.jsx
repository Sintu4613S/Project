import NavBar from './Component/NavBar'
import './App.css'
import News from './Component/News';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route exact path="/" element={<News key="general" pageSize={10} category='general' />} />
        <Route exact path="/business" element={<News key="business" pageSize={10} category='business' />} />
        <Route exact path="/general" element={<News key="general" pageSize={10} category='general' />} />
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={10} category='entertainment' />} />
        <Route exact path="/health" element={<News key="health" pageSize={10} category='health' />} />
        <Route exact path="/science" element={<News key="science" pageSize={10} category='science' />} />
        <Route exact path="/sports" element={<News key="sports" pageSize={10} category='sports' />} />
        <Route exact path="/technology" element={<News key="technology" pageSize={10} category='technology' />} />
      </Routes>
    </>
  );
}

export default App
