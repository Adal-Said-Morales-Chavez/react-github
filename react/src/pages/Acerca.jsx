import perfilImg from "../assets/perfil.jpg";

function Acerca() {
  const habilidades = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        minHeight: "80vh",
      }}
    >
      <h1>👤 Acerca de mí</h1>

      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          textAlign: "left",
          padding: "30px",
          borderRadius: "16px",
          border: "1px solid var(--border)",
          backgroundColor: "var(--code-bg)",
          boxShadow: "var(--shadow)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <img
            src={perfilImg}
            alt="Foto de perfil"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "3px solid var(--accent)",
              objectFit: "cover",
            }}
          />
        </div>

        <p style={{ fontSize: "18px", marginBottom: "8px" }}>
          <strong>Nombre:</strong> Adal Said Morales Chavez
        </p>
        <p style={{ fontSize: "18px", marginBottom: "8px" }}>
          <strong>Carrera:</strong> Ingeniería en Sistemas
        </p>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginTop: "16px",
            color: "var(--text)",
          }}
        >
          Soy estudiante apasionado por el desarrollo web y la tecnología. Me
          interesa crear aplicaciones modernas y funcionales.
        </p>

        <h3
          style={{
            marginTop: "24px",
            marginBottom: "12px",
            color: "var(--text-h)",
          }}
        >
          🛠️ Habilidades
        </h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {habilidades.map((hab) => (
            <li
              key={hab}
              style={{
                padding: "8px 16px",
                borderRadius: "20px",
                backgroundColor: "var(--accent-bg)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              {hab}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Acerca;
