import React, { Component } from 'react'
import './App.css'
import NavBar from './Component/NavBar'
import News from './Component/News'
import { Routes, Route } from "react-router-dom";

export class App extends Component {
  apiKey = import.meta.env.VITE_NEWS_API
  pageSize = 20
  // If you want to use a fallback key during development, you can uncomment the line below:
  // apiKey = import.meta.env.VITE_NEWS_API || '8f5eefadd07341a8ac2f4b3c90a296ac'
  render() {
    return (
      <div>
        <>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} key="general" pageSize={this.pagesize} category='general' />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} key="business" pageSize={this.pagesize} category='business' />} />
            <Route exact path="/general" element={<News apiKey={this.apiKey} key="general" pageSize={this.pagesize} category='general' />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={this.pagesize} category='entertainment' />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={this.pagesize} category='health' />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" pageSize={this.pagesize} category='science' />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={this.pagesize} category='sports' />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={this.pagesize} category='technology' />} />
          </Routes>
        </>
      </div>
    )
  }
}

export default App
