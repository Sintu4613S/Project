import NavBar from './Component/NavBar'
import './App.css'
import News from './Component/News';

function App() {
  return (
    <>
      <NavBar />
      <News pageSize={10} category='general' />
    </>
  );
}

export default App
