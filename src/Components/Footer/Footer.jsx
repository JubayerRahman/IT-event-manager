import React from 'react'
import logo from "../../imgs/logo.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 items-center text-base-content">
  <aside>
    <img className='w-[200px]' src={logo} alt='logo'/>
    <p className=' font-[600]'>TechEvent Pros<br/>managing IT events  since 2005</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer footer-center p-4 bg-base-200 text-base-content">
  <aside>
    <p>Copyright © 2023 - All right reserved by TechEvent Pro Corporations. <br/> Designed and developed by Jobayer Rahman</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
