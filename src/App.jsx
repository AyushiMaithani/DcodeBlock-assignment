import React from 'react';
import Header from './components/shared/Header';
import logoHindia from './assets/images/hIndialogo.png'
import Navbar from './components/Navbar';
import bg1 from './assets/images/bg.png'
import Hero from './components/Hero'
import Stats from './components/Stats';


const App = () => {
  return (
    <div style={{backgroundImage:`url(${bg1})`}} className='h-full w-full overflow-hidden'>
      <Header />
      <div className='h-[100vh]' >
      <div className="flex flex-col sm:flex-row items-center justify-center sm:ml-28 gap-4">
          <img className="mt-10 sm:mt-12 h-12 sm:h-16" src={logoHindia} alt="Logo" />
          <Navbar />
        </div>
        <Hero/>
   

      </div>
      <Stats/>
    </div>
  );
}

export default App;
