import { Outlet, Route, Routes, redirect } from "react-router-dom"
import {  Check, Navbar } from "./components"
import ProtectedRoutes from "./utils/ProtectedRoutes"
import { AddBooks, AddVisitors, GetAllBooks, Home, Login, Signup } from "./pages"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux"

const App = () => {
  const darkMode = useSelector(state => state.darkMode);
  return (
    <>

<ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    <div className={`${darkMode ?'dark bg-black/80':''} min-h-screen`}>
              <Routes>
                <Route path="/check" element={<Check />} />

                <Route element={<ProtectedLayout />} >
                  <Route path="/" element={<Home />} />
                  <Route path="*" render={() =>redirect("/")} />
                  
                  <Route path="/add-books" element={<AddBooks />} />
                  <Route path="/list-all-books" element={<GetAllBooks />} />
                  <Route path="/add-Visitors" element={<AddVisitors />} />
                </Route>
               
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
              </div>
       </>
      
  )
}
function ProtectedLayout() {
  return (
    <ProtectedRoutes>
      <Navbar />
      <Outlet />
    </ProtectedRoutes>
  );
}

export default App
