import React from "react";
import PopularMovies from "./PopularMovies";
import api from "./Movieapi";
import Poster from "./Poster";

const Movies = () => {
    return(
        <>
            <>
                <Poster/>
                <PopularMovies 
                    movieApiii={api.topRated}
                    category="Top Rated"
                />
                <PopularMovies 
                    movieApiii={api.trending}
                    category="Trending"
                />
                <PopularMovies 
                    movieApiii={api.upcoming}
                    category="Upcoming"
                />
            </>
        </>
    );
};

export default Movies;