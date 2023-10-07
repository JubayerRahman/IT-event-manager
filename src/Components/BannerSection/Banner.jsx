import React, { useEffect } from 'react'
import "./BannerSection.css"
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"



const Banner = () => {
  useEffect(()=>{
    Aos.init({duration:1500})
  },[])
  return (
    <div  className='BannermainSection h-fit md:h-[500px] flex justify-center  flex-col'>
        <div  data-aos="fade-down" className='text-white lg:text-[#A937D4] bg-bannerBg lg:bg-[transparent] md:rounded-md lg:w-1/2 p-[20px] pt-[100px] pb-[100px] md:p-[20px]'>
        <h1 data-aos="fade-right" className='opacity-[1] line-[5xl] text-3xl md:text-5xl font-bold text-left   '>Looking for a <br/> trustworthy and reliable team to manage your IT events?</h1>
        <Link to="/Contact" className='btn bg-[#A937D4] text-white hover:bg-[#A937D4] mt-[20px]'>Contact us</Link>
        </div>
      
    </div>
  )
}

export default Banner
