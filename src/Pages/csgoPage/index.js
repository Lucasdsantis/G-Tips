import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Cache from "../../Assets/img-csgo/imgCache.jpeg";
import Cobblestone from "../../Assets/img-csgo/imgCobblestone.jpeg";
import DustII from "../../Assets/img-csgo/imgDustII.jpeg";
import Inferno from "../../Assets/img-csgo/imgInferno.jpeg";
import Mirage from "../../Assets/img-csgo/imgMirage.jpeg";
import Nuke from "../../Assets/img-csgo/imgNuke.jpeg";
import Overpass from "../../Assets/img-csgo/imgOverpass.jpeg";
import Train from "../../Assets/img-csgo/imgTrain.jpeg";
import Vertigo from "../../Assets/img-csgo/imgVertigo.jpeg";
import Maps from "../../Assets/img-csgo/imgMaps.jpeg";

import backgroundimg5 from "../../Assets/Backgroung-img/background_csgo_img5.jpeg";

export function CsGoPage() {
  const divBackgorund = {
    backgroundImage: `url(${backgroundimg5})`,
    height: "100vh",
    padding: "4.5rem",
    // backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const divMae = {
    backgroundColor: "#808080",
    padding: "1.3rem",
    border: "solid 1px black",
    borderRadius: "10px",
  };

  const divTitle = {
    textAlign: "center",
    marginBottom: "1.5rem",
  };

  const divTips = {
    display: "flex",
    flexFlow: "row wrap",
    gap: "2.5rem",
    marginBottom: "1.5rem",
  };

  const imgStyle = {
    objectfFit: "cover",
  };

  const divCreate = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const [tip, setTip] = useState([]);

  useEffect(() => {
    async function FetchTips() {
      try {
        const response = await axios.get("https://ironrest.cyclic.app/Cs_Tips");

        setTip(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    FetchTips();
  }, []);

  return (
    <div style={divBackgorund}>
      <div style={divMae}>
        <div style={divTitle}>
          <h1>Tips CS:GO</h1>
        </div>

        <div style={divTips}>
          <div
            className={"card"}
            style={{ width: "18rem", border: "1px solid green" }}
          >
            <img
              style={imgStyle}
              src={Maps}
              className={"card-img-top"}
              alt="csgo-random-img"
            />
            <div className={"card-body"} style={divCreate}>
              <h4 className={"card-title"}> Create New Tip</h4>
              <div>
                <Link
                  to={`/FormCsGo`}
                  className={"btn btn-success"}
                  style={{
                    marginTop: "1.3rem",
                    borderRadius: "2rem",
                    height: "4rem",
                    width: "4rem",
                    fontSize: "2rem",
                    textAlign: "center",
                  }}
                >
                  +
                </Link>
              </div>
            </div>
          </div>
          {tip.map((currentTip) => {
            let img;
            if (currentTip.map === "Cache") img = Cache;
            if (currentTip.map === "Cobblestone") img = Cobblestone;
            if (currentTip.map === "DustII") img = DustII;
            if (currentTip.map === "Inferno") img = Inferno;
            if (currentTip.map === "Mirage") img = Mirage;
            if (currentTip.map === "Nuke") img = Nuke;
            if (currentTip.map === "Overpass") img = Overpass;
            if (currentTip.map === "Train") img = Train;
            if (currentTip.map === "Vertigo") img = Vertigo;
            if (currentTip.map === "Maps") img = Maps;

            return (
              <div
                className={"card"}
                style={{ width: "18rem", border: "1px solid black" }}
                key={currentTip._id}
              >
                <img
                  style={imgStyle}
                  src={img}
                  className={"card-img-top"}
                  alt="csgo-random-img"
                />
                <div className={"card-body"}>
                  <h5 className={"card-title"}>{currentTip.title}</h5>
                  <h6 className={"card-title"}>Map: {currentTip.map}</h6>
                  <h6 className={"card-title"}>Type: {currentTip.type}</h6>
                  <h6 className={"card-title"}>Team: {currentTip.team}</h6>
                  <div>
                    <Link
                      to={`/csgo-ReadD/${currentTip._id}`}
                      className={"btn btn-primary"}
                    >
                      Read
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
