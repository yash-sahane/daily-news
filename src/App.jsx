import React from 'react'
import News from './components/News/News'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './app.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<News country='in' category='general' />} />
          <Route exact path='/entertainment' element={<News country='in' category='entertainment' />} />
          <Route exact path='/health' element={<News country='in' category='health' />} />
          <Route exact path='/science' element={<News country='in' category='science' />} />
          <Route exact path='/sports' element={<News country='in' category='sports' />} />
          <Route exact path='/technology' element={<News country='in' category='technology' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;