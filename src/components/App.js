import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('michael jackson'); //default search term
    // setSelectedVideo(response.data.items[0]);

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]); //runs any time tine videos list gets updated

    return (
        <div className="ui container">
            <SearchBar 
                onFormSubmit={search}
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