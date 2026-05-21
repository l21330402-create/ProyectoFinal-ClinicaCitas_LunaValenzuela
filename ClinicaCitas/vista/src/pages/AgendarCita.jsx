/// <reference path="../app.jsx" />
import { useEffect, useState } from "react";

function AgendarCita() {
    const [pacientes, setPacientes] = useState([]);
    const [doctores, setDoctores] = useState([]);
    const [form, setForm] = useState({ fecha: "", motivo: "", pacienteId: "", doctorId: "" });

    useEffect(() => {
        fetch("https://localhost:7294/api/Pacientes").then(r => r.json()).then(setPacientes);
        fetch("https://localhost:7294/api/Doctores").then(r => r.json()).then(setDoctores);
    }, []);

    const guardar = () => {
        fetch("https://localhost:7294/api/Citas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...form, pacienteId: parseInt(form.pacienteId), doctorId: parseInt(form.doctorId) })
        }).then(() => { alert("Cita agendada"); setForm({ fecha: "", motivo: "", pacienteId: "", doctorId: "" }); });
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Agendar Cita</h2>
            <select value={form.pacienteId} onChange={e => setForm({ ...form, pacienteId: e.target.value })}>
                <option value="">Selecciona paciente</option>
                {pacientes.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
            </select>
            <select value={form.doctorId} onChange={e => setForm({ ...form, doctorId: e.target.value })}>
                <option value="">Selecciona doctor</option>
                {doctores.map(d => <option key={d.id} value={d.id}>{d.nombre}</option>)}
            </select>
            <input type="datetime-local" value={form.fecha} onChange={e => setForm({ ...form, fecha: e.target.value })} />
            <input placeholder="Motivo" value={form.motivo} onChange={e => setForm({ ...form, motivo: e.target.value })} />
            <button onClick={guardar}>Agendar</button>
        </div>
    );
}

export default AgendarCita;  
