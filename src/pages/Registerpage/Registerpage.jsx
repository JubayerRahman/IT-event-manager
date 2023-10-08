import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthConst } from "../../AuthProvider/AuthProvider"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const Registerpage = () => {
  const [ptype, setptype] = useState("password")
  const [showBtnICon, setShowBtnICon] = useState("fa-regular fa-eye-slash")

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
  const {CreateUser} = useContext(AuthConst)

  const RegistrationFun =(e)=>{
    e.preventDefault()
    const name = e.target.name.value
    const photoUrl = e.target.photoUrl.value
    const email = e.target.email.value
    const password = e.target.password.value

    if (password.length<6) {
      return toast.error("Your password should be more then 6 characters")
    }
    if (!/[A-z]/.test(password)) {
      return toast.error("password must comtain a capital letter")
    }
    const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/
    if (!specialCharacter.test(password)) {
      return toast.error("password must comtain a special character")
    }

    console.log( email, password);

    CreateUser(email, password)
    .then(()=>{
      toast.success("Successfully Registered, Please Login")

      // Update Name
      updateProfile(auth.currentUser, {
        displayName : `${name}`,
        photoURL: `${photoUrl}`

      })
      })
    .catch(error=> toast.error(error.message))

    
  }
  return (
    <div>
      <ToastContainer/>
      <div className="hero min-h-screen bg-bannerBg py-[100px]">
  <div className="hero-content flex-col lg:flex-row-reverse lg:text-right">
    <div className=" md:w-[40vw] lg:text-left">
      <h1 className=" text-left text-5xl font-bold text-white mb-[20px]">Register Now</h1>
      <div className='w-[70vw] md:w-1/3 rounded-lg h-[6px] bg-[white] my-[10px]'></div>
      <p className="py-6 text-left text-white text-xl">Join TechEvent Pros! Register to unlock premium event management services. Elevate your IT events with our expertise. Sign up now and create unforgettable experiences for your attendees.</p>
    </div>
    <div className="card flex justify-center lg:w-[40vw] shadow-2xl bg-base-100">
      <form onSubmit={RegistrationFun} className="p-[20px] lg:card-body">
        <div className="form-control">
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="text" name="photoUrl" placeholder="Photo url" className="input input-bordered  mt-[20px]" required />
        </div>
        <div className="form-control">
          <input name="email" type="email"  placeholder="email" className="input input-bordered  mt-[20px]" required />
        </div>
        <div className="form-control relative">
          <input name="password" type={ptype} placeholder="Password" className="input mt-[20px] input-bordered" required />
          <button className="absolute	right-2 bottom-3" onClick={changePassType}><i className={showBtnICon}></i></button>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#A937D4] hover:bg-[#A937D4] text-white">Register</button>
          <p className="text-left mt-[10px]">Already have Account? Go 
          <Link className="text-[#A937D4] font-bold" to="/Login"> Sign in</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Registerpage
