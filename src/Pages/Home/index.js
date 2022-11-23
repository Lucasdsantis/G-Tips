import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export function Home(props) {
  const { imgCsGoHP, imgLolHP, imgFifaHP } = props;

  const nbstyle = {
    background: "none",
    margin: "20px",
  };

  const divGeralNavbar = {
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifycontent: "space-between",
    maxWidth: "100vw",
    position: "absolute",
    zIndex: "999",
  };

  const gtipshome = {
    marginLeft: "20px",
    color: "white",
  };

  const nlstyle = {
    marginRight: "50px",
    marginLeft: "50px",
  };

  const aboutusnav = {
    marginRight: "20px",
    style: "none",
  };

  const carouselstyle = {
    width: "100vw",
    heigth: "500px ",

    top: "0",
  };

  const gamesDiv = {
    display: "flex",
    flexDirection: "row",
  };

  const body2 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#dfdbdb",
  };

  const fstyle = {
    backgroundColor: "grey",
    alignItems: "center",
    color: "white",
  };

  const boxesfooter = {
    aligntext: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };

  const bStyle = {
    width: "200px",
    heigth: "50px",
    fontSize: "1.3rem",
    boderRadius: "40px",
    marginLeft: "20px",
    marginRight: "20px",
  };

  const body2boxes = {
    margin: "50px",
  };

  const footerboxes = {
    marginLeft: "200px",
    marginRight: "200px",
  };

  const abtfooter = {
    textAlign: "center",
    marginBottom: "20px",
  };
  const pfooter = {
    fontSize: "0.7rem",
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Navbar style={nbstyle} bg="light" expand="lg">
        <Container className="div-geral-navbar" style={divGeralNavbar}>
          <div style={gtipshome}>
            <Navbar.Brand href="#home">G-TIPS</Navbar.Brand>
          </div>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}

          {/* <Nav className="me-auto"> */}
          <div style={gamesDiv}>
            <Nav.Link style={nlstyle} href="../csgo">
              Counter Strike Global Offensive
            </Nav.Link>
            <Nav.Link style={nlstyle} href="../lol">
              League of Legends
            </Nav.Link>
            <Nav.Link style={nlstyle} href="../fifa">
              FIFA
            </Nav.Link>
          </div>
          <div style={aboutusnav}>
            <a href="#abtus">About Us</a>
          </div>
          {/* </Nav> */}
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={carouselstyle}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={imgCsGoHP} alt="First slide" />
          <Carousel.Caption>
            <Link to={"/csgo"}>
              {" "}
              <Button style={bStyle} variant="info">
                Tips
              </Button>{" "}
            </Link>
            <Button
              href={
                "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
              }
              style={bStyle}
              variant="info"
            >
              Website
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imgLolHP} />

          <Carousel.Caption>
            <Link to={"/lol"}>
              <Button style={bStyle} variant="info">
                Tips
              </Button>{" "}
            </Link>
            <Button
              href={"https://www.leagueoflegends.com/pt-br/"}
              style={bStyle}
              variant="info"
            >
              Website
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imgFifaHP} alt="Third slide" />

          <Carousel.Caption>
            <Link to={"/fifa"}>
              <Button style={bStyle} variant="info">
                Tips
              </Button>{" "}
            </Link>
            <Button
              href={"https://www.ea.com/pt-br/games/fifa/fifa-23"}
              style={bStyle}
              variant="info"
            >
              Website
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div style={body2}>
        <div style={body2boxes}>
          <h3>What it is?</h3>
          <p>
            This website is a forum for tips for the most played games in the
            world
          </p>
        </div>

        <div style={body2boxes}>
          <h3>Why use it?</h3>
          <ul>
            <li>Improve your Gameplay</li>
            <li>Share your Gameplay tips</li>
            <li>Interact with the gaming community</li>
          </ul>
        </div>
      </div>

      <footer style={fstyle}>
        <div>
          <h4 id="abtus" style={abtfooter}>
            About Us
          </h4>
          <div style={boxesfooter}>
            <div style={footerboxes}>
              <h6>Joey Quadros</h6>
              <p style={pfooter}>IronHack Web Develoment student</p>
            </div>
            <div style={footerboxes}>
              <h6>Lucas de Santis</h6>
              <p style={pfooter}>IronHack Web Develoment student</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
