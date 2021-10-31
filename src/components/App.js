import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../APIs/youtube";

class App extends React.Component {
    state = {
        videos: [],
    }
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // console.log(term);
        // console.log(response);
        this.setState({videos: response.data.items});
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar 
                    onFormSubmit={this.onTermSubmit}
                />
                I have {this.state.videos.length} videos.
            </div>
        );
    }
}

export default App;

// youTube api
// console.developers.google.com
// AIzaSyAQt0pJyCcF2O1fT-19vKI-q3BKei-b6qc