// src/App.jsx

import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import The_Beginning from "./pages/The_Beginning";
import Origins from "./pages/Origins";
import Dungens_Cleared from "./pages/Dungeons_Cleared";
import Inventory from "./pages/Inventory";
import Rank_and_Trials from "./pages/Rank_and_Trials";
import Status_Window from "./pages/Status_Window";
import Guild_Card from "./pages/Guild_Card";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<The_Beginning />} />
        <Route path="/origins" element={<Origins />} />
        <Route path="/dungens_cleared" element={<Dungens_Cleared />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/rank_and_trials" element={<Rank_and_Trials />} />
        <Route path="/status_window" element={<Status_Window />} />
        <Route path="/guild_card" element={<Guild_Card />} />
      </Routes>
    </MainLayout>
  );
}
