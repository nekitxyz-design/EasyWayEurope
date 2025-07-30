import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./tailwind.css";
import "./lib/i18n"; // Импортируем конфигурацию i18n
import { VisaBG } from "./screens/VisaBG/VisaBG";
import { AutoHelp } from "./screens/AutoHelp/AutoHelp";
import { PrivacyPolicy } from "./screens/PrivacyPolicy/PrivacyPolicy";
import { CookiePolicy } from "./screens/CookiePolicy/CookiePolicy";
import { TermsOfService } from "./screens/TermsOfService/TermsOfService";
import { AnalyticsProvider } from "./components/AnalyticsProvider";

// Отключаем React Router предупреждения и Performance логи
const originalWarn = console.warn;
console.warn = (...args) => {
  const message = args[0];
  if (typeof message === 'string' && (
    message.includes('React Router Future Flag Warning') ||
    message.includes('[Performance] material')
  )) {
    return;
  }
  originalWarn.apply(console, args);
};

// Отключаем обычные логи в production, но оставляем наши красивые сообщения
if (import.meta.env.PROD) {
  const originalLog = console.log;
  console.log = (...args) => {
    // Проверяем, является ли это нашим специальным логом (с эмодзи)
    const firstArg = args[0];
    if (typeof firstArg === 'string' && (
      firstArg.includes('🚀') ||
      firstArg.includes('👨‍💻') ||
      firstArg.includes('🌍') ||
      firstArg.includes('📧')
    )) {
      originalLog.apply(console, args);
    }
    // Остальные логи игнорируем в продакшене
  };
  console.info = () => {};
  console.debug = () => {};
} else {
  // Beautiful message for developers
  console.log(
    '%c🚀 EasyWayEurope - Bulgarian Residence Permit',
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
      <AnalyticsProvider />
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
                 <Route path="/bg/autohelp" element={<AutoHelp />} />в
                 <Route path="/en/autohelp" element={<AutoHelp />} />

                 {/* Privacy Policy маршруты */}
                 <Route path="/privacy-policy" element={<Navigate to="/en/privacy-policy" replace />} />
                 <Route path="/ru/privacy-policy" element={<PrivacyPolicy />} />
                 <Route path="/bg/privacy-policy" element={<PrivacyPolicy />} />
                 <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />

                 {/* Cookie Policy маршруты */}
                 <Route path="/cookie-policy" element={<Navigate to="/en/cookie-policy" replace />} />
                 <Route path="/ru/cookie-policy" element={<CookiePolicy />} />
                 <Route path="/bg/cookie-policy" element={<CookiePolicy />} />
                 <Route path="/en/cookie-policy" element={<CookiePolicy />} />

                 {/* Terms of Service маршруты */}
                 <Route path="/terms-of-service" element={<Navigate to="/en/terms-of-service" replace />} />
                 <Route path="/ru/terms-of-service" element={<TermsOfService />} />
                 <Route path="/bg/terms-of-service" element={<TermsOfService />} />
                 <Route path="/en/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
