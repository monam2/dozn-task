import { createRoot } from "react-dom/client";
import "@/styles/global.css";
import Providers from "@/providers/index.tsx";
import RouteApp from "./routes/index.tsx";
import Layout from "./layout.tsx";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <Layout>
      <RouteApp />
    </Layout>
  </Providers>,
);
