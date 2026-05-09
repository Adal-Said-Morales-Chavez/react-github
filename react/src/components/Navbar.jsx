import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "500",
    transition: "all 0.3s ease",
  };

  const getStyle = ({ isActive }) => ({
    ...linkStyle,
    color: isActive ? "#fff" : "var(--text-h)",
    backgroundColor: isActive ? "var(--accent)" : "transparent",
  });

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        padding: "16px 24px",
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--bg)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(10px)",
      }}
    >
      <NavLink to="/" style={getStyle} end>
        🏠 Inicio
      </NavLink>
      <NavLink to="/acerca" style={getStyle}>
        👤 Acerca de mí
      </NavLink>
      <NavLink to="/tablas" style={getStyle}>
        📊 Tablas
      </NavLink>
      <NavLink to="/usuarios" style={getStyle}>
        👥 Usuarios
      </NavLink>
      <NavLink to="/mapa" style={getStyle}>
        🗺️ Mapa
      </NavLink>
      <NavLink to="/ruta-google-maps" style={getStyle}>
        📍 Ruta Google Maps
      </NavLink>
      <NavLink to="/drawing-map" style={getStyle}>
        ✏️ Dibujar en Mapa
      </NavLink>
      <NavLink to="/contacto" style={getStyle}>
        ✉️ Contacto
      </NavLink>
    </nav>
  );
}

export default Navbar;
