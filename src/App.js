import React from "react";
import useFetchApi from "./hooks/useFechApi";
import { getMovies } from "./utils/apiFetchConfig";
import MainContainer from "./components/MainContainer";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const { fetchData, loading, error, data } = useFetchApi();

  React.useEffect(() => {
    fetchData(getMovies);
  }, [fetchData]);

  if (loading) return <div> Loading </div>;
  if (data) {
    return (
      <>
        <GlobalStyle />
        <MainContainer movies={data} />
      </>
    );
  } else return null;
}

export default App;
