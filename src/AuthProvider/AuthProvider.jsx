import { createContext } from "react"

export const AuthConst = createContext(null)
const AuthProvider = ({children}) => {
    const authInfo ={ name:"i am kong" }
  return (
    <AuthConst.Provider value={authInfo}>
      {children}
    </AuthConst.Provider>
  )
}

export default AuthProvider
