import React, { useEffect, useState } from 'react'
import logo from "../../imgs/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  const [services ,setServices] = useState([])
  useEffect(()=>{
    fetch("./EventData.json")
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  // console.log(services);
  return (
    <div>
      <footer className="footer p-10 bg-base-200 items-start text-base-content">
  <aside>
    <Link to="/">
      <img className='w-[200px]' src={logo} alt='logo'/>
    </Link>
    <p className=' text-[18px] md:text-xl font-bold text-[#A937D4]'>TechEvent Pros<br/>managing IT events  since 2005</p>
  </aside> 
  <nav>
    <header className="text-xl font-bold specialFont text-[#A937D4]">Services</header> 
    {
      services.map(service => <Link className="link link-hover specialFont" to={`/${service.id}`}>{service.name}</Link>)
    }
  </nav> 
  <nav>
    <header className="text-xl font-bold specialFont text-[#A937D4]">Company</header> 
    <Link to="/About" className="link link-hover specialFont">About us</Link> 
    <Link to="/Career" className="link link-hover specialFont">Career</Link> 
    <Link to="/Contact" className="link link-hover specialFont">Contact</Link> 
  </nav> 
</footer>
<footer className="footer footer-center p-4 bg-base-200 text-base-content">
  <aside>
    <p className='specialFont'>Copyright © 2023 - All right reserved by TechEvent Pro Corporations. <br/> Designed and developed by <a className='text-[#A937D4] font-bold' target='_blank' href='https://allmyprojects-jobayer.netlify.app/'>Jobayer Rahman</a></p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
