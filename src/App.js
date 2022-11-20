import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/index";

import { LolPage } from "./Pages/lolPage";
import { TopPage } from "./LolPages/TopPage";
import { JunglePage } from "./LolPages/JunglePage";
import { MidPage } from "./LolPages/MidPage";
import { SupPage } from "./LolPages/SupPage";
import { AdcPage } from "./LolPages/AdcPage";

import { CsGoPage } from "./Pages/csgoPage";
import { Dust2Page } from "./CsgoPages/Dust2Page";
import { InfernoPage } from "./CsgoPages/InfernoPage";
import { MiragePage } from "./CsgoPages/MiragePage";
import { OverPassPage } from "./CsgoPages/OverPassPage";
import { TrainPage } from "./CsgoPages/TrainPage";
import { VertigoPage } from "./CsgoPages/VertigoPage";

import { FifaPage } from "./Pages/fifaPage";
import { ModoCarreiraPage } from "./FifaPages/CarreiraPage";
import { ProClubesPage } from "./FifaPages/ProClubsPage";
import { UltimateTeamPage } from "./FifaPages/UltimateTeamPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/lol" element={<LolPage />} />
        <Route path="/lol-Top" element={<TopPage />} />
        <Route path="/lol-Jungle" element={<JunglePage />} />
        <Route path="/lol-Mid" element={<MidPage />} />
        <Route path="/lol-Sup" element={<SupPage />} />
        <Route path="/lol-Adc" element={<AdcPage />} />

        <Route path="/csgo" element={<CsGoPage />} />
        <Route path="/csgo-Dust2Page" element={<Dust2Page />} />
        <Route path="/csgo-InfernoPage" element={<InfernoPage />} />
        <Route path="/csgo-MiragePage" element={<MiragePage />} />
        <Route path="/csgo-OverPassPage" element={<OverPassPage />} />
        <Route path="/csgo-TrainPage" element={<TrainPage />} />
        <Route path="/csgo-VertigoPage" element={<VertigoPage />} />

        <Route path="/fifa" element={<FifaPage />} />
        <Route path="/fifa-ModoCarreiraPage" element={<ModoCarreiraPage />} />
        <Route path="/fifa-ProClubesPage" element={<ProClubesPage />} />
        <Route path="/fifa-UltimateTeamPage" element={<UltimateTeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
