import { useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaAnglesLeft } from "react-icons/fa6";

const Hero = () => {
    const imgData=[
      {
        url:"/src/assets/bg1.jpg",
      },
      {
        url:"/src/assets/bg2.avif",
      },
      {
        url:"/src/assets/burger.jpg",
      }
    ];
    const[slider,setSlider]=useState(0);
    const handlePlus=()=>{
      setSlider(slider===imgData.length-1?0:slider+1)

    };
    const handleMinus=()=>{
      setSlider(slider===0?imgData.length-1:slider-1)

    };
    useEffect(()=>{
       const timer=setInterval(()=>{
        handlePlus();
      },2000)

      return()=>clearInterval(timer)

      
    },[slider])





  return (
    <>
    <div className='mt-[100px]'>
     
     <div className='w-[100%] mx-auto relative  my-5'>
      {
        imgData.map((item,i)=>{
          <div key={i} className={`${slider ===i? "block":"hidden"}`}>
            <img src={item.url} className=" w-[100%] h-[85vh]  object-cover" alt="" />
          </div>
        })
      }
     </div>
     <div  className=" absolute top-[50%]  text-center text-white   font-semibold w-full text-20px md:text-[30px] flex justify-center"></div>
     <div className=" absolute top-[50%]  text-center text-white font-semibold w-full text-20px md:text-[30px] flex justify-center">
      <p className="">Welcome to <span className=" font-extrabold  text-red-600 ">FOODIE LOVER</span></p>
      </div>

   
      <div>
        <img className='w-[100%] h-[100vh]' src={imgData[slider].url} alt="" />
        </div>
        <div className=" flex justify-between w-full px-5 absolute top-[50%] text-white">
          <FaAnglesLeft  size={35} className='cursor-pointer' onClick={handleMinus} />   
        <FaChevronRight  size={35} className='cursor pointer' onClick={handlePlus}/>
        </div>
        
    
    </div>
    </>
  
  )
}

export default Hero
