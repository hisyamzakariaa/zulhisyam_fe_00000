import MovieContent from "./MovieContent"

export async function getMovies(uri) {
    const res = await fetch(uri)
    const data = await res.json()

    return data
}

export default async function FetchMovies({link}) {
  const data = await getMovies(link)

  return (
    <>
      <MovieContent movies={data}/>
    </>
  )
}
