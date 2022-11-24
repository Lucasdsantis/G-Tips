import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import backgroundimg5 from "../../Assets/Backgroung-img/background_csgo_img5.jpeg";

export function CsgoEdit() {
  const divBackgorund = {
    backgroundImage: `url(${backgroundimg5})`,
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
    Width: "70%",
  };

  const h1Style = {
    textAling: "center",
  };

  const params = useParams();
  const navigate = useNavigate();

  const [tip, setTip] = useState({
    name: "",
    team: "",
    type: "",
    map: "",
    title: "",
    tipBody: "",
  });

  useEffect(() => {
    async function FetchTip() {
      try {
        const response = await axios.get(
          `https://ironrest.cyclic.app/Cs_Tips/${params.id}`
        );
        setTip(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    FetchTip();
  }, []);

  function handleChange(e) {
    if (e.target.name === "Team") {
      setTip({ ...tip, team: e.target.value });
      return;
    }

    if (e.target.name === "Type") {
      setTip({ ...tip, type: e.target.value });
      return;
    }

    if (e.target.name === "Map") {
      setTip({ ...tip, map: e.target.value });
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
        `https://ironrest.cyclic.app/Cs_Tips/${params.id}`,
        infosToSendForAPI
      );

      navigate(`/csgo-ReadD/${params.id}`);
    } catch (err) {
      console.log(err);
      toast.error("Ops! Algo deu errado ...");
    }
  }

  return (
    <div style={divBackgorund}>
      <div style={divStyle}>
        <h1 style={h1Style}> Edit CS:GO Tip</h1>
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
              value={tip.name}
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
              defaultValue={tip.team}
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
              defaultValue={tip.type}
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
              defaultValue={tip.map}
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
              value={tip.title}
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

          <div style={{ display: "flex", justifyContent: "end" }}>
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
