import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import ToggleDarkMode from "./ToggleMode";
import { useSelector } from "react-redux";
import { useState } from "react";
import MenuProfile from "./MenuProfile";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [profile, setProfile] = useState(false);
    const [openSideBar, setOenSideBar] = useState(false)
    const darkMode = useSelector(state => state.darkMode);
    const username = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).username : 'Guest';
    
  return (
    <div className={`w-full h-12 ${darkMode?'dark':''}  text-white  relative`}>
       
        <div className="flex justify-between items-center dark:bg-darkbg h-full w-full bg-primary px-4 sm:px-10 md:px-16 xl:px-20">
            <div className="flex gap-2 items-center" >
              <button onClick={()=>setOenSideBar(!openSideBar)}>
              {openSideBar ? <IoClose className="text-2xl"/> : <MdMenu className="text-2xl"/>}
              </button>
              
               <h1 className="border-l-2 pl-2 text-lg font-bold sm:text-2xl">3S LIBRARY</h1>
            </div>
            <div className="flex gap-2 items-center">
               
                <button className="text-white" onClick={()=>setProfile(!profile)}>Hello!  {username}</button>
                <ToggleDarkMode />
            </div>
        </div>
        {profile && <MenuProfile username={username} />}
        {openSideBar && <Sidebar />}
      
    </div>
  )
}

export default Navbar