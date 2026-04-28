import React, { Component } from 'react'
import './App.css'
import NavBar from './Component/NavBar'
import News from './Component/News'
import { Routes, Route } from "react-router-dom";

export class App extends Component {
  apiKey = import.meta.env.VITE_NEWS_API
  // If you want to use a fallback key during development, you can uncomment the line below:
  // apiKey = import.meta.env.VITE_NEWS_API || '8f5eefadd07341a8ac2f4b3c90a296ac'
  render() {
    return (
      <div>
        <>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} key="general" pageSize={10} category='general' />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} key="business" pageSize={10} category='business' />} />
            <Route exact path="/general" element={<News apiKey={this.apiKey} key="general" pageSize={10} category='general' />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={10} category='entertainment' />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={10} category='health' />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" pageSize={10} category='science' />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={10} category='sports' />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={10} category='technology' />} />
          </Routes>
        </>
      </div>
    )
  }
}

export default App
