
// ? This is a prebuild script, which will launch before npm run build and because Vite does not handle this part of the build process then the variable must exist through Node.js's environment 
// ? https://developers.google.com/youtube/v3/docs/playlistItems/list
// ? https://developers.google.com/youtube/v3/docs/playlistItems#resource

const DATA_API_KEY = process.env.YT_DATA_API_KEY;

const CHANNEL_ID = `UCAa9zq-rl0McMewzW9tra0w`;
const playlistIDs = [`PLfPCDW7xyAww`, `PLUNtUmhxA3zm779NGq3Na99MX7B8L3X3K`, `PLUNtUmhxA3zlJJrCJmcYWHGB9g4lP0GW5`, `PLUNtUmhxA3zmaC2NgXLoEFsPJ5B9fTVHP`, `PLUNtUmhxA3zm_N4Kg53VY9TkHgtaeImsb`, `PLUNtUmhxA3znFD2M0yCqVw4wyozMco0Xo`];

console.log(" ");
console.log("\x1b[32m%s\x1b[0m", "Success: Script loaded!");

const now = new Date();
console.log("Running get-yt-data-json.js — " + now.toLocaleTimeString());

export async function buildYTData() {
    try {
        const musicDatabase = {};

        const fetchPromises = playlistIDs.map(async (id, index) => {
            const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=id&part=contentDetails&maxResults=50&playlistId=${id}&key=${DATA_API_KEY}`; 
            const response = await fetch(URL);
            const fetchedData = await response.json(); 
        
            return { id, data: fetchedData }
        }); 
        
        const playlistsResults = await Promise.allSettled(fetchPromises);
        console.log("Grabbed: " + playlistsResults.length + " playlists");
        console.log(playlistsResults[0].value);

        playlistsResults.forEach((result) => {
            if (result.status === 'rejected') {
                console.log("\x1b[31m%s\x1b[0m", `Error: a playlist fetch failed — ${result.reason.message}`);
                return;
            }
            const playlist = result.value;
            console.log("Iterating over..." + playlist.id);

            let playlistContents = [];

            console.log(playlist.data.items);
            playlist.data.items.forEach((item) => {
                if (item.snippet.title && item.snippet.thumbnails && item.snippet.title != "Deleted video" && item.snippet.title != "Private video"){
                    playlistContents.push({
                        videoPos: item.snippet?.position,
                        videoId: item.contentDetails?.videoId,
                        videoTitle: item.snippet?.title,
                        videoChannel: item.snippet?.videoOwnerChannelTitle,
                        videoThumbnail: item.snippet?.thumbnails?.default?.url,
                        videoThumbnailHigh: item.snippet?.thumbnails?.high?.url,
                        videoThumbnailMax: item.snippet?.thumbnails?.maxres?.url,
                    });
                }
            });
            
            musicDatabase[playlist.id] = playlistContents;
        });

        console.log("\x1b[32m%s\x1b[0m", "Success: buildYTData() returned!");
        return musicDatabase;
    } catch (error) {
        console.error("\x1b[31m%s\x1b[0m", "Error: Process failed!", error.message);
    } finally {
        console.log("\x1b[33m\x1b[44m%s\x1b[0m", "get-yt-data-json.js finished");
    }
}

export const message = "Hello from get-yt-data.json.js";