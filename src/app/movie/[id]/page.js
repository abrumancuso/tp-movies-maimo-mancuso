import Image from "next/image";

const API_KEY = "8d155a452063365b70d7e38e2609b662";

async function getMovie(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch movie");
  return res.json();
}

export default async function MoviePage({ params }) {
  const movie = await getMovie(params.id);

  return (
    <main className="bg-gray-100 min-h-screen py-10 px-4">
      <section className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-xl shadow-md">
        <div className="w-full lg:w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="rounded-lg shadow"
          />
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-2/3">
          <h1 className="text-3xl font-bold text-lime-700">{movie.title}</h1>
          <p className="text-gray-600 italic">{movie.tagline}</p>

          <div className="text-gray-800 leading-relaxed">
            <p>{movie.overview}</p>
          </div>

          <div className="text-sm text-gray-500 mt-4">
            <p><span className="font-semibold">Fecha de lanzamiento:</span> {movie.release_date}</p>
            <p><span className="font-semibold">Rating:</span> ⭐ {movie.vote_average}</p>
            <p><span className="font-semibold">Duración:</span> {movie.runtime} min</p>
            <p><span className="font-semibold">Géneros:</span> {movie.genres.map(g => g.name).join(', ')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
