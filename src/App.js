import "bootstrap/dist/css/bootstrap.min.css";

import CsGoHP from "./Assets/Images/image CS home.png";
import LolHP from "./Assets/Images/image LOL home 2.png";
import FifaHP from "./Assets/Images/FIFA-23-logo.png";

import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/index";

import { LolPage } from "./Pages/lolPage";
import { FormLol } from "./FormPages/FormLol";
import { ReadDLol } from "./ReadD/ReadDLol";

import { CsGoPage } from "./Pages/csgoPage";
import { FormCsGo } from "./FormPages/FormCsGo";
import { ReadDCsgo } from "./ReadD/ReadDCsgo";

import { FifaPage } from "./Pages/fifaPage";
import { FormFifa } from "./FormPages/FormFifa";
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
        <Route path="/FormLol" element={<FormLol />} />
        <Route path="/lol-ReadD" element={<ReadDLol />} />

        <Route path="/csgo" element={<CsGoPage />} />
        <Route path="/FormCsGo" element={<FormCsGo />} />
        <Route path="/csgo-ReadD/id" element={<ReadDCsgo />} />

        <Route path="/fifa" element={<FifaPage />} />
        <Route path="/FormFifa" element={<FormFifa />} />
        <Route path="/fifa-ReadD" element={<ReadDFifa />} />
      </Routes>
    </div>
  );
}

export default App;
