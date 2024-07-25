import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaSchoolFlag } from "react-icons/fa6";

import { useState } from "react";

export default function Navbar() {
    const [ openNav, SetOpenNav] = useState(false);

   function handleOpenNav(){
    SetOpenNav(!openNav);
   }

  return (

    <>
    <div >
      <div className="bg-black w-screen h-20  text-yellow-600 font-semibold flex items-center justify-between">
        <Link to="/" className="m-2 p-2 h-full w-20">
        
        <FaSchoolFlag  className="h-full w-12"/>

        </Link>

        <button onClick={handleOpenNav} className="flex flex-col m-2 p-2 text-2xl md:hidden">{
            openNav == true ? <ImCross /> :<GiHamburgerMenu />
            }
          
          
        </button>

        <div className="md:flex  hidden   bg-black text-yellow-700 items-center justify-center gap-1 lg:gap-2 xl:text-2xl  lg:text-[20px] font-bold overflow-hidden m-3 lg:m-6 ">
        <Link className="hover:bg-yellow-600 hover:text-black rounded-2xl p-2 " to="/aboutus">About Us</Link>
        <Link className="hover:bg-yellow-600 hover:text-black rounded-2xl p-2 " to="/academics">Academics</Link>
        <Link className="hover:bg-yellow-600 hover:text-black rounded-2xl p-2 " to="/admissions">Admissions</Link>
        <Link className="hover:bg-yellow-600 hover:text-black rounded-2xl p-2 " to="/faculty">Faculty</Link>
        <Link className="hover:bg-yellow-600 hover:text-black rounded-2xl p-2 " to="/students">Students</Link>
        <Link className="hover:bg-yellow-600 hover:text-black rounded-2xl p-2 " to="/gallery">Gallery</Link>
        <Link className="hover:bg-yellow-600 hover:text-black rounded-2xl p-2 " to="/contactus">Contact Us</Link>
      </div> 






      </div>
      {
        openNav ? 
        <div className="flex font-semibold md:hidden  flex-col bg-black text-yellow-700 items-center justify-center gap-2">
        <Link to="/aboutus">About Us</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/faculty">Faculty</Link>
        <Link to="/students">Students</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contactus">Contact Us</Link>
      </div> 

      :

      null
      }




</div>

     
    </>
  );
}
