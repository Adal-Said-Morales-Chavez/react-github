import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
        setCargando(false);
      });
  }, []);

  return (
    <Box sx={{ padding: "32px" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        👥 Usuarios
      </Typography>
      <Typography variant="body1" color="white" sx={{ mb: 3 }}>
        Información obtenida desde{" "}
        <a
          href="https://jsonplaceholder.typicode.com/users"
          target="_blank"
          rel="noreferrer"
        >
          JSONPlaceholder API
        </a>
      </Typography>

      {cargando ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "primary.main" }}>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  Nombre
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  Correo
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  Teléfono
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  Sitio web
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuarios.map((usuario) => (
                <TableRow
                  key={usuario.id}
                  hover
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{usuario.name}</TableCell>
                  <TableCell>{usuario.email}</TableCell>
                  <TableCell>{usuario.phone}</TableCell>
                  <TableCell>
                    <a
                      href={`https://${usuario.website}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {usuario.website}
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default Usuarios;
