import React from 'react'

import useJsonFetch from '../hooks/useJsonFetch'

export default function LoadingComponent() {

  const url = "http://localhost:7070/loading"
  const opts = {
    method: 'GET'
  }

  const [data, loading, error] = useJsonFetch(url, opts);

  return (
    <div>
      <h1>Loading component</h1>
      {loading && 'Загрузка'}
      {data && data.status}
      {error && error.status}
    </div>
  )
} 
