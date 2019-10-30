import React from 'react';

import useJsonFetch from './hooks/useJsonFetch'

function App() {

  /*const url = "http://localhost:7070/data"*/
  /*const url = "http://localhost:7070/error"*/
  const url = "http://localhost:7070/loading"
  const opts = {
    method: 'GET'
  }

  const [data, loading, error] = useJsonFetch(url, opts);

  console.log(data)
  console.log(loading)
  console.log(error)

  return (
    <div>
      TEST
    </div>
  );
}

export default App;
