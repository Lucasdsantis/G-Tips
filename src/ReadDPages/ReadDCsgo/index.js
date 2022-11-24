import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Cache from "../../Assets/img-csgo/imgCache.jpeg";
import Cobblestone from "../../Assets/img-csgo/imgCobblestone.jpeg";
import DustII from "../../Assets/img-csgo/imgDustII.jpeg";
import Inferno from "../../Assets/img-csgo/imgInferno.jpeg";
import Mirage from "../../Assets/img-csgo/imgMirage.jpeg";
import Nuke from "../../Assets/img-csgo/imgNuke.jpeg";
import Overpass from "../../Assets/img-csgo/imgOverpass.jpeg";
import Train from "../../Assets/img-csgo/imgTrain.jpeg";
import Vertigo from "../../Assets/img-csgo/imgVertigo.jpeg";
import Maps from "../../Assets/img-csgo/imgMaps.jpeg";

import backgroundimg5 from "../../Assets/Backgroung-img/background_csgo_img5.jpeg";

export function ReadDCsgo() {
  const divBackgorund = {
    backgroundImage: `url(${backgroundimg5})`,
    height: "100vh",
    padding: "4.5rem",
    // backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const divMae = {
    display: "flex",
    alignItems: "flexStart",
    // margin: "3rem",
    // marginTop: "5rem",
    gap: "2rem",
    height: "100%",
    width: "100%",
  };

  const divTip = {
    backgroundColor: "#808080",
    padding: "1rem",
    width: "70%",
    border: "solid 1px black",
    borderRadius: "10px",
    overflow: "scroll",
    overflowX: "hidden",
    overflowY: "auto",
  };

  const divReadMore = {
    backgroundColor: "#808080",
    padding: "1rem",
    width: "24rem",
    border: "solid 1px black",
    borderRadius: "10px",
    overflow: "scroll",
    overflowX: "hidden",
    overflowY: "auto",
  };

  const divAddComment = {
    backgroundColor: "#4F4F4F",
    border: "solid 1px black",
    padding: "0.5rem",
    borderRadius: "10px",
  };

  const divCommentsE = {
    marginTop: "1rem",
    backgroundColor: "#4F4F4F",
    border: "solid 1px black",
    padding: "0.5rem",
    borderRadius: "10px",
  };

  const divCardComment = {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  };

  const divDosBotoes = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  const divButton = {
    gap: "0.6rem",
    margin: "0.5rem",
  };

  const divButtonLikeAndDislike = {
    gap: "0.6rem",
    margin: "0.5rem",
  };

  const divButtonCreateComment = {
    gap: "0.6rem",
    margin: "0.5rem",
  };

  const divButton2 = {
    display: "flex",
    justifyContent: "flex-end",
  };

  const imgStyle = {
    objectfFit: "cover",
  };

  // LOGICA DO READ DETAILS

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

  // LOGICA DO DELETE TIP

  const navigate = useNavigate();

  async function handleDelete(id) {
    try {
      await axios.delete(`https://ironrest.cyclic.app/Cs_Tips/${id}`);
      navigate("/csgo");
    } catch (err) {
      console.log(err);
      toast.error("Oops! Something went worng...");
    }
  }

  // LOGICA DOS COMENTARIOS

  const [form, setForm] = useState({
    autor: "",
    comment: "",
    tipid: params.id,
  });

  function handleChangeForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // POST DO FORM

  async function handleSubmiteForm(e) {
    e.preventDefault();

    try {
      await axios.post(`https://ironrest.cyclic.app/CommentsGTIPS`, form);
      toast.success("Comment Create!");

      setTimeout(() => {
        window.location.reload();
      }, 800);
    } catch (err) {
      console.log(err);
    }
  }

  // GET DA API (COLECAO COMENTARIOS) //CommentsGTIPS

  const [comment, setComment] = useState([]);

  useEffect(() => {
    async function FetchComment() {
      try {
        const response = await axios.get(
          `https://ironrest.cyclic.app/CommentsGTIPS`
        );
        setComment(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    FetchComment();
  }, []);

  // DELETE COMMENT

  async function handleDeleteComment(id) {
    try {
      await axios.delete(`https://ironrest.cyclic.app/CommentsGTIPS/${id}`);
      toast.success("Delete Comment!");

      setTimeout(() => {
        window.location.reload();
      }, 800);
    } catch (err) {
      console.log(err);
      toast.error("Oops! Something went worng...");
    }
  }

  // LOGICA DOS RECOMENDADOS

  const [tipRecomended, setTipRecomended] = useState([]);

  useEffect(() => {
    async function FetchTips() {
      try {
        const response = await axios.get("https://ironrest.cyclic.app/Cs_Tips");

        setTipRecomended(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    FetchTips();
  }, []);

  // IMPLEMENTAR LIKES

  const [counterLike, setConuterLike] = useState(0);

  const [counterDislike, setConuterDislike] = useState(0);

  const incrementLike = () => {
    setConuterLike(counterLike + 1);
  };

  const incrementDislike = () => {
    setConuterDislike(counterDislike + 1);
  };

  return (
    <div style={divBackgorund}>
      {/* DIV MAE */}
      <div style={divMae}>
        {/* QUADRADO 1 */}
        <div style={divTip}>
          <h2 style={{ marginBottom: "1rem" }}>{tip.title}</h2>

          {/* cars tip */}
          <div className="card mb-3">
            <div className="card-body">
              <h6 className="card-text">Tip: {tip.tipBody}</h6>
              <p className="card-text">
                <small className="text-muted">
                  Type: {tip.type} | Team: {tip.team} | Map: {`${tip.map}`}
                </small>
              </p>
              <p className="card-text">
                <small className="text-muted">By: {tip.name}</small>
              </p>
            </div>
            <div style={divDosBotoes}>
              <div style={divButtonLikeAndDislike}>
                <button
                  style={{ marginRight: "0.5rem" }}
                  type="button"
                  className="btn btn-outline-success"
                  onClick={incrementLike}
                >
                  {counterLike} Likes
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={incrementDislike}
                >
                  {counterDislike} Dislikes
                </button>
              </div>
              <div style={divButton}>
                <Link
                  style={{ marginRight: "0.5rem" }}
                  to={`/csgo-Edit/${params.id}`}
                >
                  <button type="button" className="btn btn-secondary">
                    Editar
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(tip._id);
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          </div>

          {/* QUADRADO 2 */}

          <div>
            {/* form comentario */}
            <div style={divAddComment}>
              {/* form comentario */}
              <h4> Add Comment </h4>
              <form onSubmit={handleSubmiteForm}>
                <div className="mb-3">
                  <label htmlFor="input-autor" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="input-autor"
                    placeholder="Carol"
                    name="autor"
                    value={form.autor}
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="input-Comment" className="form-label">
                    Comment:
                  </label>
                  <textarea
                    className="form-control"
                    id="input-Comment"
                    rows="3"
                    placeholder="Be Nice..."
                    name="comment"
                    value={form.comment}
                    onChange={handleChangeForm}
                  ></textarea>
                </div>

                <div style={divButtonCreateComment}>
                  <button className="btn btn-primary">Create Comment</button>
                </div>
              </form>
            </div>
            <div style={divCommentsE}>
              <h4 style={{ marginBottom: "0.7rem" }}>Comments</h4>
              <div style={divCardComment}>
                {comment.map((currentcomment) => {
                  if (currentcomment.tipid === params.id) {
                    return (
                      <div
                        className="card border-dark mb-3"
                        style={{ Width: "8rem", margin: "0.3rem" }}
                        key={currentcomment._id}
                      >
                        {/* comentario exibicao */}
                        <div className="card-header">
                          <strong>{currentcomment.autor.toUpperCase()}</strong>
                        </div>
                        <div className="card-body text-dark">
                          <blockquote className="card-text">
                            <p>{currentcomment.comment}</p>
                            <div style={divButton2}>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => {
                                  handleDeleteComment(currentcomment._id);
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </blockquote>
                        </div>
                      </div>
                    );
                  }
                  return;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* retângulo 1 */}
        <div style={divReadMore}>
          <h2 style={{ marginBottom: "1rem" }}>Read More...</h2>
          {tipRecomended.map((currentTip) => {
            let img;
            if (currentTip.map === "Cache") img = Cache;
            if (currentTip.map === "Cobblestone") img = Cobblestone;
            if (currentTip.map === "DustII") img = DustII;
            if (currentTip.map === "Inferno") img = Inferno;
            if (currentTip.map === "Mirage") img = Mirage;
            if (currentTip.map === "Nuke") img = Nuke;
            if (currentTip.map === "Overpass") img = Overpass;
            if (currentTip.map === "Train") img = Train;
            if (currentTip.map === "Vertigo") img = Vertigo;
            if (currentTip.map === "Maps") img = Maps;

            if (tip._id === currentTip._id) return;
            if (currentTip.type === tip.type) {
              return (
                <div
                  className={"card"}
                  style={{
                    width: "13rem",
                    margin: "2rem",
                    border: "solid 1px black",
                  }}
                  key={currentTip._id}
                >
                  <img
                    style={imgStyle}
                    src={img}
                    className={"card-img-top"}
                    alt="csgo-random-img"
                  />
                  <div className={"card-body"}>
                    <h5 className={"card-title"}>{currentTip.title}</h5>
                    <h6 className={"card-title"}>Map: {currentTip.map}</h6>
                    <h6 className={"card-title"}>Type: {currentTip.type}</h6>
                    <h6 className={"card-title"}>Team: {currentTip.team}</h6>
                    <div>
                      <Link
                        to={`/csgo-ReadD/${currentTip._id}`}
                        className={"btn btn-primary"}
                        onClick={() => {
                          setTimeout(() => {
                            window.location.reload();
                          }, 1);
                        }}
                      >
                        Read
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
