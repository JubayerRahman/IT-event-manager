import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
import ReviewCards from "../ReviewCard/ReviewCards";
import Aos from 'aos'
import "aos/dist/aos.css"

const ReviewCarousel = () => {
  const [Reviews, setReviews] = useState([])

  useEffect (()=>{
    fetch("./ReviewData.json")
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])

  useEffect(()=>{
    Aos.init({duration:500})
  },[])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="mx-auto my-[100px] p-[20px]">
      <h1 data-aos="flip-left" className="text-xl md:text-3xl font-bold text-center mb-[20px] specialFont">Feedbacks from our client's</h1>
      <div data-aos="fade-right" className='w-[70vw] md:w-1/2 rounded-lg h-[6px] bg-[#A937D4] mx-auto my-[10px]'></div>
      <Carousel 
      responsive={responsive}
      swipeable={true}
      draggable={false}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      // customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px"
      >
      {
        Reviews.map(review => <ReviewCards key={review.id} review={review}/>)
      }
      </Carousel>
    </div>
  )
}

export default ReviewCarousel
