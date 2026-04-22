import { useAlumnoContext } from "../context/AlumnoContext";

function PerfilResumen() {
  const { alumno } = useAlumnoContext();

  return (
    <div
      style={{
        marginTop: "24px",
        padding: "16px 24px",
        borderRadius: "12px",
        border: "1px solid var(--border)",
        backgroundColor: "var(--code-bg)",
        boxShadow: "var(--shadow)",
        maxWidth: "400px",
        width: "100%",
      }}
    >
      <h2 style={{ marginBottom: "8px", color: "var(--text-h)" }}>
        📋 Resumen del perfil
      </h2>
      <p style={{ fontSize: "16px", color: "var(--text)", margin: "4px 0" }}>
        <strong>Nombre:</strong> {alumno.nombre}
      </p>
      <p style={{ fontSize: "16px", color: "var(--text)", margin: "4px 0" }}>
        <strong>Carrera:</strong> {alumno.carrera}
      </p>
      <p style={{ fontSize: "16px", color: "var(--text)", margin: "4px 0" }}>
        <strong>Grupo:</strong> {alumno.grupo} &nbsp;|&nbsp;{" "}
        <strong>Semestre:</strong> {alumno.semestre}
      </p>
    </div>
  );
}

export default PerfilResumen;
