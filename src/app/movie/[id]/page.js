import MovieContainer from "@/components/MovieContainer";

async function getMovie(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=8d155a452063365b70d7e38e2609b662`
  );
  if (!res.ok) throw new Error("Failed to fetch movie");
  return res.json();
}

export default async function MoviePage({ params }) {
  const movie = await getMovie(params.id);

  return (
    <div className="p-4">
      <MovieContainer movie={movie} />
    </div>
  );
}
