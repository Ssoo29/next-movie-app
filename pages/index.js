import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "e3fde5e1f3c9ceb9e474bf76b70ee810";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`
      https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
      const json = await response.json();
      const { results } = json;
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>loading...</h4>}
      {movies.map((movie) => (
        <h4 key={movie.id}>{movie.original_title}</h4>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
