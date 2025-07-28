import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./tailwind.css";
import { VisaBG } from "./screens/VisaBG/VisaBG";
import { AutoHelp } from "./screens/AutoHelp/AutoHelp";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VisaBG />} />
        <Route path="/autohelp" element={<AutoHelp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
