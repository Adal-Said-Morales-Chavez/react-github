import {
  GoogleMap,
  DrawingManager,
} from "@react-google-maps/api";

import { useGoogleMaps } from "../components/GoogleMapsLoader";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 23.2494,
  lng: -106.4111,
};

export default function DrawingMap() {
  const isLoaded = useGoogleMaps();

  if (!isLoaded) {
    return <p>Cargando mapa...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dibujar figuras en Google Maps</h2>

      <p>
        Usa las herramientas del mapa para dibujar una línea y un rectángulo.
      </p>

      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <DrawingManager
          options={{
            drawingControl: true,
            drawingControlOptions: {
              position: window.google.maps.ControlPosition.TOP_CENTER,
              drawingModes: [
                window.google.maps.drawing.OverlayType.POLYLINE,
                window.google.maps.drawing.OverlayType.RECTANGLE,
              ],
            },
          }}
        />
      </GoogleMap>
    </div>
  );
}
