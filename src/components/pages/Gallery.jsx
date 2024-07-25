import classrooms from '../Assets/classrooms.png'
import culture from '../Assets/culture.png'
import fest from '../Assets/fest.png'
import projects from '../Assets/projects.png'
import science from '../Assets/science.png'
import Function from '../Assets/Function.mp4'
import Virtual from '../Assets/Virtual.mp4'

export default function Gallery(){
    return(<>
    <div className='bg-yellow-600 text-black flex items-center justify-center flex-col gap-4 text-center '>
        <div>
            <h1 className='font-extrabold text-4xl m-2 md:text-6xl'>Photos</h1>
            <div className='md:grid grid-cols-2 md:gap-4 '>
                <img className='rounded-full' src={classrooms}/>
                <p  className='font-semibold text-2xl md:text-4xl 2xl:text-7xl 2xl:mt-4  md:p-6 m-2 lg:p-20 xl:p-40 bg-black text-yellow-700 rounded-full'>Students participating in various sports events</p>
                <img  className='rounded-full' src={culture}/>
                <p className='font-semibold text-2xl md:text-4xl 2xl:text-7xl 2xl:mt-4 md:p-6 m-2 lg:p-20 xl:p-40 bg-black text-yellow-700 rounded-full'>Students presenting their science projects</p>

                <img  className='rounded-full' src={fest}/>
                <p className='font-semibold text-2xl md:text-4xl 2xl:text-7xl 2xl:mt-4 md:p-6 m-2 lg:p-20 xl:p-40 bg-black text-yellow-700 rounded-full'>Students performing in the cultural fest.</p>

                <img  className='rounded-full'   src={projects}/>
                <p className='font-semibold text-2xl md:text-4xl 2xl:text-7xl 2xl:mt-4 md:p-6 m-2 lg:p-20 xl:p-40 bg-black text-yellow-700 rounded-full'>A glimpse of our interactive classrooms</p>

                <img   className='rounded-full h-60 w-full 2xl:h-2/4' src={science}/>
                <p className='font-semibold text-2xl m-2 2xl:h-2/4 md:text-4xl 2xl:text-7xl 2xl:mt-4 md:p-6 lg:p-20 xl:p-40 bg-black text-yellow-700 rounded-full'>Students reading and studying in the school library</p>

            </div>


        </div>

        <div>
            <h1 className='font-extrabold text-4xl m-2 md:text-6xl'>Videos</h1>
            <video className='rounded-full' src={Function} loop autoPlay muted></video>
            <p className='font-semibold text-2xl m-2 md:text-4xl md:p-6 bg-black text-yellow-700 rounded-full'>Virtual tour of Springdale Public School</p>

            
            <video className='rounded-full xl:w-full' src={Virtual} loop autoPlay muted></video>
            <p className='font-semibold text-2xl m-2 md:text-4xl md:p-6 bg-black text-yellow-700 rounded-full'>Highlights from the Annual Function 2023.</p>


        </div>



    </div>
    </>)
}