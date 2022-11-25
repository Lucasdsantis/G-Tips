import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import { hover } from "@testing-library/user-event/dist/hover";

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
  };

  const nlstyle = {
    background: "none",
    borderRadius: "20px",
  };

  const aboutusnav = {
    marginRight: "40px",
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
    justifyContent: "space-around",
    width: "60rem",
    marginBottom: "1.5rem",
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
    textAlign: "center",
    color: "white",
    marginBottom: "4.5rem",
    fontWeight: "500",
  };

  const body2boxes = {
    margin: "50px",
    backgroundColor: "grey",
    padding: "20px",
    borderRadius: "20px",
  };

  const h3body2 = {
    color: "white",
    fontWeight: "500",
  };

  const textbody2 = {
    color: "white",
  };

  const abtfooter = {
    textAlign: "center",
    color: "white",
    padding: "10px",
  };
  const pfooter = {
    fontSize: "0.7rem",
    color: "white",
    padding: "0.4rem",
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function MouseOver(event) {
    event.target.style.background = "#808080";
  }
  function MouseOut(event) {
    event.target.style.background = "transparent";
  }

  return (
    <>
      <Navbar style={nbstyle}>
        <Container className="div-geral-navbar" style={divGeralNavbar}>
          <div style={gtipshome}>
            <Navbar href="#home">GTIPS</Navbar>
          </div>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          {/* onMouseEnter={() => setColor(grey)} */}
          {/* <Nav className="me-auto"> */}
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
              GTIPS was projectec by Lucas de Santis and Joey Quadros.Our main
              goal with this project is create a place were players from all
              type of games can exchage tips and experiences and improve
              themselves.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
