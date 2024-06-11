
import { useEffect, useRef } from 'react';
import {students,books,libraryStaffs} from '../assets/data'
import { animateSidebar } from '../utils/AnimateComp';
const Hero = () => {
  const itemsRef = useRef([]);
  const ItemsList =[
    {name:'Total Books',value:books.length},
    {name:'Total Visitors',value:students.length},
    {name:'Total Staffs',value:libraryStaffs.length},
    {name:'Total Issued Books',value:20},
    {name:'Total Authors',value:books.length*2},
  ]
  const itemStyle ='text-white hover:bg-white dark:bg-darkbg  hover:text-primary cursor-pointer w-full sm:w-fit dark:text-white  rounded-md shadow-md px-6 py-2 flex justify-center items-center flex-col';
  useEffect(() => {
  const tl =  animateSidebar(itemsRef)
  return () => {
    tl.kill()
  }

  }, [])
  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-16 lg:gap-20 flex-col sm:flex-row">
       {ItemsList.map((item,index)=>(
          <div key={index} className={`${itemStyle} bg-primary/${index}`} ref={el=>itemsRef.current[index]=el} >
            <h1 className="text-2xl font-bold drop-shadow-md">{item.value}</h1>
            <h1 className="text-lg font-semibold drop-shadow-md">{item.name}</h1>
          </div>
        ))  
      }
        
      </div>
      
    </div>
  )
}

export default Hero
