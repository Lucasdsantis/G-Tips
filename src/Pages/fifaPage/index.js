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

import fifabackground from "../../Assets/Backgroung-img/backgroundfifa.jpeg";

import createTip from "../../Assets/img-fifa/createfifatip.jpg";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export function FifaPage() {
  //estilo da navbar começa aqui
  const nbstyle = {
    position: "absolute",
    background: "none",
    top: "0px",
    width: "100%",
    zIndex: "999",
    border: "0",
    borderRadius: "0",
    color: "white",
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
    marginLeft: "40px",
    color: "#A9A9A9",
    fontSize: "3rem",
    textDecoration: "none",
    fontWeight: "800",
  };

  const nlstyle = {
    background: "none",
    borderRadius: "20px",
  };

  const aboutusnav = {
    marginRight: "40px",
    color: "#A9A9A9",
    textDecoration: "none",
    fontWeight: "800",
  };

  const bNavbarStyle = {
    background: "transparent",
    border: "0",
    color: "white",
    borderRadius: "10px",
    padding: "0.3rem",
    fontWeight: "600",
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
    backgroundImage: `url(${fifabackground})`,
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

  const divLikesAndDislikes = {
    display: "flex",
    gap: "1rem",
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
          <div>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Navbar style={gtipshome} href="#home">
                GTIPS
              </Navbar>
            </Link>
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
          <h1>FIFA 23 Page</h1>
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
                  to={`/FormFifa`}
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
            let randomIndex = Math.floor(Math.random() * 7);
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
                  <h5 className={"card-title"}>{currentTip.tipTitle}</h5>
                  <h6 className={"card-title"}>Mode: {currentTip.mode}</h6>
                  <h6 className={"card-title"}>Type: {currentTip.type}</h6>
                  <div style={divLikesAndDislikes}>
                    {currentTip.like ? (
                      <h6 style={{ color: "green" }} className={"card-title"}>
                        Likes: {currentTip.like}
                      </h6>
                    ) : (
                      <h6 className={"card-title"}>No Likes</h6>
                    )}
                    <h6 className={"card-title"}> | </h6>
                    {currentTip.disLike ? (
                      <h6 style={{ color: "red" }} className={"card-title"}>
                        Dislikes: {currentTip.disLike}
                      </h6>
                    ) : (
                      <h6 className={"card-title"}>No Dislikes</h6>
                    )}
                  </div>
                  <div>
                    <Link
                      to={`/fifa-ReadD/${currentTip._id}`}
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
