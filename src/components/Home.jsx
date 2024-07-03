import { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films1: [],
      films2: [],
      films3: [],
    };
  }

  fetchFilms1 = () => {
    fetch("http://www.omdbapi.com/?apikey=47ad4fc&s=spider-man")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        console.log("Risposta dal server", data);
        this.setState({
          films1: data.Search,
        });
      })
      .catch((e) => {
        console.log("Errore!", e);
      });
  };

  fetchFilms2 = () => {
    fetch("http://www.omdbapi.com/?apikey=47ad4fc&s=harry potter")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        console.log("Risposta dal server", data);
        this.setState({
          films2: data.Search,
        });
      })
      .catch((e) => {
        console.log("Errore!", e);
      });
  };

  fetchFilms3 = () => {
    fetch("http://www.omdbapi.com/?apikey=47ad4fc&s=pokemon")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        console.log("Risposta dal server", data);
        this.setState({
          films3: data.Search,
        });
      })
      .catch((e) => {
        console.log("Errore!", e);
      });
  };

  componentDidMount() {
    this.fetchFilms1();
    this.fetchFilms2();
    this.fetchFilms3();
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="text-white">Spider man Saga</h1>
        <Row>
          {this.state.films1.slice(0, 6).map((film) => (
            <Col key={film.imdbID} xs={12} md={4} lg={2} className="mb-4">
              <img classname="img-fluid" src={film.Poster} alt="Movie" style={{ width: "200px" }} />
            </Col>
          ))}
        </Row>

        <h1 className="text-white">Harry Potter Saga</h1>
        <Row>
          {this.state.films2.slice(0, 6).map((film) => (
            <Col key={film.imdbID} xs={12} md={4} lg={2} className="mb-4">
              <img classname="img-fluid" src={film.Poster} alt="Movie" style={{ width: "200px" }} />
            </Col>
          ))}
        </Row>

        <h1 className="text-white">Pokémon Saga</h1>
        <Row>
          {this.state.films3.slice(0, 6).map((film) => (
            <Col key={film.imdbID} xs={12} md={4} lg={2} className="mb-4">
              <img classname="img-fluid" src={film.Poster} alt="Movie" style={{ width: "200px" }} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Home;
