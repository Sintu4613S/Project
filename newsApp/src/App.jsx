import NavBar from './Component/NavBar'
import './App.css'
import News from './Component/News';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route key="general" exact path="/" element={<News pageSize={10} category='general' />} />
        <Route key="business" exact path="/business" element={<News pageSize={10} category='business' />} />
        <Route key="general" exact path="/general" element={<News pageSize={10} category='general' />} />
        <Route key="general" exact path="/entertainment" element={<News pageSize={10} category='entertainment' />} />
        <Route key="health" exact path="/health" element={<News pageSize={10} category='health' />} />
        <Route key="science" exact path="/science" element={<News pageSize={10} category='science' />} />
        <Route key="sports" exact path="/sports" element={<News pageSize={10} category='sports' />} />
        <Route key="technology" exact path="/technology" element={<News pageSize={10} category='technology' />} />
      </Routes>
    </>
  );
}

export default App
