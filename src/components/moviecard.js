'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useAppContext } from '../contexts/AppContext'

export default function MovieCard({ id, title, poster_path }) {
  const { favorites, handleAddToFavorites, handleRemoveFromFavorites } = useAppContext();
  const isFavorite = favorites.some(movie => movie.id === id);

  const handleClick = (e) => {
    e.stopPropagation(); 
    e.preventDefault();  
    if (isFavorite) {
      handleRemoveFromFavorites(id);
    } else {
      handleAddToFavorites({ id, title, poster_path });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <Link href={`/movie/${id}`} className="block">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={500}
          height={750}
          className="w-full h-auto object-cover"
        />
      </Link>
      <div className="p-3 bg-lime-100 text-lime-900">
        <h3 className="text-sm font-semibold text-center truncate">{title}</h3>
        <button 
            onClick={handleClick}
            className={`mt-2 text-xs px-2 py-1 ${
              isFavorite ? "bg-lime-700" : "bg-lime-500"
            } hover:bg-lime-600 text-white rounded w-full transition duration-200`}
          >
            {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
</button>

      </div>
    </div>
  )
}
