import { Route, Routes } from "react-router-dom/dist"
import { Home, Login, Signup } from "./components"
import ProtectedRoutes from "./utils/ProtectedRoutes"

const App = () => {
  return (
              <Routes>
                <Route element={<ProtectedRoutes />} >
                  <Route path="/" element={<Home />} />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
  )
}

export default App