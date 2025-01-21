import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { App } from "@/App.tsx";
import { NavigationContextProvider } from "@/context/NavigationContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavigationContextProvider>
      <App />
    </NavigationContextProvider>
  </StrictMode>
);
