import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import GxpApp from './GxpApp.tsx';
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter } from "react-router";

createRoot( document.getElementById( 'root' )! ).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <StrictMode>
      <BrowserRouter>
        <GxpApp />
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider >
);
