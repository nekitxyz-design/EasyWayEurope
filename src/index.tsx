import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { init, track } from '@amplitude/analytics-browser';
// @ts-ignore
import "./tailwind.css";
import { VisaBG } from "./screens/VisaBG/VisaBG";
import { AutoHelp } from "./screens/AutoHelp/AutoHelp";

// Initialize Amplitude with detailed logging
console.log('🔍 Initializing Amplitude...');
try {
  init('4ed9b522574efefdaa2b94863d98b472', {
    defaultTracking: {
      sessions: true,
      pageViews: true,
      formInteractions: true,
      fileDownloads: true,
    },
    logLevel: 1, // Enable debug logging
  });
  console.log('✅ Amplitude initialized successfully');
  
  // Test tracking
  track('App Loaded', {
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  });
  console.log('✅ Test event tracked');
} catch (error) {
  console.error('❌ Amplitude initialization failed:', error);
}

console.log(
  "%cHey, if you're savvy enough to pop open this console, you're already primed to snag an awesome job in vibrant Bulgaria! 🧙‍♂️🌟\n" +
  "Living in the EU is a total breeze – we're switching to the Euro soon for even smoother vibes, plus endless opportunities, great community, and that warm, sunny weather year-round. 😎☀️\n" +
  "Come thrive here! 🇧🇬💼",
  "color: #ffd23f; font-size: 16px; font-weight: bold;"
);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VisaBG />} />
        <Route path="/autohelp" element={<AutoHelp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
