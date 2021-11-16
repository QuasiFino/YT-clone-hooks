import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import youtube from "../APIs/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
    const [videos, setvideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onTermSubmit('michael jackson');
    }, []);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setvideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    return (
        <div className="ui container">
            <SearchBar 
                onFormSubmit={onTermSubmit}
            />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail 
                            video={selectedVideo}
                        />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default App;

// youTube api
// console.developers.google.com
// AIzaSyAQt0pJyCcF2O1fT-19vKI-q3BKei-b6qc