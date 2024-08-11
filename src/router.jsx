import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/app";
import Contato from "./pages/contato";
import NaoEncontrado from "./pages/naoEncontrado";
import Eventos from "./pages/eventos";
import VarEstado from "./pages/varEstado";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/estado" element={<VarEstado />} />

        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}
