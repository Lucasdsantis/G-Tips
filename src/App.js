import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/index";
import { LolPage } from "./Pages/lolPage";
import { CsGoPage } from "./Pages/csgoPage";
import { FifaPage } from "./Pages/fifaPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lol" element={<LolPage />} />
        <Route path="/csgo" element={<CsGoPage />} />
        <Route path="/fifa" element={<FifaPage />} />
      </Routes>
    </div>
  );
}

export default App;
