import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "Memories":
      return {
        src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
      };
    case "Creative Minds":
      return {
        src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
      };
    case "Acoustic Breeze":
      return {
        src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3"
      };
    case "Sunny":
      return {
        src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"
      };
    default:
      return "No";
  }
}

export default reducer;
