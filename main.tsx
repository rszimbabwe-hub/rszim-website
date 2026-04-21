import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

// Mobile Safari (and some browsers) can restore the tab from the back-forward cache
// with a stale React tree → blank UI. A reload on restored navigation fixes it.
window.addEventListener("pageshow", (event: PageTransitionEvent) => {
  if (event.persisted) {
    window.location.reload();
  }
});

const el = document.getElementById("root");
if (!el) {
  throw new Error("Root element #root not found");
}

createRoot(el).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Allow a future one-time reload if a deploy again mismatches cached HTML vs hashed assets.
queueMicrotask(() => {
  try {
    sessionStorage.removeItem("rsz-asset-reload-once");
  } catch {
    /* ignore */
  }
});
