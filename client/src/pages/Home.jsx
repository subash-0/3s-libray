
import {  Bulb, Hero, PieChart } from '../components'
import { useSelector } from 'react-redux'

const Home = () => {
  const darkMode = useSelector(state => state.darkMode);
  return (
    <div className={`${darkMode?'dark':''} min-h-screen`}>
      <div className="bg-btnbg/10  min-h-screen dark:bg-black">
        <div className="px-4 py-10 -z-50 sm:px-10 md:px-16 xl:px-20 pb-10 rounded-md">
        <Hero  className="py-5 -z-30"/>
        </div>
            <div className="">
              <div className="flex justify-center items-center">
              <PieChart />
              </div>
            <Bulb />
            

            </div>
    </div>
    </div>
  )
}

export default Home
