import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <>
    <ScrollRestoration/>
      <div className="container mx-auto">
        <Navbar/>
        <Outlet></Outlet>
      </div>
      <Footer/>
    </>
  )
}

export default App
