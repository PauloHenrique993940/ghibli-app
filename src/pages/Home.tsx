import { useEffect, useState } from 'react';
import type { Film } from '../types/film';
import { FilmCard } from '../components/FilmCard';

export default function Home() {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilms() {
      try {
        const res = await fetch('https://ghibliapi.vercel.app/films');
        const data: Film[] = await res.json();

        const sorted = data
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, 10);

        setFilms(sorted);
      } finally {
        setLoading(false);
      }
    }

    loadFilms();
  }, []);

  if (loading) return <p className="loading">Carregando...</p>;

  return (
    <div className="home">
      {/* HERO */}
      <div
        className="hero"
        style={{ backgroundImage: `url("${films[0].movie_banner}")` }}
      >
        <div className="hero-content">
          <h1 className="hero-title">{films[0].title}</h1>
          <p className="hero-description">{films[0].description}</p>
        </div>
      </div>

      {/* LISTA */}
      <h2 className="section-title">Top 10 Filmes do Studio Ghibli</h2>

      <div className="carousel">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}
