const DATA_API_KEY = import.meta.env.YT_DATA_API_KEY;
const CHANNEL_ID = `UCAa9zq-rl0McMewzW9tra0w`;

console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log("Running get-yt-data-json.js");
console.log("Running get-yt-data-json.js");
console.log("Running get-yt-data-json.js");

let index = 1;
const playlistIDs = [`PLfPCDW7xyAww`, `PLUNtUmhxA3zm779NGq3Na99MX7B8L3X3K`, `PLUNtUmhxA3zlJJrCJmcYWHGB9g4lP0GW5`, `PLUNtUmhxA3zmaC2NgXLoEFsPJ5B9fTVHP`, `PLUNtUmhxA3zm_N4Kg53VY9TkHgtaeImsb`, `PLUNtUmhxA3znFD2M0yCqVw4wyozMco0Xo`];
const playlistID = playlistIDs[index];

// https://developers.google.com/youtube/v3/docs/playlistItems/list
// https://developers.google.com/youtube/v3/docs/playlistItems#resource

const URL_BASE = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=id&part=contentDetails&maxResults=50&playlistId=${playlistID}&key=${DATA_API_KEY}`;

export const playlistItems = await fetch(URL_BASE)
    .then(res => res.json())
    .then(data => {
        console.log(data.items);
        let dataItems = data.items;
        dataItems.forEach((item) => {
            console.log(item.contentDetails.videoId);
            console.log(item.snippet.position);
            console.log(item.snippet.title);
            console.log(item.snippet.videoOwnerChannelTitle);

            console.log(item.snippet.thumbnails.default.url);
            console.log(item.snippet.thumbnails.default.height);
            console.log(item.snippet.thumbnails.default.width);
            console.log(item.snippet.thumbnails.maxres.url);
        })



        // console.log(data);
        // console.log('My id is: ' + data.items[0].contentDetails.videoId);
        // console.log('My position is: ' + data.items[0].snippet.position);
        // console.log('My title is: ' + data.items[0].snippet.videoOwnerChannelTitle);
        // console.log('My title is: ' + data.items[0].snippet.title);
        // console.log('My thumbnail is: ' + data.items[0].snippet.thumbnails.maxres.url);
        // console.log('My thumbnail height is: ' + data.items[0].snippet.thumbnails.maxres.height);
        // console.log('My thumbnail width is: ' + data.items[0].snippet.thumbnails.maxres.width); 
        // default, medium, high, standard, maxres

        

        // Build into JSON file

        return data;
    });

export const message = "Hello from get-yt-data.json.js";