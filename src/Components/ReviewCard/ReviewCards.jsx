const ReviewCards = ({review}) => {
    const {name} = review
  return (
    <div>
      <div className="card bg-base-100 shadow-xl m-[20px] h-[300px]">
        <div className=" h-full flex flex-col justify-evenly p-[20px] ">
            <h2 className="card-title"><i className="text-[#A937D4] text-5xl fa-solid fa-circle-user"></i> {name}</h2>
            <div className='w-full rounded-lg h-[3px] bg-[#A937D4] mx-auto my-[10px]'></div>
            <p>{review.review}</p>
        </div>
        </div>
    </div>
  )
}

export default ReviewCards