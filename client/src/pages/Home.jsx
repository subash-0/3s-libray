
import {  Chart, Hero, PieChart } from '../components'
import { useSelector } from 'react-redux'

const Home = () => {
  const darkMode = useSelector(state => state.darkMode);
  return (
    <div className={`${darkMode?'dark':''} min-h-screen`}>
      <div className="bg-btnbg/10  min-h-screen dark:bg-black">
        <div className="px-4 py-10 sm:px-10 md:px-16 xl:px-20 pb-10 rounded-md">
        <Hero  className="py-5"/>
        </div>
            <div className="flex justify-center items-center gap-3 w-full h-full flex-wrap">
              <div className="">
              <PieChart />
              </div>
            
            

            </div>
    </div>
    </div>
  )
}

export default Home
