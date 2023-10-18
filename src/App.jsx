import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Misproyectos } from "./views/Misproyectos";
import { AboutView } from "./views/AboutView";
import { Curriculum } from "./views/Curriculum";
import { Contact } from "./views/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myproyect" element={<Misproyectos />} />
        <Route path="/About" element={<AboutView />} />
        <Route path="/Curriculum" element={<Curriculum />} />
        <Route path="/Contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
