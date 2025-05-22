// app/movies/[id]/page.tsx

import { Suspense } from "react";
import MovieInfo from "../../components/movie-info";
import MovieVideos from "../../components/movie-videos";


interface Props {
  params: { id: string };
}

export default async function MovieDetail({ params }: Props) {
  const { id } = params;
  /* Using Promise.all to wait botch of the promise finisehd */
  //const[movie,videos] = await Promise.all([getMovie(id),getVideo(id)])

  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Info </h1>}> 
      <MovieVideos id={id}/>
      </Suspense >
      <Suspense fallback={<h1>Loading Movie Video </h1>}>
      <MovieInfo id={id}/>
      </Suspense>
    </div>
  );
}
