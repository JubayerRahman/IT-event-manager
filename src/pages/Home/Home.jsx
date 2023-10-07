import Banner from "../../Components/BannerSection/Banner"
import ReviewCarousel from "../../Components/Carousel/ReviewCarousel"
import Packege from "../../Components/Packege/Packege"
import Services from "../../Components/Services/Services"


const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Packege/>
      <ReviewCarousel/>
    </div>
  )
}

export default Home
