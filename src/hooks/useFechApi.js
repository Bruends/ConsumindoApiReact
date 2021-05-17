import React from "react";

const useFetchApi = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState();
  const [error, setError] = React.useState(null);

  const fetchData = React.useCallback(async (fetchConfig) => {
    let response;
    let json;

    try {
      // coloca a aplicação em estado de carregamento
      setLoading(true);
      //garantindo que o estado erro comece como false
      setError(false);

      // requisição a api
      response = await fetch(fetchConfig.url, fetchConfig.options);

      json = await response.json();

      // caso ocorra erros erro
      if (response.ok === false) throw new Error(json.message);

      // altera o estado com os filmes da api
      setData(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
};

export default useFetchApi;
