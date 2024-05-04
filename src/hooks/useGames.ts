//custom hook with a cancellation controller:
// https://medium.com/codex/resilient-fetch-requests-in-javascript-with-abortcontroller-a-guide-with-react-examples-573dba8a3758


import useData from "./useData";
import { Genre } from "./useGenres";


//interfaces to genericly define the type of the response you get from an api

export interface Platform{
  id: number;
  slug: string;
  name: string;
}

export interface Game{
    //Visit rawg api doc to know about the type of the response body.
    id: number,
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} [];  //It is an array of Platform objects. Refer the api documentation
    metacritic: number;
}


const useGames = (selectedGenre : Genre | null) => useData<Game>("/games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames
