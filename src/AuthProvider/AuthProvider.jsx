import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/Firebase.config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

export const AuthConst = createContext(null)
const AuthProvider = ({children}) => {

  const [user , setUser] = useState(null)

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, createUser=>{
        setUser(createUser)
    })
    return unSubscribe;
},[])

  const CreateUser =(email , password)=>{
    return createUserWithEmailAndPassword(auth , email , password)
  }
  const SignInFunc =(email , password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = ()=>{
    return signOut(auth)
  }
    const authInfo ={ 
      user, 
      CreateUser, 
      SignInFunc,
      logOut
      }
  return (
    <AuthConst.Provider value={authInfo}>
      {children}
    </AuthConst.Provider>
  )
}

export default AuthProvider
