import React from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import useFetchApi from "./hooks/useFechApi";

function App() {
  const { fetchData, loading, error, data } = useFetchApi();

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <div>loading..</div>;
  if (data) return data.map((movie) => <MovieCard key={movie.id} {...movie} />);
  else return null;
}

export default App;
