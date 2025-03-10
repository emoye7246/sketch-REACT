import { myMusic } from "../Fetches.jsx"
import { useState, useRef } from "react"

export const MusicPlayer = () => {

    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(new Audio(myMusic[currentSongIndex].src))


    const playPauseHandler = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }

      const changeSong = (index) => {
        audioRef.current.pause();
        audioRef.current = new Audio(myMusic[index].src);
        setCurrentSongIndex(index);
        if (isPlaying) {
          audioRef.current.play();
        }
      }

      const nextSong = () => {
        const newIndex = (currentSongIndex + 1) % myMusic.length;
        changeSong(newIndex);
      }

      const prevSong = () => {
        const newIndex = (currentSongIndex - 1 + myMusic.length) % myMusic.length;
        changeSong(newIndex);
      }

      return (
        <div className="music-player">
          <h2>{myMusic[currentSongIndex].Name}</h2>
          <div className="controls">
            <button onClick={() => prevSong()}>Back</button>
            {isPlaying ? <button onClick={() => playPauseHandler()}>Pause</button>: <button onClick={() => playPauseHandler()}>Play</button>}

            <button onClick={() => nextSong()}>Next</button>
          </div>
        </div>
      )
}
