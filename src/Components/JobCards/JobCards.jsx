import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'

const JobCards = ({jobs}) => {
    const { job_position , job_description , job_requirements , education_requirements ,experience , salary }=jobs

    useEffect(()=>{
        Aos.init({duration:1500})
      },[])

  return (
    <div data-aos="flip-left" className='mx-[20px] '>
      <div className="card card-compact flex  bg-base-100 shadow-xl p-[20px] lg:h-[400px]">
        <div className="card-body">
            <h2 className="card-title">Job title: {job_position}</h2>
            <div data-aos="fade-right" className='w-[70vw] md:w-1/3 rounded-lg h-[6px] bg-[#A937D4] my-[10px]'></div>
            <p> <span className='text-[16px]  font-bold'>Description:</span>  {job_description}</p>
            <p> <span className='text-[16px]  font-bold'>Requirements:</span>  {job_requirements}</p>
            <p> <span className='text-[16px]  font-bold'>Education:</span>  {education_requirements}</p>
            <p> <span className='text-[16px]  font-bold'>Experience:</span>  {experience}</p>
            <p className='mt-[10px]'> <span className='text-[16px]  font-bold'>Salary:</span> {salary}</p>
            <div className="card-actions">
              <Link to="/Contact">
                <button className="btn text-white bg-[#A937D4] hover:bg-[#A937D4]">Apply now</button>
              </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default JobCards
