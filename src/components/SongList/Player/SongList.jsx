import {  useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import './index.css'
import { useSelector, useDispatch } from "react-redux";

export default function SongListView() {
    const counter = useSelector(state => state);
    console.log("qweasd",counter);
    const [musicTracks, setMusicTracks] = useState()

    useEffect(() => {
        setMusicTracks(counter.reducer.src)
  },[counter?.reducer]);

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <div className="App">
      <AudioPlayer
        // style={{ width: "300px" }}
        className="audio-player"
        autoPlay
        layout="horizontal-reverse"
        src={musicTracks}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />
    </div>
  );
}

