import React, { useEffect, useState } from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import Aos from 'aos'
import "aos/dist/aos.css"


const Services = () => {
    const [DataServices , setDataServices] = useState([])
    useEffect(()=>{
        Aos.init({duration:500})
      },[])
    

    useEffect(()=>{
        fetch("./EventData.json")
        .then(res => res.json())
        .then(data => setDataServices(data))
    },[])
  return (
    <div className='my-[50px]'>
      <h1 data-aos="fade-down" className='text-center text-3xl font-bold'>Our Services</h1>
      <div data-aos="fade-right" className='w-[70vw] md:w-1/3 rounded-lg h-[6px] bg-[#A937D4] mx-auto my-[10px]'></div>
      <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] mx-[20px] md:mx-auto my-10'>
        {
            DataServices.map(service => <ServiceCard  key={service.id} service={service}/>)
        }
      </div>
    </div>
  )
}

export default Services
