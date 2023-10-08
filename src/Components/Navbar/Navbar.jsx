import { NavLink } from "react-router-dom"
import logo from "../../imgs/logo.png"
import "./Navbar.css"
import { useContext, useEffect } from "react"
import { AuthConst } from "../../AuthProvider/AuthProvider"

const Navbar = () => {

  const {user , logOut} = useContext(AuthConst)

  // useEffect(()=>{},[])


    const BarLinks = 
    <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Career">Career</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
    </>

    const LoginIngo = 
    <>
      {
        user ?
        <>
        <li>
          <div className="flex flex-col justify-center items-center gap-[15x] cursor-pointer">
            <img className="w-[50px] h-[50px] rounded-[100%]" src={user.photoURL} alt={user.displayName}/>
            <h1 className="font-bold text-xl text-[#A937D4]">{user.displayName}</h1>
          </div>
        </li>
        <li><button onClick={logOut} className="btn bg-[#A937D4] text-white ml-[20px]">Log Out</button></li>
        </>
        :
        <>
          <li className="signinLink"><NavLink to="/Login">Sign in</NavLink></li>
          <li ><NavLink to="/Register">Sign up</NavLink></li>
        </>
      }
    </>
  return (
    <div >
      <div className="navbar bg-base-100 mb-[10px] border-b-[2px] Navbar">
  <div className=" w-full flex flex-row-reverse  md:navbar-start">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost md:hidden">
        <i className="fa-solid fa-bars  text-2xl border-[2px] border-[black] p-[10px] rounded-md"></i>
      </label>
      <ul tabIndex={0} className="menuLinksSmall menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-[90vw]">
        {BarLinks}
        { LoginIngo }
      </ul>
    </div>
    <NavLink className="flex-1" to="/"><img className="w-[100px] flex-1" src={logo} alt="logo"/></NavLink>
  </div>
  <div className=" hidden md:flex navbar-center lg:flex">
    <ul className="menuLinks menu-horizontal px-1">
        {BarLinks}
    </ul>
  </div>
  <div className=" hidden md:flex md:navbar-end">
  <ul className="hidden md:flex items-center SigninLinks menu-horizontal px-1">
    { LoginIngo }
  </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar
