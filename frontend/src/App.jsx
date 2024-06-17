import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import MyRecipe from './pages/MyRecipe';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/myrecipe' element={<MyRecipe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
