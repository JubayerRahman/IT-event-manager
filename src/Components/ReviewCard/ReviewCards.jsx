const ReviewCards = ({review}) => {
    const {name , img } = review
  return (
    <div>
      <div className="card bg-base-100 shadow-xl m-[20px] h-[500px] lg:h-[300px]">
        <div className=" h-full flex flex-col justify-evenly p-[20px] ">
          <div className="flex gap-3 mb-[-50px] md:mb-[-20px]">
            <img className="w-[60px] h-[60px] border-2 border-[#A937D4] p-[2px] rounded-full" src={img} alt={name}/>
            <h2 className="card-title text-xl font-bold specialFont">{name}</h2>
          </div>
            <div className='w-full rounded-lg h-[3px] bg-[#A937D4] mx-auto my-[10px] italic'></div>
            <p className="specialFont">{review.review}</p>
        </div>
        </div>
    </div>
  )
}

export default ReviewCards
