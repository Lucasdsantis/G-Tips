import "bootstrap/dist/css/bootstrap.min.css";

import CsGoHP from "./Assets/Images/image CS home.png";
import LolHP from "./Assets/Images/image LOL home 2.png";
import FifaHP from "./Assets/Images/FIFA-23-logo.png";

import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/index";

import { LolPage } from "./Pages/lolPage";
import { ReadDLol } from "./ReadD/ReadDLol";

import { CsGoPage } from "./Pages/csgoPage";
import { ReadDCsgo } from "./ReadD/ReadDCsgo";

import { FifaPage } from "./Pages/fifaPage";
import { ReadDFifa } from "./ReadD/ReadDFifa";

import { Form } from "./Pages/Form";

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
        <Route path="/lol-ReadD" element={<ReadDLol />} />

        <Route path="/csgo" element={<CsGoPage />} />
        <Route path="/csgo-ReadD" element={<ReadDCsgo />} />

        <Route path="/fifa" element={<FifaPage />} />
        <Route path="/fifa-ReadD" element={<ReadDFifa />} />

        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
