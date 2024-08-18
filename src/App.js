import React, { useState } from 'react';
import Header, { HeaderPhone } from './components/Header';
import Home from "./components/Home";
import Work from './components/Work';
import TimeLine from './components/TimeLine';
import Services from './components/Services';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';




function App() {
  const [menuOpen,setMenuOpen] = useState(false);
 
  return (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home/>
    <Work/>
    <TimeLine/>
    <Services/>
    <Contact/>
    <Footer/>
    <Toaster/>
  
    </>
  );
}

export default App;
