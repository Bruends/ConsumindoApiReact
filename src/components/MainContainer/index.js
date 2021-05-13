import React from "react";
import { MainContainer, MoviesContainer } from "./styled";
import MovieCard from "../MovieCard";

const index = ({ movies }) => {
  return (
    <MainContainer>
      <h1>Filmes</h1>
      <MoviesContainer>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </MoviesContainer>
    </MainContainer>
  );
};

export default index;
