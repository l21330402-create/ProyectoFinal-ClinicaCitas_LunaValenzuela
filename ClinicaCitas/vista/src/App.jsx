import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Pacientes from "./pages/Pacientes";
import Doctores from "./pages/Doctores";
import AgendarCita from "./pages/AgendarCita";
import Citas from "./pages/Citas";

function App() {
    return (
        <BrowserRouter>
            <nav style={{ background: "#1a73e8", padding: "1rem 2rem", display: "flex", gap: "2rem", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
                <span style={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}>🏥 MediAgenda</span>
                <Link style={{ color: "white", textDecoration: "none", fontWeight: "500" }} to="/">Inicio</Link>
                <Link style={{ color: "white", textDecoration: "none", fontWeight: "500" }} to="/pacientes">Pacientes</Link>
                <Link style={{ color: "white", textDecoration: "none", fontWeight: "500" }} to="/doctores">Doctores</Link>
                <Link style={{ color: "white", textDecoration: "none", fontWeight: "500" }} to="/agendar">Agendar Cita</Link>
                <Link style={{ color: "white", textDecoration: "none", fontWeight: "500" }} to="/citas">Citas</Link>
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