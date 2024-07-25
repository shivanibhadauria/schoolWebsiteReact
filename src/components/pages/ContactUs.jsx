import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




export default function ContactUs(){
    return(<>
    <div className="flex items-center h-screen justify-start bg-yellow-600 text-black flex-col gap-6 p-6">
        <div className="text-4xl font-extrabold">Contact Us </div>
        <div className="flex items-center justify-center gap-4  font-semibold"> <MdLocationPin className="h-16 w-16" /><span > Address: </span>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</div>

        <div className="flex items-center justify-center gap-4  font-semibold"><FaPhoneAlt className="h-6 w-6" /><span>
        Phone: </span>+1 (123) 456-7890</div>

        <div className="flex items-center justify-center gap-4  font-semibold"><MdEmail className="h-6 w-6" /><span>
        Email: </span>info@springdale.edu</div>

        <form className="flex items-center justify-center  flex-col gap-2 ">
            <input className="flex items-center justify-center text-center rounded-2xl p-2" required placeholder=" Your Name" />
            <input className="flex items-center justify-center text-center rounded-2xl p-2" required placeholder="Email" />
            <input className="flex items-center justify-center text-center rounded-2xl p-2" required placeholder="Message" />
            <button className="bg-black text-yellow-500 p-4 rounded-full font-bold">Submit</button>


        </form>

    </div>
    </>)
}