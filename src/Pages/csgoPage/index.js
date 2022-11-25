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

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export function CsGoPage() {
  //navbar começa qui
  const nbstyle = {
    position: "absolute",
    background: "none",
    top: "0px",
    width: "100%",
    zIndex: "999",
    border: "0",
    borderRadius: "0",
    color: "white",
    fontWeight: "600",
  };

  const divGeralNavbar = {
    marginBottom: "10rem",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "row",
    justifycontent: "space-between",
    fontSize: "1.4rem",
  };

  const gtipshome = {
    marginLeft: "2.5rem",
    color: "#A9A9A9",
    fontSize: "3rem",
  };

  const nlstyle = {
    background: "none",
    borderRadius: "20px",
  };

  const aboutusnav = {
    marginRight: "2.5rem",
    color: "#A9A9A9",
    textDecoration: "none",
  };

  const bNavbarStyle = {
    background: "transparent",
    border: "0",
    color: "white",
    borderRadius: "10px",
    padding: "0.3rem",
  };

  const gamesDiv = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60rem",
    marginBottom: "1.5rem",
  };

  //termina aqui

  const divBackgorund = {
    backgroundImage: `url(${backgroundimg5})`,
    height: "100vh",
    padding: "4.5rem",
    // backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const divMae = {
    backgroundColor: "#808080",
    padding: "1rem",
    width: "100%",
    border: "solid 1px black",
    borderRadius: "10px",
    height: "90%",
    overflow: "scroll",
    overflowX: "hidden",
    overflowY: "auto",
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

  //lógica navbar
  function MouseOver(event) {
    event.target.style.background = "#808080";
  }
  function MouseOut(event) {
    event.target.style.background = "transparent";
  }

  return (
    <div style={divBackgorund}>
      <Navbar style={nbstyle}>
        <Container className="div-geral-navbar" style={divGeralNavbar}>
          <div style={gtipshome}>
            <Navbar href="#home">GTIPS</Navbar>
          </div>
          <div style={gamesDiv}>
            <Nav.Link style={nlstyle} href="../csgo">
              <button
                style={bNavbarStyle}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                Counter Strike Global Offensive
              </button>
            </Nav.Link>
            <Nav.Link style={nlstyle} href="../lol">
              <button
                style={bNavbarStyle}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                League of Legends
              </button>
            </Nav.Link>
            <Nav.Link style={nlstyle} href="../fifa">
              <button
                style={bNavbarStyle}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                FIFA
              </button>
            </Nav.Link>
          </div>
          <div>
            <a style={aboutusnav} href="#abtus">
              About Us
            </a>
          </div>
          {/* </Nav> */}
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>

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
      <div>
        <Link to={`/`} className={"btn btn-light"}>
          Back
        </Link>
      </div>
    </div>
  );
}
