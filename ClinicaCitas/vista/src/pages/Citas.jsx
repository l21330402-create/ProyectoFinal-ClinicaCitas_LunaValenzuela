import { useEffect, useState } from "react";

function Citas() {
    const [citas, setCitas] = useState([]);

    const cargar = () => {
        fetch("https://localhost:7294/api/Citas")
            .then(r => r.json())
            .then(setCitas);
    };

    useEffect(() => { cargar(); }, []);

    const eliminar = (id) => {
        fetch(`https://localhost:7294/api/Citas/${id}`, { method: "DELETE" })
            .then(cargar);
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Citas</h2>
            <table border="1" style={{ width: "100%" }}>
                <thead><tr><th>Paciente</th><th>Doctor</th><th>Fecha</th><th>Motivo</th><th>Estado</th><th>Acciones</th></tr></thead>
                <tbody>
                    {citas.map(c => (
                        <tr key={c.id}>
                            <td>{c.paciente?.nombre}</td>
                            <td>{c.doctor?.nombre}</td>
                            <td>{new Date(c.fecha).toLocaleString()}</td>
                            <td>{c.motivo}</td>
                            <td>{c.estado}</td>
                            <td><button onClick={() => eliminar(c.id)}>Cancelar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Citas; 
