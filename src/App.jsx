import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <>
    <ScrollRestoration/>
      <Navbar/>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer/>
    </>
  )
}

export default App
