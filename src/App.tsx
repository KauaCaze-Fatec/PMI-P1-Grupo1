import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import Sobre from "./pages/Sobre";
import Creditos from "./pages/Creditos";
import Simulado from "./pages/Simulado";
import Resultado from "./pages/Resultado";
import Gabarito from "./pages/Gabarito";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/creditos" element={<Creditos />} />
        <Route path="/simulado" element={<Simulado />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/gabarito" element={<Gabarito />} />
      </Routes>
    </div>
  );
}