import {} from 'react'

const Footer = () => {
  return (
    <>  
      <div  className='w-full bg-black text-white'>
        <div className='grid grid-cols-2 md:grid-cols-4 py-10 pl-6 '>
            <div>
                <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>freinds  <span className='text-[#e84118]'>food</span></h2>
                <p className='text-[20px] text-[gray]'>since 2002 realme technologies pvt.ltd</p>
            </div>
            <div>
              <p className='font-bold mb-3 text-[20px] md:text-[25px]'>comapny</p>
              <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>about</p>
              <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'> carrers</p>
              <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>teams</p>
              <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'> freinds one</p>
            </div>
            <div>
               <p className='font-bold mb-3 text-[20px] md:text-[25px]'>help & support</p>
               <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>company</p>
               <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>partner with us</p>
               <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>ride with us</p>
            </div>
            <div>
              <p className='font-bold mb-3 text-[20px] md:text-[25px]'> we deliver to</p>
              <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>delhi</p>
              <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>hyderabad</p>
              <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>banglore</p>
              <p className='text-[15px] md:text-[20px]mb-2 text-[gray]'>mumbai</p>
            </div>

        </div>
    </div>
    </>

  )
}

export default Footer