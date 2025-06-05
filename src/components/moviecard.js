'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function MovieCard({ id, title, poster_path }) {
  return (
    <Link href={`/movie/${id}`}>
      <div className="rounded overflow-hidden shadow hover:scale-105 transition">
        <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          width={300}
          height={450}
          className="w-full h-auto"
        />
        <div className="p-2 text-center font-semibold">{title}</div>
      </div>
    </Link>
  )
}
