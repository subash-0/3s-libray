import { FaBook } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { animateSidebar } from "../utils/AnimateComp";
import { Link, useLocation } from "react-router-dom";
import { SiBookstack } from "react-icons/si";
import { FaUsers } from "react-icons/fa6";

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
      "title": "Issue Books",
      "icon": <FaBook size={20} />,
      "link": "/issue-books"
    },
    {
      "title": "All Issued Books",
      "icon": <SiBookstack size={20} />,
      "link": "/all-issued-books"
    },
    {
      "title": "Books List",
      "icon": <FaListAlt size={20} />,
      "link": "/list-all-books"
    }, 
    {
      "title": "Visitors List",
      "icon": <FaUsers size={20} />,
      "link": "/visitors-list"
    },
    {
      "title": "Generate Reports",
      "icon": <FaChartBar size={20} />,
      "link": "/generate-reports"
    }
  ]
  



const Sidebar = () => {
  const sidebarRef = useRef([]);
  const pathname = useLocation().pathname;
  console.log(pathname);
 
  useEffect(() => {
    const tl = animateSidebar(sidebarRef);
    
    return () => {
      tl.kill();
    }
  }, []);
  return (
    <div className='w-64 h-[calc(100vh-3rem)] dark:bg-darkbg bg-primary absolute left-0 top-12 z-30'>
      <div className="py-10 px-4 flex flex-col  w-full h-full">
        {sidebarfunction.map((item, index) => (
          <Link to={item.link} key={index} ref={el=>sidebarRef.current[index] = el} className={`flex items-center gap-2 p-2  cursor-pointer hover:bg-input dark:hover:text-primary ${pathname===item.link?'bg-white text-primary':'text-white'}   rounded-md`}>
            {item.icon} {item.title}
        </Link>
        ))}

      </div>
    </div>
  )
}

export default Sidebar
