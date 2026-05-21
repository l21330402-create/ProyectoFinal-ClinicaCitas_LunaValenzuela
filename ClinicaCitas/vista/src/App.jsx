import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Pacientes from "./pages/Pacientes";
import Doctores from "./pages/Doctores";
import AgendarCita from "./pages/AgendarCita";
import Citas from "./pages/Citas";

function App() {
    return (
        <BrowserRouter>
            <nav style={{ background: "#2c3e50", padding: "1rem", display: "flex", gap: "1rem" }}>
                <Link style={{ color: "white", textDecoration: "none" }} to="/">🏥 Inicio</Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/pacientes">👤 Pacientes</Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/doctores">👨‍⚕️ Doctores</Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/agendar">📅 Agendar Cita</Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/citas">📋 Citas</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/pacientes" element={<Pacientes />} />
                <Route path="/doctores" element={<Doctores />} />
                <Route path="/agendar" element={<AgendarCita />} />
                <Route path="/citas" element={<Citas />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;