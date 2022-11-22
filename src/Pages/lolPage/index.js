import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import lolimg1 from "../../Assets/img-lol/imgLOL1.jpeg";
import lolimg2 from "../../Assets/img-lol/imgLOL2.jpeg";
import lolimg3 from "../../Assets/img-lol/imgLOL3.jpeg";
import lolimg4 from "../../Assets/img-lol/imgLOL4.jpeg";
import lolimg5 from "../../Assets/img-lol/imgLOL5.jpeg";
import lolimg6 from "../../Assets/img-lol/imgLOL6.jpeg";
import lolimg7 from "../../Assets/img-lol/imgLOL7.jpeg";

export function LolPage() {
  const imgStyle = {
    width: "280px",
    height: "150px",
  };

  const allImgs = [
    lolimg1,
    lolimg2,
    lolimg3,
    lolimg4,
    lolimg5,
    lolimg6,
    lolimg7,
  ];

  const [tip, setTip] = useState([]);

  useEffect(() => {
    async function FetchTips() {
      try {
        const response = await axios.get(
          "https://ironrest.cyclic.app/Lol_Tips"
        );

        setTip(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    FetchTips();
  }, []);

  return (
    <>
      <h1>CS:GO Page Page</h1>

      {tip.map((currentTip) => {
        let randomIndex = Math.floor(Math.random() * (7 - 0) + 0);
        return (
          <div className={"card"} style={{ width: "18rem" }}>
            <img
              style={imgStyle}
              src={allImgs[randomIndex]}
              className={"card-img-top"}
              alt="csgo-random-img"
            />
            <div className={"card-body"}>
              <h5 className={"card-title"}>{currentTip.tipTitle}</h5>
              <h6 className={"card-title"}>{currentTip.ChampionName}</h6>
              <h6 className={"card-title"}>{currentTip.type}</h6>
              <h6 className={"card-title"}>{currentTip.position}</h6>
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
