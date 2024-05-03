import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface Genre{
    id: number;
    name: string;
}

interface FetchGenresResponse{
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
  
  //   UseEffect for sending the fetch results to backend
    useEffect( () => {
      const controller = new AbortController();  
      apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal})
          .then(res => {  
            setGenres(res.data.results);
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

    return {genres, error, isLoading}
}

export default useGenres