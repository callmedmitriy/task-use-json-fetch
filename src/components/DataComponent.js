import React from 'react'

import useJsonFetch from '../hooks/useJsonFetch'

export default function DataComponent() {

  const url = "http://localhost:7070/data"
  const opts = {
    method: 'GET'
  }

  const [data, loading, error] = useJsonFetch(url, opts);

  return (
    <div>
      <h1>Data component</h1>
      {data && data.status}
    </div>
  )
}