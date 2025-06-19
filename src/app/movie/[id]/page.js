'use client'
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppContext } from "@/contexts/AppContext";

const API_KEY = "8d155a452063365b70d7e38e2609b662";

async function getMovie(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch movie");
  return res.json();
}

export default function MoviePage() {
  const { favorites, handleAddToFavorites, handleRemoveFromFavorites } = useAppContext();
  const params = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie(params.id).then(setMovie);
  }, [params.id]);

  if (!movie) return (
    <div className="flex justify-center items-center h-96">
      <div className="w-10 h-10 border-4 border-lime-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
  

  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const handleClick = () => {
    if (isFavorite) {
      handleRemoveFromFavorites(movie.id);
    } else {
      handleAddToFavorites({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
      });
    }
  };

  const backgroundUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`;

  return (
    <main className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center filter blur-sm brightness-50"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      />

      <section className="relative max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 bg-white bg-opacity-90 p-6 rounded-xl shadow-md mt-10">
        <div className="w-full lg:w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 text-lime-700">{movie.title}</h1>
          <p className="text-gray-700 mb-4">{movie.overview}</p>
          <p className="text-sm text-gray-600 mb-2">Fecha de lanzamiento: {movie.release_date}</p>
          <p className="text-sm text-gray-600 mb-6">Puntaje: {movie.vote_average}</p>

          <button 
                onClick={handleClick}
                className={`mt-2 text-xs px-2 py-1 ${
                  isFavorite ? "bg-lime-700" : "bg-lime-500"
                } hover:bg-lime-600 text-white rounded w-full transition duration-200`}>
                {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
              </button>

        </div>
      </section>
    </main>
  );
}
