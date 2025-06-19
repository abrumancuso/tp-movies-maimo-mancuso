'use client'
import { useAppContext } from '@/contexts/AppContext';
import MovieCard from '@/components/moviecard';

export default function FavoritosPage() {
  const { favorites } = useAppContext();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Mis Películas Favoritas</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No agregaste películas a favoritos todavía.</p>
      ) : (
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      )}
    </div>
  );
}
