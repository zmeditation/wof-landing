import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsAllPage from "./pages/NewsAllPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import CareerPage from "./pages/CareerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="news-list/" element={<NewsAllPage />} />
      <Route path="news/:slug" element={<NewsDetailPage />} />
      <Route path="careers" element={<CareerPage />} />
    </Routes>
  );
}

export default App;
