import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthConst } from "../../AuthProvider/AuthProvider"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider } from "firebase/auth";

const LoginPage = () => {

  const [ptype, setptype] = useState("password")
  const [showBtnICon, setShowBtnICon] = useState("fa-regular fa-eye-slash")
  const provider = new GoogleAuthProvider()

  const nevigate = useNavigate()
  const loacation = useLocation()

  const changePassType =(e)=>{
    e.preventDefault()
    if(ptype == "password"){
      setptype("text")
      setShowBtnICon("fa-regular fa-eye")
    }
    if(ptype == "text"){
      setptype("password")
      setShowBtnICon("fa-regular fa-eye-slash")
    }
  }

  const {SignInFunc , googleSignIn} = useContext(AuthConst)

  const LoginFormFunc =(e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    SignInFunc(email , password)
    .then(result=>{
      toast.success("login successfully")
      setTimeout(() => {
        if(loacation.state){
          return nevigate(loacation.state)
        }
        nevigate("/")
      }, 2000);
    })  
    .catch(error=>{
      toast.error(error.message)
    })
  }
  return (
    <div>
      <ToastContainer/>
      <div className="hero min-h-screen bg-bannerBg py-[100px]">
  <div className="hero-content flex-col lg:flex-row-reverse lg:text-right">
    <div className=" md:w-[40vw] lg:text-left">
      <h1 className=" text-left text-5xl font-bold text-white mb-[20px] specialFont">Sign in Now</h1>
      <div className='w-[70vw] md:w-1/3 rounded-lg h-[6px] bg-[white] my-[10px]'></div>
      <p className="py-6 text-left text-white text-xl specialFont">TechEvent Pros welcomes you! Sign in to access exclusive event management tools and resources. Your journey to seamless and memorable IT events begins here.</p>
    </div>
    <div className="card flex justify-center md:w-[40vw] shadow-2xl bg-base-100">
      <form onSubmit={LoginFormFunc} className="p-[20px] lg:card-body">
        <div className="form-control">
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <input name="password" type={ptype} placeholder="Password" className="input mt-[20px] input-bordered" required />
          <button className="absolute	right-2 bottom-3 text-[#A937D4]" onClick={changePassType}><i className={showBtnICon}></i></button>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-[#A937D4] hover:bg-[#A937D4] text-white specialFont">Sign in</button>
        </div>
        <p className="text-gray-400 text-xl text-center font-bold specialFont">or</p>
        <div className="form-control ">
          <button className="btn bg-[#A937D4] hover:bg-[#A937D4] text-white specialFont" onClick={(e)=>{
            e.preventDefault() 
            googleSignIn(provider)
            .then(result=>{
              toast.success("login successfully")
              setTimeout(() => {
                if(loacation.state){
                  return nevigate(loacation.state)
                }
                nevigate("/")
              }, 2000);
            })  
            .catch(error=>{
              toast.error(error.message)
            })
            }}>Sign in With <i className="fa-brands fa-google"></i></button>
          </div>
      <p className="text-center specialFont mt-[10px]">Don't have Account? Go 
      <Link className="text-[#A937D4] font-bold" to="/register"> Register</Link></p>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default LoginPage
