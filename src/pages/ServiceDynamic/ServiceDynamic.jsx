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
  const [price , setPrice] = useState()

  useEffect(()=>{
    Aos.init({duration:500})
  },[])

  useEffect(()=>{
      const searchService = loadedData.find(service => service.id == location)
      setImg(searchService.image)
      setName(searchService.name)
      setDescription(searchService.large_description)
      setPrice(searchService.starting_price)
    
  },[loadedData])
  // console.log(servicetoShow);
  return (
    <div className="flex flex-col md:flex-row items-start  gap-5">
      <img data-aos="flip-right" className=" p-[20px] mx-auto my-[50px] md:w-1/2" src={Img} alt={name}/>
      <div className="md:mt-[60px] p-[20px]">
        <h1 data-aos="fade-up" className="text-3xl text-[#A937D4] font-[600] specialFont">{name}</h1>
        <div data-aos="fade-right" className='w-[70vw] md:w-1/3 rounded-lg h-[6px] bg-[#A937D4] my-[10px]'></div>
        <p data-aos="fade-right" className="my-[50px] specialFont">{Description}</p>
        <p data-aos="fade-right" className="my-[50px] text-2xl "><span className=' font-bold specialFont text-[#A937D4]'>Expense: </span> ${price} <br/> <span className="text-red-700 text-[18px] font-bold specialFont">(Price is negotiatable)</span> </p>
        <Link  to="/"><button className="btn w-full text-white bg-[#A937D4] hover:bg-[#A937D4] special font-bold"> Back </button></Link>
      </div>
    </div>
  )
}

export default ServiceDynamic
