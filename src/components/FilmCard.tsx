import type { Film } from '../types/film';
import { Link } from 'react-router-dom';

interface Props {
  film: Film;
}

export function FilmCard({ film }: Props) {
  return (
    <Link to={`/films/${film.id}`} className="film-card">
      <img src={film.movie_banner} alt={film.title} />
      <div className="film-card-info">
        <h4>{film.title}</h4>
      </div>
    </Link>
  );
}
