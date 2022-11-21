import "bootstrap/dist/css/bootstrap.min.css";

import CsGoHP from "./Assets/Images/image CS home.png";
import LolHP from "./Assets/Images/image LOL home 2.png";
import FifaHP from "./Assets/Images/FIFA-23-logo.png";

import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/index";

import { LolPage } from "./Pages/lolPage";
import { LolForm } from "./FormPages/LolForm";
import { TopPage } from "./LolPages/TopPage";
import { JunglePage } from "./LolPages/JunglePage";
import { MidPage } from "./LolPages/MidPage";
import { SupPage } from "./LolPages/SupPage";
import { AdcPage } from "./LolPages/AdcPage";
import { ReadDLol } from "./ReadD/ReadDLol";

import { CsGoPage } from "./Pages/csgoPage";
import { CsForm } from "./FormPages/CsGoForm";
import { Dust2Page } from "./CsgoPages/Dust2Page";
import { InfernoPage } from "./CsgoPages/InfernoPage";
import { MiragePage } from "./CsgoPages/MiragePage";
import { OverPassPage } from "./CsgoPages/OverPassPage";
import { TrainPage } from "./CsgoPages/TrainPage";
import { VertigoPage } from "./CsgoPages/VertigoPage";
import { ReadDCsgo } from "./ReadD/ReadDCsgo";

import { FifaPage } from "./Pages/fifaPage";
import { FifaForm } from "./FormPages/FifaForm";
import { ModoCarreiraPage } from "./FifaPages/CarreiraPage";
import { ProClubesPage } from "./FifaPages/ProClubsPage";
import { UltimateTeamPage } from "./FifaPages/UltimateTeamPage";
import { ReadDFifa } from "./ReadD/ReadDFifa";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home imgCsGoHP={CsGoHP} imgLolHP={LolHP} imgFifaHP={FifaHP} />
          }
        />

        <Route path="/lol" element={<LolPage />} />
        <Route path="/lol-Form" element={<LolForm />} />
        <Route path="/lol-Top" element={<TopPage />} />
        <Route path="/lol-Jungle" element={<JunglePage />} />
        <Route path="/lol-Mid" element={<MidPage />} />
        <Route path="/lol-Sup" element={<SupPage />} />
        <Route path="/lol-Adc" element={<AdcPage />} />
        <Route path="/lol-ReadD" element={<ReadDLol />} />

        <Route path="/csgo" element={<CsGoPage />} />
        <Route path="/csgo-Form" element={<CsForm />} />
        <Route path="/csgo-Dust2Page" element={<Dust2Page />} />
        <Route path="/csgo-InfernoPage" element={<InfernoPage />} />
        <Route path="/csgo-MiragePage" element={<MiragePage />} />
        <Route path="/csgo-OverPassPage" element={<OverPassPage />} />
        <Route path="/csgo-TrainPage" element={<TrainPage />} />
        <Route path="/csgo-VertigoPage" element={<VertigoPage />} />
        <Route path="/csgo-ReadD" element={<ReadDCsgo />} />

        <Route path="/fifa" element={<FifaPage />} />
        <Route path="/fifa-Form" element={<FifaForm />} />
        <Route path="/fifa-ModoCarreiraPage" element={<ModoCarreiraPage />} />
        <Route path="/fifa-ProClubesPage" element={<ProClubesPage />} />
        <Route path="/fifa-UltimateTeamPage" element={<UltimateTeamPage />} />
        <Route path="/fifa-ReadD" element={<ReadDFifa />} />
      </Routes>
    </div>
  );
}

export default App;
