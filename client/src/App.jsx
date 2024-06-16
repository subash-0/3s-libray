import { Route, Routes } from "react-router-dom/dist"
import {  Check, Login, Signup } from "./components"
import ProtectedRoutes from "./utils/ProtectedRoutes"
import { Home } from "./pages"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
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
              <Routes>
                <Route path="/check" element={<Check />} />
                <Route element={<ProtectedRoutes />} >
                  <Route path="*" element={<Home />} />
                </Route>
               
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
       </>
      
  )
}

export default App
