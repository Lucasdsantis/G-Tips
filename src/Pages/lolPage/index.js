import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import lolimg2 from "../../Assets/img-lol/imgLOL2.jpeg";
import lolimg5 from "../../Assets/img-lol/imgLOL5.jpeg";
import lolimg6 from "../../Assets/img-lol/imgLOL6.jpeg";
import lolimg7 from "../../Assets/img-lol/imgLOL7.jpeg";

import createTip from "../../Assets/img-lol/createtiplol.jpeg";

import imgLOL5 from "../../Assets/img-lol/imgLOL5.jpeg";

export function LolPage() {
  const divBackgorund = {
    backgroundImage: `url(${imgLOL5})`,
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

  const allImgs = [lolimg2, lolimg5, lolimg6, lolimg7];

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
    <div style={divBackgorund}>
      <div style={divMae}>
        <div style={divTitle}>
          <h1>League of Legends Page</h1>
        </div>

        <div style={divTips}>
          <div
            className={"card"}
            style={{ width: "18rem", border: "1px solid green" }}
          >
            <img
              style={imgStyle}
              src={createTip}
              className={"card-img-top"}
              alt="csgo-random-img"
            />
            <div className={"card-body"} style={divCreate}>
              <h4 className={"card-title"}> Create New Tip</h4>
              <div>
                <Link
                  to={`/FormLol`}
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
            let randomIndex = Math.floor(Math.random() * 4);
            return (
              <div
                className={"card"}
                style={{ width: "18rem", border: "1px solid black" }}
                key={currentTip._id}
              >
                <img
                  style={imgStyle}
                  src={allImgs[randomIndex]}
                  className={"card-img-top"}
                  alt="csgo-random-img"
                />
                <div className={"card-body"}>
                  <h5 className={"card-title"}>{currentTip.title}</h5>
                  <h6 className={"card-title"}>
                    Champion: {currentTip.ChampionName}
                  </h6>
                  <h6 className={"card-title"}>Type: {currentTip.type}</h6>
                  <h6 className={"card-title"}>
                    position: {currentTip.position}
                  </h6>
                  <div>
                    <Link
                      to={`/lol-ReadD/${currentTip._id}`}
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
