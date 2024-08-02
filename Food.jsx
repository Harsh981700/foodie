import{topPicks} from "../Data/data"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Food = ({handleAdd}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
   
    <>
    <div className="w-[90%] mx-auto mt-[100px]">
      <h2 className="font-bold text-3xl pl-10"> What's on your mind?</h2>
      <div className="py-20">
        
      <Slider {...settings}>
        {
          topPicks.map((item)=>(
            <>
            <div key={item.id} className=" bg-[white] rounded-md">
              <div className="  rounded-t-2xl flex justify-center item-center">
           <img src={item.imag} className="w-[200px] rounded-full h-[200px] object-cover " alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl uppercase font-semibold">{item.title}</p>
                <p className="text-xl uppercase font-semibold">{item.price}</p>

                <button className='bg-black sm:w-[70px]   md:w-[200px] text-white  rounded-md   lg:my-6  py-[8px]  md:py-[15px] sm:text-[10px] md:text-[20px] hover:text-[#fbc531] font-semibold ' onClick={handleAdd}>
    Add to Cart
</button>
              </div>
              
              
            </div>
            </>
          ))
        }
        </Slider>
      </div>

    </div>
    </>

  )
}

export default Food