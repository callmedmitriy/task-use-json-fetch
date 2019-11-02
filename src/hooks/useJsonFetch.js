import {useState, useEffect} from 'react';

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url, opts)
        .then(res => res.json())
        .then(
          (result) => {
            if (result.status === 'ok') {

                setData(result)

            } else {

                setError(result)

            }
            setLoading(false)
          },
          (error) => {
            setError(error)
            setLoading(false)
          }
        )
    }, [url]);

    return [data, isLoading, hasError];
}