import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Packege = () => {
    useEffect(()=>{
        Aos.init({duration:500})
      },[])

  return (
    <div className='my-[100px]'>
      <h1 data-aos="flip-left" className='text-center text-3xl md:text-5xl font-bold specialFont'>Our Package</h1>
      <div data-aos="fade-right" className='w-[70vw] md:w-1/3 rounded-lg h-[6px] bg-[#A937D4] mx-auto my-[10px]'></div>
      <div className='flex flex-col p-[10px] md:flex-row justify-center gap-[20px] items-center mt-[100px]'>
      <div>
        <div data-aos="flip-left" className="card card-compact bg-base-100 shadow-xl border-2 border-[#A937D4]">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold pt-[50px] specialFont">Basic</h2>
                    <div className='w-full rounded-lg h-[2px] bg-[#A937D4] mx-auto my-[10px]'></div>
                    <p className='my-[10px] text-[16px] text-center specialFont'>Our Basic package provides essential event services, including event planning, venue setup, and technical support.</p>
                    <div className='w-full rounded-lg h-[2px] bg-[#A937D4] mx-auto my-[10px]'></div>
                    <div className='flex gap-2 justify-center items-center'>
                    <i className="text-xl text-green-500 fa-regular fa-circle-check"></i>
                    <p className='text-[16px] specialFont'>Event planning</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                    <i className="text-xl text-green-500 fa-regular fa-circle-check"></i>
                    <p className='text-[16px] specialFont'>Venue setup</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                    <i className="text-xl text-green-500 fa-regular fa-circle-check"></i>
                    <p className='text-[16px] specialFont'>Technical support</p>
                    </div>
                    <div className="card-actions justify-center">
                    <button className="btn bg-[#A937D4] hover:bg-[#A937D4] text-white text-xl mt-[20px]">$5,000</button>
                    </div>
                </div>
            </div>
        </div>
      <div>
        <div data-aos="fade-down" className="card card-compact bg-base-100 shadow-xl border-2 border-[#C29B0C]">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold pt-[50px] specialFont text-[#C29B0C]">Gold</h2>
                    <div className='w-full rounded-lg h-[2px] bg-[#C29B0C] mx-auto my-[10px]'></div>
                    <p className='my-[10px] text-[16px] text-center specialFont'>Experience luxury with our Gold package. Enjoy VIP seating, luxury accommodations, exclusive access, and dedicated event coordination.</p>
                    <div className='w-full rounded-lg h-[2px] bg-[#C29B0C] mx-auto my-[10px]'></div>
                    <div className='flex gap-2 justify-center items-center'>
                    <i className="text-xl text-[#C29B0C] fa-regular fa-circle-check"></i>
                    <p className='text-[16px] specialFont'>VIP seating</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                    <i className="text-xl text-[#C29B0C] fa-regular fa-circle-check"></i>
                    <p className='text-[16px] specialFont'>Luxury accommodations</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                    <i className="text-xl text-[#C29B0C] fa-regular fa-circle-check"></i>
                    <p className='text-[16px] specialFont'>Exclusive access</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                    <i className="text-xl text-[#C29B0C] fa-regular fa-circle-check"></i>
                    <p className='text-[16px] specialFont'>Event coordination</p>
                    </div>
                    <div className="card-actions justify-center">
                    <button className="btn bg-[#C29B0C] hover:bg-[#C29B0C] text-[white] text-xl mt-[20px]">$15,000</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div data-aos="flip-left" className="card card-compact bg-base-100 shadow-xl border-2 border-[#A937D4]">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold pt-[50px] specialFont">Premium</h2>
                    <div className='w-full rounded-lg h-[2px] bg-[#A937D4] mx-auto my-[10px]'></div>
                    <p className='my-[10px] text-[16px] text-center specialFont'>Upgrade to our Premium package for a comprehensive event experience. Enjoy full event planning, custom branding, and etc.</p>
                    <div className='w-full rounded-lg h-[2px] bg-[#A937D4] mx-auto my-[10px]'></div>
                    <div className='flex gap-2 justify-center items-center'>
                    <i className="text-xl text-green-500 fa-regular fa-circle-check"></i>
                    <p className='text-[16px] specialFont'>Full event planning</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                    <i className="text-xl text-green-500 fa-regular fa-circle-check"></i>
                    <p className='text-[16px] specialFont'>Custom branding</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                    <i className="text-xl text-green-500 fa-regular fa-circle-check"></i>
                    <p className='text-[16px] specialFont'>Keynote speakers</p>
                    </div>
                    
                    <div className="card-actions justify-center">
                    <button className="btn bg-[#A937D4] hover:bg-[#A937D4] text-white text-xl mt-[20px]">$10,000</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Packege
