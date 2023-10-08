const Contact = () => {
  return (
    <div data-aos="flip-left">
      <div className="hero min-h-screen bg-bannerBg py-[100px]">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" md:w-[40vw] lg:text-left">
      <h1 className=" text-left text-5xl font-bold text-white">Contact us</h1>
      <div className='w-[70vw] md:w-1/3 rounded-lg h-[6px] bg-[#A937D4] my-[10px]'></div>
      <p className="py-6 text-left text-white text-xl">Our Contact Us page at TechEvent Pros ensures seamless communication with our dedicated team. Reach out for inquiries, collaboration, or event solutions. We're here to make your tech events extraordinary.</p>
      <p title="call us" className="text-white text-xl cursor-pointer"><i className="fa-solid fa-phone-volume mr-[10px]"></i>: 0937935797876634</p>
      <p title="Send us a mail" className="text-white text-xl cursor-pointer"><i class="fa-solid fa-at mt-[20px] mr-[10px] mb-[50px]"></i>: TechEvent_Pros@mail.com</p>
    </div>
    <div className="card flex justify-center md:w-[50vw] shadow-2xl bg-base-100">
      <form className="p-[20px] lg:card-body">
        <div className="form-control">
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Subject" className="input mt-[20px] input-bordered" required />
        </div>
        <div className="form-control">
          <textarea className="textarea textarea-bordered h-[200px] mt-[20px] " placeholder="Write your message" required></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#A937D4] hover:bg-[#A937D4] text-white">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Contact
