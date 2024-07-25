import { useEffect, useState } from 'react'
import students  from '../Assets/Students.png'
import HomePageData from './HomePageData'

export default function Home(){

    const [autoSLider ,SetAutoSlider] =useState(0);

    function handleSLider(){
        SetAutoSlider(HomePageData.length - 1 == autoSLider ? 0 : autoSLider + 1)
    }

    useEffect(()=>{
setTimeout(handleSLider , 2500)
        
    })





    return(<>
<div className='bg-yellow-500 h-auto w-screen  flex flex-col items-center text-center justify-center gap-4 p-4'>
    <h1 className='font-extrabold text-3xl md:text-6xl lg:m-4'>Springdale Public School</h1>
    <img className='rounded-xl md:rounded-full' src={students} ></img>
    <div className=' font-semibold md:text-3xl md:p-2'>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</div>
    
    <div className='relative w-full h-60   object-fill'>
        { HomePageData.map((e, index)=>{

         return (<>

          <div  key={index}  className={index == autoSLider ? 

            "absolute flex  justify-center  w-full h-60  object-fill"
            :
            " hidden absolute   w-full h-60  object-fill"
          } >



            
             <img  className=" absolute flex  font-bold h-3/4 w-full md:w-2/4 xl:w-2/4  xl:h-full " src={e.img}/>
             <p className=' bg-yellow-950 text-[12px] p-2 mt-40 text-center text-white rounded-xl  absolute  font-bold md:text-2xl xl:mt-60'>{e.heading}</p>
             <button onClick={handleSLider} className=' hidden absolute z-10   pointer  bg-slate-800 ' >Next</button>
     
    
     
         </div>
         
         
         
         </>)


            




        })


        }</div>



    
   
    
    
    
    

    
    
    </div>    
    </>)
}