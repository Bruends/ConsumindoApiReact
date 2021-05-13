import React from "react";
import useFetchApi from "./hooks/useFechApi";
import moviesArray from "./movies";
import MainContainer from "./components/MainContainer";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const { fetchData, loading, error, data } = useFetchApi();

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  // const loading = false;
  // const data = moviesArray;

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
