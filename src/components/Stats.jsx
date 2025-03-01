import React from 'react'
import bg2 from '../assets/images/bg2.png'
import flash from '../assets/images/flash.png'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'
import Marquee from './Marquee'

const Stats = () => {
  return (
    <div 
      className='relative mt-40 sm:mt-0' 
      style={{
        backgroundImage:`url(${bg2})`,
      }}
    >   
      <Marquee/>
      <img 
        className="absolute top-75 hidden lg:block" 
        src={flash} 
        alt="Flash" 
      />
      <div className="flex flex-col sm:flex-row justify-between text-white p-4 sm:p-10">
        {/* Statistics Section */}
        <div className="flex flex-col sm:flex-row justify-between text-white p-4 sm:p-10">
  <div className="flex flex-col items-start mt-10 lg:mt-44 ml-4 sm:ml-12 w-full tracking-widest">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 mt-10">
      <div className="flex flex-col col-span-1 sm:col-span-3">
        <h2 className="text-4xl sm:text-5xl">150+</h2>
        <p className="text-lg sm:text-xl">Universities participating</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-4xl sm:text-5xl">72+</h2>
        <p className="text-lg sm:text-xl">Judges</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-4xl sm:text-5xl">21</h2>
        <p className="text-lg sm:text-xl">Hackathons</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-4xl sm:text-5xl">36+</h2>
        <p className="text-lg sm:text-xl">Great Speakers</p>
      </div>
    </div>
  </div>
</div>


        {/* Video Section */}
        <div className="w-full mt-8 sm:mt-16 flex justify-center items-center">
          <iframe 
            className="w-full sm:w-3/4" 
            height="315" 
            src="https://www.youtube.com/embed/gi1kkMbfNAE?si=19m-xRfSIrDpKm1X" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>

      </div>

      {/* Footer Section */}
<div className="text-center text-white mt-10">
  <div className="flex justify-center space-x-8 sm:space-x-48 mt-2 bg-white">
    <span><img className="w-16 sm:w-24 md:w-32" src={img1} alt="" /></span>
    <span><img className="w-16 sm:w-24 md:w-32 mt-2" src={img2} alt="" /></span>
    <span><img className="w-16 sm:w-24 md:w-32 mt-2" src={img3} alt="" /></span>
    <span><img className="w-16 sm:w-24 md:w-32" src={img4} alt="" /></span>
    <span><img className="w-16 sm:w-24 md:w-32" src={img5} alt="" /></span>
  </div>

  <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-48 mt-16 pb-8 tracking-widest">
    <p className="text-sm sm:text-base">Copyright <span className='text-gray-500'>©</span> 2024 DcodeBlock</p>
    <div className="mt-2 flex justify-center sm:justify-end space-x-4">
      <a href="#" className="text-xs sm:text-sm">Help Center</a>
      <span className="mx-4">|</span>
      <a href="#" className="text-xs sm:text-sm">Terms and Conditions</a>
      <span className="mx-4">|</span>
      <a href="#" className="text-xs sm:text-sm">Privacy policy</a>
    </div>
  </div>
</div>

    </div>
  )
}

export default Stats;
