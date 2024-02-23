import React from 'react'
import News from './components/News/News'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './app.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<News country='in' category='general' />} />
          <Route path='/entertainment' element={<News country='in' category='entertainment' />} />
          <Route path='/health' element={<News country='in' category='health' />} />
          <Route path='/science' element={<News country='in' category='science' />} />
          <Route path='/sports' element={<News country='in' category='sports' />} />
          <Route path='/technology' element={<News country='in' category='technology' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;