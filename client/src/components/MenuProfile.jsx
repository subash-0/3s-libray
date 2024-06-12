import { BiLogOut } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { toast } from "react-toastify";

const MenuProfile = (props) => {
    const handleLogout = () => {
      toast.success("Logout Success");
        localStorage.removeItem('user');
        window.location.reload();
    }

  const isMenu = "text-white flex justify-center items-start gap-1 px-2 py-1 w-full rounded-sm hover:bg-darkbg dark:hover:bg-primary";

  return (
    <div className="w-44 h-48 dark:bg-darkbg bg-primary absolute rounded-md top-14 right-4 sm:right-28 p-3 z-30">
        <div className="flex flex-col justify-center items-center h-full w-full">
            <FaRegUserCircle size={40} />
            <h1 className="text-white py-1 my-1 px-2 w-full flex justify-center items-center bg-darkbg/55 dark:bg-primary/80 rounded-sm">{props.username}</h1>
            <button className={isMenu} ><span></span> <CiUser size={20} /> Profile  </button>
            <button className={isMenu}><span></span> <MdSettings size={20} /> Settings  </button>
            <button className={isMenu} onClick={handleLogout}><span></span> <BiLogOut size={20} /> Logout </button>
            
               
          
        </div>
       
    </div>
  )
}

export default MenuProfile
