import Contador from "../Contador";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>🏠 Página de Inicio</h1><br />
      <p style={{ fontSize: "18px", marginBottom: "30px", color: "var(--text)" }}>
        Bienvenido a mi aplicación React con enrutamiento.
      </p>
      <Contador />
    </div>
  );
}

export default Home;
