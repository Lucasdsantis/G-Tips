import { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

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

  return (
    <>
      <h1 style={h1Style}> Create CS:GO Tip</h1>
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
            <label hmtlFor="input-select-position" className={"form-label"}>
              Position:
            </label>
            <select className={"form-select"} id="input-select-position">
              <option selected>Team</option>
              <option value="CT">CT</option>
              <option value="TR">TR</option>
            </select>
          </div>

          <div className={"mb-3"}>
            <label hmtlFor="input-select-type" className={"form-label"}>
              Tip Type:
            </label>
            <select className={"form-select"} id="input-select-type">
              <option selected>type</option>
              <option value="weaponry">Weaponry</option>
              <option value="round strategy">Round Strategy</option>
              <option value="armory">Armory</option>
            </select>
          </div>

          <div className={"mb-3"}>
            <label hmtlFor="input-select-type" className={"form-label"}>
              Map:
            </label>
            <select className={"form-select"} id="input-select-type">
              <option selected>Maps</option>
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

          <div class="mb-3">
            <label htmlFor="input-tip-title" className={"form-label"}>
              Tip Title:
            </label>
            <input
              type="text"
              class="form-control"
              id="input-tip-title"
              placeholder="How to rush to bomb A"
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

          <Link type="button" class="btn btn-primary" to={"/csgo"}>
            Create
          </Link>
        </form>
      </div>
    </>
  );
}
