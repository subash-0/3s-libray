import { BiLogOut } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

const MenuProfile = (props) => {
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }
  return (
    <div className="w-44 h-40 dark:bg-darkbg bg-primary absolute rounded-md top-14 right-4 sm:right-28 p-3 z-30">
        <div className="flex flex-col justify-center items-center h-full w-full">
            <FaRegUserCircle size={40} />
            <h1 className="text-white">{props.username}</h1>
            <button className="text-white flex justify-center items-start gap-1" ><span></span> <CiUser size={20} /> Profile  </button>
            <button className="text-white flex justify-center items-start gap-1" ><span></span> <MdSettings size={20} /> Settings  </button>
            <button className="text-white flex justify-center items-start gap-1" onClick={handleLogout}><span></span> <BiLogOut size={20} /> Logout </button>
            
               
          
        </div>
       
    </div>
  )
}

export default MenuProfile
