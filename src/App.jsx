import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./views/Home"
import { Misproyectos } from "./views/Misproyectos"
import { AboutView } from "./views/AboutView"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myproyect" element={<Misproyectos />} />
      <Route path="/About" element={<AboutView />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
