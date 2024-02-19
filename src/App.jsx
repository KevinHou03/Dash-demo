// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import React from 'react'
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import Home from './components/pages/Home'

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' exact Component={Home} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
