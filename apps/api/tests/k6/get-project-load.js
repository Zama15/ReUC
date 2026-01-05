import http from "k6/http";
import { check, sleep } from "k6";

// Configuración de la prueba
export const options = {
  // Stages permite simular una carga realista
  stages: [
    { duration: "10s", target: 10 }, // Ramp-up: subir a 10 usuarios en 10s
    { duration: "30s", target: 10 }, // Mantener: 10 usuarios por 30s
    { duration: "10s", target: 0 }, // Ramp-down: bajar a 0 usuarios
  ],
  thresholds: {
    http_req_duration: ["p(95)<500"], // El 95% de las peticiones deben ser más rápidas que 500ms
  },
};

export default function () {
  // IMPORTANTE: Necesitas un token válido o cookie de sesión de un usuario (Student/Professor)
  // Reemplaza esto con una cookie real que obtengas al loguearte en el navegador/postman
  const COOKIE_SESSION =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkX3VzZXIiOiJkZTcwNjM4Ni0wYThiLTQ2Y2MtOWVjYS1mYmM5MWU1ZWJlZjYiLCJyb2xlIjoicHJvZmVzc29yOjc1ZTljODQ1LTcyNmItNGM0ZC1hY2Q1LTk4NWVjZGZlNGY4MiIsImlwIjoiMTI3LjAuMC4xIiwidWEiOiJNb3ppbGxhLzUuMCAoWDExOyBMaW51eCB4ODZfNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xNDIuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImlhdCI6MTc2NDIyMDczOSwiZXhwIjoxNzY0MjIxNjM5fQ.25osUCzbR6Vt2WsUs8_-Kpmc75jC_BzkGOqeOXVPPKI";

  // Reemplaza con un UUID de proyecto que SÍ exista en tu DB (para probar infraestructura real)
  const PROJECT_UUID = "3b07d557-1e83-4458-bf44-a02ac4f31e23";

  // Asumiendo que tu router está montado en /api/projects
  const url = `http://localhost:3000/project/${PROJECT_UUID}`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${COOKIE_SESSION}`,
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
    },
  };

  const res = http.get(url, params);

  check(res, {
    "status es 200": (r) => r.status === 200,
    "tiempo respuesta < 500ms": (r) => r.timings.duration < 500,
  });

  sleep(1);
}
