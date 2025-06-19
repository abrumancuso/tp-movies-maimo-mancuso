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
    <main className="bg-gray-50 min-h-screen py-10 px-4">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-lime-700 mb-6 border-b pb-2 border-lime-300">
          🎥 Películas en Tendencia
        </h1>

        {movies.length === 0 ? (
            <div className="flex justify-center items-center h-96">
              <div className="w-10 h-10 border-4 border-lime-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <MoviesGrid movies={movies} />
          )}
        </section>
    </main>
  );
}
