import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./views/Home"
import { Misproyectos } from "./views/Misproyectos"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myproyect" element={<Misproyectos />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
