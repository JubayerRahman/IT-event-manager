import React, { useEffect, useState } from 'react'
import logo from "../../imgs/logo.png"
import ReviewCarousel from '../../Components/Carousel/ReviewCarousel'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'

const About = () => {
  const [Reviews, setReviews] = useState([])

  useEffect (()=>{
    fetch("./ReviewData.json")
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])

  return (
    <div>
      <div className="hero min-h-screen bg-bannerBg rounded-md p-[20px]">
      <div className="hero-content text-center ">
        <div className="">
          <img data-aos="flip-left" className='mx-auto mb-[50px]' src={logo} alt='TechEvent Pros'/>
          <h1 className=" text-3xl md:text-5xl font-bold">About TechEvent Pros</h1>
          <div data-aos="fade-right" className='w-[80vw] md:w-1/2 rounded-lg h-[6px] bg-white mx-auto my-[10px]'></div>
          <p className="py-6 text-white text-xl">TechEvent Pros, led by CEO Jobayer Rahman, is a pioneering IT event management company known for crafting exceptional technology-driven gatherings. With a focus on innovation and precision, Jobayer founded the company to revolutionize conventional events by seamlessly integrating cutting-edge technology. TechEvent Pros is dedicated to curating experiences that blend the latest tech advancements with networking and learning opportunities. As a catalyst for innovation, it stands as a bridge between tech enthusiasts and is committed to redefining event excellence in the digital era, setting the stage for unforgettable and impactful IT events.</p>
          <Link to="/Contact"><button className="btn bg-[#A937D4] text-white">Get Started</button></Link>
        </div>
      </div>
    </div>
      <ReviewCarousel/>
    </div>
  )
}

export default About
