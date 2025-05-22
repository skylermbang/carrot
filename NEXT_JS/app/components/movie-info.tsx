async function getMovie(id: string) {
    const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`);
    return response.json();
  }


export default async function MovieInfo({id}:{id:string}){
    const info = await getMovie(id)
    return <h6>{JSON.stringify(info)}</h6>
}