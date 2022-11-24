import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import imgLOL5 from "../../Assets/img-lol/imgLOL5.jpeg";

export function LolEdit() {
  const divBackgorund = {
    backgroundImage: `url(${imgLOL5})`,
    height: "100vh",
    padding: "3.8rem",
    // backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
  };

  const divStyle = {
    margin: "50px",
    backgroundColor: "#808080",
    padding: "1rem",
    border: "solid 1px black",
    borderRadius: "10px",
    Width: "100%",
    height: "85%",
    overflow: "scroll",
    overflowX: "hidden",
    overflowY: "auto",
  };

  const h1Style = {
    textAling: "center",
  };

  const params = useParams();
  const navigate = useNavigate();

  const [tip, setTip] = useState({
    name: "",
    position: "Position",
    type: "Type",
    ChampionName: "",
    tipTitle: "",
    tipBody: "",
  });

  useEffect(() => {
    async function FetchTip() {
      try {
        const response = await axios.get(
          `https://ironrest.cyclic.app/Lol_Tips/${params.id}`
        );
        setTip(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    FetchTip();
  }, []);

  function handleChange(e) {
    if (e.target.name === "position") {
      setTip({ ...tip, position: e.target.value });
      return;
    }
    if (e.target.name === "type") {
      setTip({ ...tip, type: e.target.value });
      return;
    }
    setTip({ ...tip, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const infosToSendForAPI = { ...tip };
    delete infosToSendForAPI._id;
    console.log(infosToSendForAPI);

    try {
      await axios.put(
        `https://ironrest.cyclic.app/Lol_Tips/${params.id}`,
        infosToSendForAPI
      );

      navigate(`/lol-ReadD/${params.id}`);
    } catch (err) {
      console.log(err);
      toast.error("Ops! Algo deu errado ...");
    }
  }

  return (
    <div style={divBackgorund}>
      <div style={divStyle}>
        <h1 style={h1Style}> Create League of Legends Tip</h1>
        <form onSubmit={handleSubmit}>
          <div className={"mb-3"}>
            <label htmlFor="input-name" className={"form-label"}>
              Your Name:
            </label>
            <input
              name="name"
              type="text"
              className={"form-control"}
              id="input-name"
              placeholder="Pedro"
              value={tip.name}
              onChange={handleChange}
            />
          </div>

          <div className={"mb-3"}>
            <label htmlFor="input-select-position" className={"form-label"}>
              Position:
            </label>
            <select
              className={"form-select"}
              id="input-select-position"
              name="position"
              value={tip.position}
              onChange={handleChange}
            >
              <option value="Position">Position</option>
              <option value="Top">Top</option>
              <option value="Jungle">Jungle</option>
              <option value="Mid">Mid</option>
              <option value="Sup">Sup</option>
              <option value="Adc">Adc</option>
            </select>
          </div>

          <div className={"mb-3"}>
            <label htmlFor="input-select-type" className={"form-label"}>
              Tip Type:
            </label>
            <select
              className={"form-select"}
              id="input-select-type"
              name="type"
              value={tip.type}
              onChange={handleChange}
            >
              <option value="Type">Type</option>
              <option value="MacroGame">Macro Game</option>
              <option value="Farme">Farm</option>
              <option value="Ganks">Ganks</option>
              <option value="Build">Build</option>
              <option value="Matchs">Match</option>
              <option value="Lane-Fase">Lane Fase</option>
              <option value="GamePlay">GamePlay</option>
              <option value="GamePlay">GamePlay</option>
              <option value="GamePlay">GamePlay</option>
              <option value="Runas/Spel">Runas/Spell</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="input-champion-name" className="form-label">
              Champion Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="input-champion-name"
              name="ChampionName"
              placeholder="Miss Fortune"
              value={tip.ChampionName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="input-tip-title" className={"form-label"}>
              Tip Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="input-tip-title"
              placeholder="How to farm correctly with MF"
              name="tipTitle"
              value={tip.tipTitle}
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
              value={tip.tipBody}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
