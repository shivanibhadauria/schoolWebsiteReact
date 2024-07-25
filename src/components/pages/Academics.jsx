export default function Academics(){
    return(<>
    <div className="flex items-center h-auto w-screen justify-center flex-col text-black bg-yellow-600  gap-4 p-4 ">

       
        <ul className="flex  items-center justify-center flex-col gap-4 list-disc    p-4 ">
        <div className="font-extrabold text-4xl md:text-6xl">Curriculum:</div>
            <li className="font-semibold  md:text-3xl m-2"><span className="font-extrabold">Primary (Grades 1-5):</span> English, Mathematics, Science, Social Studies, Art, Physical Education  </li>
            <li className="font-semibold  md:text-3xl m-2"><span className="font-extrabold">Secondary (Grades 6-10):</span> English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art  </li>
            <li className="font-semibold  md:text-3xl m-2">Senior Secondary (Grades 11-12):

                <li className="font-semibold"><span className="font-extrabold">Science Stream:</span>Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
                <li className="font-semibold"><span className="font-extrabold">Commerce Stream:</span> Accountancy, Business Studies, Economics, Mathematics, English</li>
                
                
                 </li>
        </ul>
        <div className="font-semibold  md:text-3xl m-2"><span className="font-extrabold">Teaching Methodologies: </span>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</div>
        <div className="font-semibold  md:text-3xl m-2"><span className="font-extrabold">Educational Resources: </span>Digital classrooms, interactive learning modules, and access to online educational platforms.</div>

    </div>
    </>)
}