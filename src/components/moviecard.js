'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function MovieCard({ id, title, poster_path }) {
  return (
    <Link href={`/movie/${id}`} className="group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 group-hover:scale-105 group-hover:shadow-lg">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={500}
          height={750}
          className="w-full h-auto object-cover"
        />
        <div className="p-3 bg-lime-100 text-lime-900">
          <h3 className="text-sm font-semibold text-center truncate">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
