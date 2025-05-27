// app/movies/[id]/page.tsx
import Navigation from "../../components/navivation";

import { Suspense } from "react";
import MovieInfo from "../../components/movie-info";
import MovieVideos from "../../components/movie-videos";


interface Props {
  params: { id: string };
}
  /* Using Promise.all to wait botch of the promise finisehd */
  //const[movie,videos] = await Promise.all([getMovie(id),getVideo(id)])
  export default async function MovieDetail({
    params: { id },
  }: {
    params: { id: string };
  }) {
    return (
      <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
          <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
          <MovieVideos id={id} />
        </Suspense>
      </div>
    );
  }