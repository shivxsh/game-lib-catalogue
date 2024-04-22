//custom hook with a cancellation controller:
// https://medium.com/codex/resilient-fetch-requests-in-javascript-with-abortcontroller-a-guide-with-react-examples-573dba8a3758

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


//interfaces to genericly define the type of the response you get from an api
interface Game{
    id: number,
    name: string;
}

interface FetchGamesResponse{
    count: number,
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
  
  //   UseEffect for sending the fetch results to backend
    useEffect( () => {
      const controller = new AbortController();  
      apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
          .then(res => setGames(res.data.results))  //if response is fetched
          .catch(err => {
            if (err instanceof CanceledError) return;
            // else   
            setError(err.message)
            });   //if there is an error

      //abort the existing api request
    return () => controller.abort();
    }, [])

    return {games, error}
}

export default useGames
