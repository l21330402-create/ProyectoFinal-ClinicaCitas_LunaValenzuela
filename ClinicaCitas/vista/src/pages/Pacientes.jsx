import { useEffect, useState } from "react";

function Pacientes() {
    const [pacientes, setPacientes] = useState([]);
    const [form, setForm] = useState({ nombre: "", telefono: "", email: "", fechaNacimiento: "" });

    const cargar = () => {
        fetch("https://localhost:7294/api/Pacientes")
            .then(r => r.json())
            .then(setPacientes);
    };

    useEffect(() => { cargar(); }, []);

    const guardar = () => {
        if (!form.nombre || !form.telefono || !form.email || !form.fechaNacimiento) {
            alert("Por favor completa todos los campos.");
            return;
        }
        fetch("https://localhost:7294/api/Pacientes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }).then(() => {
            cargar();
            setForm({ nombre: "", telefono: "", email: "", fechaNacimiento: "" });
        });
    };

    const eliminar = (id) => {
        fetch(`https://localhost:7294/api/Pacientes/${id}`, { method: "DELETE" })
            .then(cargar);
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Pacientes</h2>
            <input placeholder="Nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
            <input placeholder="Teléfono" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} />
            <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <input type="date" value={form.fechaNacimiento} onChange={e => setForm({ ...form, fechaNacimiento: e.target.value })} />
            <button onClick={guardar}>Agregar</button>
            <table border="1" style={{ marginTop: "1rem", width: "100%" }}>
                <thead>
                    <tr><th>Nombre</th><th>Teléfono</th><th>Email</th><th>Acciones</th></tr>
                </thead>
                <tbody>
                    {pacientes.map(p => (
                        <tr key={p.id}>
                            <td>{p.nombre}</td>
                            <td>{p.telefono}</td>
                            <td>{p.email}</td>
                            <td><button onClick={() => eliminar(p.id)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Pacientes;