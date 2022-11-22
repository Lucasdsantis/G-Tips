import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function FormCsGo() {
  const divStyle = {
    margin: "50px",
    backgroundColor: "grey",
  };

  const h1Style = {
    textAling: "center",
    marginTop: "50px",
    marginLeft: "50px",
  };

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    team: "Team",
    type: "Type",
    map: "Maps",
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

    if (e.target.name === "Maps") {
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
      toast.error("Ops! Algo deu errado ...");
    }
  }

  return (
    <>
      <h1 style={h1Style}> Create CS:GO Tip</h1>
      <div style={divStyle}>
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
              <option value="Maps">Maps</option>
              <option value="Cache">Cache</option>
              <option value="Cobblestone">Cobblestone</option>
              <option value="Dust-II">Dust II</option>
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
    </>
  );
}
