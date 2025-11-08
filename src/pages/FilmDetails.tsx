import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { Film } from '../types/film';

export default function FilmDetails() {
  const { id } = useParams();
  const [film, setFilm] = useState<Film | null>(null);

  useEffect(() => {
    async function loadFilm() {
      const res = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
      const data: Film = await res.json();
      setFilm(data);
    }

    loadFilm();
  }, [id]);

  if (!film) return <p className="loading">Carregando...</p>;

  return (
    <div className="details">
      <Link to="/" className="back">
        ← Voltar
      </Link>

      <img className="details-banner" src={film.movie_banner} />

      <h1>{film.title}</h1>
      <p className="details-desc">{film.description}</p>

      <ul className="details-info">
        <li>
          <strong>Diretor:</strong> {film.director}
        </li>
        <li>
          <strong>Produtor:</strong> {film.producer}
        </li>
        <li>
          <strong>Lançamento:</strong> {film.release_date}
        </li>
        <li>
          <strong>Rotten Tomatoes:</strong> {film.rt_score}
        </li>
      </ul>
    </div>
  );
}
