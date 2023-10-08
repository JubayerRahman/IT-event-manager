import { useLoaderData } from "react-router-dom"
import JobCards from "../../Components/JobCards/JobCards"
import { useEffect, useState } from "react"

const Carrerpage = () => {
  // const JobsData = useLoaderData()
  const [JobsData , setJobsData] = useState([])
  useEffect(()=>{
    fetch("./JobsData.json")
    .then(res=> res.json())
    .then(data => setJobsData(data))
  },[])
  return (
    <div>
      <div className="p-[20px] bg-bannerBg text-white md:rounded-md md:h-[400px] flex flex-col justify-center ">
      <h1 data-aos="fade-down" className='text-center text-3xl font-bold'>Vacancies for you:</h1>
      <div data-aos="fade-right" className='w-[70vw] md:w-1/3 rounded-lg h-[6px] bg-[#A937D4] mx-auto my-[10px]'></div>
      <p data-aos="fade-left" className="text-center p-[15px]">TechEvent Pros, a leading IT event management company, is constantly searching for dynamic talent to join our team. Explore our diverse range of job opportunities and become a part of our innovative and passionate workforce. Whether you're an event coordinator, marketer, or technical specialist, we offer exciting career prospects in the world of tech events. Join us on this journey of creativity and excellence.</p>
      </div>
      <div className="container mt-[100px] mb-[100px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
        {
          JobsData.map(jobs => <JobCards key={jobs.ID} jobs={jobs}/>)
        }
      </div>
    </div>
  )
}

export default Carrerpage
