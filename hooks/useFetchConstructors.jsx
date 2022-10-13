import React, { useState, useEffect, useCallback } from "react";

export const useFetchConstructors = url => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const fetchConstructors = useCallback(async () => {
        setLoading(true);
        try{
            const response = await fetch(`${url}`, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              },
            });
            const json = await response.json();
            setData(json.data);
            setLoading(false);
          }catch(err){
            setError(err)
          }finally{
            setLoading(false)
          }
          setLoading(false);
    });

    useEffect(() => {
        fetchConstructors().catch(console.error);
      }, [url]);

    return { data, error, loading };
}
