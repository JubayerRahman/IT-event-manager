import React from 'react'
import logo  from "../../imgs/logo.png"
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='bg-bannerBg h-screen flex flex-col justify-center items-center gap-[30px]'>
    <Link to="/"><img className='w-[300px]' src={logo}/></Link>
      <h1 className='text-white text-3xl font-bold text-center md:w-1/2 specialFont'>It seems you came acress a wrong route, click the logo and go back</h1>
    </div>
  )
}

export default ErrorPage
