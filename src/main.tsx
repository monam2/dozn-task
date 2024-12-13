import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import Providers from "@/providers/index.tsx";
import RouteApp from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <RouteApp />
  </Providers>,
);
