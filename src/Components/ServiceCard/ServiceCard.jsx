import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'

const ServiceCard = ({service}) => {
    const {id, name, image, short_description, starting_price}= service

    useEffect(()=>{
        Aos.init({duration:1500})
      },[])
  return (
    <div data-aos="flip-left">
        <div className="card card-compact flex  bg-base-100 shadow-xl">
  <figure className='h-[200px]'><img   src={image} alt={name} /></figure>
  <div className="card-body">
    <h2 className="card-title specialFont">{name}</h2>
    <p className='specialFont' >{short_description}</p>
    <p className='text-[16px] font-bold text-[#A937D4]'> <span className='specialFont'>Expense: </span> $ {starting_price}</p>
    <div className="card-actions">
    <Link to={`/${id}`}>
      <button className="btn text-white bg-[#A937D4] hover:bg-[#A937D4] specialFont">learn More</button>
    </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default ServiceCard
