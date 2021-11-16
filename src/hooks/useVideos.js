import { useState, useEffect } from "react"; //import primitive hooks
import youtube from "../APIs/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]); //to grt rid of warning

  const search = async (term) => {
    const response = await youtube.get('/search', {
        params: {
            q: term
        }
    });
    setvideos(response.data.items); 
  };

  return [videos, search]; //react convention to return array js convention is to return object can follow anything
};

export default useVideos;