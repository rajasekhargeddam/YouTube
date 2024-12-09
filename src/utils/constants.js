export const YOUTUBE_API_KEY = "AIzaSyCkByYv2IzA3mHlNbkoZ5QHqG2_gE_J3Z4";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENT_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId="; //&key=

// https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=Wtq3RRORVx4&key=AIzaSyCkByYv2IzA3mHlNbkoZ5QHqG2_gE_J3Z4
