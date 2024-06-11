import { useSelector } from "react-redux";
import Hero from "./Hero";

const HomeComponent = () => {
  
  const darkMode = useSelector(state => state.darkMode);
  return (
    <div className={`w-full has-[calc(100vh-3ewm)] ${darkMode?'dark':''} bg-hero-pattern`}>
      <div className="bg-black/80 dark:bg-black/65 w-full h-[calc(100vh-3rem)] dark:text-white py-10 px-4 sm:px-10 md:px-16 xl:px-20">
      <Hero />
      </div>
    
    </div>
  )
}

export default HomeComponent
