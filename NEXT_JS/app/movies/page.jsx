import Link from 'next/link';

async function getMovies(){
    await new Promise((resolve)=> setTimeout(resolve,2000));
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
    const json = await response.json();
    return json;
}

export default async function AboutUs() {
    const movies = await getMovies();
    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link href={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
