import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Ffiaimg1 from "../../Assets/img-fifa/imgFifa1.jpeg";
import Ffiaimg2 from "../../Assets/img-fifa/imgFifa2.jpeg";
import Ffiaimg3 from "../../Assets/img-fifa/imgFifa3.jpeg";
import Ffiaimg4 from "../../Assets/img-fifa/imgFifa4.jpeg";
import Ffiaimg5 from "../../Assets/img-fifa/imgFifa5.jpeg";
import Ffiaimg6 from "../../Assets/img-fifa/imgFifa6.jpeg";
import Ffiaimg7 from "../../Assets/img-fifa/imgFifa7.jpeg";

export function FifaPage() {
  const imgStyle = {
    width: "280px",
    height: "150px",
  };

  const allImgs = [
    Ffiaimg1,
    Ffiaimg2,
    Ffiaimg3,
    Ffiaimg4,
    Ffiaimg5,
    Ffiaimg6,
    Ffiaimg7,
  ];

  const [tip, setTip] = useState([]);

  useEffect(() => {
    async function FetchTips() {
      try {
        const response = await axios.get(
          "https://ironrest.cyclic.app/Fifa_Tips"
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
      <h1>FIFA 23 Page</h1>

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
              <h6 className={"card-title"}>{currentTip.type}</h6>
              <h6 className={"card-title"}>{currentTip.mode}</h6>
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
