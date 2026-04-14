import { useState } from "react";

function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setForm({ nombre: "", email: "", mensaje: "" });
    setTimeout(() => setEnviado(false), 3000);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid var(--border)",
    backgroundColor: "var(--bg)",
    color: "var(--text-h)",
    fontSize: "16px",
    fontFamily: "var(--sans)",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

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
      <h1>✉️ Contacto</h1>
      <p style={{ marginBottom: "30px", color: "var(--text)" }}>
        ¿Tienes alguna pregunta? ¡Envíame un mensaje!
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "30px",
          borderRadius: "16px",
          border: "1px solid var(--border)",
          backgroundColor: "var(--code-bg)",
          boxShadow: "var(--shadow)",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <label
            htmlFor="nombre"
            style={{
              display: "block",
              marginBottom: "6px",
              fontWeight: "600",
              color: "var(--text-h)",
            }}
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            style={inputStyle}
          />
        </div>

        <div style={{ textAlign: "left" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "6px",
              fontWeight: "600",
              color: "var(--text-h)",
            }}
          >
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@correo.com"
            required
            style={inputStyle}
          />
        </div>

        <div style={{ textAlign: "left" }}>
          <label
            htmlFor="mensaje"
            style={{
              display: "block",
              marginBottom: "6px",
              fontWeight: "600",
              color: "var(--text-h)",
            }}
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje..."
            rows={5}
            required
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "var(--accent)",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "opacity 0.3s ease",
          }}
        >
          Enviar mensaje
        </button>

        {enviado && (
          <p
            style={{
              color: "#22c55e",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            ✅ ¡Mensaje enviado correctamente!
          </p>
        )}
      </form>
    </div>
  );
}

export default Contacto;
