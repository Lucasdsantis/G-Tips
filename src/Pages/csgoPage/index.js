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

export function CsGoPage() {
  const imgStyle = {
    width: "280px",
    height: "150px",
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
    <>
      <h1>CS:GO Page</h1>

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
          <div className={"card"} style={{ width: "18rem" }}>
            <img
              style={imgStyle}
              src={img}
              className={"card-img-top"}
              alt="csgo-random-img"
            />
            <div className={"card-body"}>
              <h5 className={"card-title"}>{currentTip.title}</h5>
              <h6 className={"card-title"}>{currentTip.map}</h6>
              <h6 className={"card-title"}>{currentTip.type}</h6>
              <h6 className={"card-title"}>{currentTip.team}</h6>
              <div>
                <Link
                  to={`/csgo-ReadD/${currentTip._id}}`}
                  className={"btn btn-primary"}
                >
                  Read
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
