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
import PrivateRoute from './components/PrivateRoute';
import ShowRecipe from './pages/ShowRecipe';
import Create from './pages/Create';
import ShowFav from './pages/ShowFav';
import Edit from './pages/Edit';
import Delete from './pages/Delete';
import ShowUserRecipe from './pages/ShowUserRecipe';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes/details/:id' element={<ShowRecipe/>}/>
        <Route path='/fav/details/:id' element={<ShowFav/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/myrecipe' element={<MyRecipe />} />
        <Route path='/myrecipe/create' element={<Create/>}/>        
        <Route path='/myrecipe/edit/:id' element={<Edit/>}/>
        <Route path='/myrecipe/delete/:id' element={<Delete/>}/>
        <Route path='/myrecipe/details/:id' element={<ShowUserRecipe/>}/>
        <Route path='/contact' element={<Contact />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
