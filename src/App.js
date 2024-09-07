import React, { useState, useEffect } from 'react';
import Header, { HeaderPhone } from './components/Header';
import Home from "./components/Home";
import Work from './components/Work';
import TimeLine from './components/TimeLine';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen'; // Import the SplashScreen
import { Toaster } from 'react-hot-toast';

function App() {
  const [loading, setLoading] = useState(true); // State for controlling the splash screen
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out animation
  const [menuOpen,setMenuOpen] = useState(false);

  // Simulate loading effect with fade-out
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 1000); // Wait for 1s during fade-out
    }, 3000); // Show the splash screen for 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      {loading ? (
        <div className={`splash-wrapper ${fadeOut ? 'fade-out' : ''}`}>
          <SplashScreen />
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;






// import React, { useState } from 'react';
// import Header, { HeaderPhone } from './components/Header';
// import Home from "./components/Home";
// import Work from './components/Work';
// import TimeLine from './components/TimeLine';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import { Toaster } from 'react-hot-toast';
// import Footer from './components/Footer';




// function App() {
//   const [menuOpen,setMenuOpen] = useState(false);
 
//   return (
//     <>
//     <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
//     <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
//     <Home/>
//     <Work/>
//     <TimeLine/>
//     <Services/>
//     <Contact/>
//     <Footer/>
//     <Toaster/>
  
//     </>
//   );
// }

// export default App;
