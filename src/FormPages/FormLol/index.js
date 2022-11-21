import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function FormLol() {
  const divStyle = {
    margin: "50px",
    backgroundColor: "grey",
  };

  const h1Style = {
    textAling: "center",
    marginTop: "50px",
    marginLeft: "50px",
  };

  const [form, setForm] = useState({
    name: "",
    position: "Position",
    type: "Type",
    ChampionName: "",
    tipTitle: "",
    tipBody: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    if (e.target.name === "position") {
      setForm({ ...form, position: e.target.value });
      return;
    }
    if (e.target.name === "type") {
      setForm({ ...form, type: e.target.value });
      return;
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  console.log(form);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("https://ironrest.cyclic.app/Lol_Tips", form);

      navigate("/lol");
    } catch (err) {
      console.log(err);
      toast.error("Ops! Algo deu errado ...");
    }
  }

  return (
    <>
      <h1 style={h1Style}> Create League of Legends Tip</h1>
      <div style={divStyle}>
        <form onSubmit={handleSubmit}>
          <div className={"mb-3"}>
            <label htmlFor="input-email" className={"form-label"}>
              Your Name:
            </label>
            <input
              name="name"
              type="text"
              className={"form-control"}
              id="input-name"
              placeholder="Lucas"
              value={form.name}
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
              defaultValue={form.position}
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
              defaultValue={form.type}
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
              value={form.ChampionName}
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
              value={form.tipTitle}
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
