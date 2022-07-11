import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import FriendDetals from './Components/FriendDetals';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import Footer from './Shared/Footer';
import Header from './Shared/Header';
import Friends from './Components/Friends';
import Posts from './Components/Posts';
import PostDetails from './Components/PostDetails';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/friends' element={<Friends/>}/>
      <Route path='/friend/:friendID' element={<FriendDetals/>}/>
      <Route path='/posts' element={<Posts/>}>
        <Route path=':postId' element={<PostDetails/>}></Route>
      </Route>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
