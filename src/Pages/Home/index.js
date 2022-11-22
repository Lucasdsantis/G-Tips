import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from "react-bootstrap/Carousel";
import Container from 'react-bootstrap/Container';



export function Home(props){
  const {imgCsGoHP,imgLolHP, imgFifaHP} = props

  const divGeralNavbar = {
    margin: "0",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifycontent: "space-between",
    maxWidth: "100vw"
    
   
  }

  const gamesDiv = {
    display: "flex",
    flexDirection: "row"
  }

  const body2 ={
    display: "flex",
    flexDirection: "row",
    justifycontent: "space-between",
  }

  const fstyle ={
    backgroundColor: "grey",
    
  }

  const boxesfooter= {
    aligntext: "center",
    display: "flex",
    flexDirection: "row",
    justifycontent: "center",
  }
  
  
  
  
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
            <Nav.Link href="../csgoPage">Counter Strike Global Offensive</Nav.Link>
            <Nav.Link href="../lolPage">League of Legends</Nav.Link>
            <Nav.Link href="../fifaPage">FIFA</Nav.Link>
            </div>
            <div>
            <a href="#about">About Us</a>
            </div>
             {/* </Nav> */}
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
     
    
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {imgCsGoHP}
            alt="First slide"
          />
           <Carousel.Caption>
            <h3>Counter Strike Global Offensive</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgLolHP}
          />

          <Carousel.Caption>
            <h3>League of Legends</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgFifaHP}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Fifa</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
      <div style={body2}>
        <div>
        <h3>INFOS</h3>
        <p>Algum texto</p>
        </div>

        <div>
        <h3>Why use it?</h3>
        <p>algum texto</p>
        </div>
      </div>
     

     <footer style={fstyle}>
      <div >
        <h2>About Us</h2>
        <div style={boxesfooter}>
        <div>
          <h4>Joey Quadros</h4>
          <p>ljlkjkljkj</p>
        </div>
          <div>
          <h4>Lucas de Santis</h4>
          <p>ljlkjkljkj</p>
          </div>
          </div>

      </div>
     </footer>

    </>
  );
}
