"use client";
import MovieCard from "./moviecard";
import { useAppContext } from "@/contexts/AppContext";
import Link from "next/link";

export default function MoviesGrid({ movies }) {
  const { handleAddToFavorites } = useAppContext();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {movies.map((movie) => (
          <div key={movie.id} className="relative group">
            {/* MovieCard sin el <Link> */}
            <Link href={`/movie/${movie.id}`}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
              />
            </Link>

            {/* Botón fuera del link */}
            <button
              onClick={() =>
                handleAddToFavorites({
                  id: movie.id,
                  title: movie.title,
                  poster_path: movie.poster_path,
                })
              }
              className="absolute top-2 right-2 p-2 bg-lime-500 text-white rounded-full z-20 shadow-lg hover:bg-lime-600"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


