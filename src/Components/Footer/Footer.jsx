import React from 'react'
import logo from "../../imgs/logo.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 items-center text-base-content">
  <aside>
    <img className='w-[200px]' src={logo} alt='logo'/>
    <p className=' font-[600] specialFont'>TechEvent Pros<br/>managing IT events  since 2005</p>
  </aside> 
  <nav>
    <header className="footer-title specialFont">Services</header> 
    <a className="link link-hover specialFont">Branding</a> 
    <a className="link link-hover specialFont">Design</a> 
    <a className="link link-hover specialFont">Marketing</a> 
    <a className="link link-hover specialFont">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title specialFont">Company</header> 
    <a className="link link-hover specialFont">About us</a> 
    <a className="link link-hover specialFont">Contact</a> 
    <a className="link link-hover specialFont">Jobs</a> 
    <a className="link link-hover specialFont">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title specialFont">Legal</header> 
    <a className="link link-hover specialFont">Terms of use</a> 
    <a className="link link-hover specialFont">Privacy policy</a> 
    <a className="link link-hover specialFont">Cookie policy</a>
  </nav>
</footer>
<footer className="footer footer-center p-4 bg-base-200 text-base-content">
  <aside>
    <p className='specialFont'>Copyright © 2023 - All right reserved by TechEvent Pro Corporations. <br/> Designed and developed by Jobayer Rahman</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
