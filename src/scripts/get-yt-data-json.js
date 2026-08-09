const DATA_API_KEY = import.meta.env.YT_DATA_API_KEY;
const CHANNEL_ID = `UCAa9zq-rl0McMewzW9tra0w`;

console.log(" ");
console.log("\x1b[32m%s\x1b[0m", "Success: Script loaded!");
// console.log("\x1b[31m%s\x1b[0m", "Error: Process failed!");
// console.log("\x1b[33m\x1b[44m%s\x1b[0m", "Warning: Check parameters!");

const now = new Date();
console.log("Running get-yt-data-json.js — " + now.toLocaleTimeString());

let index = 1;
const playlistIDs = [`PLfPCDW7xyAww`, `PLUNtUmhxA3zm779NGq3Na99MX7B8L3X3K`, `PLUNtUmhxA3zlJJrCJmcYWHGB9g4lP0GW5`, `PLUNtUmhxA3zmaC2NgXLoEFsPJ5B9fTVHP`, `PLUNtUmhxA3zm_N4Kg53VY9TkHgtaeImsb`, `PLUNtUmhxA3znFD2M0yCqVw4wyozMco0Xo`];

// https://developers.google.com/youtube/v3/docs/playlistItems/list
// https://developers.google.com/youtube/v3/docs/playlistItems#resource

async function buildYTData() {
    const musicDatabase = {};

    const fetchPromises = playlistIDs.map(async (id, index) => {
        const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=id&part=contentDetails&maxResults=50&playlistId=${id}&key=${DATA_API_KEY}`; 
        const response = await fetch(URL);
        const fetchedData = await response.json(); 
    
        return { id, data: fetchedData }
    }); 
    
    const playlistsResults = await Promise.all(fetchPromises);
    console.log("Grabbed: " + playlistsResults.length + " playlists");
    playlistsResults.forEach(playlist => {
        console.log("Iterating over..." + playlist.id);

        let playlistContents = [];

        playlist.data.items.forEach((item) => {
            playlistContents.push({
                videoPos: item.snippet?.position,
                videoId: item.contentDetails?.videoId,
                videoTitle: item.snippet?.title,
                videoChannel: item.snippet?.videoOwnerChannelTitle,
                videoThumbnail: item.snippet?.thumbnails?.default?.url,
                videoThumbnailHigh: item.snippet?.thumbnails?.high?.url,
                videoThumbnailMax: item.snippet?.thumbnails?.maxres?.url,
            });
        });
        
        musicDatabase[playlist.id] = playlistContents;
    });

    console.log("\x1b[32m%s\x1b[0m", "Success: buildYTData() finished!");
    return musicDatabase;
}
// https://www.youtube.com/watch?v=${videoId}
// await buildYTData();
console.log(await buildYTData());
export const message = "Hello from get-yt-data.json.js";