import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  // Configuración de Estrés
  stages: [
    { duration: "30s", target: 50 }, // Fase 1: Calentamiento rápido a 50 usuarios
    { duration: "1m", target: 100 }, // Fase 2: Carga pesada (100 usuarios simultáneos)
    { duration: "30s", target: 100 }, // Fase 3: Sostener el castigo
    { duration: "30s", target: 0 }, // Fase 4: Enfriamiento
  ],
  // Umbrales más permisivos para estrés (buscamos el punto de quiebre)
  thresholds: {
    http_req_duration: ["p(95)<2000"], // Fallar si el 95% tarda más de 2 segundos
    http_req_failed: ["rate<0.05"], // Fallar si más del 5% de las peticiones dan error
  },
};

export default function () {
  // --- TUS DATOS REALES AQUÍ (Copia los mismos del script anterior) ---
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkX3VzZXIiOiJkZTcwNjM4Ni0wYThiLTQ2Y2MtOWVjYS1mYmM5MWU1ZWJlZjYiLCJyb2xlIjoicHJvZmVzc29yOjc1ZTljODQ1LTcyNmItNGM0ZC1hY2Q1LTk4NWVjZGZlNGY4MiIsImlwIjoiMTI3LjAuMC4xIiwidWEiOiJNb3ppbGxhLzUuMCAoWDExOyBMaW51eCB4ODZfNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xNDIuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImlhdCI6MTc2NDIyMTc2NCwiZXhwIjoxNzY0MjIyNjY0fQ.KFpdL9RyKiRMJBUYOFqqwlEykppAw5Wx5UyRkvQgOv8";

  const PROJECT_UUID = "3b07d557-1e83-4458-bf44-a02ac4f31e23";
  // --------------------------------------------------------------------

  const url = `http://localhost:3000/project/${PROJECT_UUID}`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
    },
  };

  const res = http.get(url, params);

  check(res, {
    "status es 200": (r) => r.status === 200,
  });

  // Pausa muy breve (0.1s) para saturar el servidor
  sleep(0.1);
}
