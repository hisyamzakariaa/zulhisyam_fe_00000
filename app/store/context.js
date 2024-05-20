'use client'

import { createContext, useState } from 'react';

export const MoviesContext = createContext({
    movies:[],
    handleMovies: function(){}
})

export function MoviesContextProvider({children}) {
    const [moviesData, setMoviesData] = useState()

    function handleSetMovies(movieData){
        setMoviesData(movieData)
    }

    const context = {
        movies: moviesData,
        handleMovies: handleSetMovies,
    }

    return (
    <MoviesContext.Provider value={context}>
        {children}
    </MoviesContext.Provider>
    )
}