import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams(); // Ottiene l'ID del film dai parametri dell'URL
  const [movie, setMovie] = useState(null); // Stato per i dettagli del film
  const [loading, setLoading] = useState(true); // Stato di caricamento
  const [error, setError] = useState(null); // Stato per gestire eventuali errori

  useEffect(() => {
    // Effettua la richiesta per ottenere i dettagli del film interpolando $movieId
    fetch(`http://www.omdbapi.com/?apikey=47ad4fc&i=${movieId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel recupero dei dettagli del film");
        }
        return response.json();
      })
      .then((data) => {
        setMovie(data); // Imposta i dettagli del film nello stato
      })
      .catch((err) => {
        setError(err.message); // Imposta il messaggio di errore nello stato
      })
      .finally(() => {
        setLoading(false); // Imposta lo stato di caricamento a false
      });
  }, [movieId]);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return <div>Errore: {error}</div>; // Mostra un messaggio di errore in caso di errore
  }

  if (!movie) {
    return <div>Errore reperimento file! 404</div>; // Mostra un messaggio se il film non viene trovato
  }

  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>
        <strong>Year:</strong> {movie.Year}
      </p>
    </div>
  );
};

export default MovieDetails;
