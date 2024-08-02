// import { RxCross2 } from "react-icons/rx";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react'
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({count}) => {
  const [side, setSide] = useState(false)


  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-white ">
    <div className='flex justify-between py-[20px] px-[25px] text-[20px] font-semibold border-b relative'>
      <div>
      <Link to='/'>
        <p className="cursor-pointer">freinds<span className='text-[#e84118]'>food</span></p>
        </Link>
       
      </div>
      <div >
        <ul className=' sm:flex gap-4  hidden cursor-pointer'>
          <Link to="/">
          <li className="   hover:text-[#e84118]">Home</li></Link>
          <Link to="/AboutUs">
          <li className=" hover:text-[#e84118]">About Us</li></Link>
          <Link to="/Ourfood"><li className=" hover:text-[#e84118]">Our Food</li></Link>
          <Link to="/Sign">  <li className=" hover:text-[#e84118]">Sign in</li></Link>
       
          
          
        
        </ul>
      </div >
          { side? <div className="bg-[#f5f6fa] w-[300px] absolute top-0 right-0 text-center h-[100vh] flex items-center z-10 justify-center"> 
          <RxCross2 size={25} className=" cursor-pointer absolute top-3 right-3" onClick={() => setSide(!side)}/>
          <ul className=' flex gap-12 cursor-pointer flex-col'>
          <Link to="/">
          <li className="   hover:text-[#e84118]" onClick={() => setSide(!side)}>Home</li></Link>
          <Link to="/AboutUs">
          <li className=" hover:text-[#e84118]" onClick={() => setSide(!side)}>About Us</li></Link>
          <Link to="/Ourfood"><li className=" hover:text-[#e84118]" onClick={() => setSide(!side)}>Our Food</li></Link>
          <Link to="/Sign">  <li className=" hover:text-[#e84118]"  onClick={() => setSide(!side)}>Sign in</li></Link>
        </ul>
          </div>:""
          }

    


        <div className="flex gap-5">
          <p><RxHamburgerMenu size={30} className=" cursor-pointer block sm:hidden " onClick={() => setSide(!side)} /></p>
          <p>
            {/* {CountQueuingStrategy\} */}
            {count}

            <MdShoppingCart size={30} /></p>

        </div>
      </div>
      </div>

      )
}


      export default Header