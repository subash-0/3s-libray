
import { useEffect, useRef } from 'react';
import {visitors,books,libraryStaffs} from '../assets/data'
import { animateSidebar } from '../utils/AnimateComp';
import { useSelector } from 'react-redux';
const Hero = () => {
  const addedBooks = useSelector(state=>state.book.books);
  let booklt = addedBooks.length;
  const itemsRef = useRef([]);
  const ItemsList =[
    {name:'Total Books',value:books.length+booklt },
    {name:'Total Visitors',value:visitors.length},
    {name:'Total Staffs',value:libraryStaffs.length},
    {name:'Total Issued Books',value:20},
    {name:'Total Authors',value:books.length*2},
  ]
  const itemStyle ='text-primary hover:bg-white/90 dark:bg-darkbg  hover:text-primary cursor-pointer w-full sm:w-fit dark:text-white  rounded-md shadow-md px-6 py-2 flex justify-center items-center flex-col';
  useEffect(() => {
  const tl =  animateSidebar(itemsRef)
  return () => {
    tl.kill()
  }

  }, [])
  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap-4 sm:gap-1 md:gap-2 lg:gap-10 flex-col sm:flex-row flex-wrap">
       {ItemsList.map((item,index)=>(
          <div key={index} className={`${itemStyle} bg-primary/${index}`} ref={el=>itemsRef.current[index]=el} >
            <h1 className="text-xl font-bold drop-shadow-md">{item.value}</h1>
            <h1 className="text-sm font-semibold drop-shadow-md">{item.name}</h1>
          </div>
        ))  
      }
        
      </div>
      
    </div>
  )
}

export default Hero
