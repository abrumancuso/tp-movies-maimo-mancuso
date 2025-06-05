'use client'
import { useEffect, useState } from "react";
import MoviesGrid from "./MoviesGrid";

const API_KEY = "8d155a452063365b70d7e38e2609b662";

export default function HomeContainer() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error("Error fetching trending movies:", error));
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Películas Trending</h1>
      <MoviesGrid movies={movies} />
    </section>
  );
}
