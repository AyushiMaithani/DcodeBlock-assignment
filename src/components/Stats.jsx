import React from 'react'
import bg2 from '../assets/images/bg2.png'
import flash from '../assets/images/flash.png'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'


const Stats = () => {
  return (
    <div className='relative h-[100vh] mt-20' style={{backgroundImage:`url(${bg2})`}}>
      <img className='absolute top-40' src={flash} alt="" />
      <div className="flex justify-between text-white p-10">
        {/* Statistics Section */}
        <div className="flex flex-col items-start mt-44 ml-12 w-full tracking-widest">
          <div className="grid grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col col-span-3">
              <h2 className="text-5xl">150+</h2>
              <p className="text-xl">Universities participating</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-5xl">72+</h2>
              <p className="text-xl">Judges</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-5xl">21</h2>
              <p className="text-xl">Hackathons</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-5xl">36+</h2>
              <p className="text-xl">Great Speakers</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full mt-16 flex justify-center items-center">
  <iframe width="800" height="400" src="https://www.youtube.com/embed/gi1kkMbfNAE?si=19m-xRfSIrDpKm1X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

      </div>

      {/* Footer Section */}
      <div className="text-center text-white mt-10">
        <div className="flex justify-center space-x-32 mt-2 bg-white">
          <span><img src={img1} alt="" /></span>
          <span><img className='mt-2' src={img2} alt="" /></span>
          <span><img className='mt-2' src={img3} alt="" /></span>
          <span><img src={img4} alt="" /></span>
          <span><img src={img5} alt="" /></span>
        </div>
        <div className='flex justify-between px-48 mt-20 tracking-widest'>
        <p>Copyright <span className='text-gray-500'>©</span> 2024 DcodeBlock</p>
        <div className="mt-2">
          <a href="#" className="text-sm">Help Center</a>
          <span className="mx-4">|</span>
          <a href="#" className="text-sm">Terms and Conditions</a>
          <span className="mx-4">|</span>
          <a href="#" className="text-sm">Privacy policy</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Stats