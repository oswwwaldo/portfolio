const DATA_API_KEY = import.meta.env.YT_DATA_API_KEY;
const CHANNEL_ID = `UCAa9zq-rl0McMewzW9tra0w`;

let index = 1;
const playlistIDs = [`PLfPCDW7xyAww`, `PLUNtUmhxA3zm779NGq3Na99MX7B8L3X3K`, `PLUNtUmhxA3zlJJrCJmcYWHGB9g4lP0GW5`, `PLUNtUmhxA3zmaC2NgXLoEFsPJ5B9fTVHP`, `PLUNtUmhxA3zm_N4Kg53VY9TkHgtaeImsb`, `PLUNtUmhxA3znFD2M0yCqVw4wyozMco0Xo`];
const playlistID = playlistIDs[index]

const URL_BASE = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=status&part=snippet&part=id&part=contentDetails&maxResults=50&playlistId=${playlistID}&key=${DATA_API_KEY}`;

export const playlistItems = await fetch(URL_BASE)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data;
    });


export const message = "Hello from get-yt-data.json.js";