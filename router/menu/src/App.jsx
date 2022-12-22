import "./App.css";
import "./css/index.css";
import { Menu } from "./components/Menu/Menu";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DriftPage } from "./pages/DriftPage";
import { TimeAttackPage } from "./pages/TimeAttackPage";
import { ForzaPage } from "./pages/ForzaPage";

export default function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
}
