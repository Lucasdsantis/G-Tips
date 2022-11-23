import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export function Home(props) {
  const { imgCsGoHP, imgLolHP, imgFifaHP } = props;

  const divGeralNavbar = {
    margin: "0",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifycontent: "space-between",
    maxWidth: "100vw",
  };

  const gamesDiv = {
    display: "flex",
    flexDirection: "row",
  };

  const body2 = {
    display: "flex",
    flexDirection: "row",
    justifycontent: "space-between",
  };

  const fstyle = {
    backgroundColor: "grey",
  };

  const boxesfooter = {
    aligntext: "center",
    display: "flex",
    flexDirection: "row",
    justifycontent: "center",
  };

  const bStyle = {
    width: "200px",
    heigth: "50px",
    fontSize: "1.3rem",
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="div-geral-navbar" style={divGeralNavbar}>
          <div>
            <Navbar.Brand href="#home">G-Tips</Navbar.Brand>
          </div>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}

          {/* <Nav className="me-auto"> */}
          <div style={gamesDiv}>
            <Nav.Link href="../csgo">Counter Strike Global Offensive</Nav.Link>
            <Nav.Link href="../lol">League of Legends</Nav.Link>
            <Nav.Link href="../fifa">FIFA</Nav.Link>
          </div>
          <div>
            <a href="#about">About Us</a>
          </div>
          {/* </Nav> */}
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>

      <Carousel activeIndex={index} onSelect={handleSelect}>
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
        <div>
          <h3>What it is?</h3>
          <p>
            This website is a forum for tips for the most played games in the
            world
          </p>
        </div>

        <div>
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
          <h2>About Us</h2>
          <div style={boxesfooter}>
            <div>
              <h6>Joey Quadros</h6>
              <p>ljlkjkljkj</p>
            </div>
            <div>
              <h6>Lucas de Santis</h6>
              <p>ljlkjkljkj</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
