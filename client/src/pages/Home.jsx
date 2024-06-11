
import { Route, Routes } from 'react-router-dom'
import { AddBooks, GetAllBooks, Hero, Navbar } from '../components'
import { useSelector } from 'react-redux'

const Home = () => {
  const darkMode = useSelector(state => state.darkMode);
  return (
    <div className={`w-screen  ${darkMode?'dark':''} bg-hero-pattern min-h-screen`}>
      <div className="bg-black/80 dark:bg-black/65 min-h-screen dark:text-white">
        <Navbar />
      
        <div className="px-4 py-10 sm:px-10 md:px-16 xl:px-20 pb-10 rounded-md overflow-x-hidden">
        <Hero  className="py-5"/>
        <Routes>
        <Route path="/add-books" element={<AddBooks />} />
        <Route path="/list-all-books" element={<GetAllBooks />} />
        </Routes>
        </div>

    </div>
    </div>
  )
}

export default Home
