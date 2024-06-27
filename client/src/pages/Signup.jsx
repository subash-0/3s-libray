import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { animateBox } from "../utils/Animate";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { signup } from "../redux/slices/authSlice";
import { Bulb, ToggleMode } from "../components";


const Signup = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)
  const darkMode = useSelector(state => state.darkMode);
const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: ""
})
  const signupRef = useRef(null);
  const h1Ref = useRef(null);
  const handlSignup =async (e) => {
    e.preventDefault();
    if (formData.username === "" || formData.email === "" || formData.password === "" || formData.cpassword === "") {
      toast.error("All fields are required");
      return;
    }
    if (formData.password !== formData.cpassword) {
      toast.error("Password and Confirm Password should be same");
      return;
    }
    
    try {
      const msg =await dispatch(signup(formData )).unwrap()
      toast.success(msg);
      navigate('/login');
    } catch (error) {
      toast.error("An error occurred while signing up");
    }
  }
  useEffect(() => {
    if (signupRef.current && h1Ref.current) {
      const tl = animateBox([h1Ref.current, signupRef.current]);

      return () => {
        tl.kill();
      };
    }
  }, [signupRef]);
  return (
    <div className={`bg-hero-pattern ${darkMode ? 'dark':''} bg-cover font-Lora bg-no-repeat w-screen h-screen z-40`}>
      <div className="bg-black/60 w-full h-full dark:bg-darkbg/30 dark:text-white ">
      <h1 className="w-full z-40 absolute top-16 sm:top-10 drop-shadow-white text-primary dark:text-white text-center text-xl sm:text-3xl" ref={h1Ref}>Welcome To <br/> 3S LIBRARY MANAGEMENT SYSTEM</h1>
        <div className="flex justify-center items-center h-full px-4" ref={signupRef}>
        
          <div className="w-full z-40  sm:w-96 h-fit drop-shadow-md dark:bg-darkbg  dark:text-white bg-white p-4 sm:p-8 rounded-xl">
            <h1 className="sm:text-2xl text-4xl font-bold text-center">Sign Up</h1>
            <form className="mt-6" onSubmit={handlSignup}>
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-semibold dark:text-white text-gray-dark ">Email :</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}  placeholder="eg. subash0@gmail.com" className="w-full py-2 px-1 focus:outline-none border-b-2 dark:bg-darkbg" required />
              </div>
              <div className="mb-5">
                <label htmlFor="username" className="block text-sm font-semibold dark:text-white text-gray-dark ">Username :</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})} placeholder="eg. subash0" className="w-full py-2 px-1 focus:outline-none border-b-2 dark:bg-darkbg"  required/>
              </div>
             <div className="flex gap-2">
             <div className="mb-5">
                <label htmlFor="password" className="block text-sm font-semibold dark:text-white text-gray-dark">Password :</label>
                <input type={showPassword?'text':'password'} id="password" name="password"  onChange={(e)=>setFormData({...formData,password:e.target.value})} placeholder="Enter Password.." className="w-full py-2 px-1  focus:outline-none border-b-2 dark:bg-darkbg"  required/>
              </div>
              <div className="mb-5">
                <label htmlFor="cpassword" className="block text-sm font-semibold dark:text-white text-gray-dark">Confirm Password :</label>
                <input type={showPassword?'text':'password'} id="cpassword" name="cpassword" placeholder="Re-write password .." value={formData.cpassword} onChange={(e)=>setFormData({...formData,cpassword:e.target.value})} className="w-full py-2 px-1  focus:outline-none border-b-2 dark:bg-darkbg"  required/>
              </div>
             </div>
             <div className="pb-3 -mt-1 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={showPassword} onChange={()=>setShowPassword(!showPassword)} name="" id="pass" className="cursor-pointer" /> <span>Show password</span>
             </div>
              <button type="submit" className="w-full bg-primary p-3 rounded-lg text-white font-semibold hover:bg-blue">Sign Up</button>
              <Link to="/login" className="block text-center dark:text-white text-sm mt-4 text-gray-dark ">Already have an account? <span className="hover:underline px-2  hover:text-primary">Login</span> </Link>
            </form>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-darkbg  rounded-full drop-shadow-2xl text-white hover:bg-white hover:text-btnbg " ><ToggleMode />
        <Bulb /> </div>
      </div>
    
    </div>
  )
}

export default Signup
