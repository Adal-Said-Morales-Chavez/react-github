import { useJsApiLoader } from "@react-google-maps/api";
import { createContext, useContext } from "react";

// Definir las librerías una sola vez fuera del componente
// para evitar re-renders innecesarios
const libraries = ["drawing", "places"];

const GoogleMapsContext = createContext(false);

export function GoogleMapsProvider({ children }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  return (
    <GoogleMapsContext.Provider value={isLoaded}>
      {children}
    </GoogleMapsContext.Provider>
  );
}

export function useGoogleMaps() {
  return useContext(GoogleMapsContext);
}
