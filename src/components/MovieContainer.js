import Image from "next/image";

export default function MovieContainer({ movie }) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
        className="rounded"
      />
      <div>
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
