import { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

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

  return (
    <>
      <h1 style={h1Style}> Create FIFA 23 Tip</h1>
      <div style={divStyle}>
        <form>
          <div className={"mb-3"}>
            <label hmtlFor="input-email" className={"form-label"}>
              Your Name:
            </label>
            <input
              type="text"
              className={"form-control"}
              id="input-name"
              placeholder="Lucas"
            />
          </div>

          <div className={"mb-3"}>
            <label hmtlFor="input-select-type" className={"form-label"}>
              Mode:
            </label>
            <select className={"form-select"} id="input-select-type">
              <option selected>Mode</option>
              <option value="MacroGame">Draft</option>
              <option value="Farme">GamePlay</option>
              <option value="Ganks">transfer market</option>
            </select>
          </div>

          <div class="mb-3">
            <label htmlFor="input-tip-title" className={"form-label"}>
              Tip Title:
            </label>
            <input
              type="text"
              class="form-control"
              id="input-tip-title"
              placeholder="Promising Player"
            />
          </div>

          <div className={"mb-3"}>
            <label hmtlFor="input-tip" className={"form-label"}>
              TIP:
            </label>
            <textarea
              className={"form-control"}
              id="input-tip"
              rows="4"
            ></textarea>
          </div>

          <Link type="button" class="btn btn-primary" to={"/fifa"}>
            Create
          </Link>
        </form>
      </div>
    </>
  );
}
