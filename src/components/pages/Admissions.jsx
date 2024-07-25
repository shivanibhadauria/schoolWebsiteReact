export default function Admissions(){
    return(<>
    <div className="flex items-center justify-center bg-yellow-600 text-black flex-col p-4 gap-4">
        <div className="text-4xl font-extrabold md:text-5xl lg:text-6xl">Process</div>
        <div className="font-semibold text-center md:text-3xl ">Admission forms are available for download. Submit the completed form along with required documents at the school office</div>
        <div className="text-4xl font-extrabold md:text-5xl lg:text-6xl">Criteria</div>
        <div className="font-semibold text-center md:text-3xl">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades</div>
        <ul className="list-disc p-2 m-2">
            <li className=" font-semibold md:text-3xl">Important Dates:
                <ul className="list-disc md:text-3xl" >
                    <li className="">Admission Form Availability: March 1st</li>
                    <li>Last Date for Submission: March 31st</li>
                    <li>Entrance Test: April 15th</li>
                    <li>Announcement of Results: April 30th</li>

                </ul>



            </li>
        </ul>


    </div>
    </>)
}