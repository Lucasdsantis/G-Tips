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
    margin: "0",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "row",
    justifycontent: "space-between",
    fontSize: "1.4rem",
  };

  const gtipshome = {
    marginLeft: "40px",
    color: "pink",
    fontSize: "3rem",
  };

  const nlstyle = {
    marginRight: "80px",
    marginLeft: "80px",
  };

  const aboutusnav = {
    marginRight: "40px",
  };

  const imgcarousel = {
    objectFit: "cover",
    width: "100vw",
  };

  const carouselstyle = {
    width: "100vw",
    heigth: "10em",
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
    width: "250px",
    heigth: "70px",
    fontSize: "2rem",
    boderRadius: "40px",
    marginLeft: "20px",
    marginRight: "20px",

    color: "pink",

    fontWeight: "500",
  };

  const body2boxes = {
    margin: "50px",
    backgroundColor: "grey",
    padding: "20px",
    borderRadius: "20px",
  };

  const h3body2 = {
    color: "pink",
    fontWeight: "500",
  };

  const textbody2 = {
    color: "white",
  };

  const footerboxes = {
    marginLeft: "200px",
    marginRight: "200px",
  };

  const abtfooter = {
    textAlign: "center",
    marginBottom: "20px",
    color: "pink",
  };
  const pfooter = {
    fontSize: "0.7rem",
    color: "white",
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Navbar style={nbstyle}>
        <Container className="div-geral-navbar" style={divGeralNavbar}>
          <div style={gtipshome}>
            <Navbar href="#home">G-TIPS</Navbar>
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
          <img
            className="d-block w-100"
            style={imgcarousel}
            src={imgCsGoHP}
            alt="First slide"
          />
          <Carousel.Caption>
            <Link to={"/csgo"}>
              {" "}
              <Button style={bStyle} variant="secondary">
                Tips
              </Button>{" "}
            </Link>
            <Button
              href={
                "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
              }
              style={bStyle}
              variant="secondary"
            >
              Play Now
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" style={imgcarousel} src={imgLolHP} />

          <Carousel.Caption>
            <Link to={"/lol"}>
              <Button style={bStyle} variant="secondary">
                Tips
              </Button>{" "}
            </Link>
            <Button
              href={"https://www.leagueoflegends.com/pt-br/"}
              style={bStyle}
              variant="secondary"
            >
              Play Now
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={imgcarousel}
            src={imgFifaHP}
            alt="Third slide"
          />

          <Carousel.Caption>
            <Link to={"/fifa"}>
              <Button style={bStyle} variant="secondary">
                Tips
              </Button>{" "}
            </Link>
            <Button
              href={"https://www.ea.com/pt-br/games/fifa/fifa-23"}
              style={bStyle}
              variant="secondary"
            >
              Play Now
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div style={body2}>
        <div style={body2boxes}>
          <h3 style={h3body2}>What it is?</h3>
          <p style={textbody2}>
            This website is a forum for tips for the most played games in the
            world!!
          </p>
        </div>

        <div style={body2boxes}>
          <h3 style={h3body2}>Why use it?</h3>
          <ul>
            <li style={textbody2}>Improve your Gameplay</li>
            <li style={textbody2}>Share your Gameplay tips</li>
            <li style={textbody2}>Interact with the gaming community</li>
          </ul>
        </div>
      </div>

      <footer style={fstyle}>
        <div>
          <h4 id="abtus" style={abtfooter}>
            About Us
          </h4>
          <div style={boxesfooter}>
            <p style={pfooter}>
              This website was projectec by Lucas de Santis and Joey Quadros.Our
              main goal with this project is create a place were players from
              all type of games can exchage tips and experiences and improve
              themselves.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
