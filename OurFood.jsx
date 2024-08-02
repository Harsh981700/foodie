import {} from 'react'
import {mealData} from "../Data/data"

const OurFood = ({handleAdd}) => {
  return (
   
    <>
    <div className='w-[90%] mx-auto'>
        <div>
            <h2 className='text center text-[#e84118] text-3xl font-bold  py-5'>Our Food </h2>
        </div>
        <div className= 'grid sm:grid-cols-1 lg:grid-cols-4  md:grid-cols-2 py-6 gap-2 '>
            {
                mealData.map((meal)=>(
                    <>
                    <div className='flex justify-center flex-col items-center'>
                        <div>
                        <img src={meal.image} className='w-[250px] object-cover h-[200px] rounded-md' alt="" />
                        </div>
                       
                        <div className='flex justify-centerpy-2 px-4 flex-col items-center'>
                        <p className='text-xl uppercase font-semibold'>{meal.name}</p>
                        <p className='text-xl uppercase font-semibold'>{meal.price}</p>
                        <button className='bg-black sm:w-[70px]   md:w-[200px] text-white  rounded-md   lg:my-6  py-[8px]  md:py-[15px] sm:text-[10px] md:text-[20px] hover:text-[#fbc531] font-semibold 'onClick={handleAdd} >
    Add to Cart
</button>
                        </div>
                        
                    </div>
                    </>
                ))
            }


        </div>
    </div>
    </>
  )
}

export default OurFood