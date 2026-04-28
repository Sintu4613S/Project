import React from 'react'
import './App.css'
import NavBar from './Component/NavBar'
import News from './Component/News'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const apiKey = import.meta.env.VITE_NEWS_API
  const pageSize = 10

  // If you want to use a fallback key during development, you can uncomment the line below:
  // const apiKey = import.meta.env.VITE_NEWS_API || '8f5eefadd07341a8ac2f4b3c90a296ac'

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<News apiKey={apiKey} key='general' pageSize={pageSize} category='general' />} />
        <Route exact path='/business' element={<News apiKey={apiKey} key='business' pageSize={pageSize} category='business' />} />
        <Route exact path='/general' element={<News apiKey={apiKey} key='general' pageSize={pageSize} category='general' />} />
        <Route exact path='/entertainment' element={<News apiKey={apiKey} key='entertainment' pageSize={pageSize} category='entertainment' />} />
        <Route exact path='/health' element={<News apiKey={apiKey} key='health' pageSize={pageSize} category='health' />} />
        <Route exact path='/science' element={<News apiKey={apiKey} key='science' pageSize={pageSize} category='science' />} />
        <Route exact path='/sports' element={<News apiKey={apiKey} key='sports' pageSize={pageSize} category='sports' />} />
        <Route exact path='/technology' element={<News apiKey={apiKey} key='technology' pageSize={pageSize} category='technology' />} />
      </Routes>
    </div>
  )
}

export default App
