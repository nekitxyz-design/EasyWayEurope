import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./tailwind.css";
import "./lib/i18n"; // Импортируем конфигурацию i18n
import { VisaBG } from "./screens/VisaBG/VisaBG";
import { AutoHelp } from "./screens/AutoHelp/AutoHelp";

// Отключаем логи в production
if (import.meta.env.PROD) {
  console.log = () => {};
  console.info = () => {};
  console.debug = () => {};
} else {
  // Beautiful message for developers
  console.log(
    '%c🚀 EasyWay Europe - Bulgarian Residence Permit',
    'color: #ffd23f; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);'
  );
  console.log(
    '%c👨‍💻 If you are a developer and see this message - you are awesome!',
    'color: #ffd23f; font-size: 14px; font-weight: bold;'
  );
  console.log(
    '%c🌍 Helping Russians get residence permits in Europe',
    'color: #314199; font-size: 12px; font-weight: bold;'
  );
  console.log(
    '%c📧 Contact: https://t.me/EWE_Chat',
    'color: #0024e9; font-size: 12px; font-weight: bold;'
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Редирект с корня на английский */}
        <Route path="/" element={<Navigate to="/en" replace />} />
        
        {/* Языковые маршруты */}
        <Route path="/ru" element={<VisaBG />} />
        <Route path="/bg" element={<VisaBG />} />
        <Route path="/en" element={<VisaBG />} />
        
        {/* AutoHelp маршруты */}
        <Route path="/autohelp" element={<Navigate to="/en/autohelp" replace />} />
        <Route path="/ru/autohelp" element={<AutoHelp />} />
        <Route path="/bg/autohelp" element={<AutoHelp />} />
        <Route path="/en/autohelp" element={<AutoHelp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
