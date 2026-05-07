// Hook para manejar estado
import { useState } from "react";

// Componentes de Google Maps para React
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";

// Coordenadas del punto de inicio: FIMAZ
const origen = {
  lat: 23.2446,
  lng: -106.4345,
};

// Coordenadas del destino: Plazuela Machado
const destino = {
  lat: 23.1986,
  lng: -106.4211,
};

// Estilo del mapa
const containerStyle = {
  width: "100%",
  height: "500px",
};

export default function RutaGoogleMaps() {
  // Estado donde guardamos la ruta
  const [directions, setDirections] = useState(null);

  // Carga de la API de Google Maps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  // Función para calcular la ruta
  const calcularRuta = () => {

    // Servicio de rutas de Google
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: origen, // Punto inicial (FIMAZ)
        destination: destino, // Punto final (Machado)

        // Tipo de transporte
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          // Guardamos la ruta
          setDirections(result);
        } else {
          console.error("Error al calcular la ruta:", status);
        }
      }
    );
  };

  // Mientras carga el mapa
  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ruta de FIMAZ a Plazuela Machado</h1>

      <p>
        Esta vista muestra una ruta utilizando Google Maps y Directions API.
      </p>

      {/* Botón para generar la ruta */}
      <button onClick={calcularRuta} style={{ marginBottom: "15px" }}>
        Calcular ruta
      </button>

      {/* Mapa */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={origen}
        zoom={13}
      >
        {/* Marcador origen */}
        <Marker position={origen} label="FIMAZ" />

        {/* Marcador destino */}
        <Marker position={destino} label="Machado" />

        {/* Render de la ruta */}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
}
