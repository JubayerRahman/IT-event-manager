import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom"
import Aos from 'aos'
import "aos/dist/aos.css"

const ServiceDynamic = () => {
  const loadedData = useLoaderData()
  const location = useParams().id
  const [Img , setImg] = useState()
  const [name , setName] = useState()
  const [Description , setDescription] = useState()

  useEffect(()=>{
    Aos.init({duration:500})
  },[])

  useEffect(()=>{
      const searchService = loadedData.find(service => service.id == location)
      setImg(searchService.image)
      setName(searchService.name)
      setDescription(searchService.large_description)
    
  },[loadedData])
  // console.log(servicetoShow);
  return (
    <div className="flex flex-col md:flex-row items-start  gap-5">
      <img data-aos="flip-right" className=" p-[20px] mx-auto my-[50px] md:w-1/2" src={Img} alt={name}/>
      <div className="md:mt-[60px] p-[20px]">
        <h1 data-aos="fade-up" className="text-3xl text-[#A937D4] font-[600]">{name}</h1>
        <div data-aos="fade-right" className='w-[70vw] md:w-1/3 rounded-lg h-[6px] bg-[#A937D4] my-[10px]'></div>
        <p data-aos="fade-right" className="my-[50px]">{Description}</p>
        <Link  to={-1}><button className="btn w-full text-white bg-[#A937D4] hover:bg-[#A937D4]"> Back </button></Link>
      </div>
    </div>
  )
}

export default ServiceDynamic
