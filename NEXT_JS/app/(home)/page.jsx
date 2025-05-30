//import Navigation from "../.next/components/navigation"

import Movie from "../components/movie";
import styles from "../styles/home.module.css";
import Navigation from "../components/navivation";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
        <Navigation></Navigation>
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                />
            ))}
        </div>
    </div>

  );
}