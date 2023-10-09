import React, { useContext } from 'react'
import { AuthConst } from '../../AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {user, loader} = useContext(AuthConst)
    const loacation = useLocation()

    if(loader){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user == null){
        return <Navigate state={loacation.pathname} to="/Login" />
    }
  return children
}

export default PrivateRoutes
