import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/Firebase.config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

export const AuthConst = createContext(null)
const AuthProvider = ({children}) => {

  const [user , setUser] = useState(null)
  const [loader, setLoader] = useState(true)

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, createUser=>{
        setUser(createUser)
        setLoader(false)
    })
    return unSubscribe;
},[])

  const CreateUser =(email , password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth , email , password)
  }
  const SignInFunc =(email , password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // google Auth
  const googleSignIn =(Provider)=>{
    return signInWithPopup(auth , Provider)
  }

  const logOut = ()=>{
    return signOut(auth)
  }
    const authInfo ={ 
      user, 
      loader,
      CreateUser, 
      SignInFunc,
      googleSignIn,
      logOut
      }
  return (
    <AuthConst.Provider value={authInfo}>
      {children}
    </AuthConst.Provider>
  )
}

export default AuthProvider
