
// import img1  from '../assets/imge.jpeg'

const Delivery = () => {
  return (
    
    <div className='w-full py-16 px-4 '>
<h3 className='text-[#fbc531] font-bold text-2xl text-center'>
    Quick Delivery app
    </h3>
<div className='grid grid-cols-3 w-[70%] mx-auto my-10 gap-17 '>
    <img src='\src\assets\phone2.jpg' className='w-[550px]'/>

<div className='flex flex-col justify-center' > 
<p className='font-bold text-[green] sm:text-[15px]  md:text-[30px]'>Get the App</p>
<h2 className=' sm:text-2xl  md::text-3xl lg:text-4xl py-2  font-bold' >
    The fast Food Delivery in India
</h2>
<button className='bg-black sm:w-[70px]   md:w-[200px] text-white  rounded-md   lg:my-6  py-[8px]  md:py-[15px] sm:text-[10px] md:text-[20px] hover:text-[#fbc531] font-semibold '>
    Get Stated
</button>
</div>
</div>

    </div>
  )
}

export default Delivery