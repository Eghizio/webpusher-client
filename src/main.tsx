import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { App } from "@/App.tsx";
import { NavigationContextProvider } from "@/context/NavigationContext.tsx";
import { UserContextProvider } from "./context/UserContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <NavigationContextProvider>
        <App />
      </NavigationContextProvider>
    </UserContextProvider>
  </StrictMode>
);
