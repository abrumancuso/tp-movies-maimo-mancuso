'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import MoviesGrid from "@/components/MoviesGrid";

const API_KEY = "8d155a452063365b70d7e38e2609b662";

export default function GenresPage() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-ES`)
      .then(res => res.json())
      .then(data => setGenres(data.genres))
      .catch(err => console.error("Error loading genres", err));
  }, []);

  useEffect(() => {
    if (!selectedGenre) return;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre}`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error("Error loading movies by genre", err));
  }, [selectedGenre]);

  return (
    <main className="relative min-h-screen py-10 px-4 bg-gray-50">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-lime-700 mb-6 border-b pb-2 border-lime-300">
          🎭 Explorar por Género
        </h1>

 
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => setSelectedGenre(genre.id)}
              className={`px-5 py-2 rounded-full font-medium transition shadow ${
                selectedGenre === genre.id
                  ? "bg-lime-600 text-white"
                  : "bg-lime-100 hover:bg-lime-200 text-lime-800"
              }`}
            >
              {genre.name}
            </button>
          ))}
        </div>


        {selectedGenre && movies.length === 0 ? (
          <div className="flex justify-center items-center h-60">
            <div className="w-10 h-10 border-4 border-lime-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <MoviesGrid movies={movies} />
        )}
      </section>
    </main>
  );
}
