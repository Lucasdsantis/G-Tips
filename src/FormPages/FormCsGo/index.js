import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import backgroundimg5 from "../../Assets/Backgroung-img/background_csgo_img5.jpeg";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export function FormCsGo() {
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
    height: "100px",
    marginTop: "5rem",
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
    backgroundImage: `url(${backgroundimg5})`,
    height: "100vh",
    padding: "3.8rem",
    // backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };

  const divStyle = {
    margin: "2px",
    backgroundColor: "#808080",
    padding: "1.5rem",
    border: "solid 1px black",
    borderRadius: "10px",
    Width: "100%",
    height: "90%",
    overflow: "scroll",
    overflowX: "hidden",
    overflowY: "auto",
  };

  const h1Style = {};

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    team: "Team",
    type: "Type",
    map: "Map",
    title: "",
    tipBody: "",
  });

  function handleChange(e) {
    if (e.target.name === "Team") {
      setForm({ ...form, team: e.target.value });
      return;
    }

    if (e.target.name === "Type") {
      setForm({ ...form, type: e.target.value });
      return;
    }

    if (e.target.name === "Map") {
      setForm({ ...form, map: e.target.value });
      return;
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("https://ironrest.cyclic.app/Cs_Tips", form);

      navigate("/csgo");
    } catch (err) {
      console.log(err);
      toast.error("Oops! Something went worng...");
    }
  }

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
      <div style={divStyle}>
        <h1 style={h1Style}> Create CS:GO Tip</h1>
        <form onSubmit={handleSubmit}>
          <div className={"mb-3"}>
            <label htmlFor="input-name" className={"form-label"}>
              Your Name:
            </label>
            <input
              type="text"
              className={"form-control"}
              id="input-name"
              placeholder="Yasmin"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className={"mb-3"}>
            <label htmlFor="input-select-Team" className={"form-label"}>
              Team:
            </label>
            <select
              className={"form-select"}
              id="input-select-Team"
              name="Team"
              defaultValue={form.team}
              onChange={handleChange}
            >
              <option value="Team">Team</option>
              <option value="CT">CT</option>
              <option value="TR">TR</option>
            </select>
          </div>

          <div className={"mb-3"}>
            <label htmlFor="input-select-type" className={"form-label"}>
              Tip Type:
            </label>
            <select
              className={"form-select"}
              id="input-select-type"
              name="Type"
              defaultValue={form.type}
              onChange={handleChange}
            >
              <option value="type">Type</option>
              <option value="weaponry">Weaponry</option>
              <option value="round strategy">Round Strategy</option>
              <option value="armory">Armory</option>
            </select>
          </div>

          <div className={"mb-3"}>
            <label htmlFor="input-select-Map" className={"form-label"}>
              Map:
            </label>
            <select
              className={"form-select"}
              id="input-select-Map"
              name="Map"
              defaultValue={form.map}
              onChange={handleChange}
            >
              <option value="Map">Map</option>
              <option value="Cache">Cache</option>
              <option value="Cobblestone">Cobblestone</option>
              <option value="DustII">Dust II</option>
              <option value="Inferno">Inferno</option>
              <option value="Mirage">Mirage</option>
              <option value="Nuke">Nuke</option>
              <option value="Overpass">Overpass</option>
              <option value="Train">Train</option>
              <option value="Vertigo">Vertigo</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="input-tip-title" className={"form-label"}>
              Tip Title:
            </label>
            <input
              type="text"
              className={"form-control"}
              id="input-tip-title"
              placeholder="How to rush to bomb A"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </div>

          <div className={"mb-3"}>
            <label htmlFor="input-tip" className={"form-label"}>
              TIP:
            </label>
            <textarea
              className={"form-control"}
              id="input-tip"
              rows="4"
              name="tipBody"
              value={form.tipBody}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
      <div>
        <Link
          style={{ marginTop: "1rem" }}
          to={`/csgo`}
          className={"btn btn-light"}
        >
          Back
        </Link>
      </div>
    </div>
  );
}
