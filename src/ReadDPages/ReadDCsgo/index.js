import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export function ReadDCsgo() {
  const divMae = {
    display: "flex",
    justifyContent: "row",
    margin: "3rem",
    marginTop: "5rem",
    gap: "2rem",
  };

  const div1 = {
    backgroundColor: "grey",
    padding: "1rem",
    width: "70%",
  };

  const div2 = {
    backgroundColor: "grey",
    padding: "1rem",
    width: "37%",
  };

  const divButton = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "1rem",
    margin: "0.5rem",
  };

  const params = useParams();
  const [tip, setTip] = useState([]);

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

  // LOGICA DO DELETE NOTE

  // LOGICA DOS COMENTARIOS

  // LOGICA DOS RECOMENDADOS

  return (
    <>
      {/* DIV MAE */}
      <div style={divMae}>
        {/* QUADRADO 1 */}
        <div style={div1}>
          <h2>{tip.title}</h2>

          {/* cars tip */}
          <div className="card mb-3">
            <div className="card-body">
              <p className="card-text">Tip: {tip.tipBody}</p>
              <h6>
                {tip.type} - {tip.team} - {tip.map}
              </h6>
              <p className="card-text">
                <small className="text-muted">By: {tip.name}</small>
              </p>
            </div>
            <div style={divButton}>
              <Link to={`/csgo-Edit/${params.id}`}>
                <button type="button" className="btn btn-secondary">
                  Editar
                </button>
              </Link>
              <button type="button" className="btn btn-danger">
                Excluir
              </button>
            </div>
          </div>

          {/* QUADRADO 2 */}

          <div>
            {/* form comentario */}
            <div>
              {/* form comentario */}
              <h4> Add Comment </h4>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Carol"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Comment:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Be Nice..."
                ></textarea>
              </div>

              <h4>Comments </h4>
              <div className="card">
                {/* comentario exibicao */}
                <div className="card-header">nome da pessoa q comentou</div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>aqui ficara o comentario em si</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* retângulo 1 */}
        <div style={div2}>
          <h2>Read More...</h2>
          {/*  map dos card por type */}
          <div className={"card"} style={{ width: "18rem" }}>
            <img
              // style={imgStyle}
              // src={img}
              className={"card-img-top"}
              alt="csgo-random-img"
            />
            <div className={"card-body"}>
              <h5 className={"card-title"}>aq</h5>
              <h6 className={"card-title"}>vai ser</h6>
              <h6 className={"card-title"}>sort e</h6>
              <h6 className={"card-title"}>map</h6>
              <Link to={`/csgo-ReadD`} className={"btn btn-primary"}>
                Read (ainda n tem o link aq)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
