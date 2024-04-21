import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

//interfaces to genericly define the type of the response you get from an api

interface Game{
    id: number,
    name: string;
}

interface FetchGamesResponse{
    count: number,
    results: Game[];
}

const GameGrid = () => {
  
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

//   UseEffect for sending the fetch results to backend
  useEffect( () => {
    apiClient.get<FetchGamesResponse>('/games')
        .then(res => setGames(res.data.results))  //if response is fetched
        .catch(err => setError(err.message));    //if there is an error
  }, [])

  return (
    <>
        { error && <Text>{error}</Text>}
        <ul>
            {games.map( (game) => 
            <li key={game.id}>{game.name}</li>
            )}
        </ul>
    </>
  )
}

export default GameGrid
