import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


// Generic type <T>: This hook  is a general hook to support both: useGenres and useGames hooks.

interface FetchResponse<T>{
    count: number;
    results: T[];
}

// <T> is a generic type parameter
const useData = <T>(endpoint : string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
  
  //   UseEffect for sending the fetch results to backend
    useEffect( () => {
      const controller = new AbortController();  
      apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
          .then(res => {  
            setData(res.data.results);
            setIsLoading(false);
          })  //if response is fetched
          .catch(err => {
            if (err instanceof CanceledError) return;
            // else   
            setError(err.message);
            setIsLoading(false);
          });   //if there is an error

      //abort the existing api request
    return () => controller.abort();
    }, [])

    return {data, error, isLoading}
}

export default useData