import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";
import { useGoogleMaps } from "../components/GoogleMapsLoader";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
};

const center = {
  lat: 23.2494,
  lng: -106.4111,
};

function Mapa() {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const isLoaded = useGoogleMaps();

  if (!isLoaded) {
    return <p style={{ padding: "40px", textAlign: "center" }}>Cargando mapa...</p>;
  }

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.icon}>🗺️</span>
        <div>
          <h1 style={styles.title}>Mapa Interactivo</h1>
          <p style={styles.subtitle}>Mazatlán, Sinaloa — México</p>
        </div>
      </div>

      {/* Map Card */}
      <div style={styles.card}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          options={{
            styles: darkMapStyles,
            disableDefaultUI: false,
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
          }}
        >
          <Marker
            position={center}
            onClick={() => setMostrarInfo(true)}
            title="Mazatlán"
          />

          {mostrarInfo && (
            <InfoWindow
              position={center}
              onCloseClick={() => setMostrarInfo(false)}
            >
              <div style={styles.infoWindow}>
                <h3 style={styles.infoTitle}>📍 Mazatlán</h3>
                <p style={styles.infoText}>Sinaloa, México</p>
                <p style={styles.infoCoords}>
                  Lat: {center.lat} | Lng: {center.lng}
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>

      {/* Info Cards */}
      <div style={styles.infoGrid}>
        <div style={styles.infoCard}>
          <span style={styles.cardIcon}>📍</span>
          <div>
            <p style={styles.cardLabel}>Latitud</p>
            <p style={styles.cardValue}>{center.lat}°</p>
          </div>
        </div>
        <div style={styles.infoCard}>
          <span style={styles.cardIcon}>🧭</span>
          <div>
            <p style={styles.cardLabel}>Longitud</p>
            <p style={styles.cardValue}>{center.lng}°</p>
          </div>
        </div>
        <div style={styles.infoCard}>
          <span style={styles.cardIcon}>🌊</span>
          <div>
            <p style={styles.cardLabel}>Ciudad</p>
            <p style={styles.cardValue}>Mazatlán</p>
          </div>
        </div>
        <div style={styles.infoCard}>
          <span style={styles.cardIcon}>🇲🇽</span>
          <div>
            <p style={styles.cardLabel}>País</p>
            <p style={styles.cardValue}>México</p>
          </div>
        </div>
      </div>

      <p style={styles.hint}>
        💡 Haz clic en el marcador para ver la información de la ubicación
      </p>
    </div>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────
const styles = {
  page: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 24px",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "28px",
  },
  icon: {
    fontSize: "48px",
    lineHeight: 1,
  },
  title: {
    margin: 0,
    fontSize: "2rem",
    fontWeight: 700,
    color: "var(--text-h, #1a1a2e)",
    letterSpacing: "-0.5px",
  },
  subtitle: {
    margin: "4px 0 0",
    fontSize: "1rem",
    color: "var(--text-p, #6b7280)",
  },
  card: {
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
    border: "1px solid var(--border, #e5e7eb)",
    marginBottom: "24px",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
    marginBottom: "20px",
  },
  infoCard: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "16px 20px",
    borderRadius: "14px",
    backgroundColor: "var(--bg, #f9fafb)",
    border: "1px solid var(--border, #e5e7eb)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  cardIcon: {
    fontSize: "28px",
  },
  cardLabel: {
    margin: 0,
    fontSize: "0.75rem",
    color: "var(--text-p, #6b7280)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontWeight: 600,
  },
  cardValue: {
    margin: "2px 0 0",
    fontSize: "1rem",
    fontWeight: 700,
    color: "var(--text-h, #111827)",
  },
  hint: {
    textAlign: "center",
    color: "var(--text-p, #9ca3af)",
    fontSize: "0.875rem",
    marginTop: "8px",
  },
  // InfoWindow inner styles (plain objects since it renders inside Google's iframe)
  infoWindow: {
    padding: "4px 8px",
    minWidth: "160px",
  },
  infoTitle: {
    margin: "0 0 4px",
    fontSize: "15px",
    fontWeight: 700,
    color: "#111827",
  },
  infoText: {
    margin: "0 0 2px",
    fontSize: "13px",
    color: "#4b5563",
  },
  infoCoords: {
    margin: 0,
    fontSize: "11px",
    color: "#9ca3af",
    fontFamily: "monospace",
  },
};

// ── Dark/Stylized Map Theme ───────────────────────────────────────────────────
const darkMapStyles = [
  { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [{ color: "#4b6878" }],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [{ color: "#334e87" }],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [{ color: "#023e58" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#283d6a" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6f9ba5" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [{ color: "#023e58" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#304a7d" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#98a5be" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#2c6675" }],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [{ color: "#98a5be" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0e1626" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#4e6d70" }],
  },
];

export default Mapa;
