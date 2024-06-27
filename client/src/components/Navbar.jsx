import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import ToggleDarkMode from "./ToggleMode";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import MenuProfile from "./MenuProfile";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { animateText } from "../utils/Textanimation";

const Navbar = () => {
  
  const textRefs = useRef([]);
    const [profile, setProfile] = useState(false);
    const [openSideBar, setOenSideBar] = useState(false)
    const darkMode = useSelector(state => state.darkMode);
    const user = localStorage.getItem('user');
    let username = JSON.parse(user).username;

    useEffect(() => {
    const tl =  animateText(textRefs);
    return () => {
      tl.kill();
    }
    },[])
    const addToRefs = (el) => {
      if (el && !textRefs.current.includes(el)) {
          textRefs.current.push(el);
      }
  };
    
  return (
    <div className={`w-full h-12 ${darkMode?'dark':''}  text-white  sticky top-0 z-50`}>
       
        <div className="flex justify-between items-center dark:bg-darkbg h-full w-full bg-primary px-4 sm:px-10 md:px-16 xl:px-20">
            <div className="flex gap-2 items-center" >
              <button onClick={()=>setOenSideBar(!openSideBar)}>
              {openSideBar ? <IoClose className="text-2xl"/> : <MdMenu className="text-2xl"/>}
              </button>

              <Link to={"/"} className="flex items-center border-l-2 border-white px-3 sm:text-3xl uppercase w-full font-bold h-full relative text-white">
          <div className=" drop-shadow-blue duration-100 " ref={addToRefs}>WelCome To</div>
          <div className=" absolute  drop-shadow-blue duration-100 " ref={addToRefs}>3S LIBRARY</div>
             </Link>
            </div> 
            <div className="flex gap-2 items-center">
               
                <button className="text-white drop-shadow-blue" onClick={()=>setProfile(!profile)}>Hello!  {username}</button>
                <ToggleDarkMode />
            </div>
        </div>
        {profile && <MenuProfile username={username} />}
        {openSideBar && <Sidebar />}
      
    </div>
  )
}

export default Navbar