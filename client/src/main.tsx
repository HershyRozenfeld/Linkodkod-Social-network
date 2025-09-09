import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Search from "./components/Search.tsx";
import Layout from "./components/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/search" element={<Layout content={<Search/>}/>} />
        <Route />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
        
