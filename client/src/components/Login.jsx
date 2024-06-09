import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { animateBox } from "../utils/Animate";

const Login = () => {
  const loginRf = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    if (loginRf.current && h1Ref.current) {
      const tl = animateBox([h1Ref.current, loginRf.current]);

      return () => {
        tl.kill();
      };
    }
  }, [loginRf]);
  
  const [blendingMode, setBlendingMode] = useState(false);
  return (
    <div className={`bg-hero-pattern ${blendingMode ? 'dark':''} bg-cover font-Lora bg-no-repeat w-screen h-screen overflow-x-hidden`}>
      <div className="bg-black/35 w-full h-full dark:bg-darkbg/30 dark:text-white ">
      <h1 className="w-full absolute top-16 sm:top-10 drop-shadow-blue text-primary dark:text-white text-center text-xl sm:text-3xl" ref={h1Ref}>Welcome To <br/> 3S LIBRARY MANAGEMENT SYSTEM</h1>
        <div className="flex justify-center items-center h-full px-4 overflow-x-hidden" ref={loginRf} >
        
          <div className="w-full  sm:w-80 h-fit  dark:bg-darkbg  dark:text-white bg-white p-4 sm:p-8 rounded-xl">
            <h1 className="sm:text-2xl text-4xl font-bold text-center">Login</h1>
            <form className="mt-6">
              <div className="mb-5">
                <label htmlFor="username" className="block text-sm font-semibold dark:text-white text-gray-dark ">Username :</label>
                <input type="text" id="username" name="username" placeholder="eg. subash0" className="w-full py-2 px-1 focus:outline-none border-b-2 dark:bg-darkbg" />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="block text-sm font-semibold dark:text-white text-gray-dark">Password :</label>
                <input type="password" id="password" name="password" placeholder="Enter Password.." className="w-full py-2 px-1  focus:outline-none border-b-2 dark:bg-darkbg" />
              </div>
              <button type="submit" className="w-full bg-primary p-3 rounded-lg text-white font-semibold hover:bg-blue">Login</button>
              <Link to="/signup" className="block text-center dark:text-white text-sm mt-4 text-gray-dark ">Do not have an account? <span className="hover:underline px-2  hover:text-primary">Sign Up</span> </Link>
            </form>
          </div>
        </div>
        <button className="absolute top-3 right-3 bg-darkbg p-2 rounded-full drop-shadow-2xl text-white hover:bg-white hover:text-btnbg " onClick={()=>setBlendingMode(!blendingMode)} >{blendingMode ?<MdLightMode />:<MdDarkMode /> } </button>
      </div>
    
    </div>
  )
}

export default Login
