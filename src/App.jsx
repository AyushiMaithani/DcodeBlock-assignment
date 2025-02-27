import React from 'react';
import Header from './components/shared/Header';
import logoHindia from './assets/images/hIndialogo.png'
import Navbar from './components/Navbar';
import bg1 from './assets/images/bg.png'
import Hero from './components/Hero'


const App = () => {
  return (
    <>
      <Header />
      <div className='h-[100vh]' style={{backgroundImage:`url(${bg1})`}}>
      <div className='flex flex-row items-center ml-28 gap-4'>
        <img className='mt-10' src={logoHindia} alt="" />
        <Navbar/>
        </div>
        <Hero/>
        

      </div>
    </>
  );
}

export default App;
