import React from "react";
import {
  MovieContainer,
  MovieTitle,
  MovieOriginalTitle,
  MovieDescription,
  MovieScore,
} from "./styled";

const index = (props) => {
  return (
    <MovieContainer>
      <MovieTitle>{props.title}</MovieTitle>
      <MovieOriginalTitle>{props.original_title}</MovieOriginalTitle>
      <MovieDescription>{props.description}</MovieDescription>
      <MovieScore>Score: {props.rt_score}</MovieScore>
    </MovieContainer>
  );
};

export default index;
