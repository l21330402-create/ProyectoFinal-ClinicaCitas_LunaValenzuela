import { useEffect, useState } from "react";

function Doctores() {
    const [doctores, setDoctores] = useState([]);
    const [form, setForm] = useState({ nombre: "", especialidad: "", horario: "" });

    const cargar = () => {
        fetch("https://localhost:7294/api/Doctores")
            .then(r => r.json())
            .then(setDoctores);
    };

    useEffect(() => { cargar(); }, []);

    const guardar = () => {
        if (!form.nombre || !form.especialidad || !form.horario) {
            alert("Por favor completa todos los campos.");
            return;
        }
        fetch("https://localhost:7294/api/Doctores", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }).then(() => { cargar(); setForm({ nombre: "", especialidad: "", horario: "" }); });
    };

    const eliminar = (id) => {
        fetch(`https://localhost:7294/api/Doctores/${id}`, { method: "DELETE" })
            .then(cargar);
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Doctores</h2>
            <input placeholder="Nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
            <input placeholder="Especialidad" value={form.especialidad} onChange={e => setForm({ ...form, especialidad: e.target.value })} />
            <input placeholder="Horario" value={form.horario} onChange={e => setForm({ ...form, horario: e.target.value })} />
            <button onClick={guardar}>Agregar</button>
            <table border="1" style={{ marginTop: "1rem", width: "100%" }}>
                <thead><tr><th>Nombre</th><th>Especialidad</th><th>Horario</th><th>Acciones</th></tr></thead>
                <tbody>
                    {doctores.map(d => (
                        <tr key={d.id}>
                            <td>{d.nombre}</td>
                            <td>{d.especialidad}</td>
                            <td>{d.horario}</td>
                            <td><button onClick={() => eliminar(d.id)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Doctores;  
