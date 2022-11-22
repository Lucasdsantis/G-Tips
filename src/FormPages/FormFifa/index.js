import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function FormFifa() {
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
    mode: "Mode",
    type: "Type",
    tipTitle: "",
    tipBody: "",
  });

  function handleChange(e) {
    if (e.target.name === "Type") {
      setForm({ ...form, type: e.target.value });
      return;
    }

    if (e.target.name === "Mode") {
      setForm({ ...form, mode: e.target.value });
      return;
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  console.log(form);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("https://ironrest.cyclic.app/Fifa_Tips", form);

      navigate("/fifa");
    } catch (err) {
      console.log(err);
      toast.error("Ops! Algo deu errado ...");
    }
  }

  return (
    <>
      <h1 style={h1Style}> Create FIFA 23 Tip</h1>
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
              placeholder="Lucas"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className={"mb-3"}>
            <label htmlFor="input-select-mode" className={"form-label"}>
              Mode:
            </label>
            <select
              className={"form-select"}
              id="input-select-mode"
              name="mode"
              defaultValue={form.mode}
              onChange={handleChange}
            >
              <option value="Type">Type:</option>
              <option value="Career Mode">Career Mode</option>
              <option value="Ultimate Team">Ultimate Team</option>
              <option value="Pro Clubs">Pro Clubs</option>
            </select>
          </div>

          <div className={"mb-3"}>
            <label htmlFor="input-select-type" className={"form-label"}>
              Type:
            </label>
            <select
              className={"form-select"}
              id="input-select-type"
              name="type"
              defaultValue={form.type}
              onChange={handleChange}
            >
              <option value="Type">Type:</option>
              <option value="Draft">Draft</option>
              <option value="GamePlay">GamePlay</option>
              <option value="transfer Market">transfer market</option>
            </select>
          </div>

          <div className={"mb-3"}>
            <label htmlFor="input-tip-title" className={"form-label"}>
              Tip Title:
            </label>
            <input
              type="text"
              className={"form-control"}
              id="input-tip-title"
              placeholder="Promising Player"
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
