import React from 'react'

import useJsonFetch from '../hooks/useJsonFetch'

export default function ErrorComponent() {

  const url = "http://localhost:7070/error"
  const opts = {
    method: 'GET'
  }

  const [data, loading, error] = useJsonFetch(url, opts);

  return (
    <div>
      <h1>Error component</h1>
      {error && error.status}
    </div>
  )
} 
