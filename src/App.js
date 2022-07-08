import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Friends from './Components/Friends';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import Footer from './Shared/Footer';
import Header from './Shared/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/friends' element={<Friends/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
