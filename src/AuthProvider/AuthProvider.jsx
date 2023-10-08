import { createContext, useState } from "react"
import auth from "../Firebase/Firebase.config"
import { createUserWithEmailAndPassword } from "firebase/auth"

export const AuthConst = createContext(null)
const AuthProvider = ({children}) => {

  const [user , setUser] = useState(null)


  const CreateUser =(email , password)=>{
    return createUserWithEmailAndPassword(auth , email , password)
  }
    const authInfo ={ user , CreateUser  }
  return (
    <AuthConst.Provider value={authInfo}>
      {children}
    </AuthConst.Provider>
  )
}

export default AuthProvider
