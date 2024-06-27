import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { animateBox } from "../utils/Animate";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../redux/slices/authSlice";
import { Bulb, ToggleMode } from "../components";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {loading} = useSelector(state => state.auth);  
  const loginRf = useRef(null);
  const h1Ref = useRef(null);
 const darkMode = useSelector(state => state.darkMode);
 const [formData, setFormData] = useState({
    username: '',
    password: ''
 });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(login(formData)).unwrap();
      console.log(result);
      toast.success(`Welcome ${formData.username}`);
      navigate('/');
      
    } catch (error) {
      toast.error(error);
      
    }
  
  
}
 
  useEffect(() => {
    if (loginRf.current && h1Ref.current) {
      const tl = animateBox([h1Ref.current, loginRf.current]);

      return () => {
        tl.kill();
      };
    }
  }, [loginRf]);
  return (
    <div className={`bg-hero-pattern ${darkMode ? 'dark':''} bg-cover z-10 font-Lora bg-no-repeat w-screen h-screen overflow-x-hidden`}>
      <div className="bg-black/55 w-full h-full dark:bg-darkbg/30 dark:text-white ">
      <h1 className="w-full absolute top-16 z-50 mix-blend-* sm:top-10 drop-shadow-blue text-primary dark:text-white text-center text-xl sm:text-3xl" ref={h1Ref}>Welcome To <br/> 3S LIBRARY MANAGEMENT SYSTEM</h1>
        <div className="flex justify-center items-center h-full px-4 overflow-x-hidden" ref={loginRf} >
        
          <div className="w-full  sm:w-80 h-fit  dark:bg-darkbg  dark:text-white bg-white p-4 sm:p-8 rounded-xl">
            <h1 className="sm:text-2xl text-4xl font-bold text-center">Login</h1>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="username" className="block text-sm font-semibold dark:text-white text-gray-dark ">Username :</label>
                <input type="text" id="username" name="username" placeholder="eg. subash0" value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})} className="w-full py-2 px-1 focus:outline-none border-b-2 dark:bg-darkbg" required />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="block text-sm font-semibold dark:text-white text-gray-dark">Password :</label>
                <input type={showPassword?'text':'password'} id="password" name="password" placeholder="Enter Password.." value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} className="w-full py-2 px-1  focus:outline-none border-b-2 dark:bg-darkbg" required />
              </div>
              <div className="pb-3 -mt-1 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={showPassword} onChange={()=>setShowPassword(!showPassword)} name="" id="pass" className="cursor-pointer" /> <span>Show password</span>
             </div>
              <button type="submit" className="w-full bg-primary p-3 rounded-lg text-white font-semibold hover:bg-blue">{loading?'Loading':'Login'}</button>
              <Link to="/signup" className="block text-center dark:text-white text-sm mt-4 text-gray-dark ">Do not have an account? <span className="hover:underline px-2  hover:text-primary">Sign Up</span> </Link>
            </form>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-darkbg  rounded-full drop-shadow-2xl text-white hover:bg-white hover:text-btnbg " ><ToggleMode />
        <Bulb /> </div>
      </div>
      
    </div>
  )
}

export default Login
