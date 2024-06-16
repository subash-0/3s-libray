
import { Route, Routes } from 'react-router-dom'
import { AddBooks, AddVisitors, GetAllBooks, Hero, Navbar } from '../components'
import { useSelector } from 'react-redux'

const Home = () => {
  const darkMode = useSelector(state => state.darkMode);
  return (
    <div className={`${darkMode?'dark':''} min-h-screen`}>
      <div className="bg-btnbg/10  min-h-screen dark:bg-black">
        <Navbar />
      
        <div className="px-4 py-10 sm:px-10 md:px-16 xl:px-20 pb-10 rounded-md">
        <Hero  className="py-5"/>
        <Routes>
        <Route path="/add-books" element={<AddBooks />} />
        <Route path="/list-all-books" element={<GetAllBooks />} />
        <Route path="/add-Visitors" element={<AddVisitors />} />
        </Routes>
        </div>

    </div>
    </div>
  )
}

export default Home
