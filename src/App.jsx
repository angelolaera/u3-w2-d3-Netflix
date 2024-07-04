import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="bg-container">
      {" "}
      <Container>
        <BrowserRouter>
          <CustomNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tvshows" element={<TvShows />} />
            <Route path="/tvshows/movie-details/:movieId" element={MovieDetails} />
          </Routes>
          <CustomFooter />
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
