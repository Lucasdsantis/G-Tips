import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CsGoimg1 from "../../Assets/img-csgo/imgCsGo1.jpeg";
import CsGoimg2 from "../../Assets/img-csgo/imgCsGo2.jpeg";
import CsGoimg3 from "../../Assets/img-csgo/imgCsGo3.jpeg";
import CsGoimg4 from "../../Assets/img-csgo/imgCsGo4.jpeg";
import CsGoimg5 from "../../Assets/img-csgo/imgCsGo5.jpeg";
import CsGoimg6 from "../../Assets/img-csgo/imgCsGo6.jpeg";
import CsGoimg7 from "../../Assets/img-csgo/imgCsGo7.jpeg";

export function CsGoPage() {
  const imgStyle = {
    width: "280px",
    height: "150px",
  };

  const allImgs = [
    CsGoimg1,
    CsGoimg2,
    CsGoimg3,
    CsGoimg4,
    CsGoimg5,
    CsGoimg6,
    CsGoimg7,
  ];

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
