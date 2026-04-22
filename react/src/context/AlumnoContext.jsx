import { createContext, useContext, useState } from "react";

const AlumnoContext = createContext();

export function AlumnoProvider({ children }) {
  const [alumno] = useState({
    nombre: "Adal Said Morales Chavez",
    carrera: "Ingeniería en Sistemas",
    grupo: "4-1",
    semestre: "8vo",
  });

  return (
    <AlumnoContext.Provider value={{ alumno }}>
      {children}
    </AlumnoContext.Provider>
  );
}

export function useAlumnoContext() {
  return useContext(AlumnoContext);
}
