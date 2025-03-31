import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { App } from "@/App.tsx";
import { NavigationContextProvider } from "@/context/NavigationContext.tsx";
import { UserContextProvider } from "./context/UserContext";

import { register } from "register-service-worker";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <NavigationContextProvider>
        <App />
      </NavigationContextProvider>
    </UserContextProvider>
  </StrictMode>
);

register("/sw.js", {
  registrationOptions: { scope: "./" },
  ready(_registration) {
    console.log("Service worker is active.");
  },
  registered(_registration) {
    console.log("Service worker has been registered.");
  },
  cached(_registration) {
    console.log("Content has been cached for offline use.");
  },
  updatefound(_registration) {
    console.log("New content is downloading.");
  },
  updated(_registration) {
    console.log("New content is available; please refresh.");
  },
  offline() {
    console.log(
      "No internet connection found. App is running in offline mode."
    );
  },
  error(error) {
    console.error("Error during service worker registration:", error);
  },
});
