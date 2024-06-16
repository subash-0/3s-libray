import { FaBook } from "react-icons/fa6";
import { RiExchangeBoxFill } from "react-icons/ri";
import { FaListAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { animateSidebar } from "../utils/AnimateComp";
import { Link } from "react-router-dom";

const sidebarfunction =[
    {
      "title": "Add Books",
      "icon": <FaBook size={20} />,
      "link": "/add-books"
    },
    {
      "title": "Add Visitors",
      "icon": <FaUser size={20} />,
      "link": "/add-visitors"
    },
   
    {
      "title": "Return Books",
      "icon": <RiExchangeBoxFill size={20} />,
      "link": "/check-out-return"
    },
   
    {
      "title": "Issue Books",
      "icon": <FaBook size={20} />,
      "link": "/issue-books"
    },
    {
      "title": "List All Books",
      "icon": <FaListAlt size={20} />,
      "link": "/list-all-books"
    },
    {
      "title": "Generate Reports",
      "icon": <FaChartBar size={20} />,
      "link": "/generate-reports"
    }
  ]
  



const Sidebar = () => {
  const sidebarRef = useRef([]);

 
  useEffect(() => {
    const tl = animateSidebar(sidebarRef);
    
    return () => {
      tl.kill();
    }
  }, []);
  return (
    <div className='w-64 min-h-screen dark:bg-darkbg bg-primary absolute left-0 top-12 z-30'>
      <div className="py-10 px-4 flex flex-col justify-center w-full h-full">
        {sidebarfunction.map((item, index) => (
          <Link to={item.link} key={index} ref={el=>sidebarRef.current[index] = el} className='flex items-center gap-2 p-2  cursor-pointer dark:hover:text-darkbg text-white hover:bg-white hover:text-primary rounded-md'>
            {item.icon} {item.title}
        </Link>
        ))}

      </div>
    </div>
  )
}

export default Sidebar
