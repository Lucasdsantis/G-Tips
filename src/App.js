import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

import CsGoHP from "./Assets/Images/cs go image home 1200 x 630.png";
import LolHP from "./Assets/Images/image LOL home 2.png";
import FifaHP from "./Assets/Images/imagem fifa 23 vj 1200 x 630.png";

import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/index";

import { LolPage } from "./Pages/lolPage";
import { FormLol } from "./FormPages/FormLol";
import { ReadDLol } from "./ReadDPages/ReadDLol";
import { LolEdit } from "./EditPages/lolEdit";

import { CsGoPage } from "./Pages/csgoPage";
import { FormCsGo } from "./FormPages/FormCsGo";
import { ReadDCsgo } from "./ReadDPages/ReadDCsgo";
import { CsgoEdit } from "./EditPages/csgoEdit";

import { FifaPage } from "./Pages/fifaPage";
import { FormFifa } from "./FormPages/FormFifa";
import { ReadDFifa } from "./ReadDPages/ReadDFifa";

function App() {
  return (
    <div className="App">
      <Toaster />

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
        <Route path="/lol-Edit/:id" element={<LolEdit />} />

        <Route path="/csgo" element={<CsGoPage />} />
        <Route path="/FormCsGo" element={<FormCsGo />} />
        <Route path="/csgo-ReadD/:id" element={<ReadDCsgo />} />
        <Route path="/csgo-Edit/:id" element={<CsgoEdit />} />

        <Route path="/fifa" element={<FifaPage />} />
        <Route path="/FormFifa" element={<FormFifa />} />
        <Route path="/fifa-ReadD" element={<ReadDFifa />} />
      </Routes>
    </div>
  );
}

export default App;
