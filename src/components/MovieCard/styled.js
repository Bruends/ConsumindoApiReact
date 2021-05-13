import styled from "styled-components";

export const MovieContainer = styled.div`
  box-sizing: border-box;
  width: 20rem;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  padding: 2rem;
  outline-offset: -1rem;
  position: relative;
  margin-bottom: 2rem;
  background-color: #fff;
`;

export const MovieTitle = styled.h2`
  margin: 2rem 0;
`;

export const MovieOriginalTitle = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.3rem 0.5rem;
  color: white;
  background-color: var(--primary-color);
  font-family: "Noto Sans JP", sans-serif;
  border-radius: 10px 0 0 0;
  font-weight: bold;
`;

export const MovieDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
`;

export const MovieScore = styled.small`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.3rem 0.5rem;
  color: white;
  background-color: var(--secondary-color);
  border-radius: 0 0 10px 0;
`;
