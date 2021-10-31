import axios from "axios";

const KEY = "AIzaSyAQt0pJyCcF2O1fT-19vKI-q3BKei-b6qc";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet", //recommended
        type: "video",
        maxResults: 5,
        key: KEY,
    }
});

// At some point in the course you may end up getting Warning: Each child in a list should have a unique "key" prop even after we add a key prop in the "Fixing a Few Warnings" lecture. To ensure that this is not an issue, we should add a type parameter to our axios config object to only search for videos and not playlists.

// Update apis/youtube.js to add the type property:

//     export default axios.create({
//         baseURL: 'https://www.googleapis.com/youtube/v3',
//         params: {
//           part: 'snippet', 
//           type: 'video',
//           maxResults: 5,
//           key: KEY
//       }