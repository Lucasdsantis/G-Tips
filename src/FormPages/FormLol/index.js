import { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

export function FormLol() {
  const divStyle = {
    margin: "50px",
    backgroundColor: "grey",
  };

  const h1Style = {
    textAling: "center",
    marginTop: "50px",
  };

  return (
    <>
      <h1 style={h1Style}> Create League of Legends Tip</h1>
      <div style={divStyle}>
        <form>
          <div className={"mb-3"}>
            <label hmtlFor="input-email" className={"form-label"}>
              Email addres:
            </label>
            <input
              type="email"
              className={"form-control"}
              id="input-email"
              placeholder="name@example.com"
            />
          </div>

          <div className={"mb-3"}>
            <label hmtlFor="input-select-position" className={"form-label"}>
              Position:
            </label>
            <select className={"form-select"} id="input-select-position">
              <option selected>Position</option>
              <option value="Top">Top</option>
              <option value="Jungle">Jungle</option>
              <option value="Mid">Mid</option>
              <option value="Sup">Sup</option>
              <option value="Adc">Adc</option>
            </select>
          </div>

          <div className={"mb-3"}>
            <label hmtlFor="input-select-type" className={"form-label"}>
              Tip Type:
            </label>
            <select className={"form-select"} id="input-select-type">
              <option selected>type</option>
              <option value="MacroGame">Macro Game</option>
              <option value="Farme">Farm</option>
              <option value="Ganks">Ganks</option>
              <option value="Build">Build</option>
              <option value="Matchs">Match</option>
              <option value="Lane-Fase">Lane Fase</option>
            </select>
          </div>

          <div class="mb-3">
            <label hmtlFor="input-champion-name" class="form-label">
              Champion Name:
            </label>
            <input
              type="text"
              class="form-control"
              id="input-champion-name"
              placeholder="Miss Fortune"
            />
          </div>

          <div class="mb-3">
            <label htmlFor="input-tip-title" className={"form-label"}>
              Tip Title:
            </label>
            <input
              type="email"
              class="form-control"
              id="input-tip-title"
              placeholder="How to farm correctly with MF"
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

          <Link type="button" class="btn btn-primary" to={"/"}>
            Create
          </Link>
        </form>
      </div>
    </>
  );
}
