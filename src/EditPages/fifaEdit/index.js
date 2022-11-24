import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import fifabackground from "../../Assets/Backgroung-img/backgroundfifa.jpeg";

export function FifaEdit() {
  const divBackgorund = {
    backgroundImage: `url(${fifabackground})`,
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
    mode: "Mode",
    type: "Type",
    tipTitle: "",
    tipBody: "",
  });

  useEffect(() => {
    async function FetchTip() {
      try {
        const response = await axios.get(
          `https://ironrest.cyclic.app/Fifa_Tips/${params.id}`
        );
        setTip(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    FetchTip();
  }, []);

  function handleChange(e) {
    if (e.target.name === "Type") {
      setTip({ ...tip, type: e.target.value });
      return;
    }

    if (e.target.name === "Mode") {
      setTip({ ...tip, mode: e.target.value });
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
        `https://ironrest.cyclic.app/Fifa_Tips/${params.id}`,
        infosToSendForAPI
      );

      navigate(`/fifa-ReadD/${params.id}`);
    } catch (err) {
      console.log(err);
      toast.error("Ops! Algo deu errado ...");
    }
  }

  return (
    <div style={divBackgorund}>
      <div style={divStyle}>
        <h1 style={h1Style}> Create FIFA 23 Tip</h1>
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
              value={tip.name}
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
              value={tip.mode}
              onChange={handleChange}
            >
              <option value="mode">Mode:</option>
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
              value={tip.type}
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
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}
