namespace ClinicaCitas.Models
{
    public class Cita
    {
        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public string Motivo { get; set; } = string.Empty;
        public string Estado { get; set; } = "Pendiente";

        public int PacienteId { get; set; }
        public Paciente? Paciente { get; set; }

        public int DoctorId { get; set; }
        public Doctor? Doctor { get; set; }
    }
}